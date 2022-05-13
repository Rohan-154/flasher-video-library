import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Auth/Login/login";
import { Navbar } from "./Components/Navbar/navbar";
import { PrivateRoute } from "./Components/PrivateRoute/privateRoute";
import { HistoryVideo } from "./Pages/History/history";
import { LikedVideo } from "./Pages/Liked-Videos/likeVideo";
import { SingleVideo } from "./Pages/Single-Video-Page/single-video";
import { VideoListing } from "./Pages/Video-Listing/videoListing";
import { WatchLater } from "./Pages/WatchLater/watchLater";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </div>
  );
}

export default App;
