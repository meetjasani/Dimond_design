import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Buttons from "../../common/Buttons";
import InputFiels from "../../common/InputFiels";


let underBorder = "border-0"
let tableClass = "table-list-view"

const Jewel = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [mainDiv, setMainDiv] = React.useState("");

    const [mainIndex, setMainIndex] = React.useState()
    const [search, Setsearch] = useState([
        {
            searchUser: "",
        },
    ]);


    const [value, setValue] = useState('');
    const onChange = (v) => {
        if (!Number.isNaN(v)) {
            setValue(v);
        }
    };

    const [view, setView] = React.useState(false);
    const [bguser, setBguser] = React.useState("");
    const [addSubRow, setAddSubRow] = useState([
        {
            No: 1.1,
            weight: 350,
            Pcs: 10,
            Shape: "Top Cut",
            MainIndex :1,

        },
        {
            No: 2.2,
            weight: 350,
            Pcs: 10,
            Shape: "Top Cut and Side Cut",
            MainIndex :2,

        },
    ])
    const [addrow, setaddrow] = useState([
        {
            No: 1,
            Marco: "ISI",
            weight: 350,
            Pcs: 10,
        },

        {
            No: 2,
            Marco: "ISI",
            weight: 350,
            Pcs: 10,
        },
        {
            No: 3,
            Marco: "ISI",
            weight: 350,
            Pcs: 10,
        },
    ]);

    const handleAddFields = () => {
        underBorder = "border-scogoddd "
        const value = [...addrow];
        value.push({
            No: "",
            Marco: "",
            weight: "",
            Pcs: "",
        });
        setaddrow(value);
    };

    const viewMore = () => {

    };

    const handleChange = () => {

    };


    const listViewBtn = () => {
        setView(false)
    }

    const gridViewBtn = () => {
        setView(true)

    }

    const openSubBtn = (MainIndex) => {
        if(MainIndex){
          
            setMainIndex(MainIndex)
        }


        
    }

    const addSubRowNew=(MainNo)=>{
        const value = [...addSubRow];
        const lastIndex = (addSubRow.filter(y=>y.MainIndex === MainNo)).lastIndex;
        value.push({
            No: MainNo+"."+(lastIndex+1),
            weight: '',
            Pcs: '',
            Shape: "",
            MainIndex :MainNo,
        });
        setAddSubRow(value);
        setMainIndex(MainNo)

    }

    return (
        <div className="lg:flex relative">
            <div className={`h-full w-full lg:block pb-5 md:pt-0 pt-16 ${mainDiv}`}>
                {/* <div className="bg-scogof8 h-full md:w-2/3 w-full"> */}
                <div className="sticky top-16 w-full 2xl:px-8 xl:px-4 px-2 lg:pt-8 pt-2 lg:pb-4 pb-0 bg-scogof8 z-20">
                    <div className="lg:flex max-w-full">
                        <div>
                            <h1 className="text-scogo21 2xl:text-font24 text-font16 font-medium font-rubik ">
                                Jewel Stock
                            </h1>
                        </div>
                    </div>         
                </div>
            </div>
        </div>
    );
};

export default Jewel;
