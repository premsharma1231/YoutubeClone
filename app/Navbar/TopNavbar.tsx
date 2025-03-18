import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LeftNavbar, ShortLeftNavbar } from "./leftNavbar"; // Assuming you import them from another file
import { ContentNavbar } from "./ContentNavbar"; // Assuming you import them from another file
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";





    export function TopNavbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
        <div className="sticky top-0 bg-gray-950 pb-1">
        <div className=" flex justify-between  h-14 px-3 items-center text-center">
        <div className="flex items-center">
        <FontAwesomeIcon icon={faBars} className="text-white w-10 h-24 text-xl py-2.5 bg-gray-800 cursor-grab hover:bg-gray-600 rounded-2xl" onClick={() => setIsExpanded(!isExpanded)}        />
        <FontAwesomeIcon icon={faYoutube} className="bg-white rounded-4xl p-1 w-10 h-10 ml-5 cursor-grab" />
        <h1 className="text-white ml-2 font-bold cursor-grab">Entertainment</h1>
        </div>
            <div className="relative flex items-center">
                <input  placeholder="Search" className="h-10 w-96 bg-transparent text-white border-1 rounded-l-full border-gray-500 text-left py-1 pl-4"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 text-xl bg-gray-800 px-5 py-2.5 rounded-r-full cursor-grab"/>
                <FontAwesomeIcon icon={faMicrophone} className="text-gray-500 text-md bg-gray-800 px-4 py-3 rounded-full cursor-grab ml-3 hover:not-indeterminate:bg-gray-900"/>
            </div>
            {/* <Tooltip title="Search with your voice" slots={{ transition: Zoom }} arrow placement="right"> */}
                <FontAwesomeIcon icon={faUser} className="text-white w-10 h-12 text-2xl cursor-grab"/>
            {/* </Tooltip> */}
        </div>
        <ContentNavbar/>
        {isExpanded ? <LeftNavbar /> : <ShortLeftNavbar />}
        </div>
        </>
    );
    }