import React from 'react'
import InputFiels from '../../common/InputFiels'
import Select from 'react-select';


const ProfileDetails = () => {

    const timeoption = [
        { value: '30', label: '30 Minutes (Default)' },
        { value: '45', label: '45 Minutes' },
        { value: '60', label: '60 Minutes ' }
    ]

    return (
        <>
          
          


            <div className="profile-pic relative w-32 h-32 mx-auto mt-14">
            <div>
                <img src='./img/avtar.png' alt="Profile" />
                <InputFiels 
                    type="file"
                    inputClass="custom-file-input from-transparent  h-full initial "
                />
            </div>
            </div>


            <div className="lg:flex lg:px-12 mt-7">
                <div className="lg:w-1/2 px-4">
                    <div className="py-2">
                        <label className="block  border-b-2 border-scogoddd">
                            <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">Email Address *</span>
                            <InputFiels
                                type="text"
                                inputClass="p-0 2xl:py-4 py-2 block w-full font-normal 2xl:text-font15 text-font12 text-scogo15 border-none focus:ring-0 placeholder-scogo99"

                            />
                        </label>
                    </div>

                    <div className="py-2">
                        <label className="relative block border-b-2 border-scogoddd"><span className="text-scogo99 2xl:text-font12 text-font10">Response SLA</span>
                            <Select

                                placeholder="Select ID proof type"
                                name="colors"
                                options={timeoption}
                                className="basic-multi-select 2xl:py-2 py-0 2xl:text-font15 text-font12"
                                classNamePrefix="select"
                            />
                            <div className="absolute right-0 bottom-4"><img src="./img/downarrow.svg " alt="" /></div>
                        </label>
                    </div>
                </div>

                <div className="lg:w-1/2 px-4">
                    <div className="py-2">
                        <label className="block  border-b-2 border-scogoddd">
                            <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">Full Name  *</span>
                            <InputFiels
                                type="text"
                                inputClass="p-0 2xl:py-4 py-2 block w-full font-normal 2xl:text-font15 text-font12 text-scogo15 border-none focus:ring-0 placeholder-scogo99"

                            />
                        </label>
                    </div>

                    <div className="py-2 proof-upload">
                        <label className="block  border-b-2 border-scogoddd relative">
                            <span class="text-scogo99 font-normal 2xl:text-font12 text-font10">ID proof *</span>
                            <InputFiels
                                type="file"
                                inputClass="p-0 2xl:py-4 py-2 block w-full font-normal 2xl:text-font15 text-font12 text-scogo15 border-none focus:ring-0 placeholder-scogo99"
                            />
                            <div className="absolute right-0 bottom-4"><img src="./img/link.svg " alt="" /></div>
                        </label>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProfileDetails