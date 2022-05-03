import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/navbar";
import { VideoListing } from "./Pages/Video-Listing/videoListing";
function App() {
  return (

    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/explore' element={<VideoListing/>}/>
     </Routes>
    </div>
  );
}

export default App;
