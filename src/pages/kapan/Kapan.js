import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Buttons from "../../common/Buttons";
import InputFiels from "../../common/InputFiels";


let underBorder = "border-0"
let tableClass = "table-list-view"

const Kapan = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [mainDiv, setMainDiv] = React.useState("");

    const [mainIndex, setMainIndex] = React.useState()
    const [search, Setsearch] = useState([
        {
            searchUser: "",
        },
    ]);


    const [value, setValue] = useState('');
    const onChange = (v) => {
        if (!Number.isNaN(v)) {
            setValue(v);
        }
    };

    const [view, setView] = React.useState(false);
    const [bguser, setBguser] = React.useState("");
    const [addSubRow, setAddSubRow] = useState([
        {
            No: 1.1,
            weight: 350,
            Pcs: 10,
            Shape: "Top Cut",
            MainIndex: 1,

        },
        {
            No: 2.2,
            weight: 350,
            Pcs: 10,
            Shape: "Top Cut and Side Cut",
            MainIndex: 2,

        },
    ])
    const [addrow, setaddrow] = useState([
        {
            No: 1,
            Marco: "ISI",
            weight: 350,
            Pcs: 10,
        },

        {
            No: 2,
            Marco: "ISI",
            weight: 350,
            Pcs: 10,
        },
        {
            No: 3,
            Marco: "ISI",
            weight: 350,
            Pcs: 10,
        },
    ]);

    const handleAddFields = () => {
        underBorder = "border-scogoddd "
        const value = [...addrow];
        value.push({
            No: "",
            Marco: "",
            weight: "",
            Pcs: "",
        });
        setaddrow(value);
    };

    const viewMore = () => {

    };

    const handleChange = () => {

    };


    const listViewBtn = () => {
        setView(false)
    }

    const gridViewBtn = () => {
        setView(true)

    }

    const openSubBtn = (MainIndex) => {
        if (MainIndex) {
            setMainIndex(MainIndex)
        }
    }

    const addSubRowNew = (MainNo) => {
        const value = [...addSubRow];
        const lastIndex = (addSubRow.filter(y => y.MainIndex === MainNo)).lastIndex;
        value.push({
            No: MainNo + "." + (lastIndex + 1),
            weight: '',
            Pcs: '',
            Shape: "",
            MainIndex: MainNo,
        });
        setAddSubRow(value);
        setMainIndex(MainNo)

    }

    const removeSubRowNew = (index) => {
        console.log("index", index);
        if (addSubRow.length >= 1) {
            const values = [...addSubRow];
            values.splice(index, 1);
            setAddSubRow(values);
            // if (addSubRow.length === 1) {
            //     setView(false)
            // }
        }
    }
    return (
        <div className="lg:flex relative">
            <div className={`h-full w-full lg:block pb-5 md:pt-0 pt-16 ${mainDiv}`}>
                {/* <div className="bg-scogof8 h-full md:w-2/3 w-full"> */}
                <div className="sticky top-16 w-full 2xl:px-8 xl:px-4 px-2 lg:pt-8 pt-2 lg:pb-4 pb-0 bg-scogof8 z-20">
                    <div className="lg:flex max-w-full">
                        <div>
                            <h1 className="text-scogo21 2xl:text-font24 text-font16 font-medium font-rubik ">
                                Kapan
                            </h1>
                        </div>
                        <div className="flex items-center ml-auto mt-2">
                            <InputFiels
                                type="text"
                                inputImg="./img/search.png"
                                inputClass="loginput 2xl:h-9 h-8 max-w-search-input"
                                inputPlaceholder="Search"
                                inputImgDiv="loginput-imgdiv top-2 left-4"
                                inputDiv="loginput-maindiv mr-m-20"
                                value={search.searchUser}
                                onChange={handleChange}
                            />

                            <Buttons
                                buttonClass="text-white bg-scogoprimary  w-w-120 2xl:h-9 h-8 font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow"
                                children="Search"
                                Btnalt=""
                                btnimgClass="hidden"
                                buttonIcon="./img/plus.svg"
                                onClick={viewMore}
                            />
                        </div>
                    </div>

                    <div className="md:border-b-2 border-0 border-scogoddd">
                        <div className="w-full flex  items-center justify-between">
                            <ul className="flex-wrap flex list-none lg:mt-4 mt-2" role="tablist">
                                <li className="flex-auto text-center ">
                                    <a
                                        className={
                                            "2xl:text-font16 text-font12 font-medium lg:px-8 px-2 py-3  leading-medium flex	items-center " +
                                            (openTab === 1
                                                ? "text-scogoprimary border-b-2 border-scogoprimary"
                                                : "text-scogogray ")
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        <span className="material-icons mr-1">
                                            add
                                        </span>
                                        K.Add
                                    </a>
                                </li>
                                <li className="flex-auto text-center relative">
                                    <a
                                        className={
                                            "2xl:text-font16 text-font12 font-medium  lg:px-8 px-2 py-3  leading-medium flex items-center	" +
                                            (openTab === 2
                                                ? "text-scogoprimary border-b-2 border-scogoprimary"
                                                : "text-scogogray ")
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        <span class="material-icons mr-1">
                                            add
                                        </span>
                                        R.Add
                                    </a>
                                </li>
                            </ul>

                            <Buttons
                                children="Add"
                                buttonClass="bg-white mt-4 border border-scogoorange px-10 w-w-120 2xl:h-9 h-8 leading-6 cursor-pointer text-scogoorange text-font14 font-medium rounded-5px"
                                onClick={handleAddFields}
                            />
                        </div>

                        <div className="md:hidden block">
                            <Buttons
                                children="Grid"
                                buttonClass="bg-white mt-4 border border-scogoorange px-10  2xl:h-9 h-8 leading-6 cursor-pointer text-scogoorange text-font14 font-medium rounded-5px"
                                onClick={gridViewBtn}
                            />
                            <Buttons
                                children="List"
                                buttonClass="bg-white mt-4 border border-scogoorange px-10  2xl:h-9 h-8 leading-6 cursor-pointer text-scogoorange text-font14 font-medium rounded-5px ml-2"
                                onClick={listViewBtn}
                            />
                        </div>

                    </div>
                </div>
                <div className=" w-full z-0 2xl:px-8 md:px-4 px-0  lg:pt-16 md:pt-20 pt-8 md:pb-0 pb-16">
                    <div className="flex-auto ">
                        <div className="tab-content tab-space ">
                            <div className="lg:h-68vh h-100vh lg:pb-0 md:pb-168 pb-330 overflow-auto ">
                                <div className={openTab === 1 ? "" : "hidden"} id="link1">
                                    <table className="bg-white border shadow-mainBoxShadow w-full help-table">
                                        <thead className={view ? "md:flex sticky top-0  hidden p-p-15 bg-yellow-50 z-40  table_custom_th justify-between shadow-TableShadow" : "flex sticky top-0   p-p-15 bg-yellow-50 z-40  table_custom_th justify-between shadow-TableShadow"}>

                                            <th className="2xl:min-w-20 2xl:w-20 lg:min-w-12 lg:w-12 min-w-16 w-16 text-yellow-600 text-left	pl-3 lg:mr-0 mr-1">
                                                No
                                            </th>
                                            <th className="2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64 w-64 text-yellow-600	pl-3 text-left lg:mr-0 mr-1">
                                                Marco

                                            </th>
                                            <th className="2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32 w-32 text-yellow-600	pl-3 text-left lg:mr-0 mr-1">
                                                Weight
                                            </th>
                                            <th className="2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32 w-32 text-yellow-600	pl-3 text-left lg:mr-0 mr-1">
                                                Pcs

                                            </th>

                                            <th className="2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64 w-64 text-yellow-600	pl-3 text-left lg:mr-0 mr-1">
                                                Add Sub.cate
                                            </th>
                                            <th className="2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64 w-64 text-yellow-600	pl-3 text-left lg:mr-0 mr-1">
                                                View More
                                            </th>
                                            <th className="2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64 w-64 text-yellow-600	pl-3 text-left lg:mr-0 mr-1">
                                                Action
                                            </th>

                                        </thead>
                                        <tbody>
                                            <div className={!view ? tableClass : ""}>
                                                {addrow.map((inputField, index) => (
                                                    <>
                                                        <tr
                                                            className={view ? `${bguser} md:flex w-full grid p-p-15 md:py-0 items-center relative Content justify-between  border-b-2 border-scogof8` : `${bguser} flex w-full  p-p-15 md:py-0 items-center relative Content justify-between  border-b-2 border-scogof8`}
                                                        >
                                                            <td
                                                                className={`${view ? "w-auto mr-0" : "w-16 mr-1"} 2xl:min-w-20 2xl:w-20 lg:min-w-12 lg:w-12 min-w-16 cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                            >
                                                                <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                    No :
                                                                </p>

                                                                <input
                                                                    type="number"
                                                                    className={`${view ? "w-auto" : "w-16"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-20 2xl:w-20 lg:min-w-12 lg:w-12 min-w-16   focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                    value={inputField.No}
                                                                />
                                                            </td>

                                                            <td
                                                                className={`${view ? "w-auto mr-0" : "w-64 mr-1"} 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64   cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                            >
                                                                <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                    Marco :
                                                                </p>

                                                                <input
                                                                    type="text"
                                                                    className={`${view ? "w-auto" : "w-64"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64  focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                    value={inputField.Marco}
                                                                />
                                                            </td>


                                                            <td
                                                                className={`${view ? "w-auto mr-0" : "w-32 mr-1"} 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32    cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                            >
                                                                <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                    Weight :
                                                                </p>

                                                                <input
                                                                    type="number"
                                                                    className={`${view ? "w-auto" : "w-32"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32   focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                    value={inputField.Pcs}
                                                                />
                                                            </td>

                                                            <td
                                                                className={`${view ? "w-auto mr-0" : "w-32 mr-1"} 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32    cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                            >
                                                                <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                    Pcs :
                                                                </p>

                                                                <input
                                                                    type="number"
                                                                    className={`${view ? "w-auto" : "w-32"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32   focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                    value={inputField.weight}
                                                                />
                                                            </td>

                                                            <td
                                                                className={`${view ? "w-auto mr-0" : "w-64 mr-1"} 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64   cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                            >
                                                                <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                    Add Sub.cate :
                                                                </p>

                                                                <button className={`${view ? "ml-0" : "ml-3"} text-yellow-600 bg-white border border-yellow-600  w-24  h-8 font-medium  text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow`} onClick={() => { addSubRowNew(inputField.No) }}>Add</button>

                                                            </td>

                                                            <td
                                                                className={`${view ? "w-auto mr-0" : "w-64 mr-1"} 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64   cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                            >
                                                                <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                    View More :
                                                                </p>
                                                                {addSubRow.filter(y => y.MainIndex === inputField.No).length > 0 &&
                                                                    <button onClick={() => { openSubBtn(inputField.No) }} className={`${view ? "ml-0" : "ml-3"} text-gray-600 bg-white border border-gray-600  w-24  h-8 font-medium  text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow`}>View All</button>
                                                                }
                                                            </td>

                                                            <td
                                                                className={`${view ? "w-auto mr-0" : "w-64 mr-1"} 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64   cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                            >
                                                                <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                    Action :
                                                                </p>
                                                                <button>
                                                                    <span className="material-icons ml-4">
                                                                        edit
                                                                    </span>
                                                                </button>
                                                                <button>
                                                                    <span className="material-icons ml-4">
                                                                        delete_forever
                                                                    </span>
                                                                </button>

                                                            </td>
                                                        </tr>
                                                        {inputField.No === mainIndex &&
                                                            <table className="bg-white border-8 border-white  w-full help-table">
                                                                <thead className={view ? "md:flex sticky top-0  hidden p-p-15 bg-gray-50 z-40  table_custom_th_two justify-between " : "flex sticky top-0   p-p-15 bg-gray-50 z-40  table_custom_th_two justify-between "}>

                                                                    <th className="2xl:min-w-20 2xl:w-20 lg:min-w-12 lg:w-12 min-w-16 w-16 text-gray-600 text-left	pl-3 lg:mr-0 mr-1">
                                                                        Sub No.
                                                                    </th>
                                                                    <th className="2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32 w-32 text-gray-600	pl-3 text-left lg:mr-0 mr-1">
                                                                        Weight
                                                                    </th>
                                                                    <th className="2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32 w-32 text-gray-600	pl-3 text-left lg:mr-0 mr-1">
                                                                        Pcs

                                                                    </th>
                                                                    <th className="2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64 w-64 text-gray-600	pl-3 text-left lg:mr-0 mr-1">
                                                                        Shape

                                                                    </th>


                                                                    <th className="2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64 w-64 text-gray-600	pl-3 text-left lg:mr-0 mr-1">
                                                                        Action
                                                                    </th>

                                                                </thead>
                                                                <tbody>
                                                                    <div className={!view ? tableClass : ""}>
                                                                        {addSubRow.filter(y => y.MainIndex === mainIndex).map((inputField, index) => (
                                                                            <>
                                                                                <tr
                                                                                    className={view ? `${bguser} md:flex w-full grid p-p-15 md:py-0 items-center relative Content justify-between  border-b-2 border-scogof8` : `${bguser} flex w-full  p-p-15 md:py-0 items-center relative Content justify-between  border-b-2 border-scogof8`}
                                                                                >
                                                                                    <td
                                                                                        className={`${view ? "w-auto mr-0" : "w-16 mr-1"} 2xl:min-w-20 2xl:w-20 lg:min-w-12 lg:w-12 min-w-16 cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                                                    >
                                                                                        <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                                            No :
                                                                                        </p>

                                                                                        <input
                                                                                            type="number"
                                                                                            className={`${view ? "w-auto" : "w-16"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-20 2xl:w-20 lg:min-w-12 lg:w-12 min-w-16   focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                                            value={inputField.No}
                                                                                        />
                                                                                    </td>
                                                                                    <td
                                                                                        className={`${view ? "w-auto mr-0" : "w-32 mr-1"} 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32    cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                                                    >
                                                                                        <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                                            Weight :
                                                                                        </p>

                                                                                        <input
                                                                                            type="number"
                                                                                            className={`${view ? "w-auto" : "w-32"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32   focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                                            value={inputField.Pcs}
                                                                                        />
                                                                                    </td>

                                                                                    <td
                                                                                        className={`${view ? "w-auto mr-0" : "w-32 mr-1"} 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32    cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                                                    >
                                                                                        <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                                            Pcs :
                                                                                        </p>

                                                                                        <input
                                                                                            type="number"
                                                                                            className={`${view ? "w-auto" : "w-32"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-40 2xl:w-40 lg:min-w-24 lg:w-24 min-w-32   focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                                            value={inputField.weight}
                                                                                        />
                                                                                    </td>
                                                                                    <td
                                                                                        className={`${view ? "w-auto mr-0" : "w-64 mr-1"} 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64   cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                                                    >
                                                                                        <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                                            Shape :
                                                                                        </p>

                                                                                        <input
                                                                                            type="text"
                                                                                            className={`${view ? "w-auto" : "w-64"} ${inputField.weight === "" ? "border-b border-scogoddd border-three-0" : `border-0 ${underBorder}`} md:h-auto h-8 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64  focus:ring-0 2xl:text-font13 text-font11 text-scogo15 font-medium `}
                                                                                            value={inputField.Shape}
                                                                                        />
                                                                                    </td>
                                                                                    <button className={`${view ? "ml-0" : "ml-3"} text-yellow-600 bg-white border border-yellow-600  w-24  h-8 font-medium  text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow`} onClick={() => { removeSubRowNew(inputField.No) }}>delete</button>






                                                                                    <td
                                                                                        className={`${view ? "w-auto mr-0" : "w-64 mr-1"} 2xl:min-w-80 2xl:w-80 lg:min-w-48 lg:w-48 min-w-64   cursor-pointer md:mt-0 mt-2 flex items-center md:block lg:mr-0`}

                                                                                    >
                                                                                        <p className={`${view ? "mr-0" : "mr-3"} md:hidden md:w-auto w-20 block 2xl:text-font15 text-font11 font-normal text-scogogray md:mr-0`}>
                                                                                            Action :
                                                                                        </p>
                                                                                        <button>
                                                                                            <span className="material-icons ml-4">
                                                                                                edit
                                                                                            </span>
                                                                                        </button>
                                                                                        <button>
                                                                                            <span className="material-icons ml-4">
                                                                                                delete_forever
                                                                                            </span>
                                                                                        </button>

                                                                                    </td>
                                                                                </tr>



                                                                            </>
                                                                        ))}
                                                                    </div>
                                                                </tbody>
                                                            </table>
                                                        }
                                                    </>
                                                ))}
                                            </div>
                                        </tbody>
                                    </table>
                                </div>

                                <div className={openTab === 2 ? "" : "hidden"} id="link1">
                                    Certi
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Kapan;
