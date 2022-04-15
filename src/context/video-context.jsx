import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
const VideoContext = createContext();

const initialState = {
  videos: [],
  categories: [],
  videoPlay: [],
};

function videoReducer(state, action) {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "PLAY_VIDEO":
      console.log(action.type);
      return {
        ...state,
        videoPlay: [...state.videoPlay, { ...action.payload }],
      };

    default:
      return state;
  }
}

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider };