import "./App.css";
import logo from "./logo.png";
import HomePage from "./pages/home-page/HomePage";
import VideoPage from "./pages/video-page/VideoPage";
import { Route, Routes } from "react-router-dom";
import WatchLater from "./pages/watch-later-page/WatchLater";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import HistoryPage from "./pages/history-page/HistoryPage";
import PlaylistListing from "./pages/playlist-listing-page/PlaylistListing";
import CreatePlaylist from "./pages/create-playlist-page/CreatePlaylist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:videoID" element={<VideoPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/playlist" element={<PlaylistListing />} />
        <Route path="/createlist" element={<CreatePlaylist />} />
      </Routes>
    </div>
  );
}

export default App;
