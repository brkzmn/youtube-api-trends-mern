import React from "react";
import useFetch from "../hooks/useFetch";

const TrendVideos = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:5000/youtube/trends/tr"
  );
  console.log(data);
  return (
    <div>
      {isLoading === true && <div>loading...</div>}
      {error !== null && <div>{error}</div>}
      {data !== null &&
        data.items.map((video) => {
          return (
            <div style={{ border: "1px solid black" }}>
              <div>{video.id}</div>
              <div>{video.snippet.title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default TrendVideos;
