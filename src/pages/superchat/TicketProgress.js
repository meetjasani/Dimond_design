import React from "react";
import Buttons from "../../common/Buttons";
import Slider from "react-slick";



function TicketProgress(props) {
    const [openTab, setOpenTab] = React.useState(1);


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
                breakpoint: 991,
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

    const process = [
        {
            processStatus: 'Waiting for SP to accept the Ticket',
            processTime: 'Ticket Broadcasted on 05-07-2021 5:17 pm',
            status : true
        },
        {
            processStatus: 'FE Status',
            processTime: 'Waiting for SP to Accept the Ticket',
            status : true
        },
        {
            processStatus: 'Work In Progress',
            processTime: 'Waiting for SP to Accept the Ticket',
            status : false
        },
        {
            processStatus: 'FE Status',
            processTime: 'Waiting for SP to Accept the Ticket',
            status : true
        },
        {
            processStatus: 'Work In Progress',
            processTime: 'Waiting for SP to Accept the Ticket',
            status : true
        },
      

       
    ]
    return (
        <div className="sticky top-16 border-scogoddd border-l">
            <div className="border-2 border-scogof2 h-16">
                <div className="flex w-full h-16 items-center px-3">
                    <div>
                        <div className="lg:ml-0 ml-5">
                            <ul className="flex">
                                <li>
                                    <a href="#"
                                        className={
                                            "2xl:text-font16 text-font12 font-bold  px-5 pt-3 pb-5 block leading-normal " +
                                            (openTab === 1
                                                ? "scogoprimary border-b-2 border-scogoprimary"
                                                : "text-scogogray bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);

                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        Ticket Detail
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        className={
                                            "2xl:text-font16 text-font12 font-bold   px-5 pt-3 pb-5 block leading-normal " +
                                            (openTab === 2
                                                ? "scogoprimary border-b-2 border-scogoprimary"
                                                : "text-scogogray bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);

                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Progress
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:hidden block">
                            <div className="absolute top-5 left-1 mr-4 cursor-pointer" onClick={closeDetailPageMobileView}>
                                <span class="material-icons" >
                                    highlight_off
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="h-screen overflow-y-auto bg-white overflow-x-hidden pb-168">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="pb-5 pt-5">
                        <div className="md:flex pl-5">
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Created On</h3>
                                <h5 className="2xl:text-font15 text-font13 font-medium text-scogo11">14/07/2020 07:09 AM</h5>
                            </div>
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Payment</h3>
                                <h5 className="flex 2xl:text-font15 text-font13 font-medium text-scogo11">Base Price: <span className="text-scogoprimary font-medium flex items-center">
                                    <img className="w-4 h-3" src="./img/rupee.svg" />
                                    100</span>
                                </h5>
                            </div>
                        </div>

                        <div className="pt-6 pl-5">
                            <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Description</h3>
                            <h5 className="2xl:text-font15 text-font13 font-medium text-scogo11">Lorem ipsum dolor sit amet, nue consect tur adi iscing euisd ferm entum ornare vitae, pretium et pretium risus.</h5>
                        </div>
                        <div className="md:flex pl-5 pt-6">
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 text-font15 font-medium">Service Type</h3>
                                <h5 className="text-font15 font-medium text-scogo11">Installation</h5>
                                <h3 className="text-scogoorange 2xl:text-font15 text-font13 font-medium">SOW</h3>
                            </div>
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Payment</h3>
                                <h5 className="flex 2xl:text-font15 text-font13 font-medium">Base Price: <span className="text-scogoprimary flex items-center">
                                    <img className="w-4 h-3" src="./img/rupee.svg" />
                                    100</span>
                                </h5>
                                <h3 className="text-scogoorange 2xl:text-font15 text-font13 font-medium">Sign Off Document</h3>
                            </div>
                        </div>
                        <div className="md:flex pl-5 pt-6">
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Revisit Required</h3>
                                <h5 className="2xl:text-font15 text-font13 font-medium text-scogo11">No</h5>
                            </div>
                            <div className="md:w-6/12">
                                <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Revisit Count</h3>
                                <h5 className="2xl:text-font15 text-font13 font-medium text-scogo11">0</h5>
                            </div>
                        </div>
                        <div className="pt-6 pl-5">
                            <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Site Address</h3>
                            <h5 className="2xl:text-font15 text-font13 font-medium text-scogo11">114, Global Hub, Western street, NY, USA 543210</h5>
                        </div>
                        <div className="pt-6 pl-5">
                            <Buttons
                                buttonClass="border-2 w-w-180 h-8 rounded-md border-scogoprimary text-scogoprimary font-medium 2xl:text-font14 text-font12"
                                type=""
                                children="IP And Other Details"
                            />
                        </div>
                        <div className="pt-6 pl-5">
                            <h3 className="text-scogo99 2xl:text-font15 text-font13 font-medium">Customer Sign Off Rejection Message</h3>
                            <h5 className="2xl:text-font15 text-font13 font-medium text-scogo11">0</h5>
                        </div>
                        <div className="pt-6 pl-5">
                            <Buttons
                                buttonClass="border-2 w-w-180 h-8 rounded-md border-scogoprimary bg-scogoprimary text-white font-medium 2xl:text-font14 text-font12"
                                type=""
                                children="Execute Ticket"
                            />
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

                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div className="bg-white p-5 ">
                        <div className="relative">
                            {process.map((item =>
                                <div className="flex items-center mb-5 ">
                                    <div className={item.status == true ? '2xl:w-7 w-5 2xl:h-7 h-5 bg-statusprocess rounded-full border-4 border-white z-10' : '2xl:w-7 w-5 2xl:h-7 h-5 bg-scogoorange rounded-full border-4 border-white z-10' } ></div>
                                    <div className="ml-3">
                                        <p className="2xl:text-font14 text-font12 font-medium text-scogo11">{item.processStatus}</p>
                                        <p className="2xl:text-font13 text-font11 font-normal text-scogo99">{item.processTime}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="absolute  top-0 2xl:left-3 left-2 rounded-full mb-2 bg-scogo99 w-1 h-full z-0">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketProgress
