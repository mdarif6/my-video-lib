import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState();

  function searchingVideos(videos, query) {
    return videos.filter((video) => {
      return video.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <div className="v-header">
      <div className="v-logo">
        <Link className="link-style" to="/">
          MyTV <span>18</span>
        </Link>
      </div>

      <div className="v-search-and-button">
        <input
          className="v-search-box"
          type="search"
          placeholder="search your content here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="v-search-button" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div className="v-user-profile">
        <Link className="link-style" to="/login">
          <i class="fas fa-user-circle"></i>
        </Link>
      </div>
    </div>
  );
}
