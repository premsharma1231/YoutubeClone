import { useState, useEffect } from "react";

export function Card() {
  const [videos, setVideos] = useState([]); // State for storing videos

  useEffect(() => {
    const apiKey = "AIzaSyCiGHln8V8uuyGx8MWqNl0DfynX6p7VNy4"; // ⚠️ API key ko .env me daal!
    const searchQuery = "All Night";
    const maxResults = 100; 
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=${maxResults}&key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items); // Store fetched videos in state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="ml-28 flex flex-wrap gap-4 mt-5 text-white w-11/12 ">
      {videos.map((video) => (
        <div key={video.id.videoId} className="hover:cursor-pointer w-96">
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title} className="w-full rounded-2xl"
          />
          <div>
          <h1 className="text-md text-wrap">
            {video.snippet.title.length > 55 
              ? video.snippet.title.slice(0, 55) + "..." 
              : video.snippet.title}
          </h1>
            {/* <p className="text-sm">{video.snippet.description}</p> */}
            <p className="text-sm">{video.snippet.channelTitle}</p>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              Watch Video
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}