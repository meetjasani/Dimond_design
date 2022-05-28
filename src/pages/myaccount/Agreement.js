import React from "react";

function Agreement() {
    return (
        <>
            <div>
                <embed src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" width="100%"  className="mx-auto mt-10 2xl:h-455 h-80 overflow-y-auto"/>
            </div>
            <div className=" lg:block flex items-center lg:mt-0 pt-10">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className=" h-4 w-4 rounded-3px text-scogoorange border-2 border-scogo88 focus:outline-none focus:ring-0 mr-3"
                    />I agreed with  <span className="text-scogoprimary ml-1 font-medium"> Terms & Conditions.</span>
                </label>
            </div>
        </>
    );
}

export default Agreement;