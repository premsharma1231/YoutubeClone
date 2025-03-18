import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function ContentNavbar() {
    const navbarRef = useRef<HTMLDivElement>(null);

    // Function to scroll left
    const scrollLeft = () => {
        if (navbarRef.current) {
            navbarRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    // Function to scroll right
    const scrollRight = () => {
        if (navbarRef.current) {
            navbarRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    // Function to enable Shift + Scroll
    const handleShiftScroll = (e: React.WheelEvent) => {
        if (e.shiftKey && navbarRef.current) {
            navbarRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div className="flex items-center ml-25 mr-10 my-5">
            {/* Left Scroll Button */}
            <button onClick={scrollLeft} className="cursor-grab absolute left-0 z-10 hover:bg-gray-800 ml-25 py-2 px-4 rounded-full text-white shadow-lg">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Scrollable Navbar */}
            <div
                ref={navbarRef}
                onWheel={handleShiftScroll}
                className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide mx-10 px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            >
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">All</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Music</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Mixes</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Indian Pop Music</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Shark Tank</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Game Shows</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Comedy Nights with Kapil</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Batter</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">T-Series</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Movie Musicals</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Dramedy</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Bowling</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Batting</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Web Development</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">Watched</button>
                <button className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-grab hover:bg-gray-800 transition-all">New to you?</button>
            </div>

            {/* Right Scroll Button */}
            <button onClick={scrollRight} className="cursor-grab absolute right-0 z-10 mr-5 hover:bg-gray-800 py-2 px-4 rounded-full ml-4 text-white shadow-lg">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}
