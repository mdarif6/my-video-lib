import React, { useState } from "react";
import { useVideo } from "../../context/video-context";

export default function FilterCategories({ category, activeID, setActiveID }) {
  const { state, dispatch } = useVideo();

  function categoryHandler() {
    dispatch({ type: "ADD_CATEGORY", payload: category.categoryName });
  }

  return (
    <div key={category._id}>
      <p
        style={
          category._id === activeID
            ? { backgroundColor: "#ff0000", fontWeight: "bold" }
            : {}
        }
        className="v-chip"
        onClick={() => {
          categoryHandler();
          setActiveID(category._id);
        }}
      >
        {category.categoryName}
      </p>
    </div>
  );
}
