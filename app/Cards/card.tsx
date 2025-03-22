import { useState, useEffect } from "react";

export function Card({ videos}) { // 🔥 Default empty string
  const [astate, setAstate] = useState(false); // Sidebar state


  return (
    <div className={`${astate ? "ml-60 w-8/12" : "ml-28 w-11/12"} flex flex-wrap gap-4 mt-3 text-white pb-14`}>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id.videoId || video.etag} className="hover:cursor-pointer w-96">
            <img src={video.snippet.thumbnails?.high?.url} alt={video.snippet.title} className="w-full rounded-2xl" />
            <div>
              <h1 className="text-md text-wrap mt-2 ml-2">
                {video.snippet.title.length > 55 ? video.snippet.title.slice(0, 55) + "..." : video.snippet.title}
              </h1>
              <p className="text-sm ml-2">{video.snippet.channelTitle}</p>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} className="ml-2" rel="noopener noreferrer">
                Watch Video
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="flex w-full justify-center items-center p-10">Search for the videos</p>
      )}
    </div>
  );
}