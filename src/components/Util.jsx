import React from "react";
import group from "../assets/Group 1.png";
const Util = () => {
  return (
    <main className="bg-custom-btn-background mt-[-5px] w-[85%] md:w-[92%] mx-auto pt-2  rounded-lg text-center">
      <h1 className="md:text-[64px] my-5 text-custom-background">
        Do giveaway, boss
      </h1>
      <img className="mx-auto w-[50%]" src={group} alt="" />
    </main>
  );
};

export default Util;
