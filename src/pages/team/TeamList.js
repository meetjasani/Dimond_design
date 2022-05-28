import React from 'react'
import Buttons from '../../common/Buttons'


const teamList = [
    {
        firstName: 'scogo',
        lastName: 'Mumbai',
        totalCount: '10',
    },
    {
        firstName: 'scogo',
        lastName: 'Mumbai',
        totalCount: '10',
    },
    {
        firstName: 'scogo',
        lastName: 'Mumbai',
        totalCount: '10',
    },
]

function TeamList(props) {

    const closeModal = () => {
        props.onClose()
        // setIsUserOpen(false)
        // mainDiv = ""
    }

    return (
        <div className="sticky top-16">
            <div className="border-2 border-scogof2">
                <div className="flex w-full items-center px-3 py-2">
                    <div>
                        <div>
                            <p className="text-scogo15 2xl:text-font16 text-font12 font-rubik font-medium ml-5">User Detail</p>
                        </div>
                        <div>
                            <div className="absolute top-3 left-1 mr-4 cursor-pointer" onClick={closeModal}>
                                <span class="material-icons">
                                    highlight_off
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="ml-auto">
                        <Buttons className="">
                            <span className="material-icons text-scogogray mr-4 2xl:text-font20 text-font16">
                                share
                            </span>
                        </Buttons>
                        <Buttons>
                            <span className="material-icons text-scogogray mr-4 2xl:text-font20 text-font16">
                                edit
                            </span>
                        </Buttons>
                        <Buttons>
                            <span className="material-icons text-scogogray mr-4 2xl:text-font20 text-font16" >
                                delete
                            </span>
                        </Buttons>
                    </div>
                </div>
            </div>


            <div className="h-screen pb-168 overflow-y-auto ">
                <div className="border-t border-scogogray pt-5">
                    <div className=""> <img src="./img/avtar.svg" className="2xl:w-w-120 w-24 rounded-full mx-auto" /> </div>
                    <p className="text-center 2xl:text-font22 text-font16 text-scogo15 font-medium mt-m-15">James White</p>
                    <div className="text-center mt-4">
                        <Buttons>
                            <img src="./img/message.svg" className="mr-m-30 w-4" />
                        </Buttons>
                        <Buttons>
                            <img src="./img/call.svg" className="mr-m-30 w-4" />
                        </Buttons>
                        <Buttons>
                            <img src="./img/rupee.svg" />
                        </Buttons>
                    </div>
                </div>


                <div className="p-5">
                    <p className="2xl:text-font13 text-font11 font-medium text-scogoprimary">Status</p>
                    <p className="2xl:text-font14 text-font12 font-normal text-scogo15">Lorem ipsum dolor sit amet, consectetur adipiscing elit nue. Nulla justo nisi, tempor nec pretium eu,</p>
                </div>

                <div className="p-5 border-t-10">
                    <div className="mb-m-15 flex items-center">
                        <div>
                            <p className="text-font13 text-scogoprimary font-medium mr-3">Teams</p>
                        </div>
                        <div className="">
                            <p className="bg-scogoorange text-white rounded-full h-5 w-5 leading-5 text-center text-font12 font-medium">6</p>
                        </div>
                    </div>
                    {teamList.map(item =>
                        <div className="flex">
                            <div>
                                <div className="flex items-center mb-5">
                                    <div className="bg-scogopriamry2 first:bg-scogoorange 2xl:w-w-30 w-6 2xl:h-h-30 h-6 2xl:leading-h-30 leading-6 rounded-full mr-3">
                                        <p className="2xl:text-font13 text-font10 text-white font-medium text-center uppercase ">{item.firstName[0]}{item.lastName[0]}</p>
                                    </div>
                                    <div className="">
                                        <p className="text-scogo15 font-normal 2xl:text-font14 text-font12 mr-3 capitalize">{item.firstName} {item.lastName}</p>
                                    </div>
                                    <div className="">
                                        <p className="bg-scogo99 text-white rounded-full h-5 w-5 leading-5 text-center 2xl:text-font12 text-font10 font-medium">10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <Buttons>
                                    <span className="material-icons text-scogogray 2xl:text-font20 text-font16">
                                        delete
                                    </span>
                                </Buttons>
                            </div>
                        </div>
                    )}
                    <div className="flex cursor-pointer">
                        <div>
                            <p className="2xl:text-font16 text-font13 font-normal text-scogoorange">View all teams</p>
                        </div>
                        <div className="ml-auto">
                            <span class="material-icons text-scogoorange">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>


                <div className="p-5 border-t-10">
                    <div className="mb-m-15 flex items-center">
                        <div>
                            <p className="text-font13 text-scogoprimary font-medium mr-3">Groups</p>
                        </div>
                        <div className="">
                            <p className="bg-scogoorange text-white rounded-full h-5 w-5 leading-5 text-center text-font12 font-medium">6</p>
                        </div>
                    </div>
                    {teamList.map(item =>
                        <div className="flex">
                            <div>
                                <div className="flex items-center mb-5">
                                    <div className="bg-scogopriamry2 first:bg-scogoorange 2xl:w-w-30 w-6 2xl:h-h-30 h-6 2xl:leading-h-30 leading-6 rounded-full mr-3">
                                        <p className="2xl:text-font13 text-font10 text-white font-medium text-center uppercase ">{item.firstName[0]}{item.lastName[0]}</p>
                                    </div>
                                    <div className="">
                                        <p className="text-scogo15 font-normal 2xl:text-font14 text-font12 mr-3 capitalize">{item.firstName} {item.lastName}</p>
                                    </div>
                                    <div className="">
                                        <p className="bg-scogo99 text-white rounded-full h-5 w-5 leading-5 text-center 2xl:text-font12 text-font10 font-medium">10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <Buttons>
                                    <span className="material-icons text-scogogray 2xl:text-font20 text-font16">
                                        delete
                                    </span>
                                </Buttons>
                            </div>
                        </div>
                    )}
                    <div className="flex cursor-pointer">
                        <div>
                            <p className="2xl:text-font16 text-font13 font-normal text-scogoorange">View all Groups</p>
                        </div>
                        <div className="ml-auto">
                            <span class="material-icons text-scogoorange ">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamList