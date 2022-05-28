import React, { useState } from "react";
import Buttons from "../../common/Buttons";
import { Fragment } from "react";
import InputFiels from "../../common/InputFiels";
import { Transition } from "@headlessui/react";
import Checkbox from "../../common/Checkbox";
import ProName from "../../common/ProName";
import Label from "../../common/Label";
import Tabs from "../../common/Tabs";
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import DatePicker from "react-datepicker";
import AddPrice from "./AddPrice";
import RaiseTicket from "./RaiseTicket";

let mainDiv = "";
let bguser = "";
let cardSize = "lg:w-1/4";

const teamsmember = [
    {
        id: 1,
        orderDate: "21/06/2021",
        orderDayTo: "2 days ago",
        ticketID: "6543210",
        extTicket: "6543210",
        customer: "ICICI Bank",
        customerNetwork: "XYZ Networks",
        projectName: "ICICI_SD wa...",
        SiteID: "1122334",
        lastVisit: "Last Visited: Mon, 21 2021",
        loaction: "Reliance Mumbai",
        memberName: "James White",
        memberMob: "9876543210",
        memberAddress: "12, City Business Center, Andheri, Mumbai - 543210",
        Title: "Lorem ipsum text",
        Describe: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Quisque eu dapibus",
        customerBill: "500",
        customerPay: "Invoiced",
        vendorBill: "400",
        vendorPay: "Paid",
        Usecase: "Installation",
        agent: "James White",
        agentNo: "9801234567",
        FEpartner: "James White",
        FEpatnerNo: "9876543210",
        SPpartner: "James White",
        SPpatnerNo: "9876543210",
        status: "Reassign",
        currentstatus: "OnHold : Issues",
        currentlable: "Update",

        Created: "Sat, 23 June 6:00 PM",
        startDate: "Sun, June 24 ",
        startTime: "5:00 PM",
        endDate: "Mon, June 25 ",
        endTime: "6:00 PM",
        daysLegt: "6",
        statusComplete: "20%",
        statusBar: "pause",
        remark: "lorem ipsum dummy text",
        slaTime: "24 Hours",
        Completed: "12 Hours",
        Assets: "Router, CPU",
        ticketstatus: "New"
    },

    {
        id: 2,
        orderDate: "21/06/2021",
        orderDayTo: "2 days ago",
        ticketID: "6543210",
        extTicket: "6543210",
        customer: "ICICI Bank",
        customerNetwork: "XYZ Networks",
        projectName: "ICICI_SD wa...",
        SiteID: "1122334",
        lastVisit: "Last Visited: Mon, 21 2021",
        loaction: "Reliance Mumbai",
        memberName: "James White",
        memberMob: "9876543210",
        memberAddress: "12, City Business Center, Andheri, Mumbai - 543210",
        Title: "Lorem ipsum text 1",
        Describe: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Quisque eu dapibus",
        customerBill: "500",
        customerPay: "",
        vendorBill: "400",
        vendorPay: "",
        Usecase: "Resources",
        agent: "James White",
        agentNo: "9801234567",
        FEpartner: "James White",
        FEpatnerNo: "9876543210",
        SPpartner: "James White",
        SPpatnerNo: "9876543210",
        status: "Assign",
        currentstatus: "Created",
        currentlable: "Update",

        Created: "Sat, 23 June 6:00 PM",
        startDate: "Sun, June 24",
        startTime: "5:00 PM",
        endDate: "Mon, June 25",
        endTime: "6:00 PM",
        daysLegt: "6",
        statusComplete: "70%",
        statusBar: "continue",
        remark: "lorem ipsum dummy text",
        slaTime: "24 Hours",
        Completed: "12 Hours",
        Assets: "Monitor, Key board",
        ticketstatus: "Closed"

    },
    {
        id: 3,
        orderDate: "21/06/2021",
        orderDayTo: "2 days ago",
        ticketID: "6543210",
        extTicket: "6543210",
        customer: "ICICI Bank",
        customerNetwork: "XYZ Networks",
        projectName: "ICICI_SD wa...",
        SiteID: "1122334",
        lastVisit: "Last Visited: Mon, 21 2021",
        loaction: "Reliance Mumbai",
        memberName: "James White",
        memberMob: "9876543210",
        memberAddress: "12, City Business Center, Andheri, Mumbai - 543210",
        Title: "Lorem ipsum text 2",
        Describe: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Quisque eu dapibus",
        customerBill: "500",
        customerPay: "",
        vendorBill: "400",
        vendorPay: "",
        Usecase: "Assets",
        agent: "James White",
        agentNo: "9801234567",
        FEpartner: "James White",
        FEpatnerNo: "9876543210",
        SPpartner: "James White",
        SPpatnerNo: "9876543210",
        status: "Reassign",
        currentstatus: "OnGoing",
        currentlable: "Update",


        Created: "Sat, 23 June 6:00 PM",
        startDate: "Sun, June 24",
        startTime: "5:00 PM",
        endDate: "Mon, June 25",
        endTime: "6:00 PM",
        daysLegt: "6",
        statusComplete: "21%",
        statusBar: "continue",
        remark: "lorem ipsum dummy text",
        slaTime: "24 Hours",
        Completed: "12 Hours",
        Assets: "",
        ticketstatus: "Closed"

    },
    {
        id: 4,
        orderDate: "21/06/2021",
        orderDayTo: "2 days ago",
        ticketID: "6543210",
        extTicket: "6543210",
        customer: "ICICI Bank",
        customerNetwork: "XYZ Networks",
        projectName: "ICICI_SD wa...",
        SiteID: "1122334",
        lastVisit: "Last Visited: Mon, 21 2021",
        loaction: "Reliance Mumbai",
        memberName: "James White",
        memberMob: "9876543210",
        memberAddress: "12, City Business Center, Andheri, Mumbai - 543210",
        Title: "Lorem ipsum text 3",
        Describe: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Quisque eu dapibus",
        customerBill: "500",
        customerPay: "Invoiced",
        vendorBill: "400",
        vendorPay: "Paid",
        Usecase: "RMA",
        agent: "James White",
        agentNo: "9801234567",
        FEpartner: "James White",
        FEpatnerNo: "9876543210",
        SPpartner: "James White",
        SPpatnerNo: "9876543210",
        status: "Reassign",
        currentstatus: "Site Complete",
        currentlable: "Update",


        Created: "Sat, 23 June 6:00 PM",
        startDate: "Sun, June 24",
        startTime: "5:00 PM",
        endDate: "Mon, June 25",
        endTime: "6:00 PM",
        daysLegt: "6",
        statusComplete: "20%",
        statusBar: "pause",
        remark: "lorem ipsum dummy text",
        slaTime: "24 Hours",
        Completed: "12 Hours",
        Assets: "Monitor, Key board",
        ticketstatus: "On Hold"

    },
    {
        id: 5,
        orderDate: "21/06/2021",
        orderDayTo: "2 days ago",
        ticketID: "6543210",
        extTicket: "6543210",
        customer: "ICICI Bank",
        customerNetwork: "XYZ Networks",
        projectName: "ICICI_SD wa...",
        SiteID: "1122334",
        lastVisit: "Last Visited: Mon, 21 2021",
        loaction: "Reliance Mumbai",
        memberName: "James White",
        memberMob: "9876543210",
        memberAddress: "12, City Business Center, Andheri, Mumbai - 543210",
        Title: "Lorem ipsum text 4",
        Describe: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Quisque eu dapibus",
        customerBill: "500",
        customerPay: "",
        vendorBill: "400",
        vendorPay: "",
        Usecase: "Resources",
        agent: "James White",
        agentNo: "9801234567",
        FEpartner: "James White",
        FEpatnerNo: "9876543210",
        SPpartner: "James White",
        SPpatnerNo: "9876543210",
        status: "Reassign",
        currentstatus: "Reach Site",
        currentlable: "Update",

        Created: "Sat, 23 June 6:00 PM",
        startDate: "Sun, June 24",
        startTime: "5:00 PM",
        endDate: "Mon, June 25",
        endTime: "6:00 PM",
        daysLegt: "6",
        statusComplete: "100%",
        statusBar: "continue",
        remark: "lorem ipsum dummy text",
        slaTime: "24 Hours",
        Completed: "12 Hours",
        Assets: "Router, CPU",
        ticketstatus: "Ongoing"

    },
];


const HelpDesk = () => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(teamsmember);
    const [sidebarData, setSidebarData] = useState(null);
    const [activeTab, setActiveTab] = useState("All");
    const [tourDetails, setTourDetails] = useState(false);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [addPrice, setAddPrice] = React.useState(false);
    const [raiseTicket, setRaiseTicket] = React.useState(false);
    const [search, Setsearch] = useState([
        {
            searchUser: "",
        },
    ]);

    const handleChange = () => { };

    const addNewBtn = () => {

    };

    const setOpenAddPrice = () => {
        if (addPrice) {
            setAddPrice(false)
        } else {
            setAddPrice(true)
        }
    }

    const findCount = (name) => {
        let teamsmemberData = [];
        teamsmember.map((data) => {
            if (data.ticketstatus === name) {
                teamsmemberData.push(data);
            }
        });
        return teamsmemberData.length;
    };

    const tabsList = [
        `All`,
        `New`,
        `Ongoing`,
        `On Hold`,
        `Closed`,
    ];

    const filterData = (state) => {
        setActiveTab(state);
        if (state === "All") {
            setData(teamsmember);

        } else {
            setData(teamsmember.filter((x) => x.ticketstatus === state));

        }
    };

    const sidbarOpen = (id) => {
        setOpen(true)
        setSidebarData(data.find(item => item.id === id))
    }

    const filterModal = () => {
        setTourDetails(!tourDetails);
    }

    const cancleFilter = () => {
        setTourDetails(false);
    }

    const viewMore = () => {

    }

    const closePriceAdd = () => {
        setAddPrice(false)

    }

    const raiseAddNew = () => {
        setRaiseTicket(true)
    }

    const cancleRaise = () => {
        setRaiseTicket(false)
    }

    return (
        <>
            <div className="lg:flex relative">
                <div className="h-full w-full lg:block pb-5 md:pt-0 pt-16">
                    <div className="sticky top-16 w-full 2xl:px-8 xl:px-4 px-2 lg:pt-8 pt-2 lg:pb-4 pb-0 bg-scogof8 z-20">
                        <div className="lg:flex max-w-full">
                            <div>
                                <h1 className="text-scogo21 2xl:text-font24 text-font16 font-medium font-rubik ">
                                    Tickets
                                </h1>
                            </div>
                            <div className="md:flex items-center ml-auto">
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
                                    buttonClass="text-white bg-scogoprimary md:mt-0 mt-2 w-w-120 2xl:h-9 h-8 font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow"
                                    children="Add New"
                                    Btnalt=""
                                    btnimgClass="2xl:w-4 w-3 2xl:h-4 h-3 mr-1"
                                    buttonIcon="./img/plus.svg"
                                    onClick={raiseAddNew}
                                />
                                {raiseTicket && (
                                    <div>
                                        <RaiseTicket addPrice={addPrice} closePriceAdd={closePriceAdd} cancleRaise={cancleRaise} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="xl:flex mt-3">
                            <div>
                                <Tabs
                                    ItemsClassName={"pb-3"}
                                    ItemClassName={" flex pb-1 mt-3 cursor-pointer overflow-x-auto "}
                                    itemList={tabsList}
                                >
                                    {tabsList.map((tab, i) => {
                                        return (
                                            <p
                                                className={
                                                    activeTab === tab
                                                        ? "tab-card-active"
                                                        : "tab-card"
                                                }
                                                onClick={() => filterData(tab)}

                                            >
                                                {/* {tab == "All" ? `${tab} (${teamsmember.length})` : `${tab} (${findCount(tab)})`}  */}

                                                {tab == "All" ?
                                                    (
                                                        <>
                                                            {tab}
                                                            <span>{teamsmember.length}</span>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                            {tab}
                                                            <span>{findCount(tab)}</span>
                                                        </>
                                                    )
                                                }
                                            </p>
                                        );
                                    })}
                                </Tabs>
                            </div>

                            <div className="flex overflow-y-auto ml-auto lg:pb-0 pb-2">

                                <div>
                                    <Buttons
                                        buttonClass="text-white whitespace-nowrap	 bg-scogogoing mr-2 2xl:px-6 px-3 2xl:h-9 h-8  font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px shadow-teamboxShadow"
                                        children="Today's Status"
                                        Btnalt=""
                                        onClick={viewMore}
                                    />
                                </div>

                                <div>
                                    <Buttons
                                        buttonClass="text-scogoprimary whitespace-nowrap	 bg-white mr-2 2xl:px-6 px-3 2xl:h-9 h-8 font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px border border-scogoprimary"
                                        children="Show/Hide Column"
                                        Btnalt=""
                                        onClick={viewMore}
                                    />
                                </div>

                                <div>
                                    <Buttons
                                        buttonClass="text-scogoprimary whitespace-nowrap bg-white mr-2 2xl:px-6 px-3 2xl:h-9 h-8  font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px border border-scogoprimary"
                                        children="Filter"
                                        Btnalt=""
                                        btnimgClass="w-4 h-4 mr-1"
                                        buttonIcon="./img/filter.svg"
                                        onClick={filterModal}
                                    />
                                    {tourDetails &&
                                        <div className="md:p-0 py-4 px-8 md:w-auto w-full absolute xl:right-40 xl:left-auto md:left-48 left-0 xl:top-30" >
                                            <div className=" 2xl:w-72 md:w-60 w-full z-20 bg-scogof8 shadow-teamboxShadow px-p-15 pt-p-11 pb-p-20 rounded-10px">
                                                <div>
                                                    <Buttons
                                                        buttonClass="text-white bg-scogoorange h-4.5 py-p-3 px-p-6 text-font13 flex items-center justify-center rounded-6px font-normal ml-auto"
                                                        children="Make Default"
                                                        Btnalt=""
                                                        onClick={viewMore}
                                                    />
                                                </div>
                                                <div className="2xl:mt-3 mt-1">
                                                    <p className="text-scogo15 2xl:text-font16 text-font14 font-medium">By Date</p>
                                                </div>
                                                <div className="2xl:mt-3 mt-2 relative">
                                                    <DatePicker
                                                        className="border border-scogoccc focus:ring-0 pl-10 rounded-6px bg-white w-full placeholder-scogo99 2xl:placeholder-font16 placeholder-font14 "
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
                                                <div className="2xl:mt-5 mt-4 flex">
                                                    <Buttons
                                                        buttonClass="text-white bg-scogoprimary  px-p-15 2xl:h-9 h-7 font-medium 2xl:text-font16 text-font14 flex items-center justify-center rounded-6px shadow-primaryBtnShadow"
                                                        children="Apply"
                                                        Btnalt=""
                                                        onClick={viewMore}
                                                    />

                                                    <Buttons
                                                        buttonClass="text-scogogray bg-transparent ml-3 px-p-15 2xl:h-9 h-7 font-medium 2xl:text-font16 text-font14 flex items-center justify-center rounded-6px"
                                                        children="Cancel"
                                                        Btnalt=""
                                                        onClick={cancleFilter}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="relative cursor-pointer ">
                                    <Buttons
                                        buttonClass="text-scogoprimary whitespace-nowrap bg-white pr-6 pl-4  2xl:h-9 h-8 font-medium 2xl:text-font16 text-font13  flex items-center justify-center rounded-6px border border-scogoprimary"
                                        children="Actions"
                                        Btnalt=""
                                        onClick={viewMore}
                                    />
                                    <div className="absolute 2xl:right-3 right-2 2xl:top-4 top-3">
                                        <img src="./img/down-arrow.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=" w-full z-0 2xl:px-8 xl:px-4 px-2 md:pt-16 pt-2">
                        <div className="flex-auto ">
                            <div className="tab-content tab-space ">
                                <div className="2xl:h-68vh md:h-60vh h-100vh md:pb-0 pb-315   overflow-auto ">
                                    <table className="bg-white border shadow-mainBoxShadow w-full help-table ">
                                        <thead className="md:flex sticky top-0  hidden py-p-15 bg-white z-10  rounded-6px table_custom_th justify-between my-table">
                                            <th className="min-w-32 w-32 flex items-center pl-p-15">
                                                <Checkbox
                                                    checkColor="text-scogoorange mr-2 first-row"
                                                />
                                                Order Date
                                            </th>
                                            <th className="min-w-28 w-28 sec-row">
                                                Ticket ID
                                            </th>
                                            <th className="min-w-40 w-40 third-row">
                                                Customer detail
                                            </th>
                                            <th className="min-w-48 w-48 four-row">
                                                Site Detail
                                            </th>
                                            <th className="min-w-56 w-56 pl-5">
                                                Title and description
                                            </th>
                                            <th className="min-w-32 w-32">
                                                Price
                                            </th>
                                            <th className="min-w-32 w-32">
                                                Usecase & Assets
                                            </th>
                                            <th className="min-w-32 w-32">
                                                Agent details
                                            </th>
                                            <th className="min-w-32 w-32">
                                                Partner
                                            </th>
                                            <th className="min-w-32 w-32">
                                                Current status
                                            </th>
                                            <th className="min-w-80 w-80">
                                                Progress
                                            </th>
                                            <th className="min-w-32 w-32">
                                                Assets
                                            </th>
                                            <th className="min-w-48 w-48">
                                                Remarks
                                            </th>
                                            <th className="min-w-40 w-40">
                                                Shipping detail
                                            </th>

                                            <th className="min-w-16 w-16 pl-2">
                                                Actions

                                            </th>
                                        </thead>
                                        <tbody>
                                            <div className="my-table">
                                                {teamsmember.map((item) => (
                                                    <tr
                                                        className={`${bguser} md:flex w-full grid  items-start relative pb-4 Content justify-between`}
                                                    >
                                                        <td
                                                            className="md:min-w-32 md:w-32 cursor-pointer md:mt-0 mt-2 pl-p-15 first-row"

                                                        >
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Order Date :
                                                            </p>
                                                            <div className="flex items-start">

                                                                <div>
                                                                    <Checkbox
                                                                        checkColor="text-scogoorange mr-2"
                                                                    />
                                                                </div>
                                                                <div className="md:block flex items-center">
                                                                    <p className="td_p_dark  md:mr-0 mr-2">
                                                                        {item.orderDate}
                                                                    </p>
                                                                    <p className="td_p_light  md:mr-0 mr-2">
                                                                        {item.orderDayTo}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="md:min-w-28 md:w-28 md:pl-0 pl-p-15 text-left text-scogo15 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2 sec-row">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Ticket ID :
                                                            </p>
                                                            <div className="md:block flex items-center">

                                                                <p className="td_p_dark md:mr-0 mr-2">
                                                                    {item.ticketID}
                                                                </p>
                                                                <p className="td_p_light md:mt-2 mt-0 md:mr-0 mr-2">
                                                                    Ext. Ticket
                                                                </p>
                                                                <p className="td_p_dark">
                                                                    {item.extTicket}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className="min-w-40 md:w-40 md:pl-0 pl-p-15 pr-0 md:pr-6 md:mt-0 mt-2 w-full third-row">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Customer detail :
                                                            </p>
                                                            <div className="md:block flex items-center">
                                                                <p className="td_p_light md:mr-0 mr-2">
                                                                    Customer
                                                                </p>
                                                                <p className="td_p_dark md:mr-0 mr-2">
                                                                    {item.customer}
                                                                </p>
                                                                <p className="td_p_dark md:mr-0 mr-2">
                                                                    {item.customerNetwork}
                                                                </p>
                                                            </div>
                                                            <div className="md:block flex items-center">
                                                                <p className="td_p_light mt-2  md:mr-0 mr-2">
                                                                    Project Name
                                                                </p>
                                                                <ProName
                                                                    children={item.projectName > 11 ? item.projectName.slice(0, 11) : item.projectName.slice(0, 11) + "..."}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="md:min-w-48 md:w-48 md:pl-0 pl-p-15  text-left text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2 four-row">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Site Detail :
                                                            </p>
                                                            <div className="">
                                                                <div className="md:block flex items-center">
                                                                    <p className="td_p_light md:mr-0 mr-2">
                                                                        Site ID: <span className="text-scogo15">{item.SiteID}
                                                                            <span class="material-icons text-scogoprimary text-font14 ml-1">
                                                                                content_copy
                                                                            </span>
                                                                        </span>
                                                                    </p>
                                                                    <p className="text-scogoorange text-font12 font-medium md:mr-0 mr-2">
                                                                        <u>{item.lastVisit}
                                                                        </u>
                                                                    </p>
                                                                </div>
                                                                <p className="td_p_dark">
                                                                    {item.loaction}
                                                                </p>
                                                                <div className="md:block flex items-center">
                                                                    <p className="td_p_light md:mr-0 mr-2">
                                                                        {item.memberName}
                                                                    </p>
                                                                    <p className="td_p_light md:mr-0 mr-2">
                                                                        {item.memberMob}
                                                                    </p>
                                                                </div>
                                                                <p className="td_p_light">
                                                                    {item.memberAddress}
                                                                </p>
                                                            </div>
                                                            {/* <div className="absolute lg:hidden block right-0 top-0 cursor-pointer" onClick={() => sidbarOpen(item.id)}>
                         
                              <p className="bg-scogoorange text-white rounded-md px-2 text-font12"> Info</p>
                            </div> */}
                                                        </td>
                                                        <td className="md:min-w-56 md:w-56 pl-p-15 text-left   text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Title and description :
                                                            </p>
                                                            <div className="">
                                                                <p className="td_p_dark">
                                                                    {item.Title}
                                                                </p>
                                                                <p className="td_p_light">
                                                                    {item.Describe}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className="md:min-w-32 md:pl-0 pl-p-15 md:w-32 text-left items-center text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Price :
                                                            </p>
                                                            <div className="">
                                                                <div className="md:block flex flex-wrap items-center">
                                                                    <p className="text-scogogray text-font13 font-medium md:mr-0 mr-2">
                                                                        Customer billing
                                                                    </p>
                                                                    <p className="td_p_dark flex items-center">
                                                                        <span className="text-scogoprimary">₹</span> {item.customerBill}
                                                                        {!item.customerPay == "" ?
                                                                            <Label
                                                                                LabelText="text-white 2xl:text-font12 text-font10 font-normal"
                                                                                children={item.customerPay}
                                                                                Labelcss="bg-scogobgsky ml-2"
                                                                            />
                                                                            :
                                                                            ''
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="md:block flex flex-wrap items-center mt-2">
                                                                    <p className="text-scogogray text-font13 font-medium   md:mr-0 mr-2">
                                                                        Vendor billing
                                                                    </p>
                                                                    <p className="td_p_dark flex items-center">
                                                                        <span className="text-scogoprimary">₹</span> {item.vendorBill}
                                                                        {!item.vendorPay == "" ?
                                                                            <Label
                                                                                LabelText="text-white 2xl:text-font12 text-font10 font-normal"
                                                                                children={item.vendorPay}
                                                                                Labelcss="bg-scogogoing ml-2"
                                                                            />
                                                                            :
                                                                            ''
                                                                        }
                                                                    </p>
                                                                </div>
                                                                {item.vendorPay === "" && item.customerPay === "" ?
                                                                    <Buttons
                                                                        children="Add Price"
                                                                        buttonClass="bg-white mt-4 border border-scogoorange px-4 2xl:h-8 h-6 leading-6 cursor-pointer text-scogoorange 2xl:text-font12 text-font10 font-normal rounded-5px"
                                                                        onClick={setOpenAddPrice}
                                                                    />
                                                                    :
                                                                    ''
                                                                }


                                                            </div>

                                                        </td>
                                                        <td className="md:min-w-32 md:w-32 md:pl-0 pl-p-15 text-left text-scogogray 2xl:text-font13 text-font11 font-normal ">
                                                            <p className="td_p_light_primary mt-2  md:mr-0 mr-2 md:hidden block">
                                                                Usecase & Assets :
                                                            </p>
                                                            <div className="">
                                                                <p className="td_p_dark">
                                                                    {item.Usecase}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className="md:min-w-32 md:w-32 md:pl-0 pl-p-15 text-left  items-center text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Agent details :
                                                            </p>
                                                            <div className="md:block flex flex-wrap items-center">
                                                                <p className="td_p_dark md:mr-0 mr-2">
                                                                    {item.agent}
                                                                </p>
                                                                <p className="td_p_light">
                                                                    {item.agentNo}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className="md:min-w-32 md:w-32 md:pl-0 pl-p-15 text-left  items-center  text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Partner :
                                                            </p>
                                                            <div className="">
                                                                {item.status == "Reassign" ?
                                                                    <>
                                                                        <div className="md:block flex-wrap flex items-center">
                                                                            <p className="text-scogogray text-font12 font-normal md:mr-0 mr-2">
                                                                                FE Details
                                                                            </p>
                                                                            <p className="td_p_dark md:mr-0 mr-2">
                                                                                {item.FEpartner}
                                                                            </p>
                                                                            <p className="td_p_light">
                                                                                {item.FEpatnerNo}
                                                                            </p>
                                                                        </div>

                                                                        <div className="md:block flex-wrap mt-2 flex items-center">
                                                                            <p className="td_p_light  md:mr-0 mr-2">
                                                                                SP Details
                                                                            </p>
                                                                            <p className="td_p_dark md:mr-0 mr-2">
                                                                                {item.SPpartner}
                                                                            </p>
                                                                            <p className="td_p_light">
                                                                                {item.SPpatnerNo}
                                                                            </p>
                                                                        </div>
                                                                        <Label
                                                                            LabelText="text-scogoclosed 2xl:text-font12 text-font10 font-normal"
                                                                            children={item.status}
                                                                            Labelcss="bg-white mt-2 border border-scogoclosed"
                                                                        />

                                                                    </>
                                                                    :
                                                                    <Label
                                                                        LabelText="text-scogoorange 2xl:text-font12 text-font10 font-normal"
                                                                        children={item.status}
                                                                        Labelcss="bg-white border border-scogoorange"
                                                                    />
                                                                }
                                                            </div>
                                                        </td>
                                                        <td className="md:min-w-32 md:w-32 md:pl-0 pl-p-15 text-left  items-center  text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Current status :
                                                            </p>
                                                            <div className="md:block flex-wrap flex items-center">
                                                                <p className={`${item.currentstatus == "OnHold : Issues" ? 'text-statusprocess' : item.currentstatus == "Created" ? 'text-scogoprimary' : item.currentstatus == "OnGoing" ? 'text-scogobgsky' : item.currentstatus == "Site Complete" ? 'text-scogo2e' : 'text-scogolightGreen'} text-font13 font-medium`}>
                                                                    {item.currentstatus}
                                                                </p>
                                                                <Label
                                                                    LabelText="text-scogoorange 2xl:text-font12 text-font10 font-normal"
                                                                    children={item.currentlable}
                                                                    Labelcss="bg-white md:mt-2 mt-0 md:ml-0 ml-2 border border-scogoorange"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="md:min-w-80 md:w-80 md:pl-0 pl-p-15 text-left pr-4 items-center  text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">

                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Progress :
                                                            </p>
                                                            <div>
                                                                <p className="td_p_dark"> <span className="td_p_light"> Created: </span>  {item.Created}</p>
                                                            </div>
                                                            <div className="flex mt-1 justify-between items-end ">
                                                                <div>
                                                                    <p className="text-font11 text-scogo15 text-normal">{item.startDate} <br /> {item.startTime}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="td_p_light mx-auto">{item.daysLegt} days</p>
                                                                </div>
                                                                <div className="">
                                                                    <p className="text-font11 text-scogo15 text-normal text-right">{item.endDate} <br /> {item.endTime}</p>
                                                                </div>
                                                            </div>
                                                            <div className="bg-scogoeee w-full relative h-2.5 rounded-md mt-1">
                                                                <div style={{ width: item.statusComplete }} className={`${item.statusComplete <= "20%" ? 'bg-scogoclosed' : 'bg-scogoorange'} absolute top-0 h-2.5 z-0  rounded-md`}></div>
                                                            </div>
                                                            {item.statusComplete == "100%" ?

                                                                <div>
                                                                    <p className="text-scogoclosed text-font11 mt-0.5 text-center font-normal">Overdue</p>
                                                                </div>

                                                                : ''}


                                                            <div className="mt-1 flex items-center">

                                                                <div className="mr-2">
                                                                    {item.statusComplete == "100%" ?
                                                                        ''
                                                                        :
                                                                        <div >
                                                                            {item.statusBar === "pause" ?
                                                                                <Buttons
                                                                                    buttonIcon="./img/pause.png"
                                                                                />
                                                                                :
                                                                                <Buttons
                                                                                    buttonIcon="./img/chekgreen.png"
                                                                                />
                                                                            }
                                                                        </div>
                                                                    }
                                                                </div>
                                                                {item.statusComplete == "100%" ?
                                                                    ''
                                                                    :
                                                                    <div>
                                                                        <p className="td_p_dark"> <span className="td_p_light"> Remark:  </span>  {item.remark}</p>
                                                                    </div>
                                                                }
                                                            </div>

                                                            {item.statusComplete == "100%" ?
                                                                ''
                                                                :
                                                                <div className="flex">
                                                                    <p className="td_p_dark"> <span className="td_p_light"> SLA: </span>  {item.slaTime} </p>
                                                                    <p className="td_p_dark ml-2"> <span className="td_p_light"> Completed In: </span> {item.Completed}</p>
                                                                </div>
                                                            }
                                                        </td>
                                                        <td className="md:min-w-32 md:w-32 md:pl-0 pl-p-15 text-left  items-center  text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Assets :
                                                            </p>
                                                            <div className="md:block flex-wrap flex items-center">
                                                                {!item.Assets == "" ?
                                                                    <p className="2xl:text-font13 text-font11 text-scogo15 font-normal">{item.Assets}</p>
                                                                    :
                                                                    <p className="2xl:text-font13 text-font11 text-scogo99 font-normal">No Assets</p>
                                                                }
                                                                <Label
                                                                    LabelText="text-scogoorange 2xl:text-font12 text-font10 font-normal"
                                                                    children="Add Assets"
                                                                    Labelcss="bg-white border border-scogoorange md:mt-2 mt-0 md:ml-0 ml-2 cursor-pointer"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="md:min-w-48 md:w-48 md:pl-0 pl-p-15 text-left  items-center  text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Remarks :
                                                            </p>
                                                            <p className="2xl:text-font13 text-font11 text-scogo15 font-normal">
                                                                Lorem ipsum dolor sit amet ae conse tetur adipiscing elit.
                                                            </p>
                                                            <div className="md:block flex flex-wrap items-center">
                                                                <p className="2xl:text-font12 text-font10 text-scogogray font-normal md:mr-0 mr-2">
                                                                    By Adam Clark on 22/06/2021
                                                                </p>
                                                                <p className="text-scogoorange 2xl:text-font12 text-font10 font-medium cursor-pointer">
                                                                    <u>
                                                                        View all remarks
                                                                    </u>
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <InputFiels
                                                                    type="text"
                                                                    inputClass="writehere  focus:ring-0  placeholder-scogo99"
                                                                    placeholder="Write remarks here..."
                                                                    inputDiv="pr-5 mt-1"
                                                                    value=""
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </td>

                                                        <td className="md:min-w-40 md:w-40 md:pl-0 pl-p-15 text-left  items-center  text-scogogray 2xl:text-font13 text-font11 font-normal md:mt-0 mt-2">
                                                            <p className="td_p_light_primary md:mt-2 mt-0 md:mr-0 mr-2 md:hidden block">
                                                                Shipping detail :
                                                            </p>

                                                            <div className="md:block flex-wrap flex items-center">
                                                                <div className="flex md:mr-0 mr-2 md:mb-0 mb-2">
                                                                    <div>
                                                                        <img src="./img/deliver.png" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="2xl:text-font13 text-font11 text-scogo15 font-normal ml-2">In Transit</p>
                                                                    </div>
                                                                </div>
                                                                <div className="md:block flex md:mr-0 mr-2 flex-wrap items-center md:mb-0 mb-2">
                                                                    <p className="2xl:text-font13 text-font11 font-normal md:mr-0 mr-2"> <span className="text-scogogray"> AWB No.: </span>  <span className="text-scogoprimary"> 321456987123 </span> </p>
                                                                    <p className="text-scogoorange 2xl:text-font12 text-font10 font-medium cursor-pointer md:mr-0 mr-2">
                                                                        <u>
                                                                            View all remarks
                                                                        </u>
                                                                    </p>
                                                                    <Label
                                                                        LabelText="text-scogoorange 2xl:text-font12 text-font10 font-normal"
                                                                        children="Add Assets"
                                                                        Labelcss="bg-white border border-scogoorange md:mt-2 mt-0 cursor-pointer md:mr-0 mr-2"
                                                                    />
                                                                </div>
                                                                <div className="md:mt-2 mt-0 md:mb-0 mb-2">
                                                                    <img src="./img/notd.png" />
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="md:min-w-16 md:w-16 text-center text-scogogray 2xl:text-font13 text-font11 font-normal md:relative absolute right-0 md:mt-0 mt-2">
                                                            <span class="material-icons text-scogoprimary text-left">
                                                                more_vert
                                                            </span>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {addPrice && (
                <div>
                    <AddPrice addPrice={addPrice} closePriceAdd={closePriceAdd} />
                </div>
            )}

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-hidden z-30" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-16 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-full flex flex-col pt-16 py-4
                                    
                                     bg-scogof8 shadow-xl overflow-y-scroll ">
                                        <div className="mt-6 relative flex-1 py-4 px-4">
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="h-full p-2" aria-hidden="true">
                                                    <div className="bg-white border border-gray-200 shadow-sm">
                                                        <p className=" border-b border-gray-200 td_p_light_primary p-1">
                                                            Title and description
                                                        </p>
                                                        <div className="p-1">
                                                            <p className="text-font13 text-scogo15 font-normal">{sidebarData?.Title}</p>
                                                            <p className="text-font12 text-scogogray font-normal">
                                                                {sidebarData?.Describe}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Price
                                                        </p>
                                                        <div className="p-1">
                                                            <p className="text-scogogray text-font13 font-medium">
                                                                Customer billing
                                                            </p>
                                                            <p className="td_p_dark flex">
                                                                <span className="text-scogoprimary">₹</span> {sidebarData?.customerBill}
                                                                {!sidebarData?.customerPay == "" ?
                                                                    <Label
                                                                        LabelText="text-white text-font12 font-normal"
                                                                        children={sidebarData?.customerPay}
                                                                        Labelcss="bg-scogobgsky ml-2"
                                                                    />
                                                                    :
                                                                    ''
                                                                }
                                                            </p>
                                                            <p className="text-scogogray text-font13 font-medium mt-2">
                                                                Vendor billing

                                                            </p>
                                                            <p className="td_p_dark flex">
                                                                <span className="text-scogoprimary">₹</span> {sidebarData?.vendorBill}
                                                                {!sidebarData?.vendorPay == "" ?
                                                                    <Label
                                                                        LabelText="text-white text-font12 font-normal"
                                                                        children={sidebarData?.vendorPay}
                                                                        Labelcss="bg-scogogoing ml-2"
                                                                    />
                                                                    :
                                                                    ''
                                                                }
                                                            </p>
                                                            {sidebarData?.vendorPay === "" && sidebarData?.customerPay === "" ?
                                                                <Label
                                                                    LabelText="text-scogoorange text-font12 font-normal"
                                                                    children="Add Price"
                                                                    Labelcss="bg-white mt-2 border border-scogoorange cursor-pointer"
                                                                />
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border border-gray-200  shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Usecase & Assets
                                                        </p>
                                                        <div className="p-1">
                                                            <p className="td_p_dark">
                                                                {sidebarData?.Usecase}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Agent details
                                                        </p>
                                                        <div className="p-1">
                                                            <p className="td_p_dark">
                                                                {sidebarData?.agent}
                                                            </p>
                                                            <p className="td_p_light">
                                                                {sidebarData?.agentNo}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Partner
                                                        </p>
                                                        <div className="p-1">
                                                            {sidebarData?.status == "Reassign" ?

                                                                <>
                                                                    <p className="text-scogogray text-font12 font-normal">
                                                                        FE Details
                                                                    </p>
                                                                    <p className="td_p_dark">
                                                                        {sidebarData?.FEpartner}
                                                                    </p>
                                                                    <p className="td_p_light">
                                                                        {sidebarData?.FEpatnerNo}
                                                                    </p>

                                                                    <p className="td_p_light mt-2">
                                                                        SP Details
                                                                    </p>
                                                                    <p className="td_p_dark">
                                                                        {sidebarData?.SPpartner}
                                                                    </p>
                                                                    <p className="td_p_light">
                                                                        {sidebarData?.SPpatnerNo}
                                                                    </p>
                                                                    <Label
                                                                        LabelText="text-scogoclosed text-font12 font-normal"
                                                                        children={sidebarData?.status}
                                                                        Labelcss="bg-white mt-2 border border-scogoclosed"
                                                                    />
                                                                </>
                                                                :
                                                                <Label
                                                                    LabelText="text-scogoorange text-font12 font-normal"
                                                                    children={sidebarData?.status}
                                                                    Labelcss="bg-white border border-scogoorange"
                                                                />

                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Current status
                                                        </p>
                                                        <div className="p-1">
                                                            <p className={`${sidebarData?.currentstatus == "OnHold : Issues" ? 'text-statusprocess' : sidebarData?.currentstatus == "Created" ? 'text-scogoprimary' : sidebarData?.currentstatus == "OnGoing" ? 'text-scogobgsky' : sidebarData?.currentstatus == "Site Complete" ? 'text-scogo2e' : 'text-scogolightGreen'} text-font13 font-medium`}>
                                                                {sidebarData?.currentstatus}
                                                            </p>
                                                            <Label
                                                                LabelText="text-scogoorange text-font12 font-normal"
                                                                children={sidebarData?.currentlable}
                                                                Labelcss="bg-white mt-2 border border-scogoorange"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Progress
                                                        </p>
                                                        <div className="p-1">
                                                            <div>
                                                                <p className="td_p_dark"> <span className="td_p_light"> Created: </span>  {sidebarData?.Created}</p>
                                                            </div>
                                                            <div className="flex mt-1 justify-between items-end ">
                                                                <div>
                                                                    <p className="text-font11 text-scogo15 text-normal">{sidebarData?.startDate} <br /> {sidebarData?.startTime}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="td_p_light mx-auto">{sidebarData?.daysLegt} days</p>
                                                                </div>
                                                                <div className="">
                                                                    <p className="text-font11 text-scogo15 text-normal text-right">{sidebarData?.endDate} <br /> {sidebarData?.endTime}</p>
                                                                </div>
                                                            </div>
                                                            <div className="bg-scogoeee w-full relative h-2.5 rounded-md mt-1">
                                                                <div style={{ width: sidebarData?.statusComplete }} className={`${sidebarData?.statusComplete <= "20%" ? 'bg-scogoclosed' : 'bg-scogoorange'} absolute top-0 h-2.5  rounded-md`}></div>
                                                            </div>
                                                            {sidebarData?.statusComplete == "100%" ?

                                                                <div>
                                                                    <p className="text-scogoclosed text-font11 mt-0.5 text-center font-normal">Overdue</p>
                                                                </div>

                                                                : ''}


                                                            <div className="mt-1 flex">

                                                                <div className="mr-2">
                                                                    {sidebarData?.statusComplete == "100%" ?
                                                                        ''
                                                                        :
                                                                        <div >
                                                                            {sidebarData?.statusBar === "pause" ?
                                                                                <Buttons
                                                                                    buttonIcon="./img/pause.png"
                                                                                />
                                                                                :
                                                                                <Buttons
                                                                                    buttonIcon="./img/chekgreen.png"
                                                                                />
                                                                            }
                                                                        </div>
                                                                    }
                                                                </div>
                                                                {sidebarData?.statusComplete == "100%" ?
                                                                    ''
                                                                    :
                                                                    <div>
                                                                        <p className="td_p_dark"> <span className="td_p_light"> Remark:  </span>  {sidebarData?.remark}</p>
                                                                    </div>
                                                                }
                                                            </div>

                                                            {sidebarData?.statusComplete == "100%" ?
                                                                ''
                                                                :
                                                                <div className="flex">
                                                                    <p className="td_p_dark"> <span className="td_p_light"> SLA: </span>  {sidebarData?.slaTime} </p>
                                                                    <p className="td_p_dark ml-2"> <span className="td_p_light"> Completed In: </span> {sidebarData?.Completed}</p>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Assets
                                                        </p>
                                                        <div className="p-1">
                                                            {!sidebarData?.Assets == "" ?
                                                                <p className="text-font13 text-scogo15 font-normal">{sidebarData?.Assets}</p>
                                                                :
                                                                <p className="text-font13 text-scogo99 font-normal">No Assets</p>
                                                            }
                                                            <Label
                                                                LabelText="text-scogoorange text-font12 font-normal"
                                                                children="Add Assets"
                                                                Labelcss="bg-white border border-scogoorange mt-2 cursor-pointer"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Remarks
                                                        </p>
                                                        <div className="p-1">
                                                            <p className="text-font13 text-scogo15 font-normal">
                                                                Lorem ipsum dolor sit amet ae conse tetur adipiscing elit.
                                                            </p>
                                                            <p className="text-font12 text-scogogray font-normal">
                                                                By Adam Clark on 22/06/2021
                                                            </p>
                                                            <p className="text-scogoorange text-font12 font-medium cursor-pointer">
                                                                <u>
                                                                    View all remarks
                                                                </u>
                                                            </p>
                                                            <div>
                                                                <InputFiels
                                                                    type="text"
                                                                    inputClass="writehere  focus:ring-0  placeholder-scogo99"
                                                                    placeholder="Write remarks here..."
                                                                    inputDiv="pr-5 mt-1"
                                                                    value=""
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border border-gray-200 shadow-sm mt-2">
                                                        <p className="border-b border-gray-200 td_p_light_primary p-1">
                                                            Shipping detail
                                                        </p>
                                                        <div className="p-1">
                                                            <div className="flex">
                                                                <div>
                                                                    <img src="./img/deliver.png" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-font13 text-scogo15 font-normal ml-2">In Transit</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-font13 font-normal"> <span className="text-scogogray"> AWB No.: </span>  <span className="text-scogoprimary"> 321456987123 </span> </p>
                                                                <p className="text-scogoorange text-font12 font-medium cursor-pointer">
                                                                    <u>
                                                                        View all remarks
                                                                    </u>
                                                                </p>
                                                                <Label
                                                                    LabelText="text-scogoorange text-font12 font-normal"
                                                                    children="Add Assets"
                                                                    Labelcss="bg-white border border-scogoorange mt-2 cursor-pointer"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <img src="./img/notd.png" />
                                                            </div>
                                                            <div className="absolute top-0 right-6 cursor-pointer">
                                                                <img src="./img/menu.svg" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default HelpDesk;
