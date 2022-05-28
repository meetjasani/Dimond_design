import React, { useState } from "react";
import Bedges from "../../common/Badges";
import Tabs from "../../common/Tabs";

const cardDta = [
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "New",
  },
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "Ongoing",
  },
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "Closed",
  },
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "Ongoing",
  },
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "Ongoing",
  },
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "Closed",
  },
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "Closed",
  },
  {
    name: "Hard drive and RAM issue",
    reqName: "Adam Clark",
    reqDep: "IT",
    reqCity: "Mumbai",
    reqState: "Maharastra",
    reqId: "XYZ123",
    reqStatus: "Closed",
  },
];

function Tickets(props) {
  const [data, setData] = useState(cardDta);
  const [activeTab, setActiveTab] = useState("All");

  const tabsList = ["All", "New", "Ongoing", "Closed"];

  const filterData = (state) => {
    setActiveTab(state);
    if (state === "All") {
      setData(cardDta);
    } else {
      setData(cardDta.filter((x) => x.reqStatus === state));
    }
  };

  const openTickets = () => {
    props.closeTickets();
    props.setShowRaiseTicket(false);
  };

  return (
    <>
      <div className="">
        <Tabs
          ItemsClassName={
            " sticky top-64 z-30 bg-white pb-3 pl-3 border-b border-scogoddd"
          }
          ItemClassName={" flex overflow-x-auto pb-1 mt-3 cursor-pointer"}
          itemList={tabsList}
        >
          {tabsList.map((tab, i) => {
            return (
              <p
                className={activeTab === tab ? "tab-card-active" : "tab-card"}
                onClick={() => filterData(tab)}
              >
                {`${tab}`}
              </p>
            );
          })}
        </Tabs>

        <div className="h-screen overflow-y-auto pb-360">
          {data.map((item) => (
            <div
              className="border-b border-scogoddd cursor-pointer"
              onClick={openTickets}
            >
              <div className="px-6 py-2">
                <div className=" flex">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img src="./img/play.svg" />
                    </div>
                    <div>
                      <p className="text-scogo15 font-medium 2xl:text-font15 text-font12">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-auto">
                    <Bedges className="bg-scogoorange h-4 w-4 leading-4 rounded-full mr-2">
                      2
                    </Bedges>
                    <div className="cursor-pointer">
                      <img src="./img/menu.svg" />
                    </div>
                  </div>
                </div>

                <div className=" flex mt-2">
                  <div>
                    <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                      Requested by{" "}
                      <span className="text-scogoorange font-medium">
                        {item.reqName}
                      </span>
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="cursor-pointer transform -rotate-90	">
                      <img src="./img/call.svg" alt="" className="2xl:w-4 w-3"/>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <div>
                    <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                      Team :{" "}
                      <span className="text-scogo15 font-medium">
                        {item.reqDep}
                      </span>
                    </p>
                  </div>
                </div>

                <div className=" md:flex mt-2">
                  <div>
                    <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                      Location :{" "}
                      <span className="text-scogo15 font-medium">
                        {item.reqCity}, {item.reqState}
                      </span>
                    </p>
                  </div>
                  <div className="ml-auto  md:mt-0 mt-2">
                    <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                      Site ID :{" "}
                      <span className="text-scogo15 font-medium">
                        {item.reqId}
                      </span>
                    </p>
                  </div>
                </div>

                <div className=" flex mt-2">
                  <div>
                    <p
                      className={
                        item.reqStatus === "New"
                          ? "bg-scogobgsky status-tab 2xl:text-font13 text-font11"
                          : item.reqStatus === "Outgoing"
                          ? "bg-scogogoing status-tab "
                          : item.reqStatus === "Closed"
                          ? "bg-scogoclosed status-tab 2xl:text-font13 text-font11"
                          : "status-tab bg-scogogoing 2xl:text-font13 text-font11"
                      }
                    >
                      {item.reqStatus}
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Tickets;
