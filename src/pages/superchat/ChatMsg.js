import React, { Fragment, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Bedges from "../../common/Badges";
import Menus from "../../common/Menus";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const [itemLables,setItemLables] =useState();
const itemLables = ["Your Profile", "Replay", "Settings"];
// Label Condition //
let statusTicket = "Ongoing";
let itemsClassName =
  "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
let itemClassName = "block px-4 py-2 text-sm ";
const menuButtonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mt-1"
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

function ChatMsg(props) {
  const [replayShow, setReplayShow] = useState(false);

  const openDetails = () => {
    props.openDetailsMobile();
  };

  const closeMsgPageMobileView = () => {
    props.closeMsgPageMobileView();
  };
  const handleItemClick = (type) => {
    if ((type = "Replay")) {
      setReplayShow(true);
    }
  };

  const closeReply = () =>{
    setReplayShow(false)
  }

  return (
    <div className="">
      <div className="flex items-center px-p-23 h-16 border-b bg-white z-10 sticky top-16 border-scogoddd">
        <div className="flex items-center lg:ml-0 ml-5">
          <div className="lg:hidden block">
            <div className="absolute top-5 left-1 mr-4 cursor-pointer">
              <span class="material-icons" onClick={closeMsgPageMobileView}>
                highlight_off
              </span>
            </div>
          </div>
          <div class="mr-m-13">
            <img src="./img/avtar.png" class="h-h-34 min-w-min34" alt="" />
          </div>
          <div>
            <p className="text-scogo11 2xl:text-font18 text-font14 font-medium">Scogo Mumbai</p>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <div className="mr-3">
            <img src="./img/search.png" className="w-4" />
          </div>
          <div>
            <img src="./img/menu.svg" />
          </div>
          <div
            className="ml-3 pt-2 lg:hidden block cursor-pointer"
            onClick={openDetails}
          >
            <span class="material-icons text-scogoprimary">info</span>
          </div>
        </div>
      </div>

      <div className="h-screen overflow-y-auto relative pb-168">
        <div className="px-p-15 py-p-20 ">
          <div>
            <div className="bg-tagbg py-p-8 pl-p-15 pr-p-20 rounded-t-lg rounded-r-lg max-w-chatblue relative">
              <div className="absolute right-0">
                <Menus
                  as="div"
                  className="relative"
                  //   displayType="flex"
                  //   position="ml-auto"
                  menuButtonIcon={menuButtonIcon}
                  handleItemClick={handleItemClick}
                  itemsClassName={itemsClassName}
                  itemLable={itemLables}
                  itemClassName={itemClassName}
                />

              </div>
              <p className="text-scogo15 2xl:text-font14 text-font12 font-medium">Adam Clark</p>
              <p className="text-scogo15 2xl:text-font16 text-font13 font-normal">
                Lorem ipsum dolor sit amet, nue consect tur adi iscing eli euisd
                ferm entum ornare vitae, pretium et pretium risus.
              </p>
            </div>
            <p className="2xl:text-font12 text-font10 text-scogogray font-normal mt-1">
              03:50 pm
            </p>
          </div>

          <div className="px-p-15 py-p-11 bg-tagmsg w-max rounded-15px mx-auto mt-m-20">
            <p className="2xl:text-font14 text-font11">
              <span className="text-scogoprimary font-medium"> John Doe </span>{" "}
              <span className="text-tagtext font-normal"> tagged to </span>{" "}
              <span className="text-scogoprimary font-medium"> Core team </span>{" "}
              <span className="text-tagtext font-normal">
                {" "}
                team by Adam clark{" "}
              </span>
            </p>
          </div>

          <div>
            <div className="max-w-chatticket ml-auto rounded-10px border border-scogoeee mt-m-20 relative">
              <div>
                <div className="relative">
                  <img
                    src="./img/mobile.png"
                    className="h-h-140 w-full rounded-t-10px"
                    alt=""
                  />

                  <Bedges
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
                    {statusTicket}
                  </Bedges>
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
                      position="mr-auto"
                      menuButtonIcon={menuButtonIcon}
                      handleItemClick={handleItemClick}
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

          <div className="mt-m-20">
            <div className="bg-tagbg py-p-8 pl-p-15 pr-p-20 rounded-t-lg rounded-r-lg max-w-chatblue relative">
              <div className="absolute right-0">
                <Menus
                  className="relative"
                  displayType="flex"
                  position="ml-auto"
                  menuButtonIcon={menuButtonIcon}
                  handleItemClick={handleItemClick}
                  itemsClassName={itemsClassName}
                  itemLable={itemLables}
                  itemClassName={itemClassName}
                />
              </div>
              <p className="text-scogo15 2xl:text-font14 text-font12 font-medium">Adam Clark</p>
              <p className="text-scogo15 2xl:text-font16 text-font13 font-normal max-h-220 overflow-hidden">
                Lorem ipsum dolor sit amet, nue consect tur adi iscing eli euisd
                ferm entum ornare vitae, pretium et pretium risus. Lorem ipsum
                dolor sit amet, nue consect tur adi iscing eli euisd ferm entum
                ornare vitae, pretium et pretium risus. Lorem ipsum dolor sit
                amet, nue consect tur adi iscing eli euisd ferm entum ornare
                vitae, pretium et pretium risus. Lorem ipsum dolor sit amet, nue
                consect tur adi iscing eli euisd ferm entum ornare vitae,
                pretium et pretium risus.
              </p>
              <a
                href="#"
                className="text-scogoorange font-regular text-font12 underline  "
              >
                Read More
              </a>
            </div>
            <p className="2xl:text-font12 text-font10 text-scogogray font-normal mt-1">
              03:50 pm
            </p>
          </div>

          <div>
            <div className="max-w-chatticket ml-auto rounded-10px border border-scogoeee mt-m-20 relative">
              <div className="absolute right-0">
                <Menus
                  className="relative"
                  displayType="flex"
                  position="mr-auto"
                  menuButtonIcon={menuButtonIcon}
                  handleItemClick={handleItemClick}
                  itemsClassName={itemsClassName}
                  itemLable={itemLables}
                  itemClassName={itemClassName}
                />
              </div>
              <div className="p-p-10 bg-white rounded-10px">
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

          <div className="mt-m-20">
            <div className="bg-white py-p-8 pl-p-15 pr-p-20 rounded-t-lg rounded-r-lg max-w-chatticket ml-auto relative rounded-10px border border-scogoeee">
              <div className="absolute right-0">
                <Menus
                  className="relative"
                  displayType="flex"
                  position="mr-auto"
                  menuButtonIcon={menuButtonIcon}
                  handleItemClick={handleItemClick}
                  itemsClassName={itemsClassName}
                  itemLable={itemLables}
                  itemClassName={itemClassName}
                />
              </div>
              <p className="text-scogo15 2xl:text-font16 text-font13 font-normal max-h-220 overflow-hidden">
                Lorem ipsum dolor sit amet, nue consect tur adi iscing eli euisd
                ferm entum ornare vitae, pretium et pretium risus. Lorem ipsum
                dolor sit amet, nue consect tur adi iscing eli euisd ferm entum
                ornare vitae, pretium et pretium risus. Lorem ipsum dolor sit
                amet, nue consect tur adi iscing eli euisd ferm entum ornare
                vitae, pretium et pretium risus. Lorem ipsum dolor sit amet, nue
                consect tur adi iscing eli euisd ferm entum ornare vitae,
                pretium et pretium risus.
              </p>
            </div>
            <p className="2xl:text-font12 text-font10 text-scogogray font-normal mt-1 text-right">
              03:50 pm
            </p>
          </div>

          <div className="mt-m-20">
            <div className="bg-tagbg p-p-6  rounded-t-lg rounded-r-lg max-w-chatblue relative">
              <div className="absolute right-0">
                <Menus
                  className="relative"
                  displayType="flex"
                  position="mr-auto"
                  menuButtonIcon={menuButtonIcon}
                  handleItemClick={handleItemClick}
                  itemsClassName={itemsClassName}
                  itemLable={itemLables}
                  itemClassName={itemClassName}
                />
              </div>
              <div className="p-p-10 bg-white">
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
              <a href="#" className="text-scogoorange font-medium 2xl:text-font12 text-font10">
                @davidwhite{" "}
                <span className="text-scogo15 font-normal">
                  {" "}
                  look into this.{" "}
                </span>{" "}
              </a>
            </div>
            <p className="2xl:text-font12 text-font10 text-scogogray font-normal mt-1">
              04:50 pm
            </p>
          </div>

          <div>
            <div className="max-w-chatblue mr-auto p-1 rounded-10px border border-scogoeee mt-m-20 relative">
              <div>
                <div className="relative">
                  <img
                    src="./img/mobile.png"
                    className="h-50 w-full rounded-t-10px"
                    alt=""
                  />

                  <Bedges
                   className="absolute top-2 right-2 text-font12 font-normal text-white bg-scogoprimary h-5 leading-5 rounded-5px px-p-6"
                  >
                    Add to Report
                  </Bedges>
                

                 
                  <div className="absolute right-0 bottom-">
                    <Menus
                      className="relative"
                      displayType="flex"
                      position="mr-auto"
                      menuButtonIcon={menuButtonIcon}
                      handleItemClick={handleItemClick}
                      itemsClassName={itemsClassName}
                      itemLable={itemLables}
                      itemClassName={itemClassName}
                    />
                  </div>

                 
                </div>
              </div>

              <div className=" bg-white">
                <div>
                  <p className="text-tagtext font-normal 2xl:text-font16 text-font13 py-p-10">
                  Suspendise potenti. Curabitur elit
                  </p>
                </div>
              </div>
            </div>
            <p className="2xl:text-font12 text-font10 text-scogogray font-normal mt-1 text-right">
              03:50 pm
            </p>
          </div>
          
        </div>


        {replayShow && (
            <div className="mt-m-20  sticky bottom-12">
              <div className="border bg-tagbg p-1 border-scogoeee rounded-t-lg rounded-r-lg w-full ">
               
                <div className="p-p-10 bg-white relative">
                  <div>
                    <p className="text-scogo15 font-medium 2xl:text-font15 text-font12">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor aut quasi nesciunt itaque amet, excepturi
                      reiciendis! Praesentium possimus suscipit consequuntur.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="ml-auto">
                      <p className="text-scogogray font-normal 2xl:text-font13 text-font11">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-1 top-1 cursor-pointer" onClick={closeReply}>
                    <img src="./img/close.png" alt=""/>
                  </div>
                </div>
                {/* <a
                  href="#"
                  className="text-scogoorange font-medium text-font12"
                >
                  @davidwhite{" "}
                  <span className="text-scogo15 font-normal">
                    {" "}
                    look into this.{" "}
                  </span>{" "}
                </a> */}
              </div>
              {/* <p className="text-font12 text-scogogray font-normal mt-1">
                05:50 pm
              </p> */}
            </div>

            
          )}

        <div className="bg-white border-t-2 border-scogoddd px-2 sticky bottom-0 w-full">
          <div className="flex items-center h-12 leading-12 ">
            <div className="mr-3 relative">
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
      </div>
    </div>
  );
}

export default ChatMsg;
