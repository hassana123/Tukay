import React from "react";
import image2 from "../assets/image 2.png";
import image17 from "../assets/image 17.png";
import image11 from "../assets/image 11.png";
const Hero = () => {
  return (
    <main className="bg-custom-background  pt-2 text-custom-btn-background">
      <div className="flex justify-around mt-10 w-[90%] mx-auto">
        <div className=" ">
          <h1 className="text-[96px]  leading-[1.1em] font-700">
            Oga, na month end o. No be person die.
          </h1>
          <p className="text-custom-text-dark font-500 text-[24px] my-5">
            Uncle, Aunty, do me <b>Urgent Tukay</b> na. Abeg
          </p>
          <div className="flex justify-between w-[55%] my-5">
            <a
              className="bg-custom-btn-background  text-custom-text-light px-5 py-3 rounded lg"
              href="#"
            >
              Oga register first
            </a>
            <a
              className=" border-[2px] border-custom-btn-background px-10 py-3 rounded lg"
              href="#"
            >
              Beg first
            </a>
          </div>
          <p className="text-[24px] font-700 mt-10 text-custom-text-dark">
            <b>Partnered with</b>
          </p>
          <div className="flex gap-3 mb-10">
            <img src={image11} alt="opay" />
            <img src={image17} alt="palmpay" />
          </div>
        </div>
        <img className="w-[40%] mt-20" src={image2} alt="" />
      </div>
    </main>
  );
};

export default Hero;