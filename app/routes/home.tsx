import { useState } from "react";
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Card } from "../Cards/card";
import { TopNavbar } from "../Navbar/topNavbar"
import { ShortLeftNavbar } from "../Navbar/leftNavbar"
// import {GlobalProvider} from "../Global"
import { BrowserRouter } from "react-router-dom";
import { SignIn } from "~/SignIn/SignIn";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Entertainment" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [searchedContent, setSearchedContent] = useState();
  const [videos, setVideos] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);


const fetchVideos = async () => {
const apiKey = 'AIzaSyAqTrum9T7H7dRef24ShOEOTIpk_Vpw3f8'; // ⚠️ API key .env me safe rakho
const maxResults = 10;
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchedContent}&maxResults=${maxResults}&key=${apiKey}`;
// const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchedContent}&maxResults=${maxResults}&key=${apiKey}&videoDuration=short&type=video&q=%23shorts`;


try {
  const response = await fetch(url);
  const data = await response.json();
  console.log("API Response:", data);
  setVideos(data.items || []); // Ensure videos is always an array
} catch (error) {
  console.error("Error fetching data:", error);
}
};
  const handleSearch = () => {
    console.log(searchedContent);
    fetchVideos();
};
  
  return(
    <div className="bg-gray-950">

    <TopNavbar setSearchedContent={setSearchedContent} handleSearch={handleSearch} isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
    <Card videos={videos} isExpanded={isExpanded}/>
    <SignIn/>
    </div>
    );
}