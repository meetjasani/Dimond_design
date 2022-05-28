import React, { useState } from 'react'
import Buttons from '../../common/Buttons'
import Select from 'react-select';
import Switch from "react-switch";
import InputFiels from '../../common/InputFiels';
import Menus from '../../common/Menus';
import TextareaAutosize from 'react-textarea-autosize';


let statusTicket = "New";

const mapoptions = [
    { value: 'All', label: 'All' },
    { value: 'Admin', label: 'Admin' },
    { value: ' PO Approval ', label: ' PO Approval ' }
]

const itemLables = ["Account settings", "Replay", "Sing out"];
const itemsClassName =
    "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
const itemClassName = "block px-4 py-2 text-sm";

function RaiseTicket(props) {
    const [raiseTicket, setRaiseTicket] = useState(false);
    const [raiseTicketForm, setRaiseTicketForm] = useState(true);

    const viewmore = () => {

    }

    const createRaise = () => {
        setRaiseTicket(true)
        setRaiseTicketForm(false)
    }

    const menuButtonIcon = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
            </svg>
        );
    };
    return (
        <>
            <div className="flex items-center px-p-23 h-16 border bg-white z-10 sticky top-16 border-scogoddd">
                <div className="lg:ml-0 ml-5">
                    <div>
                        <p className="text-scogo11 text-font18 font-medium">Raise a Ticket</p>
                    </div>
                </div>
                <div className="flex items-center ml-auto">

                    <div className="ml-3 pt-2  cursor-pointer" onClick={() => { props.setShowRaiseTicket(false); props.closeMsgPageMobileView() }}>
                        <span className="material-icons text-scogogray">
                            highlight_off
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-screen overflow-y-auto pb-200 relative">
                {raiseTicketForm &&
                    <div className="p-7 relative ">
                        <div className="py-p-20 px-p-15 border border-scogoddd rounded-10px bg-white">

                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <p className="text-scogo99 font-normal text-font15">Project *</p>
                                </div>
                                <div className="flex relative right-24 lg:top-0 top-6  items-center ml-auto justify-end w-full mb-10 lg:mb-4 lg:w-2/3">


                                    <label
                                        for="toogleA"
                                        className="flex items-center cursor-pointer"
                                    >

                                        <div className="relative right-0 flex">
                                            <input id="toogleA" type="checkbox" className="sr-only" />
                                            <div className="w-10 h-4 bg-scogoddd rounded-full shadow-inner"></div>
                                            <div className="dot absolute w-6 h-6 bg-scogoprimary rounded-full shadow -left-1 -top-1 transition"></div>
                                            <div className="aatext absolute -right-24 text-scogogray font-medium text-font14 ">Help Desk</div>
                                            <div className="bbtext absolute -left-24 text-scogoprimary font-medium text-font14">Deployment</div>
                                        </div>

                                    </label>
                                </div>
                            </div>

                            <div className="py-1 relative">
                                <label className="block  border-b-2 border-scogoddd">

                                    <InputFiels type="text" inputClass="p-0 py-4 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 placeholder-scogo99" placeholder="Project *" />
                                </label>
                                <p className="absolute font-medium text-font14 top-8 right-0">Cc</p>
                            </div>
                            <div className="py-1">
                                <label className="block  border-b-2 border-scogoddd">

                                    <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none placeholder-scogo99 focus:ring-0 py-4" placeholder="Title *" />
                                </label>
                            </div>
                            <div className="lg:flex">
                                <div className="py-1 lg:w-1/2 lg:pr-2">
                                    <label className="block  border-b-2 border-scogoddd">

                                        <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 placeholder-scogo99 border-none focus:ring-0 py-4" placeholder="External Ticket Id *" />
                                    </label>
                                </div>
                                <div className="pb-1 pt-0 lg:w-1/2  lg:pl-2">
                                    <label className="relative block border-b-2 border-scogoddd"><span className="text-scogo99 text-font12"></span>
                                        <Select

                                            placeholder="Site Id *"
                                            name="colors"
                                            options={mapoptions}
                                            className="basic-multi-select placeholder-scogo99 py-3"
                                            classNamePrefix="select"
                                        />
                                        <div className="absolute right-0 bottom-8"><img src="./img/downarrow.svg " alt="" /></div>
                                    </label>
                                </div>
                            </div>
                            <div className="lg:flex">
                                <div className="py-1 lg:w-1/2 lg:pr-2 relative">
                                    <label className="block  border-b-2 border-scogoddd">
                                        <InputFiels type="text" inputClass="placeholder-scogo99 p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-4" placeholder="Address" />
                                    </label>
                                    <p className="absolute font-medium text-font14 top-8 lg:right-4 right-0"><span class="material-icons text-scogoorange">location_on</span></p>
                                </div>
                                <div className="py-1 lg:w-1/2  lg:pl-2">
                                    <label className="block  border-b-2 border-scogoddd">
                                        <InputFiels type="text" inputClass="placeholder-scogo99 p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-4" placeholder="Pincode *" />
                                    </label>
                                </div>
                            </div>
                            <div className="lg:flex">
                                <div className="py-1 lg:w-1/2 lg:pr-2">
                                    <label className="block  border-b-2 border-scogoddd">
                                        <InputFiels type="text" inputClass="placeholder-scogo99 p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-4" placeholder="Contact Person" />
                                    </label>
                                </div>
                                <div className="py-1 lg:w-1/2  lg:pl-2">
                                    <label className="block  border-b-2 border-scogoddd">
                                        <InputFiels type="text" inputClass="placeholder-scogo99 p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-4" placeholder="Contact" />
                                    </label>
                                </div>
                            </div>
                            <Buttons
                                buttonClass="text-white mr-4 bg-scogoprimary mt-2 w-w-102 h-9 font-medium text-font16 flex items-center justify-center rounded-6px shadow-primaryBtnShadow"
                                children="Create"
                                Btnalt=""
                                btnimgClass="w-4 h-4 mr-2"
                                buttonIcon="./img/check.svg"
                                onClick={createRaise}
                            />

                        </div>
                    </div>
                }

                {raiseTicket &&

                    <div>
                        <div className="max-w-chatticket ml-auto rounded-10px border border-scogoeee mt-m-20 mr-m-20 relative">

                            <div>
                                <div className="relative">
                                    <img
                                        src="./img/mobile.png"
                                        className="h-h-140 w-full rounded-t-10px"
                                        alt=""
                                    />
                                    <div
                                        className={
                                            statusTicket === "New"
                                                ? "bg-scogobgsky stausdefault"
                                                : statusTicket === "Outgoing"
                                                    ? "bg-scogogoing stausdefault"
                                                    : statusTicket === "Closed"
                                                        ? "bg-scogoclosed stausdefault"
                                                        : "stausdefault bg-scogogoing"
                                        }
                                    >
                                        <span className="text-white text-font13 font-normal">
                                            {statusTicket}
                                        </span>
                                    </div>
                                    <div className="absolute  backdrop-filter backdrop-blur-lg rounded-full  bottom-2 left-2 px-p-6 py-p-3 leading-6  text-center rounded-r-5px">
                                        <span className="text-white 2xl:text-font13 text-font11 font-normal">
                                            Reliance, Mumbai
                                        </span>
                                    </div>

                                    <div className="absolute  backdrop-filter backdrop-blur-lg rounded-full  top-2 right-2 px-p-6 py-p-3 leading-6  text-center rounded-r-5px">
                                        <span className="text-white 2xl:text-font13 text-font11 font-normal">
                                            1/3
                                        </span>
                                    </div>
                                    <div className="absolute right-0">
                                        <Menus
                                            className="relative"
                                            displayType="flex"
                                            position="ml-auto"
                                            menuButtonIcon={menuButtonIcon}
                                            handleItemClick={() => { }}
                                            itemsClassName={itemsClassName}
                                            itemLable={itemLables}
                                            itemClassName={itemClassName}
                                        />
                                    </div>

                                    <div className="absolute  backdrop-filter backdrop-blur-lg rounded-full  bottom-2 right-2 px-p-6 py-p-3 leading-6  text-center rounded-r-5px">
                                        <span className="text-white 2xl:text-font13 text-font11 font-normal">
                                            {" "}
                                            <span class="material-icons 2xl:text-font13 text-font11">
                                                {" "}
                                                attach_file
                                            </span>{" "}
                                            2
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-p-10 bg-white rounded-b-10px">
                                <div>
                                    <p className="text-scogo15 font-medium 2xl:text-font15 text-font12">
                                        Hard drive and RAM issue
                                    </p>
                                </div>

                                <div className=" mt-2">
                                    <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                                        Requested by{" "}
                                        <span className="text-scogoorange font-medium">
                                            Adam Clark
                                        </span>
                                    </p>
                                </div>

                                <div className="mt-2">
                                    <div>
                                        <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                                            Team :{" "}
                                            <span className="text-tickettext font-medium">IT</span>
                                        </p>
                                    </div>
                                </div>

                                <div className=" md:flex mt-2">
                                    <div>
                                        <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                                            Location :{" "}
                                            <span className="text-tickettext font-medium">
                                                Mumbai, Maharastra
                                            </span>
                                        </p>
                                    </div>
                                    <div className="ml-auto  md:mt-0 mt-2">
                                        <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                                            Site ID :{" "}
                                            <span className="text-tickettext font-medium">
                                                XYZ123
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className=" flex mt-2">
                                    <div>
                                        <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                                            Status :{" "}
                                            <span className="text-tickettext font-medium">
                                                Created
                                            </span>
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                                            2 hours ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="2xl:text-font12 text-font10 text-scogogray font-normal mt-1 text-right">
                            03:50 pm
                        </p>
                    </div>


                }
            </div>
            <div className="bg-white border-t-2 border-scogoddd px-2 sticky bottom-10 w-full">
                <div className="flex items-center h-12 leading-12 ">
                    <div className="mr-3 relative cursor-pointer">
                        <span class="material-icons text-scogogray cursor-pointer 2xl:text-font20 text-font16">
                            emoji_emotions
                        </span>
                        <div className="w-0.5 h-6 -right-2 bg-scogoddd absolute top-0"></div>
                    </div>
                    <div className="w-full">
                        <TextareaAutosize
                            className="border-none focus:ring-0 text-font15"
                            minRows={1}
                            maxRows={2}
                            placeholder="Write Here"
                            style={{ border: "none", width: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="flex items-center ml-auto">
                        <div className="ml-2 cursor-pointer">
                            <span class="material-icons text-scogogray 2xl:text-font20 text-font16">photo_camera</span>
                        </div>
                        <div className="mr-4 relative cursor-pointer">
                            <span class="material-icons text-scogogray 2xl:text-font20 text-font16">attach_file</span>
                            <div className="w-0.5 h-6 -right-2 bg-scogoddd absolute top-0"></div>
                        </div>
                        <div className="cursor-pointer">
                            <span class="material-icons text-scogoprimary 2xl:text-font20 text-font16">send</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RaiseTicket
