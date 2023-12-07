import React from "react";
import image8 from "../assets/image 8.png";
import image9 from "../assets/image 9.png";
import image18 from "../assets/image 18.png";
const About = () => {
  return (
    <main className="text-custom-btn-background text-[32px] mt-10 text-center">
      <div className=" w-[80%] mx-auto ">
        <h1 className="text-[64px] my-1">WHO BE TUKAY? </h1>
        <p className="mb-10">
          Tukay is a platform set to redefine how communities come together to
          support one another. Whether you’re facing an urgent need tor eager to
          contribute to someone else’s, Tukay is the go-to platform for quick
          and reliable assistance...<span>see more</span>
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-[64px] my-1">WE GET MONEY TOO</h1>
        <p className="mb-10">
          See am here. You fit use this one take do giveaway for your padi. No
          issue go commot.
        </p>
        <div className="grid grid-cols-3 gap-20 text-[20px]">
          <div className=" mx-auto">
            <img src={image18} alt="" />
            <p>Coins for lending</p>
          </div>
          <div className=" mt-[100px] mx-auto">
            <img src={image9} alt="" />
            <p className="my-[40px]">
              Tukay note for free users(for direct begging)
            </p>
          </div>
          <div className=" mt-[100px] mx-auto">
            <img src={image8} alt="" />
            <p className="my-[40px]">
              Tukay note for premium users(for direct begging and lending)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
