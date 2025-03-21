import { useState, useEffect } from "react";

export function Card({ searchedContent = "" }) { // 🔥 Default empty string
  const [videos, setVideos] = useState([]); // Video state
  const [astate, setAstate] = useState(false); // Sidebar state

  useEffect(() => {
    if (!searchedContent.trim()) return; // ✅ Agar empty hai to API call mat karo

    const fetchVideos = async () => {
      const apiKey = 'AIzaSyCiGHln8V8uuyGx8MWqNl0DfynX6p7VNy4'; // ⚠️ API key .env me safe rakho
      const maxResults = 20;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchedContent}&maxResults=${maxResults}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("API Response:", data);
        setVideos(data.items || []); // Ensure videos is always an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideos();
  }, [searchedContent]); // 🔥 Jab search query change ho, tabhi API call ho

  return (
    <div className={`${astate ? "ml-60 w-8/12" : "ml-28 w-11/12"} flex flex-wrap gap-4 mt-3 text-white`}>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id.videoId || video.etag} className="hover:cursor-pointer w-96">
            <img src={video.snippet.thumbnails?.high?.url} alt={video.snippet.title} className="w-full rounded-2xl" />
            <div>
              <h1 className="text-md text-wrap">
                {video.snippet.title.length > 55 ? video.snippet.title.slice(0, 55) + "..." : video.snippet.title}
              </h1>
              <p className="text-sm">{video.snippet.channelTitle}</p>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="flex w-full justify-center items-center p-10">Search content</p>
      )}
    </div>
  );
}
