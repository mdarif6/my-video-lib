import React from "react";

export default function Header() {
  return (
    <div className="v-header">
      <div className="v-logo">
        <span>My</span>Website
      </div>

      <div className="v-search-and-button">
        <input
          className="v-search-box"
          type="search"
          placeholder="search your content here"
        />
        <button className="v-search-button" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div className="v-user-profile">
        <i class="fas fa-user-circle"></i>
      </div>
    </div>
  );
}
