import YouTube from "react-youtube";

export function Player({ videos }) {

  <iframe width="560" height="315" src="https://www.youtube.com/embed/f2RNjDQfW4Q?si=4M6976H28faeKhSR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 1, // Auto-play video
    },
  };

  return <YouTube videoId={videos} opts={opts} />;
}