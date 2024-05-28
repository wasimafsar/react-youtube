import { useEffect, useState, useRef } from "react";

import "./Center.css";

function Center() {
  const key = "AIzaSyBQW8T3pgOXgk8cbm5tXfLts3uqRJuGcYs";
  const channelId = "UCBR8-60-B28hp2BmDPdntcQ";
  const [videos, setVideos] = useState([]);
  const inputValue = useRef(null);

  function searchRecords() {
    alert(inputValue.current.value);
  }
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=100&order=date&key=${key}`
    )
      .then((response) => response.json())
      .then((response) => setVideos(response.items));
  }, []);

  return (
    <>
      <input type="text" ref={inputValue} name="search" id="search" />
      <button onClick={searchRecords}>Search</button>
      <div className="layout">
        {videos.map((video) => {
          return (
            <div className="container">
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                <img
                  key={video.id.videoId}
                  src={video.snippet.thumbnails.default.url}
                  alt="video"
                  width={video.snippet.thumbnails.default.width}
                  height={video.snippet.thumbnails.default.height}
                />
                <p>{video.snippet.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Center;
