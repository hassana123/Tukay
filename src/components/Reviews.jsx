import React from "react";
import "../styles.css";
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
        <div className="md:flex  md:overflow-x-auto md:space-x-5 md:cursor-grab">
          <div className="bg-custom-background mx-auto rounded-lg relative w-[90%] my-5 md:w-[80%]   border-[2px] border-custom-btn-background md:flex">
            <div className="mt-20 md:w-[50%]  md:mx-20 mx-3">
              <p className="my-10 md:text-[32px] ">
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
              className="mx-auto w-[50%] md:w-[30%]  md:absolute right-0  md:bottom-[-2%] overflow-hidden"
              src={image4}
              alt=""
            />
          </div>
          <div className=" bg-custom-background  rounded-lg mx-auto md:mx-0  relative w-[90%] md:w-[70%]       border-[2px] border-custom-btn-background md:flex">
            <div className="mt-20 md:w-[50%] md:mx-20 mx-3">
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
              className="mx-auto w-[50%] md:w-[30%]  md:absolute right-0  md:bottom-[-0.2%] overflow-hidden"
              src={image3}
              alt=""
            />
          </div>
        </div>
      </div>
      <aside className="md:flex md:text-[24px] rounded-lg justify-between md:w-[80%] w-[90%] mx-auto  my-20  md:px-20 px-2 py-20 bs">
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
          <img className="mx-auto my-10" src={image5} alt="" />
        </div>
      </aside>
    </main>
  );
};

export default Reviews;
