import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="border max-w-[300px] border-[#92B0B3] rounded-md p-3 flex justify-between items-center">
          <div>
            <h1 className="text-sm font-extrabold">
              Choose Subject and Difficulty
            </h1>
            <p className="text-sm">
              <p className="text-sm">
                Fill the required information in the form.
              </p>
            </p>
          </div>
          <div>
            <div className="bg-green-400 p-2 rounded-full w-[80px] ">
              <img className="w-full]" src="/assets/question.png" alt="" />
            </div>
          </div>
        </div>
        <div className="border max-w-[300px] border-[#92B0B3] rounded-md p-3 flex justify-between items-center">
          <div>
            <h1 className="text-sm font-extrabold">Wait render</h1>
            <p className="text-sm">
              Wait patiently while your test is generating
            </p>
          </div>
          <div>
            <div className="bg-[#77B3D4] p-2 rounded-full w-[80px] ">
              <img className="w-full]" src="/assets/gear2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row gap-5">
        <div className="border max-w-[300px] border-[#92B0B3] rounded-md p-3 flex justify-between items-center">
          <div>
            <h1 className="text-sm font-extrabold">Solve Test</h1>
            <p className="text-sm">Find out your quiz mistakes.</p>
          </div>
          <div>
            <div className="bg-[#4F5D73] p-2 rounded-full w-[80px] ">
              <img className="w-full]" src="/assets/step1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="border max-w-[300px] border-[#92B0B3] rounded-md p-3 flex justify-between items-center">
          <div>
            <h1 className="text-sm font-extrabold">Repeat</h1>
            <p className="text-sm">
              Repeat this process. Remember, the more you do it, the better you
              will get.
            </p>
          </div>
          <div>
            <div className="bg-[#C75C5C] p-2 rounded-full w-[80px] ">
              <img className="w-full]" src="/assets/loop.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
