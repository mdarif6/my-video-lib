import React from "react";
import { useVideo } from "../../context/video-context";

export default function FilterCategories({ category }) {
  const { state, dispatch } = useVideo();

  function categoryHandler() {
    dispatch({ type: "ADD_CATEGORY", payload: category.categoryName });
  }
  return (
    <div key={category._id}>
      <p className="v-chip" onClick={categoryHandler}>
        {category.categoryName}
      </p>
    </div>
  );
}
