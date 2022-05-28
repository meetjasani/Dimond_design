import React, { useState } from "react";
import Buttons from "../../common/Buttons";
import DatePicker from "react-datepicker";
import TagsInput from "../../common/TagsInput";
import InputFiels from "../../common/InputFiels";
import Select from 'react-select';
import TextareaAutosize from "react-textarea-autosize";

let underBorder = "border-0"

const mapoptions = [
    { value: 'All', label: 'All' },
    { value: 'Admin', label: 'Admin' },
    { value: ' PO Approval ', label: ' PO Approval ' }
]

const RaiseTicket = (props) => {

    const viewmore = () => {

    }
    const cancleRaiseBtn = () => {
        props.cancleRaise()
    }

    const selectedTags = () => {
        console.log("done");
    }
    return (
        <>


            <>
                <div
                    className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="lg:fixed absolute lg:top-auto top-16  lg:bottom-2 bottom-0 lg:right-2 right-0  lg:max-w-720 w-full lg:my-6 my-0 mx-auto z-50">

                        <div className="border-0 rounded-lg shadow-lg relative lg:pb-0 pb-16 flex flex-col w-full bg-white outline-none focus:outline-none">

                            <div className="flex items-center justify-between 2xl:py-p-15 py-3 px-5 border-b  border-scogoddd rounded-t-lg w-full bg-scogoprimary">
                                <h3 className="2xl:text-font18 text-font14 font-medium text-white">
                                    Raise a Ticket
                                </h3>

                                <div className="ml-auto cursor-pointer" onClick={cancleRaiseBtn}>
                                    <img src="./img/whiteclose.svg" alt="" />
                                </div>

                            </div>

                            <div className="relative flex-auto">
                                <div className="2xl:h-auto lg:h-60   overflow-y-auto">
                                    <div className="py-1 relative px-7">
                                        <label className="block  border-b-2 border-scogoddd">
                                            <span className="text-scogo99 font-normal text-font12">Project</span>
                                            <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                        </label>
                                        <p className="absolute font-medium text-font14 top-8 right-7">Cc</p>
                                    </div>

                                    <div className="py-1 px-7">
                                        <label className="block  border-b-2 border-scogoddd">
                                            <span className="text-scogo99 font-normal text-font12">Cc</span>
                                            <TagsInput selectedTags={selectedTags} />
                                        </label>
                                    </div>

                                    <div className="py-1 relative px-7">
                                        <label className="block  border-b-2 border-scogoddd">
                                            <span className="text-scogo99 font-normal text-font12">Title</span>
                                            <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                        </label>
                                        <p className="absolute font-medium text-font14 top-8 right-7">1/20</p>
                                    </div>
                                    <div className="lg:flex px-7">
                                        <div className="py-1 lg:w-1/2 lg:pr-2">
                                            <label className="block  border-b-2 border-scogoddd">
                                                <span className="text-scogo99 font-normal text-font12">External Ticket Id</span>
                                                <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                            </label>
                                        </div>
                                        <div className="py-0 lg:w-1/2  lg:pl-2">
                                            <label className="relative block border-b-2 border-scogoddd"><span className="text-scogo99 font-normal text-font12">Site Id</span>
                                                <Select
                                                    placeholder=""
                                                    name="colors"
                                                    options={mapoptions}
                                                    className="basic-multi-select placeholder-scogo99"
                                                    classNamePrefix="select"
                                                />
                                                <div className="absolute right-0 bottom-8"><img src="./img/downarrow.svg " alt="" /></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="lg:flex px-7">
                                        <div className="py-1 lg:w-1/2 lg:pr-2 relative">
                                            <label className="block  border-b-2 border-scogoddd">
                                                <span className="text-scogo99 font-normal text-font12">Location</span>
                                                <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                            </label>
                                            <p className="absolute font-medium text-font14 top-8 lg:right-4 right-0"><span class="material-icons text-scogoorange">location_on</span></p>
                                        </div>
                                        <div className="py-1 lg:w-1/2  lg:pl-2">
                                            <label className="block  border-b-2 border-scogoddd">
                                                <span className="text-scogo99 font-normal text-font12">Pincode *</span>
                                                <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="lg:flex px-7">
                                        <div className="py-1 lg:w-1/2 lg:pr-2">
                                            <label className="block  border-b-2 border-scogoddd">
                                                <span className="text-scogo99 font-normal text-font12">Contact Person </span>
                                                <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                            </label>
                                        </div>
                                        <div className="py-1 lg:w-1/2  lg:pl-2">
                                            <label className="block  border-b-2 border-scogoddd">
                                                <span className="text-scogo99 font-normal text-font12">Contact </span>
                                                <InputFiels type="text" inputClass="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                            </label>
                                        </div>
                                    </div>


                                    <div className="py-1 px-7">
                                        <label className="block  border-b-2 border-scogoddd">
                                            <span className="text-scogo99 font-normal text-font12">Description</span>
                                            {/* <textarea className="px-2 block  w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" rows=""></textarea> */}
                                            <TextareaAutosize
                                                className="x-2 block  w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1"
                                                minRows={2}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="pt-2 pb-4 flex flex-wrap px-7">
                                    <div className="mr-3">
                                        <div className="w-20 h-20 rounded-10px relative">
                                            <img src="./img/p4.png" alt="" className="w-full" />
                                            <span className="absolute top-0 right-0 cursor-pointer">
                                                <img src="./img/close.png" alt="" />
                                            </span>
                                        </div>
                                        <p className="text-font12 text-scogogray">filename.png</p>
                                    </div>
                                    <div className="mr-3">
                                        <div className="w-20 h-20 rounded-10px relative">
                                            <img src="./img/p4.png" alt="" className="w-full" />
                                            <span className="absolute top-0 right-0 cursor-pointer">
                                                <img src="./img/close.png" alt="" />
                                            </span>
                                        </div>
                                        <p className="text-font12 text-scogogray">filename.png</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex items-center px-6 py-1 border-t border-solid border-blueGray-200 rounded-b">
                                <Buttons
                                    buttonClass="text-white mr-4 bg-scogoprimary md:mt-0 mt-2 2xl:w-w-102 w-24 2xl:h-9 h-7 font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow"
                                    children="Create"
                                    Btnalt=""
                                    btnimgClass="2xl:w-4 w-3 2xl:h-4 h-3 mr-2"
                                    buttonIcon="./img/check.svg"
                                    onClick={viewmore}
                                />
                                <div className=" proof-upload risetickets">
                                    <div className="block  border-0 relative">
                                        <InputFiels
                                            type="file"
                                            inputClass="p-0  py-4 block w-8 font-normal text-font15 text-scogo15 border-none focus:ring-0 placeholder-scogo99"
                                        />
                                        <div className="absolute right-0 bottom-4"><img src="./img/link.svg " alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        </>
    );
}

export default RaiseTicket;