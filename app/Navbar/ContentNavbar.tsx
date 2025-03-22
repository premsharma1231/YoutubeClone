import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function ContentNavbar({ setSearchedContent, handleSearch }) {
    const navbarRef = useRef(null);

    const scrollLeft = () => {
        if (navbarRef.current) {
            navbarRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (navbarRef.current) {
            navbarRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const handleShiftScroll = (e) => {
        if (e.shiftKey && navbarRef.current) {
            navbarRef.current.scrollLeft += e.deltaY;
        }
    };

    const categories = [
        "All", "Music", "Mixes", "Indian Pop Music", "Shark Tank", "Game Shows", 
        "Kapil Sharma Show", "Batter", "T-Series", "Movie Musicals", 
        "Dramedy", "Bowling", "Batting", "Web Development", "Watched", "New to you?"
    ];

    return (
        <div className="flex items-center ml-24 mr-10 my-5 relative">
            <button onClick={scrollLeft} className="absolute left-0 z-10 bg-gray-800 py-2 px-4 rounded-full text-white shadow-lg cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div
                ref={navbarRef}
                onWheel={handleShiftScroll}
                className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide mx-10 px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {setSearchedContent(category); handleSearch(); }}
                        className="text-white text-sm py-1 px-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-800 transition-all"
                    >
                        {category}
                    </button>
                ))}
            </div>

            <button onClick={scrollRight} className="cursor-pointer absolute right-0 z-10 bg-gray-800 py-2 px-4 rounded-full text-white shadow-lg">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}
