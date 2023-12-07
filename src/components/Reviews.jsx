import React from "react";
import image4 from "../assets/image 4.png";
import image3 from "../assets/image 3.png";
import image5 from "../assets/image 5.png";

const Reviews = () => {
  return (
    <main className="w-[95%] mx-auto text-custom-btn-background ">
      <div className="">
        <h1 className="w-[80%] mx-auto text-center md:text-[64px] my-10 ">
          WHAT OUR TUKAY AMBASSADORS HAVE TO SAY
        </h1>
        <div className="flex  overflow-x-auto space-x-5 cursor-grab">
          <div className="bg-custom-background  relative w-[70%] flex-none h-[55vh] border-[1.5px] border-custom-btn-background flex">
            <div className="mt-20 w-[50%]  mx-20">
              <p className="my-10 text-[32px] ">
                <b>
                  My boss, you no go like give me urgent Tukay make I for fit
                  rep well?
                </b>
              </p>
              <p>
                <b>@Tukay Sambo Ibeke</b>
              </p>
              <small>Senior ambassador, Tukay</small>
            </div>
            <img
              className="w-[30%]  absolute right-0  bottom-[-2%] overflow-hidden"
              src={image4}
              alt=""
            />
          </div>
          <div className="bg-custom-background  relative w-[70%] flex-none h-[55vh]   border-[1.5px] border-custom-btn-background flex">
            <div className="mt-20 w-[50%] mx-20 ">
              <p className="my-10 md:text-[32px]">
                <b>
                  I be your girl o. Do me urgent TUKAY make i fit rep na. Abi na
                  till I faint?
                </b>
              </p>
              <p>
                <b>Tukay Maryjane Ayoe</b>
              </p>
              <small>Brand mbassador, Tukay</small>
            </div>
            <img
              className="w-[30%] absolute right-0 bottom-[-0.2%] overflow-hidden"
              src={image3}
              alt=""
            />
          </div>
        </div>
      </div>
      <aside className=" flex md:text-[24px] bs rounded-lg justify-between w-[80%] mx-auto  my-20  px-20 py-20">
        <div>
          <p className="mb-20">
            <b>
              Apply to be an ambassador of the Tukay community to help fight
              SAPA
            </b>
          </p>
          <a
            className="bg-custom-btn-background text-custom-text-light py-3 px-10 rounded-lg"
            href="#"
          >
            Apply Now
          </a>
        </div>
        <div>
          <img className=" my-10" src={image5} alt="" />
        </div>
      </aside>
    </main>
  );
};

export default Reviews;
