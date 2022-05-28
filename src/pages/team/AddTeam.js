import React from 'react'
import Buttons from '../../common/Buttons'
import Select from 'react-select';
import Checkbox from '../../common/Checkbox';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const teamoption = [
    { value: 'team1', label: 'Team1' },
    { value: 'team2', label: 'Team2' },
    { value: 'team3', label: 'Team3' }
]

const mapoptions = [
    { value: 'All', label: 'All' },
    { value: 'Admin', label: 'Admin' },
    { value: ' PO Approval ', label: ' PO Approval ' }
]


const timeoption = [
    { value: '30', label: '30 Minutes (Default)' },
    { value: '45', label: '45 Minutes' },
    { value: '60', label: '60 Minutes ' }
]

const AddTeam = (props) => {
    const creteTeamBtn = () => {
        props.closeAddTeam()
    }
    
    const cancleTeamBtn = () => {
        props.closeAddTeam()
    }

    return (
        <div className="sticky top-16">
            <div className=" h-full">
                <div className="w-full items-center px-3 py-2">
                    <p className="text-scogo15 2xl:text-font16 text-font12 font-rubik font-medium">Add New Team</p>
                </div>
                <div className="border-t border-scogogray pt-5 h-screen pb-168 overflow-y-auto ">
                    <form className="w-full">
                        <div className="px-3">
                            <div className="py-2">
                               
                                <label className="relative block border-b-2 border-scogoddd"><span class="text-scogo99 text-font12">Team type</span>
                                    <Select
                                        placeholder="Enter here"
                                        name="colors"
                                        options={teamoption}
                                        className="basic-multi-select select-text"
                                        classNamePrefix="select"
                                    />
                                    <div className="absolute right-0 bottom-4"><img src="./img/downarrow.svg " alt="" /></div>
                                </label>
                            </div>
                            <div className="py-2">
                                <label className="block  border-b-2 border-scogoddd">
                                    <span class="text-scogo99 font-normal text-font12">Team Name</span>
                                    <input type="text" class="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" />
                                </label>
                            </div>
                            <div className="py-2">
                                <label className="block  border-b-2 border-scogoddd">
                                    <span className="text-scogo99 font-normal text-font12">Description</span>
                                    <textarea className="px-2 block  w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" rows="2"></textarea>
                                </label>
                            </div>
                            <div className="py-2">
                                
                                <Checkbox
                                    checkColor="mr-2 text-scogoorange"
                                    CheckContent ="Help desk"
                                />
                            </div>
                            <div className="py-2">
                               
                                <label className="relative block border-b-2 border-scogoddd"><span class="text-scogo99 text-font12">Map Customer</span>
                                    <Select
                                        defaultValue={mapoptions[0]}
                                        placeholder="Enter here"
                                        name="colors"
                                        options={mapoptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                    <div className="absolute right-0 bottom-4"><img src="./img/downarrow.svg " alt="" /></div>
                                </label>
                            </div>
                            <div className="py-2">
                               
                                <label className="relative block border-b-2 border-scogoddd"><span className="text-scogo99 text-font12">Response SLA</span>
                                    <Select
                                        defaultValue={timeoption[0]}
                                        placeholder="Enter here"
                                        name="colors"
                                        options={timeoption}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                    <div className="absolute right-0 bottom-4"><img src="./img/downarrow.svg " alt="" /></div>
                                </label>
                            </div>
                            <div className="py-2">
                                <p className="font-medium text-font13 text-scogoprimary">Escalate to</p>
                            </div>
                            <div>
                                <label className="relative block border-b-2 border-scogoddd"><span className="text-scogo99 text-font12">Name/Email/Phone Number</span>
                                    <Select
                                        placeholder="Enter here"
                                        isMulti
                                        name="colors"
                                        options={options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                    <div className="absolute right-0 bottom-4"><img src="./img/downarrow.svg " alt="" /></div>
                                </label>
                            </div>

                            <div className="py-2">
                                <label className="relative block border-b-2 border-scogoddd"><span className="text-scogo99 text-font12">Team</span>
                                    <Select
                                        placeholder="Enter here"
                                        isMulti
                                        name="colors"
                                        options={options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                    <div className="absolute right-0 bottom-4"><img src="./img/downarrow.svg " alt="" /></div>
                                </label>
                            </div>

                            <div className="pt-3 py-10 flex">
                                <Buttons
                                    buttonClass="text-white mr-4 bg-scogoprimary md:mt-0 mt-2 2xl:w-w-102 w-20 2xl:h-9 h-7 font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow"
                                    children="Create"
                                    Btnalt=""
                                    btnimgClass="2xl:w-4 w-3 2xl:h-4 h-3 mr-2"
                                    buttonIcon="./img/check.svg"
                                    onClick={creteTeamBtn}
                                />
                                <Buttons
                                    buttonClass="text-scogoclosed border border-scogoclosed  md:mt-0 mt-2 2xl:w-w-102 w-20 2xl:h-9 h-7 font-medium 2xl:text-font16 text-font13 flex items-center justify-center rounded-6px shadow-primaryBtnShadow "
                                    children="Cancel"
                                    Btnalt=""
                                    onClick={cancleTeamBtn}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTeam
