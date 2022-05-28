import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
const VideoContext = createContext();

const initialState = {
  videos: [],
  categories: [],
  sortByCategory: "",
  searchQuery: "",
  history: [],
  watchlater: [],
  liked: [],
  playlists: [],
  playlistDetail: [],
};

function videoReducer(state, action) {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "ADD_CATEGORY":
      return {
        ...state,
        sortByCategory: action.payload,
      };

    case "SHOW_ALL_CATEGORY":
      return {
        ...state,
        sortByCategory: action.payload,
      };

    case "ADD_SEARCHQUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: action.payload,
      };

    case "DELETE_FROM_HISTORY":
      const updatedHistory = state.history.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, history: updatedHistory };

    case "CLEAR_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        watchlater: action.payload,
      };

    case "DELETE_FROM_WATCHLATER":
      const updatedWatchlater = state.watchlater.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, watchlater: updatedWatchlater };
    case "ADD_TO_LIKED":
      return { ...state, liked: action.payload };

    case "DELETE_FROM_LIKED":
      const updatedLiked = state.liked.filter(
        (item) => item._id == action.payload
      );
      return { ...state, liked: updatedLiked };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlists: action.payload,
      };
    case "ADD_TO_PLAYLIST_DETAIL":
      return {
        ...state,
        playlistDetail: action.payload,
      };

    case "DELETE_FROM_PLAYLIST_DETAIL":
      const updatedPlayListDetail = state.playlistDetail.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        playlistDetail: updatedPlayListDetail,
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
