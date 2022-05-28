import React, { useEffect, useState } from "react";
import Buttons from "../../common/Buttons";
import { Fragment } from "react";
import InputFiels from "../../common/InputFiels";
import TeamList from "./TeamList";
import { Menu, Transition } from "@headlessui/react";
import AddTeam from "./AddTeam";
import Bedges from "../../common/Badges";
import Tabs from "../../common/Tabs";
import Checkbox from "../../common/Checkbox";
import { ReactSortable } from "react-sortablejs";
import Menus from "../../common/Menus";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

const list = [
  {
    label: "Add Site",
    icon: (
      <React.Fragment>
        <div className="mr-2">
          <span class="material-icons text-scogogray">domain</span>
        </div>
      </React.Fragment>
    ),
  },
];

const profile = ["Your Profile", "Settings", "Sign out"];

const teamsmember = [
  {
    teamAvtar: "./img/avtar.png",
    memberName: "Adam Clark",
    memberEmail: "adam123@scogo.in",
  },
  {
    teamAvtar: "./img/avtar1.png",
    memberName: "James White",
    memberEmail: "jameswhite@scogo.in",
  },

  {
    teamAvtar: "./img/avtar2.png",
    memberName: "Michael Johnson",
    memberEmail: "michaelj@scogo.in",
  },

  {
    teamAvtar: "./img/avtar.png",
    memberName: "Adam Clark",
    memberEmail: "adam123@scogo.in",
  },

  {
    teamAvtar: "./img/avtar1.png",
    memberName: "James White",
    memberEmail: "jameswhite@scogo.in",
  },

  {
    teamAvtar: "./img/avtar2.png",
    memberName: "Michael Johnson",
    memberEmail: "michaelj@scogo.in",
  },

  {
    teamAvtar: "./img/avtar.png",
    memberName: "Adam Clark",
    memberEmail: "adam123@scogo.in",
  },

  {
    teamAvtar: "./img/avtar1.png",
    memberName: "James White",
    memberEmail: "jameswhite@scogo.in",
  },

  {
    teamAvtar: "./img/avtar2.png",
    memberName: "Michael Johnson",
    memberEmail: "michaelj@scogo.in",
  },

  {
    teamAvtar: "./img/avtar.png",
    memberName: "Adam Clark",
    memberEmail: "adam123@scogo.in",
  },

  {
    teamAvtar: "./img/avtar1.png",
    memberName: "James White",
    memberEmail: "jameswhite@scogo.in",
  },

  {
    teamAvtar: "./img/avtar2.png",
    memberName: "Michael Johnson",
    memberEmail: "michaelj@scogo.in",
  },

  {
    teamAvtar: "./img/avtar.png",
    memberName: "Adam Clark",
    memberEmail: "adam123@scogo.in",
  },

  {
    teamAvtar: "./img/avtar1.png",
    memberName: "James White",
    memberEmail: "jameswhite@scogo.in",
  },

  {
    teamAvtar: "./img/avtar2.png",
    memberName: "Michael Johnson",
    memberEmail: "michaelj@scogo.in",
  },
];

const userBox = [
  {
    department: "1",
    icon: "groups",
    reqStatus: "My Customer",
  },
  {
    department: "2",
    icon: "groups",
    reqStatus: "My Team",
  },
  {
    department: "3",
    icon: "groups",
    reqStatus: "My Help Desk",
  },
  {
    department: "4",
    icon: "groups",
    reqStatus: "My Customer",
  },

  {
    department: "5",
    icon: "groups",
    reqStatus: "Closed",
  },
  {
    department: "6",
    icon: "groups",
    reqStatus: "My Customer",
  },
  {
    department: "7",
    icon: "groups",
    reqStatus: "My Team",
  },
  {
    department: "8",
    icon: "groups",
    reqStatus: "My Help Desk",
  },
];

const TeamWork = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [isUserOpen, setIsUserOpen] = React.useState(false);
  const [addTeam, setAddTeam] = React.useState(false);
  const [mainDiv, setMainDiv] = React.useState("");
  const [bguser, setBguser] = React.useState("");
  const [cardSize, setCardSize] = React.useState("lg:w-1/4");

  const [search, Setsearch] = useState([
    {
      searchUser: "",
    },
  ]);

  const [data, setData] = useState(userBox);
  const [activeTab, setActiveTab] = useState("All");

  let mainDivClassname = "";
  let allItemsClassname = "flex flex-wrap pb-3 pl-3";

  const filterData = (state) => {
    setActiveTab(state);
    if (state === "All") {
      setData(userBox);
      setCardSize("lg:w-1/4")
    } else {
      setData(userBox.filter((x) => x.reqStatus === state));
      setCardSize("lg:w-1/4")
    }
  };

  const handleChange = () => {};

  const openside = () => {
    if (isUserOpen) {
      setIsUserOpen(false);
      setMainDiv("")
      setBguser("")
      setCardSize("xl:w-1/4 lg:w-1/3 md:w-1/2")
    } else {
      setIsUserOpen(true);
      setAddTeam(false);
      setMainDiv("lg:w-2/3 hidden")
      setBguser("bg-scogof5")
      setCardSize("xl:w-1/3 md:w-1/2")
    }
    // userDiv = "md:w-1/3"
  };

  const onClose = () => {
    setIsUserOpen(false);
    setMainDiv("")
      setBguser("")
  };

  const closeAddTeam = () => {
    setAddTeam(false);
    setMainDiv("")
      setBguser("")
  };

  const addNewBtn = () => {
    if (addTeam) {
      setAddTeam(false);
      setMainDiv("")
      setBguser("")
      setCardSize("xl:w-1/4 lg:w-1/3 md:w-1/2")
    } else {
      setAddTeam(true);
      setIsUserOpen(false);
      setMainDiv("lg:w-2/3 hidden")
      setBguser("bg-scogof5")
      setCardSize("xl:w-1/3 md:w-1/2")
    }
  };

  const findCount = (name) => {
    let teamCardData = [];
    userBox.map((data) => {
      if (data.reqStatus === name) {
        teamCardData.push(data);
      }
    });
    return teamCardData.length;
  };

  useEffect(() => {
    onClose()
  }, [])

  const tabsList = [
    `All`,
    `My Customer`,
    `My Team`,
    `My Help Desk`,
  ];

  const TeamItemsClassName =
    "origin-top-right absolute px-3 py-2  lg:top-0 top-4 mt-2 w-auto z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
  const TeamItemClassName =
    "bg-tagbg block mt-1 scogoprimary text-font11 px-p-6 py-p-3 rounded-3px";
  const TeamItemLables = ["scogo mumbai", "scogo mumbai"];
  const TeamMenuButtonIcon = () => {
    return (
      <span className="text-font12 font-normal text-scogoorange cursor-pointer">
        {" "}
        + 2
      </span>
    );
  };
  const MainMenuItemsClassName =
    "origin-top-right absolute  right-0 lg:top-0 top-4 mt-2 w-48 z-20 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
  const MainMenuItemClassName = "block px-4 py-2 ";
  const MainMenuItemLables = ["Add Site", "Add Team", "Delete"];
  const MainMenuItemIcons = ["domain", "groups", "delete"];

  const MainMenuButtonIcon = () => {
    return (
      <span className="absolute lg:top-6 top-40 right-10 cursor-pointer">
        <img src="./img/menu.svg" />
      </span>
    );
  };
  return (
    <div className="lg:flex relative">
      <div className={`${mainDiv}  h-full w-full lg:block pb-5 md:pt-0 pt-16`}>
        {/* <div className="bg-scogof8 h-full md:w-2/3 w-full"> */}
        <div className="sticky top-16 w-full 2xl:px-8 xl:px-4 px-2 lg:pt-8 pt-2 lg:pb-4 pb-0 bg-scogof8 z-20">
          <div className="lg:flex max-w-full">
            <div>
              <h1 className="text-scogo21 2xl:text-font24 text-font16 font-medium font-rubik ">
                Teams
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
                onClick={addNewBtn}
              />
            </div>
          </div>

          <div className="flex border-b-2 border-scogoddd">
            <div className="lg:w-auto w-full">
              <ul className="flex-wrap flex list-none lg:mt-4 mt-2" role="tablist">
                <li className="flex-auto text-center ">
                  <a
                    className={
                      "2xl:text-font16 text-font12 font-medium lg:px-8 px-2 py-3  leading-normal inline-flex	" +
                      (openTab === 1
                        ? "scogoprimary border-b-2 border-scogoprimary"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    Users
                  </a>
                </li>
                <li className="flex-auto text-center relative">
                  <a
                    className={
                      "2xl:text-font16 text-font12 font-medium  lg:px-8 px-2 py-3  leading-medium inline-flex	" +
                      (openTab === 2
                        ? "scogoprimary border-b-2 border-scogoprimary"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Teams
                  </a>
                </li>
                <li className="flex-auto text-center relative">
                  <a
                    className={
                      "2xl:text-font16 text-font12 font-medium lg:px-8 px-2 py-3  leading-medium inline-flex	" +
                      (openTab === 3
                        ? "text-scogoprimary border-b-2 border-scogoprimary"
                        : "text-scogogray ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    Vendors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full z-0 2xl:px-8 xl:px-4 px-2 h-screen mb:pb-230 lg:pb-200 pb-230 overflow-y-auto md:pt-16 pt-2">
          <div className="flex-auto ">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <table className="bg-white border shadow-mainBoxShadow w-full help-table">
                  <thead className="lg:flex sticky top-0  hidden p-p-15 bg-white z-10  rounded-6px table_custom_th">
                    <th className="w-2/7 text-left ">
                      Name
                    </th>
                    <th className="w-2/7 text-left ">
                      Teams
                    </th>
                    <th className="w-1/7 text-left ">
                      Admin
                    </th>
                    <th className="w-1/7 text-left ">
                      Help Desk
                    </th>
                    <th className="w-1/7 text-left ">
                      PO Approval
                    </th>
                  </thead>
                  <tbody>
                    {teamsmember.map((item) => (
                      <tr
                        className={`${bguser} lg:flex w-full grid p-p-15 items-center relative`}
                      >
                        <td
                          className="lg:w-2/7 cursor-pointer"
                          onClick={openside}
                        >
                          <div className="flex items-center">
                            <div>
                              <img
                                src={item.teamAvtar}
                                alt=""
                                className="w-min-30 h-h-30"
                              />
                            </div>
                            <div className="ml-m-9">
                              <p className="text-scogo16 2xl:text-font14 text-font12 font-normal">
                                {item.memberName}
                              </p>
                              <p className="text-scogogray 2xl:text-font12 text-font10 font-normal">
                                {item.memberEmail}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="lg:w-2/7 mt-2 lg:mt-0 relative">
                          <div className="flex items-center">
                            <p className="bg-tagbg scogoprimary 2xl:text-font11 text-font10 px-p-6 py-p-3 rounded-3px mr-1">
                              scogo pune
                            </p>
                            <p className="bg-tagbg scogoprimary 2xl:text-font11 text-font10 px-p-6 py-p-3 rounded-3px mr-1">
                              scogo mumbai
                            </p>
                            <Menus
                              displayType="flex"
                              position="ml-auto"
                              activeStatus={false}
                              menuButtonIcon={TeamMenuButtonIcon}
                              handleItemClick={() => {}}
                              itemsClassName={TeamItemsClassName}
                              itemLable={TeamItemLables}
                              itemClassName={TeamItemClassName}
                              
                            />
                          </div>
                        </td>

                        <td className="lg:w-1/7 lg:block flex items-center lg:mt-0 mt-3">
                          <p className="lg:hidden block lg:mr-0 mr-3 text-scogogray text-font13 font-normal ">
                            Admin
                          </p>
                          <Checkbox checkColor="text-scogoorange" />
                        </td>
                        <td className="lg:w-1/7  lg:block flex items-center lg:mt-0 mt-3">
                          <p className="lg:hidden block lg:mr-0 mr-3 text-scogogray text-font13 font-normal ">
                            Help Desk
                          </p>
                          <Checkbox checkColor="text-scogoorange" />
                        </td>
                        <td className="lg:w-1/7  lg:block flex items-center lg:mt-0 mt-3 ">
                          <p className="lg:hidden block lg:mr-0 mr-3 text-scogogray text-font13 font-normal ">
                            PO Approval
                          </p>
                          <Checkbox checkColor="text-scogoorange" />
                        </td>

                        <Menus
                          // className="relative"
                          displayType="flex"
                          position="mr-auto"
                          activeStatus={false}
                          menuButtonIcon={MainMenuButtonIcon}
                          handleItemClick={() => {}}
                          itemsClassName={MainMenuItemsClassName}
                          itemLable={MainMenuItemLables}
                          icons={MainMenuItemIcons}
                          itemClassName={MainMenuItemClassName}
                          textClassName={"2xl:text-font13 text-font11 text-scogoprimary"}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="p-p-15">
                  <div className="">
                  
                      <Tabs
                      ItemsClassName={"pb-3 pl-3"}
                      ItemClassName={" flex overflow-x-auto pb-2 mt-3 cursor-pointer"}
                      itemList={tabsList}
                      >
                      {tabsList.map((tab,i) => {
                      return (
                          <p
                            className={
                              activeTab === tab 
                              ? "tab-card-active"
                              : "tab-card"
                            }
                            onClick={() => filterData(tab)}
                            
                          >
                            {tab == "All" ? `${tab} (${userBox.length})` : `${tab} (${findCount(tab)})`}

                          
                          </p>
                        );
                      })}
                      </Tabs>

                    
                  </div>
                </div>
                <ReactSortable
                  list={data}
                  setList={setData}
                  className="md:flex flex-wrap"
                >
                  {data.map((item) => {
                    return (
                      <div className={`${cardSize}  p-p-15 cursor-move`}>
                        <div className="shadow-teamboxShadow  bg-white  rounded-10px">
                          <div className="flex items-center py-3 px-p-15 relative">
                            <div className="flex items-center">
                              <p className="text-scogo11 font-medium 2xl:text-font16 text-font13 ml-7 mr-2 uppercase">
                                {item.department}
                              </p>
                              <Bedges>
                                <span className="bg-scogo99 text-white rounded-full h-5 w-5 leading-5 text-center 2xl:text-font12 text-font10 font-medium">
                                  10
                                </span>
                              </Bedges>
                            </div>
                            <div className="flex items-center ml-auto">
                              <p>
                                <span class="material-icons text-scogoprimary cursor-pointer 2xl:text-font20 text-font16">
                                  person_add
                                </span>
                              </p>
                              <p>
                                <span class="material-icons text-scogoprimary cursor-pointer 2xl:text-font20 text-font16">
                                  more_vert
                                </span>
                              </p>
                            </div>
                            <Bedges className="absolute bg-scogobgsky left-0 h-6 w-8 leading-6  text-center rounded-r-5px">
                              <span class="material-icons text-white">
                                {item.icon}
                              </span>
                            </Bedges>
                          </div>
                          <div>
                            {teamsmember.slice(0, 5).map((item) => {
                              return (
                                <div className="flex items-center px-p-15 py-p-10 border-t-2 border-scogof2">
                                  <div className="flex" onClick={openside}>
                                    <div>
                                      <img
                                        src={item.teamAvtar}
                                        alt=""
                                        className="w-min-30 h-h-30"
                                      />
                                    </div>
                                    <div className="ml-m-9 cursor-pointer">
                                      <p className="text-scogo15 2xl:text-font13 text-font11 font-normal">
                                        {item.memberName}
                                      </p>
                                      <p className="2xl:text-font12 text-font10 font-normal ">
                                        <span className="text-scogo2e">
                                          {" "}
                                          Admin{" "}
                                        </span>{" "}
                                        <span className="text-scogo88">
                                          {" "}
                                          |{" "}
                                        </span>{" "}
                                        <span className="text-scogo2e">
                                          {" "}
                                          PO Approval{" "}
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-auto ">
                                    <p>
                                      <span class="material-icons text-scogoprimary cursor-pointer  2xl:text-font20 text-font16">
                                        more_vert
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="border-t-2 border-scogof2 p-p-15 cursor-pointer">
                              <p className="text-scogoprimary  2xl:text-font13 text-font11 font-medium text-center">
                                View More (20)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ReactSortable>
                {/* <div className="md:flex flex-wrap">
                  {data.map((item) => {
                    return (
                      <div className={`${cardSize} p-p-15`}>
                        <div className="shadow-teamboxShadow  bg-white  rounded-10px">
                          <div className="flex items-center py-3 px-p-15 relative">
                            <div className="flex items-center">
                              <p className="text-scogo11 font-medium text-font16 ml-7 mr-2 uppercase">
                                {item.department}
                              </p>
                              <Bedges>
                                <span className="bg-scogo99 text-white rounded-full h-5 w-5 leading-5 text-center text-font12 font-medium">
                                  10
                                </span>
                              </Bedges>
                            </div>
                            <div className="flex items-center ml-auto">
                              <p>
                                <span class="material-icons text-scogoprimary cursor-pointer">
                                  person_add
                                </span>
                              </p>
                              <p>
                                <span class="material-icons text-scogoprimary cursor-pointer">
                                  more_vert
                                </span>
                              </p>
                            </div>
                            <Bedges className="absolute bg-scogobgsky left-0 h-6 w-8 leading-6  text-center rounded-r-5px">
                              <span class="material-icons text-white">
                                {item.icon}
                              </span>
                            </Bedges>
                          </div>
                          <div>
                            {teamsmember.slice(0, 5).map((item) => {
                              return (
                                <div className="flex items-center px-p-15 py-p-10 border-t-2 border-scogof2">
                                  <div className="flex" onClick={openside}>
                                    <div>
                                      <img
                                        src={item.teamAvtar}
                                        alt=""
                                        className="w-min-30 h-h-30"
                                      />
                                    </div>
                                    <div className="ml-m-9 cursor-pointer">
                                      <p className="text-scogo15 text-font13 font-normal">
                                        {item.memberName}
                                      </p>
                                      <p className=" text-font12 font-normal ">
                                        <span className="text-scogo2e">
                                          {" "}
                                          Admin{" "}
                                        </span>{" "}
                                        <span className="text-scogo88">
                                          {" "}
                                          |{" "}
                                        </span>{" "}
                                        <span className="text-scogo2e">
                                          {" "}
                                          PO Approval{" "}
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-auto ">
                                    <p>
                                      <span class="material-icons text-scogoprimary cursor-pointer">
                                        more_vert
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="border-t-2 border-scogof2 p-p-15 cursor-pointer">
                              <p className="text-scogoprimary text-font13 font-medium text-center">
                                View More (20)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div> */}
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                3
              </div>
            </div>
          </div>
        </div>
      </div>

      {isUserOpen && (
        <>
          <div className="lg:w-1/3 w-full pt-16 lg:pb-0 pb-10 lg:relative   bg-white border-t-2 border-r-2 border-l-2 border-scogof2">
            <TeamList isUserOpen={isUserOpen} onClose={onClose} />
          </div>
        </>
      )}

      {addTeam && (
        <>
          <div className="lg:w-1/3 w-full pt-16 lg:relative  lg:pb-0 pb-10  bg-white -300 border-t-2 border-r-2 border-l-2 border-scogof2">
            <AddTeam addTeam={addTeam} closeAddTeam={closeAddTeam} />
          </div>
        </>
      )}
    </div>
  );
};

export default TeamWork;
