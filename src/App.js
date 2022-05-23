import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Auth/Login/login";
import { SignUp } from "./Components/Auth/SignUp/signup";
import { Navbar } from "./Components/Navbar/navbar";
import { PlaylistModal } from "./Components/PlaylistModal/playlistmodal";
import { PrivateRoute } from "./Components/PrivateRoute/privateRoute";
import { useTheme } from "./Context/themeContext";
import { HistoryVideo } from "./Pages/History/history";
import { LikedVideo } from "./Pages/Liked-Videos/likeVideo";
import Playlist from "./Pages/Playlist/playlist";
import { SingleVideo } from "./Pages/Single-Video-Page/single-video";
import { SinglePlay } from "./Pages/SinglePlaylistNav/singlePlay";
import { VideoListing } from "./Pages/Video-Listing/videoListing";
import { WatchLater } from "./Pages/WatchLater/watchLater";
function App() {
  const {theme} = useTheme();
  return (
    <div className="App" style={{
      color: theme === "light" ? "black" : "#fff",
      backgroundColor: theme === "light" ? "#e0e0eb" : "#141319",
    }}>
      <PlaylistModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route
          path="/liked"
          element={
            <PrivateRoute>
              <LikedVideo />
            </PrivateRoute>
          }
        />
        <Route
          path="/watchLater"
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
              <HistoryVideo />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist"
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <PrivateRoute>
              <SinglePlay />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
