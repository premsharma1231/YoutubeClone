import { useState, useEffect } from "react";

export function Card({videos, isExpanded}) { // 🔥 Default empty string
  return (
    <div className={`${isExpanded ? "ml-60 gap-4" : "ml-28 gap-4"} flex flex-wrap mt-3 text-white pb-14`}>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id.videoId || video.etag} className={`${isExpanded ? "w-[31%]" : "w-96"} hover:cursor-pointer`}>
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