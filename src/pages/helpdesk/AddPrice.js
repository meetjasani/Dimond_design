import React, { useState } from "react";
import Buttons from "../../common/Buttons";
import DatePicker from "react-datepicker";


let underBorder = "border-0"

const AddPrice = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [addrow, setaddrow] = useState([
    {
      Type: "Service",
      Item: "CPU",
      Description: "Lorem ipsum dolor sit amet elit.",
      SP: "₹ 800",
      Incentive: "₹ 400",
      Customer: "₹ 300",
      Reason: "Lorem ipsum dolor sit amet elit.",
    },
  ]);

  const handleAddFields = () => {
    underBorder = "border-0 border-b border-scogoddd "
    const value = [...addrow];
    value.push({
      Type: "",
      Item: "",
      Description: "",
      SP: "",
      Incentive: "",
      Customer: "",
      Reason: "",
    });
    setaddrow(value);
  };

  const canclePriceBtn = () => {
    props.closePriceAdd()
}

  return (
    <>
     
 
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-full my-6 mx-auto max-w-6xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="flex items-center justify-between py-5 px-7 border-b  border-scogoddd rounded-10px w-full">
                  <h3 className="text-font24 font-medium text-scogo15">
                    Add Price
                  </h3>

                  <div className="ml-auto cursor-pointer" onClick={canclePriceBtn}>
                    <img src="./img/close.svg" alt="" />
                  </div>

                </div>

                <div className="relative px-7 flex-auto">
                  <p className="mt-8 text-scogo15 text-font13 font-normal">
                    *All payment from Scogo are made post deduction of TDS and system charges.
                  </p>
                  <div className="overflow-x-scroll w-full">
                    <table className="text-left mt-8 ">
                      <thead>
                        <tr>
                          <th className="min-w-24 w-24 text-scogogray text-font13 font-normal px-2 py-1">
                            Type
                          </th>
                          <th className="min-w-24 w-24 text-scogogray text-font13 font-normal px-2 py-1">
                            Item
                          </th>
                          <th className="min-w-60 w-60 text-scogogray text-font13 font-normal px-2 py-1">
                            Description
                          </th>
                          <th className="min-w-24 w-24 text-scogogray text-font13 font-normal px-2 py-1">
                            SP
                          </th>
                          <th className="min-w-24 w-24 text-scogogray text-font13 font-normal px-2 py-1">
                            Incentive
                          </th>
                          <th className="min-w-24 w-24 text-scogogray text-font13 font-normal px-2 py-1">
                            Customer
                          </th>
                          <th className="min-w-60 w-60 text-scogogray text-font13 font-normal px-2 py-1">
                            Reason
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {addrow.map((inputField, index) => (
                          <tr>
                            <td className="min-w-24 w-24	py-5 px-2">
                              <input
                                type="text"
                                className={`${underBorder}  focus:ring-0 w-24 p-1 text-scogo15 font-medium  text-font15`}
                                value={inputField.Type}
                              />
                            </td>
                            <td className="min-w-24 w-24	py-5 px-2">
                              <input
                                type="text"
                                className={`${underBorder}  focus:ring-0 w-24 p-1 text-scogo15 font-medium  text-font15`}
                                value={inputField.Item}
                              />
                            </td>
                            <td className="min-w-60 w-60	py-5 px-2">
                              <input
                                type="text"
                                className={`${underBorder}  focus:ring-0 w-60 p-1 text-scogo15 font-medium  text-font15`}
                                value={inputField.Description}
                              />
                            </td>
                            <td className="min-w-24 w-24	py-5 px-2">
                              <input
                                type="text"
                                className={`${underBorder}  focus:ring-0 w-24 p-1 text-scogo15 font-medium  text-font15`}
                                value={inputField.SP}
                              />
                            </td>
                            <td className="min-w-24 w-24	py-5 px-2">
                              <input
                                type="text"
                                className={`${underBorder}  focus:ring-0 w-24 p-1 text-scogo15 font-medium  text-font15`}
                                value={inputField.Incentive}
                              />
                            </td>
                            <td className="min-w-24 w-24	py-5 px-2">
                              <input
                                type="text"
                                className={`${underBorder}  focus:ring-0 w-24 p-1 text-scogo15 font-medium  text-font15`}
                                value={inputField.Customer}
                              />
                            </td>
                            <td className="min-w-60 w-60	py-5 px-2">
                              <input
                                type="text"
                                className={`${underBorder}  focus:ring-0 w-60 p-1 text-scogo15 font-medium  text-font15`}
                                value={inputField.Reason}
                              />
                            </td>
                          </tr>
                        ))}

                      </tbody>
                      <tfoot className="bg-scogof5">
                        <tr>
                          <td className="text-scogo15 font-medium	 text-font15 py-4 min-w-28 w-28 px-2"></td>
                          <td className="text-scogo15 font-medium	 text-font15 py-4 min-w-28 w-28 px-2"></td>
                          <td className="text-scogo15 font-medium	 text-font15 py-4 text-right pr-8 min-w-60 w-60 px-2">Total</td>
                          <td className="text-scogo15 font-medium	 text-font15 py-4 min-w-28 w-28 px-2">₹ 1400</td>
                          <td className="text-scogo15 font-medium	 text-font15 py-4 min-w-28 w-28 px-2">₹ 800</td>
                          <td className="text-scogo15 font-medium	 text-font15 py-4 min-w-28 w-28 px-2">₹ 900</td>
                          <td className="text-scogo15 font-medium	 text-font15 py-4 min-w-60 w-60 px-2"></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <Buttons
                    children="Add"
                    buttonClass="bg-white mt-4 border border-scogoorange px-10 h-8 leading-6 cursor-pointer text-scogoorange text-font12 font-normal rounded-5px"
                    onClick={handleAddFields}
                  />

                  <div className="md:flex items-center py-8">
                    <div className="mr-3">
                      <p className="text-font16 text-scogo15 font-medium">Vendor payout date</p>
                    </div>
                    <div className="mt-3 relative">
                      <DatePicker
                        className="border border-scogoccc focus:ring-0 pl-10 rounded-6px bg-white md:w-80  placeholder-scogo99 placeholder-font16"
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                          setDateRange(update);
                        }}
                        placeholderText="Select Date range"
                        isClearable={false}
                        dateFormat="dd/MM/yyyy"
                      />
                      <div className="absolute top-2.5 left-2">
                        <img src="./img/event.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Buttons
                    buttonClass="text-scogogray bg-transparent ml-3 px-p-15 h-9 font-medium text-font16 flex items-center justify-center rounded-6px"
                    children="Cancel"
                    Btnalt=""
                    onClick={canclePriceBtn}
                  />
                  <Buttons
                    buttonClass="text-white bg-scogoprimary  px-p-15 h-9 font-medium text-font16 flex items-center justify-center rounded-6px shadow-primaryBtnShadow"
                    children="Update"
                    Btnalt=""
                    onClick={() => setShowModal(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    
    </>
  );
}

export default AddPrice;