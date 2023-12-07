import Reac, { useState, useRef } from "react";
import image2 from "../assets/image 2.png";
import image17 from "../assets/image 17.png";
import image11 from "../assets/image 11.png";
import tukkay from "../assets/tukkay.mp3";
const Hero = () => {
  //const audioRef = useRef(null);
  // const [play, setPlay] = useState(false);
  const handlePlay = (e) => {
    e.preventDefault();
    const audio = new Audio(tukkay);
    audio.play();
  };
  return (
    <main className="bg-custom-background  pt-2 text-custom-btn-background">
      <div className="md:flex justify-around mt-10 w-[90%] mx-auto">
        <div className=" ">
          <h1 className="md:text-[96px]  text-[25px] leading-[1.1em] font-bold">
            Oga, na month end o. No be person die.
          </h1>
          <p className="text-custom-text-dark font-500 md:text-[24px] my-5">
            Uncle, Aunty, do me <b>Urgent Tukay</b> na. Abeg
          </p>
          <div className="md:flex md:mb-0 mb-10 justify-between w-[55%] my-5">
            <a
              className="block md:mb-0 mb-10 bg-custom-btn-background  text-custom-text-light px-5 py-3 rounded-lg transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-custom-btn-background hover:border-[2px] border-custom-btn-background"
              href="#"
            >
              Oga register first
            </a>
            <a
              onClick={handlePlay}
              className="transition-colors duration-300 ease-in-out hover:bg-custom-btn-background hover:text-white border-[2px] border-custom-btn-background px-10 py-3 rounded-lg"
              href="#"
            >
              Beg first
            </a>
          </div>
          <div className="md:block hidden">
            <p className="text-[24px] font-700 mt-10 text-custom-text-dark">
              <b>Partnered with</b>
            </p>
            <div className=" flex gap-3 mb-10">
              <img src={image11} alt="opay" />
              <img src={image17} alt="palmpay" />
            </div>
          </div>
        </div>
        <img
          className="md:w-[40%]  md:mt-20 mt-10 mx-auto w-[80%]"
          src={image2}
          alt=""
        />
        <div className="md:hidden block">
          <p className="text-[24px] font-700 mt-10 text-custom-text-dark">
            <b>Partnered with</b>
          </p>
          <div className=" flex gap-3 mb-5">
            <img src={image11} alt="opay" />
            <img src={image17} alt="palmpay" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
