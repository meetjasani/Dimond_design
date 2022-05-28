import React, { useState } from "react";
import Buttons from "../../common/Buttons";
import Agreement from "./Agreement";
import BankDetails from "./BankDetails";
import BusinessDetail from "./BusinessDetail";
import ProfileDetails from "./ProfileDetails";
import SusseccPopup from "./SusseccPopup";

let ProtextColor = "text-scogo15"
let BusinesstextColor = "text-scogogray"
let BanktextColor = "text-scogogray"
let AgreetextColor = "text-scogogray"
let ProfileRow = "bg-scogoddd"
let BusinessRow = "bg-scogoddd"
let BankRow = "bg-scogoddd"
let AgreeRow = "bg-scogoddd"




function Createyouraccount() {
    const [ProfileDetailsView, setProfileDetailsView] = useState(true);
    const [BusinessDetailView, setBusinessDetailView] = useState(false);
    const [BankDetailsView, setBankDetailsView] = useState(false);
    const [AgreementView, setAgreementView] = useState(false);
    const [SusseccpopupView, setSusseccpopupView] = useState(false);


    const nextBtn = () => {

        if (ProfileDetailsView) {
            setProfileDetailsView(false);
            setBusinessDetailView(true);
            ProtextColor = "text-scogoorange"
            BusinesstextColor = "text-scogo15"
            ProfileRow = "bg-scogoorange"
        }

        else if (BusinessDetailView) {
            setBusinessDetailView(false);
            setBankDetailsView(true);
            ProtextColor = "text-scogoorange"
            BusinesstextColor = "text-scogoorange"
            BanktextColor = "text-scogo15"
            ProfileRow = "bg-scogoorange"
            BusinessRow = "bg-scogoorange"


        }

        else if (BankDetailsView) {
            setBankDetailsView(false);
            setAgreementView(true);
            ProtextColor = "text-scogoorange"
            BusinesstextColor = "text-scogoorange"
            BanktextColor = "text-scogoorange"
            AgreetextColor = "text-scogo15"
            BankRow = "bg-scogoorange"
        }
    };

    const backbtn = () => {
        if (BusinessDetailView) {
            setBusinessDetailView(false);
            setProfileDetailsView(true);
            ProtextColor = "text-scogo15"
            ProfileRow = "bg-scogoddd"
            BusinesstextColor = "text-scogogray"

        } else if (BankDetailsView) {
            setBankDetailsView(false);
            setBusinessDetailView(true);
            BusinesstextColor = "text-scogo15"
            BusinessRow = "bg-scogoddd"

        } else if (AgreementView) {
            setAgreementView(false);
            setBankDetailsView(true);
            BanktextColor = "text-scogo15"
            BankRow = "bg-scogoddd"

        }
    };
    const skipbtn = () => {
        setBankDetailsView(false);
        setAgreementView(true)
        BanktextColor = "text-scogoorange"
        BankRow = "bg-scogoorange"
    };
    return (
        <>
            {!SusseccpopupView && <section className=" w-full 2xl:py-20 py-4 ">
                <h1 className="2xl:text-font24 text-font20 text-center 2xl:mb-10 mb-4 font-medium text-scogo21">CREATE YOUR ACCOUNT</h1>
                <div className=" bg-white 2xl:w-2/4 lg:w-3/4 lg:mx-auto py-8  px-8  rounded-lg lg:shadow-logboxshadow">
                    <div className="w-full md:flex">
                        <div className="md:w-4/12 md:pl-5 md:initial relative md:mb-0 mb-3">
                            <h1 className={`${ProtextColor} font-medium 2xl:text-font18 text-font14 md:pl-0 pl-5`}>1. Profile Details</h1>
                            <div className={`${ProfileRow} absolute md:top-6 -top-2 md:h-2.5 md:w-11/12 w-4 h-4 md:rounded-md rounded-full mr-3.5 mt-3`} ></div>
                        </div>
                        <div className="md:w-4/12 md:pl-5  md:initial relative md:mb-0 mb-3">
                            <h1 className={`${BusinesstextColor} font-medium 2xl:text-font18 text-font14 md:pl-0 pl-5`}>2. Business Detail</h1>
                            <div className={`${BusinessRow} absolute md:top-6 -top-2 md:h-2.5 md:w-11/12 w-4 h-4 md:rounded-md rounded-full mr-3.5 mt-3`}></div>
                        </div>
                        <div className="md:w-4/12 md:pl-5  md:initial relative md:mb-0 mb-3">
                            <h1 className={`${BanktextColor} font-medium   2xl:text-font18 text-font14 md:pl-0 pl-5`}>3. Bank Details</h1>
                            <div className={`${BankRow} absolute md:top-6 -top-2 md:h-2.5 md:w-11/12 w-4 h-4 md:rounded-md rounded-full mr-3.5 mt-3`}></div>
                        </div>
                        <div className="md:w-4/12 md:pl-5  md:initial relative md:mb-0 mb-3">
                            <h1 className={`${AgreetextColor} font-medium  2xl:text-font18 text-font14 md:pl-0 pl-5`}>4. Agreement</h1>
                            <div className={`${AgreeRow} absolute md:top-6 -top-2 md:h-2.5 md:w-11/12 w-4 h-4 md:rounded-md rounded-full mr-3.5 mt-3`}></div>
                        </div>
                    </div>
                    {ProfileDetailsView && <ProfileDetails />}
                    {BusinessDetailView && <BusinessDetail />}
                    {BankDetailsView && <BankDetails />}
                    {AgreementView && <Agreement />}
                    <div className="pt-10 pb-10">
                        {AgreementView && (
                            <Buttons
                                buttonClass="border-2 py-1.5 px-7 rounded-md border-scogoprimary bg-scogoprimary 2xl:text-font15 text-font12 text-white float-right"
                                type=""
                                onClick={() => setSusseccpopupView(true)}
                                children="Finish"
                            />
                        )}
                        {!AgreementView && (
                            <Buttons
                                buttonClass="border-2 py-1.5 px-7 rounded-md border-scogoprimary bg-scogoprimary text-white 2xl:text-font15 text-font12 float-right mr-3"
                                type=""
                                onClick={nextBtn}
                                children="Next"
                            />
                        )}
                        {BankDetailsView && (
                            <Buttons
                                buttonClass="border-2 py-1.5 px-7 rounded-md border-scogoprimary text-scogoprimary 2xl:text-font15 text-font12 font-medium float-right mr-3"
                                type=""
                                onClick={skipbtn}
                                children="Skip"
                            />
                        )}
                        {!ProfileDetailsView && (
                            <Buttons
                                buttonClass="border-0 py-1.5 px-7 text-scogogray font-medium 2xl:text-font15 text-font12 float-right mr-3"
                                type=""
                                onClick={backbtn}
                                children="Back"
                            />
                        )}
                    </div>
                </div>
            </section>}
            {SusseccpopupView && <SusseccPopup />}
        </>
    );
}

export default Createyouraccount;