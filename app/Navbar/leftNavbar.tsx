import { faStaylinked, faViadeo, faWatchmanMonitoring, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faBars, faFlag, faGear, faHistory, faHome, faList, faPhone, faPhoneFlip, faPlayCircle, faShoppingCart, faSubscript, faThumbsUp, faUser, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LeftNavbar() {

  
  return (
    <>
    <div className="fixed top-14 left-0 flex flex-col text-left bg-gray-950 w-1/6 z-50">
    {/* <div className="flex items-center p-3 hidden">
        <FontAwesomeIcon icon={faBars} className="text-white w-10 h-12 text-2xl cursor-grab"/>
        <FontAwesomeIcon icon={faYoutube} className="bg-white rounded-4xl p-1 w-10 h-10 ml-5 cursor-grab" />
        <h1 className="text-white ml-2 font-bold cursor-grab">Entertainment</h1>
    </div> */}
    <div className="border-1 border-gray-500 m-1"></div>
    <div className="w-full text-white p-2">
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faHome} className="mr-2" /> Home</li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Shorts</li>
    <li className="list-nonse py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faSubscript} className="mr-2" /> Subscriptions</li>
    </div>
    <div className="border-1 border-gray-500 m-1"></div>
    <div className="w-full text-white p-2">
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4 group">You <FontAwesomeIcon icon={faArrowRight} className="transform transition-transform group-hover:translate-x-2" /></li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faHistory} className="mr-2" /> History</li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faList} className="mr-2" /> Subscriptions</li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faVideo} className="mr-2" /> Your Videos</li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faWatchmanMonitoring} className="mr-2" /> Watch Later</li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> Liked Videos</li>
    </div>
    <div className="border-1 border-gray-500 m-1"></div>
    <div className="w-full text-white p-2">
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faGear} className="mr-2" /> Settings</li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faFlag} className="mr-2" /> Report</li>
    <li className="list-none py-2 hover:bg-gray-700 cursor-grab rounded-xl pl-4"><FontAwesomeIcon icon={faPhone} className="mr-2" /> Help</li>
    </div>
    <div className="border-1 border-gray-500 m-1"></div>
    <p className="text-white p-2">Entertainment &#169;</p>
    </div>
    </>
  );
}

export function ShortLeftNavbar() {
    return (
      <>
      <div className="fixed top-14 left-0 flex flex-col text-left bg-gray-950 w-20 h-screen">
      {/* <div className="flex items-center p-3 hidden">
          <FontAwesomeIcon icon={faBars} className="text-white w-10 h-12 text-2xl cursor-grab"/>
          <FontAwesomeIcon icon={faYoutube} className="bg-white rounded-4xl p-1 w-10 h-10 ml-5 cursor-grab" />
          <h1 className="text-white ml-2 font-bold cursor-pointer">Entertainment</h1>
      </div> */}
      <div className="border-1 border-gray-500 m-1"></div>
      <div className="w-full text-white">
      <li className="flex flex-col items-center text-xs list-none p-2 hover:bg-gray-700 cursor-pointer rounded-xl"><FontAwesomeIcon icon={faHome} className="p-2 text-lg"/> Home</li>
      <li className="flex flex-col items-center text-xs list-none p-2 hover:bg-gray-700 cursor-pointer rounded-xl"><FontAwesomeIcon icon={faShoppingCart} className="p-2 text-lg"/> Shorts</li>
      <li className="flex flex-col items-center text-xs list-none p-2 hover:bg-gray-700 cursor-pointer rounded-xl"><FontAwesomeIcon icon={faSubscript} className="p-2 text-lg"/> Subscriptions</li>
      <li className="flex flex-col items-center text-xs list-none p-2 hover:bg-gray-700 cursor-pointer rounded-xl group">You <FontAwesomeIcon icon={faArrowRight} className="text-xl transform transition-transform group-hover:translate-x-2 p-2"/></li>
      </div>
      <div className="border-1 border-gray-500 m-1"></div>
      </div>
      </>
    );
  }
  