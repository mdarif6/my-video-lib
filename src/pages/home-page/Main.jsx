import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../../context/video-context";
import VideoCard from "./VideoCard";
export default function Main() {
  const { state, dispatch } = useVideo();
  useEffect(() => {
    (async function showVideos() {
      try {
        const response = await axios.get("api/videos");
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          dispatch({ type: "SET_VIDEOS", payload: response.data.videos });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="v-main">
      <div className="v-main-heading">Must Watch Videos</div>
      <div className="v-main-content">
        {state.videos.map((item) => (
          <VideoCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
