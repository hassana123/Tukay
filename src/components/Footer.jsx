import React from "react";
import image13 from "../assets/image 13.png";
import vector from "../assets/vector.svg";
import vector1 from "../assets/vector (1).svg";
import vector2 from "../assets/vector (2).svg";
const Footer = () => {
  return (
    <footer className="bg-custom-btn-background w-full p-10">
      <main className="flex justify-between">
        <div className="flex gap-3 w-[35%] mx-auto mt-20">
          <img className="h-[15vh]" src={image13} alt="" />
          <h1 className="text-custom-background text-[64px]">
            <b>Tukay</b>{" "}
          </h1>
        </div>
        <div>
          <h2 className="my-5 font-bold text-[28px]">Our Features</h2>
          <p className="my-2">Beg for Tukay (money)</p>
          <p className="my-2">Borrow Tukay (money)</p>
          <p className="my-2">December Promise Card</p>
          <p className="my-2">Swift transaction with Tukay currency</p>
        </div>
        <div className="mx-auto">
          <h2 className="my-5 font-bold text-[28px] ">Contact Us</h2>
          <p className="my-5">
            Customer care line;
            <br /> 090******45
          </p>
          <small>
            <b>Follow us on</b>
          </small>
          <div className="flex gap-5 my-5">
            <img src={vector} alt="" />
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
          </div>
        </div>
        <p className="w-[10%] text-center mx-auto mt-20 text-custom-background ">
          Last reminder to beg for TUKAY before salary finish o.
        </p>
      </main>
      <div className="text-center">
        <small>All rights reserved @urgenttukay2023</small>
      </div>
    </footer>
  );
};

export default Footer;