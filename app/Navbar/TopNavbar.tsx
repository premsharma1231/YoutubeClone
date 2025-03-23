import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMicrophone, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { LeftNavbar, ShortLeftNavbar } from "./leftNavbar";
import { ContentNavbar } from "./ContentNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SignIn } from "~/SignIn/SignIn";
import { useNavigate } from "react-router-dom";


export function TopNavbar({ setSearchedContent, handleSearch, isExpanded, setIsExpanded }) {
    const navigate = useNavigate();

    const handleTyping = (event) => {
        setSearchedContent(event.target.value);
    };

    return (
        <div className="sticky top-0 bg-gray-950 pb-1">
            {/* Top Navbar */}
            <div className="flex justify-between h-14 px-3 items-center">
                {/* Left Section */}
                <div className="flex items-center">
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className="text-white w-10 h-10 text-xl p-2 bg-gray-800 cursor-pointer hover:bg-gray-600 rounded-lg"
                        onClick={() => setIsExpanded(!isExpanded)}
                    />
                    <FontAwesomeIcon 
                        icon={faYoutube} 
                        className="bg-white rounded-lg p-1 w-10 h-10 ml-5 cursor-pointer" 
                    />
                    <h1 className="text-white ml-2 font-bold cursor-pointer">Entertainment</h1>
                </div>

                {/* Search Bar */}
                <div className="relative flex items-center">
                    <input 
                        placeholder="Search"
                        className="h-10 w-96 bg-transparent text-white border border-gray-500 rounded-l-full px-4"
                        onChange={handleTyping}
                    />
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass} 
                        onClick={handleSearch} 
                        className="text-gray-500 text-xl bg-gray-800 px-5 py-2.5 rounded-r-full cursor-pointer"
                    />
                    <FontAwesomeIcon 
                        icon={faMicrophone} 
                        className="text-gray-500 text-lg bg-gray-800 px-4 py-3 rounded-full cursor-pointer ml-3 hover:bg-gray-900"
                    />
                </div>

                {/* User Icon */}
                <div className="flex items-center">
                <button onClick={() => navigate("/Signin")} className="text-black w-20 h-9 text-lg cursor-pointer bg-gray-500 hover:bg-gray-400 rounded-xl mr-2">
                    Sign In
                </button>
                <FontAwesomeIcon icon={faUser} className="text-black w-10 h-10 py-2 rounded-full text-xl cursor-pointer bg-gray-500" />
                </div>
            </div>

            {/* Content Navbar */}
            <ContentNavbar setSearchedContent={setSearchedContent} handleSearch={handleSearch} isExpanded={isExpanded} />

            {/* Left Navigation with Animation */}
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    <motion.div
                        key="left-navbar"
                        initial={{ x: -100, y:-110, opacity: 0 }}
                        animate={{ x: 0, y:-110,opacity: 1 }}
                        exit={{ x: -100, y:-110,opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <LeftNavbar />
                    </motion.div>
                ) : (
                    <motion.div
                        key="short-left-navbar"
                        initial={{ x: -100, y:-110 ,opacity: 0 }}
                        animate={{ x: 0, y:-110,opacity: 1 }}
                        exit={{ x: -100, y:-110,opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <ShortLeftNavbar />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
