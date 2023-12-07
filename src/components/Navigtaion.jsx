import React from "react";

import image10 from "../assets/image 10.png";

const Navigtaion = () => {
  return (
    <div className="bg-custom-background text-custom-text-dark">
      <nav className="flex justify-around py-1">
        <div className="flex">
          <img src={image10} alt="logo" />
          <h1 className="text-[40px] font-700 text-custom-btn-background">
            Tukay
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <ul className="text-[24px]   font-500 text-custom-text-dark py-3">
            <li className="inline-block px-5">
              <a href="#">Home</a>
            </li>
            <li className="inline-block px-5">
              <a href="#">Beg</a>
            </li>
            <li className="inline-block px-5">
              <a href="#">SapaCheck</a>
            </li>
            <li className="inline-block px-5">
              <a href="#">Tags</a>
            </li>
            <li className="inline-block px-5">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="py-3">
          <a
            className="text-[24px] bg-custom-btn-background text-custom-background py-2  px-5 rounded-lg"
            href="#"
          >
            Beg Now
          </a>
        </div>
      </nav>
      <hr className=" border border-[1.5px] border-custom-btn-background " />
    </div>
  );
};

export default Navigtaion;
