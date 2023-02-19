import React from "react";

import Banner from "../components/home/Banner";
import Steps from "../components/home/Steps";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#C8DADF] flex flex-col items-center justify-center gap-16 p-1 select-none">
      <Banner />
      <Steps />
    </div>
  );
};

export default Home;
