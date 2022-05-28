import React, { useEffect } from 'react';
import ChatMsg from './ChatMsg';
import ChatTabs from './ChatTabs';
import GroupDetails from './GroupDetails';
import RaiseTicket from './RaiseTicket';
import TicketChatMsg from './TicketChatMsg';
import Switch from "react-switch";
import TicketProgress from './TicketProgress';

let chatDiv = ""

function SuperChat(props) {
    const [ischatOpen, setIschatOpen] = React.useState(false);
    const [isGroupDetailsMobileView, setIsGroupDetailsMobileView] = React.useState(false);
    const [isChatTabsMobileView, setIsChatTabsMobileView] = React.useState(false);
    const [isTicketShow, setIsTicketShow] = React.useState(true);
    const [isChatShow, setIsChatShow] = React.useState(false);
    const [showRaiseTicket, setShowRaiseTicket] = React.useState(false);
    const { innerHeight, innerWidth } = window
    const closeSuperChat = () => {
        setIschatOpen(true)
        setIsTicketShow(true)

        if (innerWidth < 1024) {
            setIsGroupDetailsMobileView(false)
        } else {
            setIsGroupDetailsMobileView(true)
        }
        setIsChatTabsMobileView(true)
        chatDiv = "lg:block hidden"

    }

    const closeSuperChatTwo = () => {
        setIschatOpen(true)
        setIsChatShow(true)
        if (innerWidth < 1024) {
            setIsGroupDetailsMobileView(false)
        } else {
            setIsGroupDetailsMobileView(true)
        }
        setIsChatTabsMobileView(true)
        chatDiv = "lg:block hidden"
    }
 
useEffect(()=>{
    setIschatOpen(true)
    if (!ischatOpen) {
        chatDiv="block"
    }
},[])



    const openDetailsMobile = () => {
        setIsChatTabsMobileView(false)
        setIsGroupDetailsMobileView(true)
        chatDiv = "lg:block hidden"

    }

    const closeDetailPageMobileView = () => {
        setIsChatTabsMobileView(true)
        setIsGroupDetailsMobileView(false)
        chatDiv = "lg:block hidden"

    }

    const closeMsgPageMobileView = () => {
        setIschatOpen(false)
        chatDiv = "block"
    }
    const hideTicketView = () => {
        setIsTicketShow(false)
    }

    const hideChatView = () => {
        setIsChatShow(false)
    }

    return (

        <div className="w-full lg:flex">
            <div className={`${chatDiv} lg:w-2/7  border-r border-b border-scogoddd lg:pb-0 pb-10  pt-16`}>
                <div className="bg-gray-200 w-full h-16 p-2 sticky top-16 z-30">
                    <form>
                        <div className="text-gray-400 focus-within:text-gray-600 relative">
                            <div className="absolute py-4 px-3">
                                <img src="./img/search.png" />
                            </div>
                            <input className="border border-gray-200  lg:min-w-80 min-w-full h-12 rounded-md py-2 px-10 focus:ring-1 focus:ring-gray-400 focus:outline-none " placeholder="Search" />
                        </div>
                    </form>
                </div>
                <ChatTabs setShowRaiseTicket={setShowRaiseTicket} ticketCLose={hideTicketView} closeSuperChat={closeSuperChat} chatClose={hideChatView} closeSuperChatTwo={closeSuperChatTwo} />
            </div>

            {showRaiseTicket &&
                <div className="lg:w-3/7 pt-16 ">
                    <div className="bg-white  w-full h-16 ">
                        <RaiseTicket setShowRaiseTicket={setShowRaiseTicket} closeSuperChat={closeSuperChat} closeSuperChatTwo={closeSuperChatTwo} closeMsgPageMobileView={closeMsgPageMobileView}/>
                        
                    </div>
                </div>

            }

            {ischatOpen && !showRaiseTicket &&
                <>
                    {isChatTabsMobileView &&
                        <div className="lg:w-3/7 pt-16 ">
                            <div className="bg-white  w-full h-16 ">
                                {isTicketShow && <ChatMsg openDetailsMobile={openDetailsMobile} closeMsgPageMobileView={closeMsgPageMobileView} />}
                                {isChatShow && <TicketChatMsg openDetailsMobile={openDetailsMobile} closeMsgPageMobileView={closeMsgPageMobileView} />}

                            </div>
                        </div>
                    }


                    {isGroupDetailsMobileView &&
                        <div className="lg:w-2/7 pt-16">
                            {!showRaiseTicket && <div className="bg-white  w-full h-16 ">
                                {isTicketShow && <GroupDetails closeDetailPageMobileView={closeDetailPageMobileView} />}
                                {isChatShow && <TicketProgress closeDetailPageMobileView={closeDetailPageMobileView} />}
                            </div>}
                        </div>
                    }
                </>
            }


        </div>

    )
}

export default SuperChat
