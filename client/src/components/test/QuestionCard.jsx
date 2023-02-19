import React from "react";

const QuestionCard = ({ question, i }) => {
  const handleControl = (e, answer) => {
    if (answer.split(" ")[1].includes(e.target.innerText[0])) {
      e.target.classList.add("bg-green-300");
    } else {
      e.target.classList.add("bg-red-300");
      setTimeout(() => {
        e.target.classList.remove("bg-red-300");
      }, 2000);
    }
  };
  return (
    <div key={i} className="border flex flex-col gap-2 h-full p-1">
      <div>{question.question}</div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={(e) => handleControl(e, question.answer)}
            className="border"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
