import React from 'react'
import Bedges from '../../common/Badges'

const chats = [
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai first'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar1.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar2.png',
        teamName: 'Scogo Mumbai'
    },
    {
        chatAvtar: './img/avtar.png',
        teamName: 'Scogo Mumbai last'
    },
]

function Chats(props) {

    const openChat = () =>{
        props.closeChat()
        props.setShowRaiseTicket(false)
    }

    return (
        <div className="h-screen overflow-y-auto pb-315">
            {chats.map(item => (
                <div className="flex w-full items-start cursor-pointer bg-white focus:bg-scogolightblue hover:bg-scogolightblue chatsingle-tab border-t border-scogoddd" onClick={openChat}>
                    <div className="mr-m-13">
                        <img src={item.chatAvtar} className="h-h-34 min-w-min34" alt="" />
                    </div>
                    <div className="flex w-full items-center">
                        <div>
                            <p className="text-scogo15 font-medium 2xl:text-font16 text-font13">{item.teamName}</p>
                            <p className="text-scogo15 font-normal 2xl:text-font12 text-font10 min-w-80 2xl:h-5 h-4 overflow-hidden">Lorem ipsum dolor sit amet, nue consectetur adipisci... Lorem ipsum dolor sit amet, nue consectetur adipisci... Lorem ipsum dolor sit amet, nue consectetur adipisci...</p>
                        </div>
                        <div className="ml-auto text-left">
                            <div className="ml-auto ">
                                <p className="2xl:text-font12 text-font10 font-normal text-scogogray text-right whitespace-nowrap">11:30 AM</p>
                            </div>
                            <Bedges className="bg-scogoorange h-4 w-4 leading-4 rounded-full ml-auto">
                                2
                            </Bedges>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chats
