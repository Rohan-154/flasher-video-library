import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";
import { DataReducer } from "../Reducer/video-reducer";
import { Abbreviations } from "../services/abbreviations";
import { getCategoryService } from "../services/dataservice";
import { useFetch } from "../custom-hooks/useFetch";
import { useState } from "react";
const VideoProvider = ({ children }) => {
  const { data: video } = useFetch("/api/videos", "videos");
  const [modal, setModal] = useState(false);
  const [modalData, setmodalData] = useState({});
  const DatainitialState = {
    videos: [],
    categories: [],
    sortBy: "All",
    isInLiked: false,
    isInWatchLater: false,
  };
  const [Datastate, Datadispatch] = useReducer(DataReducer, DatainitialState);
  useEffect(() => {
    video &&
      Datadispatch({
        type: Abbreviations.INITIAL_VIDEOS,
        payload: video,
      });
  }, [video]);
  useEffect(() => {
    (async () => {
      try {
        const catData = await getCategoryService();
        Datadispatch({
          type: Abbreviations.INITIAL_CATEGORY,
          payload: catData.data.categories,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [Datadispatch]);

  return (
    <VideoContext.Provider
      value={{
        Datadispatch,
        Datastate,
        modal,
        setModal,
        modalData,
        setmodalData,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const VideoContext = createContext();
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
