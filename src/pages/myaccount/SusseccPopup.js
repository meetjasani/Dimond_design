import React from "react";
import Buttons from "../../common/Buttons";
import { useHistory } from 'react-router-dom';

const SusseccPopup = () => {

  const history = useHistory();

  const getStartBtn = () => {
    history.push("/dashboard")
  }

  return (
    <>
      <section className="lg:bg-scogof2 h-full 2xl:py-20 py-4">
        <h1 className="2xl:text-font24 text-font20 text-center 2xl:mb-10 mb-4 font-medium text-scogo21">CREATE YOUR ACCOUNT</h1>
        <div className=" bg-white lg:w-4/12 lg:mx-auto py-8  px-8 my-auto  rounded-lg lg:shadow-logboxshadow">
          <div className="text-center">
            <img
              src="./img/right.svg"
              className="text-center mx-auto 2xl:w-auto w-12"
            />
          </div>
          <h1 className="text-center pt-5 2xl:text-font30 text-font24 text-scogo15 font-medium">SUCCESS!</h1>
          <h3 className="text-scogogray text-center 2xl:text-font24 text-font20 font-normal">
            Profile set up successfully done.
          </h3>
          <div className="text-center">
            <Buttons
              buttonClass="border-2 py-1 px-12 mt-7 rounded-md mx-auto border-scogoprimary bg-scogoprimary text-white"
              type=""
              onClick={getStartBtn}
              children="Get Started"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SusseccPopup;