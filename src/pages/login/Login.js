import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Buttons from '../../common/Buttons'
import InputFiels from '../../common/InputFiels'

function Login() {
    const [otpShow, setOtpShow] = useState(false);
    const [loginShow, setLoginShow] = useState(true);

    const handleChange = () => {

    }

    const [login, SetLogin] = useState(
        [
            {
                numbermobile: '',
                refcode: '',
                logpass: '',
            }
        ]
    )

    const showOtp = () => {
        setOtpShow(true)
        setLoginShow(false)
    }

    const history = useHistory();
    const VerifyBtn = () => {
        history.push("/account")
    }

    return (
        <>
            <div
                className="justify-center md:pt-0 pt-16 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative  w-full md:my-6 my-0 mx-auto max-w-6xl">

                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <div className="lg:bg-scogof2">
                            <div className="container mx-auto">
                                <div className="max-w-6xl lg:shadow-2xl rounded-md   bg-white mx-auto lg:pt-20 lg:pb-24  h-full">
                                    <div className="lg:flex ">
                                        <div className="lg:w-1/2 text-center md:px-16 px-2 md:py-16 py-4 relative">
                                            <p className="2xl:text-font30 text-font20 text-scogo15 font-normal">Welcome to</p>
                                            <p className="2xl:text-font30 text-font20 text-scogoprimary font-medium 2xl:mt-2 mt-1">Scogo Networks</p>
                                            <p className="2xl:text-font18 text-font14 text-scogo15 font-medium 2xl:mt-8 mt-4">Let's re-invent Technology Service</p>
                                            <p className="2xl:text-font16 text-font13 text-scogogray font-normal 2xl:mt-4 mt-2">Join the biggest Network of Service Partners across
                                                India and grow you business revenue</p>
                                            <div className="lg:block hidden bg-scogoddd opacity-50 absolute w-px h-full top-0 right-0"></div>
                                        </div>
                                        <div className="lg:w-1/2">
                                            <div className="md:px-20 px-2 md:pb-0 pb-16">
                                                <img src="./img/logo2.svg" alt="" className="mx-auto lg:w-auto w-32" />
                                                <div className="p-2 ">
                                                    {loginShow &&
                                                        <form className="">
                                                            <InputFiels
                                                                type="text"
                                                                inputImg="./img/user.svg"
                                                                inputClass="loginput"
                                                                placeholder="Mobile Number"
                                                                inputImgDiv="loginput-imgdiv  p-3"
                                                                inputDiv="loginput-maindiv mt-8"

                                                                value={login.numbermobile}
                                                                onChange={handleChange}
                                                            />

                                                            <InputFiels
                                                                type="text"
                                                                inputImg="./img/refcode.svg"
                                                                inputClass="loginput"
                                                                placeholder="Referral Code"
                                                                inputImgDiv="loginput-imgdiv p-3"
                                                                inputDiv="loginput-maindiv mt-4"

                                                                value={login.refcode}
                                                                onChange={handleChange}
                                                            />

                                                            <InputFiels
                                                                type="password"
                                                                inputImg="./img/lock.svg"
                                                                inputClass="loginput"
                                                                placeholder="Password"
                                                                inputImgDiv="loginput-imgdiv  p-3"
                                                                inputDiv="loginput-maindiv mt-4"
                                                                value={login.logpass}
                                                                onChange={handleChange}
                                                            />

                                                            <Buttons
                                                                buttonClass="bg-scogoprimary text-white font-medium 2xl:text-font16 text-font14 h-12 mt-6 rounded-md w-full"
                                                                onClick={showOtp}
                                                            >
                                                                Continue
                                                            </Buttons>
                                                        </form>
                                                    }
                                                    {otpShow &&
                                                        <form className="">
                                                            <p className="text-font16 text-scogogray font-normal mt-4 text-center">We have send OTP on your registered
                                                                <br /> mobile numbere</p>

                                                            <InputFiels
                                                                type="text"
                                                                inputClass="loginput  focus:ring-0 px-2"
                                                                placeholder="Enter OTP"
                                                                inputDiv="loginput-maindiv mt-8"
                                                                value={login.logpass}
                                                                onChange={handleChange}
                                                            />
                                                            <Buttons
                                                                buttonClass="bg-scogoprimary text-white font-medium 2xl:text-font16 text-font14 h-12 mt-6 rounded-md w-full"
                                                                onClick={VerifyBtn}
                                                            >
                                                                Verify OTP & Sign Up
                                                            </Buttons>

                                                            <p className="2xl:text-font16 text-font14 text-151515 text-center font-medium mt-4">Didn't received OTP? <span className="text-scogoorange cursor-pointer"> Resend </span> </p>

                                                        </form>
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        
        </>


        
    )
}

export default Login
