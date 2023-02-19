import React, { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuestionCard from "../components/test/QuestionCard";

//icons
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Test = () => {
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [testQuestions, setTestQuestions] = useState([]);
  const [isLoad, setIsload] = useState(false);

  const topicLabel = useRef(null);
  const topicInput = useRef(null);
  const numQuestionsLabel = useRef(null);
  const numQuestionsInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      difficulty.trimStart() === "" ||
      topic.trimStart() === "" ||
      numQuestions.trimStart() === ""
    ) {
      formError("Fill out the form completely");
    } else if (numQuestions.trimStart() > 10) {
      formError("You can create up to 10 questions.");
    } else {
      try {
        setIsload(true);
        const res = await axios.post("http://localhost:3080/", {
          topic,
          questionCount: numQuestions,
          difficulty,
        });
        const data = await res.data;
        setTestQuestions(data);
        setIsload(false);
      } catch (error) {
        console.log(error);
        setIsload(false);
      }
    }
  };
  //refresh page
  const f5 = () => {
    window.location.reload(false);
  };

  //Form animation
  const topicAnimationFocus = () => {
    topicLabel.current.classList.add("!top-0");
    topicLabel.current.classList.add("scale-75");
  };
  const topicAnimationBlur = () => {
    if (topicInput.current.value === "") {
      topicLabel.current.classList.remove("!top-0");
      topicLabel.current.classList.remove("scale-75");
    }
  };

  const numQuestionsFocus = () => {
    numQuestionsLabel.current.classList.add("!top-0");
    numQuestionsLabel.current.classList.add("!left-0");
    numQuestionsLabel.current.classList.add("scale-75");
  };
  const numQuestionsBlur = () => {
    if (numQuestionsInput.current.value === "") {
      numQuestionsLabel.current.classList.remove("!top-0");
      numQuestionsLabel.current.classList.remove("!left-0");
      numQuestionsLabel.current.classList.remove("scale-75");
    }
  };

  const formError = (message) => toast.error(message);
  return (
    <div
      className={`${
        testQuestions?.length !== 0 ? "pt-24 md:pt-5 p-5" : null
      } bg-[#C8DADF] min-h-screen select-none`}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isLoad === true ? (
        <div className="h-screen w-screen fixed top-0 left-0 z-50 bg-[#C8DADF] flex items-center justify-center">
          <div className="animate-spin text-6xl">
            <AiOutlineLoading3Quarters />
          </div>
        </div>
      ) : null}
      {testQuestions?.length === 0 ? (
        <div className="flex justify-center items-center h-screen bg-[#C8DADF]">
          <form
            className="flex flex-col gap-2 bg-white p-5 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-2 relative group">
              <label
                className="absolute top-1/2 left-3 -translate-y-1/2  bg-white p-1  duration-300 "
                htmlFor="topic"
                ref={topicLabel}
              >
                Subject
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="outline-none border group h-[40px] duration-300 pl-4"
                ref={topicInput}
                onFocus={() => topicAnimationFocus()}
                onBlur={() => topicAnimationBlur()}
              />
            </div>

            <div className="flex items-center gap-2 relative">
              <label
                className="absolute top-1/2 left-3 -translate-y-1/2  bg-white p-1  duration-300 "
                ref={numQuestionsLabel}
                htmlFor="numQuestions"
              >
                Number of questions
              </label>
              <input
                type="number"
                id="numQuestions"
                name="numQuestions"
                value={numQuestions}
                onChange={(event) => setNumQuestions(event.target.value)}
                ref={numQuestionsInput}
                className="outline-none border group h-[40px] duration-300 pl-4 w-full"
                onFocus={() => numQuestionsFocus()}
                onBlur={() => numQuestionsBlur()}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="difficulty">Difficulty level:</label>
              <select
                id="difficulty"
                name="difficulty"
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
                className="outline-none border ml-auto"
              >
                <option value="">Choose</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <button
              className=" bg-blue-300 p-2 hover:bg-blue-500 duration-200"
              type="submit"
            >
              Generate
            </button>
          </form>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 mt-auto  gap-2 w-full md:w-8/12 bg-white mx-auto p-5 ">
          {testQuestions?.map((question, i) => (
            <div key={i}>
              <QuestionCard key={i} question={question} />
            </div>
          ))}
          <button
            className="bg-green-300 text-black text-4xl rounded-lg p-2 w-fit absolute top-5 left-5"
            onClick={() => f5()}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
