import React from "react";
import { useEffect } from "react";
import { useVideo } from "../../context/video-context";
import FilterCategories from "./FilterCategories";

export default function Nav() {
  const { state, dispatch } = useVideo();
  useEffect(() => {
    fetch("api/categories")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "SET_CATEGORIES", payload: data.categories })
      );
  }, []);

  return (
    <div className="v-nav">
      <div className="v-chip-wraper">
        {state.categories.map((category) => (
          <FilterCategories key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}
