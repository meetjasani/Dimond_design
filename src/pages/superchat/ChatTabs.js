import React from "react";
import Bedges from "../../common/Badges";
import Chats from "./Chats";
import Tickets from './Tickets';



function ChatTabs(props) {
    const [openTab, setOpenTab] = React.useState(1);

    const closeChatTab = () => {
        props.closeSuperChat()
    }



    const closeTicketsTab = () => {
        props.closeSuperChatTwo()
    }

    return (
        <>
            <div className="flex bg-white ">
                <div className="w-full bg-white">
                    <ul
                        className="flex list-none shadow-lg z-10 bg-white sticky top-32 h-12"
                        role="tablist"
                    >
                        <li className="flex-auto text-center relative">
                            <a
                                className={
                                    "2xl:text-font16 text-font13 font-bold uppercase px-5 2xl:py-3 py-3.5 block leading-normal " +
                                    (openTab === 1
                                        ? "scogoprimary border-b-2 border-scogoprimary"
                                        : "text-scogogray bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    props.chatClose()
                                    props.setShowRaiseTicket(false)
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Chat
                            </a>
                            <Bedges className="bg-scogoprimary absolute 2xl:top-3 top-4 2xl:right-12 xl:right-10 lg:right-6 md:right-36 right-2  2xl:h-6 h-4 2xl:w-6 w-4 2xl:leading-6 leading-4 rounded-full mr-2 2xl:text-font16 text-font12">
                                2
                            </Bedges>
                            
                        </li>
                        <li className="flex-auto text-center relative">
                            <a
                                className={
                                    "2xl:text-font16 text-font13 font-bold uppercase px-5 2xl:py-3 py-3.5 block leading-normal " +
                                    (openTab === 2
                                        ? "scogoprimary border-b-2 border-scogoprimary"
                                        : "text-scogogray bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    props.ticketCLose()
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Tickets
                            </a>
                            <Bedges className="bg-scogoorange absolute 2xl:top-3 top-4 2xl:right-12 xl:right-10 lg:right-6 md:right-36 right-2 2xl:h-6 h-4 2xl:w-6 w-4 2xl:leading-6 leading-4 rounded-full mr-2 2xl:text-font16 text-font12">
                                2
                            </Bedges>
                        </li>
                    </ul>
                    <div className="bg-white pt-1 w-full z-0">
                        <div className="flex-auto ">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="px-4 py-5 sticky top-addNewbtn bg-white">
                                        <button class="bg-white border-2 border-scogoprimary p-2 rounded-md active:bg-green-700 block w-full z-10">
                                            <div className="flex items-center justify-center	text-scogoprimary font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                <p className="text-scogoprimary 2xl:text-text16 text-font13">Create a new group</p>
                                            </div>
                                        </button>
                                    </div>
                                    <Chats setShowRaiseTicket={props.setShowRaiseTicket} closeChat={closeChatTab} />
                                </div>
                                <div className={openTab === 2 ? "block bg-white" : "hidden bg-white"} id="link2">
                                    <div className="px-4 py-5 sticky top-addNewbtn bg-white z-30 border-b border-scogoddd">
                                        <button class="bg-white border-2 border-scogoprimary p-2 rounded-md active:bg-green-700 block w-full z-10"
                                            onClick={() => {props.setShowRaiseTicket(true);closeTicketsTab()}}
                                        >
                                            <div className="flex items-center justify-center	text-scogoprimary font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                <p className="text-scogoprimary 2xl:text-text16 text-font13">Raise a new ticket</p>
                                            </div>
                                        </button>
                                    </div>
                                    <Tickets setShowRaiseTicket={props.setShowRaiseTicket} closeTickets={closeTicketsTab} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatTabs
