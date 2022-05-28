import React from "react";
import InputFiels from "../../common/InputFiels";
import Select from 'react-select';

const BusinessDetail = () => {
    const viewmore = () => { };
    const timeoption = [
        { value: '30', label: '30 Minutes (Default)' },
        { value: '45', label: '45 Minutes' },
        { value: '60', label: '60 Minutes ' }
    ]
    return (
        <>
            <div className="lg:w-10/12 lg:mx-auto">
                <div className=" lg:block flex items-center lg:mt-0 pt-10 px-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className=" h-4 w-4 rounded-3px  text-scogoprimary border-2 border-scogo88 focus:outline-none focus:ring-0 mr-3"
                        /> <span className="text-scogo15 2xl:text-font16 text-font14 font-medium"> Do you have GST number </span> 
                    </label>
                </div>
                <div className="lg:flex mt-7">
                    <div className="lg:w-1/2 px-4">
                        <div className="py-2">
                            <label className="block  border-b-2 border-scogoddd">
                                <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">GST Number *</span>
                                <InputFiels
                                    type="text"
                                    inputClass="p-0 py-1 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 placeholder-scogo99"
                                />
                            </label>
                        </div>

                        <div className="py-2">
                            <label className="relative block border-b-2 border-scogoddd"><span className="text-scogo99 2xl:text-font12 text-font10">Select cities to work with scogo</span>
                                <Select
                                    placeholder="Select Cities"
                                    name="colors"
                                    options={timeoption}
                                    className="basic-multi-select py-2"
                                    classNamePrefix="select"
                                />
                                <div className="absolute right-0 bottom-4"><img src="./img/downarrow.svg " alt="" /></div>
                            </label>
                        </div>
                    </div>

                    <div className="lg:w-1/2 px-4">
                        <div className="py-2">
                            <label className="block  border-b-2 border-scogoddd">
                                <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">Company Name *</span>
                                <InputFiels
                                    type="text"
                                    inputClass="p-0 py-1 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 placeholder-scogo99"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BusinessDetail;
