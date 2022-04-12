import "./App.css";
import logo from "./logo.png";
import HomePage from "./pages/home-page/HomePage";
import VideoPage from "./pages/video-page/VideoPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
