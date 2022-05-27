import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../../context/video-context";
import VideoCard from "./VideoCard";
import Nav from "./Nav";
export default function Main() {
  const { state, dispatch } = useVideo();
  useEffect(() => {
    (async function showVideos() {
      try {
        const response = await axios.get("api/videos");

        if (response.status === 200 || response.status === 201) {
          dispatch({ type: "SET_VIDEOS", payload: response.data.videos });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function filterByCategory(items, categ) {
    if (categ && categ !== "All") {
      return items.filter((item) => {
        return item.category === categ;
      });
    } else {
      return items;
    }
  }

  function searchingVideos(videos, query) {
    return videos.filter((video) => {
      return video.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  const setByCategory = filterByCategory(state.videos, state.sortByCategory);
  const setBySearch = searchingVideos(setByCategory, state.searchQuery);

  return (
    <div className="v-main">
      <Nav />
      <div className="v-main-heading">Trending Videos</div>
      <div className="v-main-content">
        {setBySearch.map((item) => (
          <VideoCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
