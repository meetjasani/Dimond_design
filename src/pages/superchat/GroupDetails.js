import React from 'react'
import Buttons from '../../common/Buttons'
import Slider from "react-slick";
import Bedges from '../../common/Badges';

const grouptag = [
    {
        groupName: 'Project 1',
        totalCount: '10',
    },
    {
        groupName: 'Project 2',
        totalCount: '10',
    },
]

const teamsmember = [
    {
        teamAvtar: './img/avtar.png',
        memberName: 'Adam Clark',
        memberEmail: 'adam123@scogo.in',
    },
    {
        teamAvtar: './img/avtar1.png',
        memberName: 'James White',
        memberEmail: 'jameswhite@scogo.in',
    },

    {
        teamAvtar: './img/avtar2.png',
        memberName: 'Michael Johnson',
        memberEmail: 'michaelj@scogo.in',
    },
]

const mediaImag = [
    {
        teamAvtar: './img/p1.png',
    },
    {
        teamAvtar: './img/p2.png',
    },
    {
        teamAvtar: './img/p3.png',
    },
    {
        teamAvtar: './img/p4.png',
    },
    {
        teamAvtar: './img/p5.png',
    },
    {
        teamAvtar: './img/mobile.png',
    },


]

function GroupDetails(props) {

    const cancleTeamBtn = () => {

    }

    const closeDetailPageMobileView = () => {
        props.closeDetailPageMobileView()
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <div className="sticky top-16">
            <div className="border-2 border-scogof2 h-16">
                <div className="flex w-full h-16 items-center px-3">
                    <div>
                        <div>
                            <p className="text-scogo15 2xl:text-font18 text-font14 font-medium lg:ml-0 ml-5 uppercase">Group Details</p>
                        </div>

                        <div className="lg:hidden block">
                            <div className="absolute top-5 left-1 mr-4 cursor-pointer">
                                <span class="material-icons" onClick={closeDetailPageMobileView}>
                                    highlight_off
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="ml-auto">
                        <Buttons>
                            <span className="material-icons text-scogogray mr-4 2xl:text-font20 text-font16">
                                edit
                            </span>
                        </Buttons>
                        <Buttons>
                            <span className="material-icons text-scogogray mr-4  2xl:text-font20 text-font16">
                                person_add
                            </span>
                        </Buttons>
                    </div>
                </div>
            </div>


            <div className="h-screen overflow-y-auto overflow-x-hidden pb-168">
                <div className="border-t border-scogogray">
                    <div className="">
                        <img src="./img/Group 3.png" className="w-full lg:h-50" />
                    </div>
                    <div className="px-5 pb-5">

                        <div className="mt-m-15 flex items-center py-2">
                            <p className="2xl:text-font18 text-font15 text-scogo15 font-medium ">Scogo Mumbai</p>
                            <Bedges className="ml-2">

                            <span className="bg-scogoorange text-white rounded-full h-5 w-5 leading-5 text-center text-font13 font-medium">6</span>
                            </Bedges>
                        </div>
                        <p className="2xl:text-font14 text-font12 font-normal text-scogogray">Lorem ipsum dolor sit amet, consectetur adipiscing elit nue. Nulla justo nisi, tempor nec pretium eu, vehicula vitae dui. Aliquam at elit tellus.</p>

                    </div>
                </div>
                <div className="p-5 border-t-10">
                    <div className="flex">
                        <div>
                            <div className="flex items-center">
                                <div className="bg-scogolightblue first:bg-scogoorange2xl:w-w-30 w-6 2xl:h-h-30 h-6 2xl:leading-h-30 leading-6 text-center rounded-full mr-3 ">
                                    <span className="material-icons text-scogoprimary font-medium align-middle	2xl:text-font20 text-font16">
                                        volume_off
                                    </span>
                                </div>
                                <div className="">
                                    <p className="text-scogo15 font-normal 2xl:text-font14 text-font12 mr-3 capitalize">Mute Notification</p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <p className="2xl:text-font14 text-font12 font-normal text-scogogray">Off</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 border-t-10 w-full">
                    <div className="mb-m-15 flex items-center">
                        <div>
                            <p className="text-font13 text-scogoprimary font-medium mr-3">Media</p>
                        </div>
                    </div>



                    <Slider {...settings}>
                        {mediaImag.map((item =>
                            <div>
                                <img src={item.teamAvtar} alt="" className="w-w-70 h-h-70 rounded-md" />
                            </div>
                        ))}

                    </Slider>


                </div>

                <div className="p-5 border-t-10">
                    <div className="mb-m-15 flex items-center">
                        <div>
                            <p className="text-font13 text-scogoprimary font-medium mr-3">Projects</p>
                        </div>
                        <Bedges>
                            <span className="bg-scogoorange text-white rounded-full h-5 w-5 leading-5 text-center text-font12 font-medium">6</span>
                        </Bedges>
                    </div>
                    <div className="flex items-center mb-5">
                        <div className="bg-scogolightblue first:bg-scogoorange 2xl:w-w-30 w-6 2xl:h-h-30 h-6 2xl:leading-h-30 leading-6  text-center rounded-full mr-3 ">
                            <span className="material-icons text-scogoprimary font-medium align-middle 2xl:text-font20 text-font16">
                                label
                            </span>
                        </div>

                        <div className="">
                            <p className="text-scogo15 font-normal 2xl:text-font14 text-font12 mr-3 capitalize">Tag Project</p>
                        </div>
                    </div>
                    {grouptag.map(item =>
                        <div className="flex">
                            <div>
                                <div className="flex items-center mb-5">
                                    <div className="bg-scogolightblue first:bg-scogoorange 2xl:w-w-30 w-6 2xl:h-h-30 h-6 2xl:leading-h-30 leading-6 rounded-full mr-3">
                                        <p className="2xl:text-font13 text-font11 text-scogoprimary font-medium text-center uppercase ">{item.groupName[0]}</p>
                                    </div>
                                    <Bedges>
                                        <p className="2xl:text-scogo15 text-font13 font-normal  mr-3 capitalize">{item.groupName}</p>
                                    </Bedges>
                                    <Bedges>
                                        <p className="bg-scogo99 text-white rounded-full h-5 w-5 leading-5 text-center 2xl:text-font12 text-font10 font-medium">10</p>
                                    </Bedges>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <Buttons>
                                    <span className="material-icons text-scogoorange 2xl:text-font20 text-font16">
                                        file_download
                                    </span>
                                </Buttons>
                            </div>
                        </div>
                    )}
                    <div className="flex cursor-pointer">
                        <div>
                            <p className="2xl:text-font16 text-font13 font-normal text-scogoorange">View all projects</p>
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
                            <p className="text-font13 text-scogoprimary font-medium mr-3">Members (6)</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-5">
                        <div className="bg-scogolightblue first:bg-scogoorange 2xl:w-w-30 w-6 2xl:h-h-30 h-6 2xl:leading-h-30 leading-6  text-center rounded-full mr-3 ">
                            <span className="material-icons text-scogoprimary font-medium align-middle	2xl:text-font20 text-font16">
                                person_add
                            </span>
                        </div>

                        <div className="">
                            <p className="text-scogo15 font-normal 2xl:text-font14 text-font12 mr-3 capitalize">Add Members</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-5">
                        <div className="bg-scogolightblue first:bg-scogoorange2xl:w-w-30 w-6 2xl:h-h-30 h-6 2xl:leading-h-30 leading-6  text-center rounded-full mr-3 ">
                            <span className="material-icons text-scogoprimary font-medium align-middle 2xl:text-font20 text-font16	">
                                link
                            </span>
                        </div>

                        <div className="">
                            <p className="text-scogo15 font-normal 2xl:text-font14 text-font12 mr-3 capitalize ">Invite via link</p>
                        </div>
                    </div>
                    {teamsmember.map(item =>
                        <div className="flex">
                            <div>
                                <div className="flex items-center mb-5">
                                    <div class="flex items-center">
                                        <div>
                                            <img src={item.teamAvtar} alt="" class="w-min-30 h-h-30" />
                                        </div>
                                        <div class="ml-m-9">
                                            <p class="text-scogo15 2xl:text-font13 text-font11 font-normal">{item.memberName}</p>
                                            <p class="text-scogogray 2xl:text-font12 text-font10 font-normal">{item.memberEmail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <Buttons>
                                    <span className="material-icons text-scogoprimary 2xl:text-font20 text-font16">
                                        message
                                    </span>
                                </Buttons>
                                <Buttons>
                                    <span className="material-icons text-scogoprimary 2xl:text-font20 text-font16 ml-3">
                                        call
                                    </span>
                                </Buttons>
                                <Buttons>
                                    <span className="material-icons text-scogoprimary 2xl:text-font20 text-font16 ml-3">
                                        more_vert
                                    </span>
                                </Buttons>
                            </div>
                        </div>
                    )}

                </div>
                <div className="p-5 border-t-10">
                    <Buttons
                        buttonClass="text-scogoclosed   border border-scogoclosed  md:mt-0 mt-2 w-full 2xl:h-12 h-10 font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow "
                        children="Exit Group"
                        Btnalt=""
                        onClick={cancleTeamBtn}
                    />
                </div>
            </div>
        </div>
    )
}

export default GroupDetails