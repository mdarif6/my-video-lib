import React from "react";
import { useVideo } from "../../context/video-context";

export default function FilterCategories({ category }) {
  const { state, dispatch } = useVideo();
  return (
    <div key={category._id}>
      <p className="v-chip">{category.categoryName}</p>
    </div>
  );
}
