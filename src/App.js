import "./App.css";

import HomePage from "./pages/home-page/HomePage";
import VideoPage from "./pages/video-page/VideoPage";
import { Route, Routes } from "react-router-dom";
import WatchLater from "./pages/watch-later-page/WatchLater";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import HistoryPage from "./pages/history-page/HistoryPage";
import PlaylistListing from "./pages/playlist-listing-page/PlaylistListing";
import CreatePlaylist from "./pages/create-playlist-page/CreatePlaylist";
import LikeVideo from "./pages/liked-page/LikeVideo";
import { useAuth } from "./context/auth-context";
import { useEffect } from "react";
import PrivateRoute from "./common/PrivateRoute";
import Modal from "./pages/modal/Modal";
import PlaylistsDetail from "./pages/playlist-details-page/PlaylistsDetail";
import NoPageFound from "./pages/no-page-found/NoPageFound";
import LayoutComponent from "./pages/layout-component/LayoutComponent";

function App() {
  const { state, dispatch } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      dispatch({ type: "SET_AUTH", payload: true });
    } else {
      dispatch({ type: "SET_AUTH", payload: false });
    }
  }, []);

  return (
    <div className="App">
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoID" element={<VideoPage />} />
          <Route path="/playlist/:playlistID" element={<PlaylistsDetail />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/watchlater"
            element={
              <PrivateRoute>
                <WatchLater />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <HistoryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlists"
            element={
              <PrivateRoute>
                <PlaylistsDetail />
              </PrivateRoute>
            }
          />
          <Route path="/createlist" element={<CreatePlaylist />} />
          <Route
            path="/like"
            element={
              <PrivateRoute>
                <LikeVideo />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlist"
            element={
              <PrivateRoute>
                <PlaylistListing />
              </PrivateRoute>
            }
          />

          <Route path="/modal" element={<Modal />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </LayoutComponent>
    </div>
  );
}

export default App;
