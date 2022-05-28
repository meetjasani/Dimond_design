import React from "react";
import InputFiels from "../../common/InputFiels";

function BankDetails() {
    return (
        <>
            <div className="lg:w-10/12 lg:mx-auto pt-5">
                <div className="lg:flex  mt-7">
                    <div className="lg:w-1/2 px-4">
                        <div className="py-2">
                            <label className="block  border-b-2 border-scogoddd">
                                <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">Account Holder Name *</span>
                                <InputFiels
                                    type="text"
                                    inputClass="p-0 py-1 block w-full font-normal 2xl:text-font15 text-font13 text-scogo15 border-none focus:ring-0 placeholder-scogo99"

                                />
                            </label>
                        </div>

                        <div className="py-2">
                            <label className="block  border-b-2 border-scogoddd">
                                <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">Account Type *</span>
                                <InputFiels
                                    type="text"
                                    inputClass="p-0 py-1 block w-full font-normal 2xl:text-font15 text-font13 text-scogo15 border-none focus:ring-0 placeholder-scogo99"

                                />
                            </label>
                        </div>

                    </div>

                    <div className="lg:w-1/2 px-4">
                        <div className="py-2">
                            <label className="block  border-b-2 border-scogoddd">
                                <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">Account Number *</span>
                                <InputFiels
                                    type="text"
                                    inputClass="p-0 py-1 block w-full font-normal 2xl:text-font15 text-font13 text-scogo15 border-none focus:ring-0 placeholder-scogo99"

                                />
                            </label>
                        </div>

                        <div className="py-2">
                            <label className="block  border-b-2 border-scogoddd">
                                <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">IFSC Code *</span>
                                <InputFiels
                                    type="text"
                                    inputClass="p-0 py-1 block w-full font-normal 2xl:text-font15 text-font13 text-scogo15 border-none focus:ring-0 placeholder-scogo99"

                                />
                            </label>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default BankDetails;
