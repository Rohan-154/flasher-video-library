import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";
import { DataReducer } from "../Reducer/video-reducer";
import { Abbreviations } from "../services/abbreviations";
import { getCategoryService, getVideoService } from "../services/dataservice";

const VideoProvider = ({ children }) => {
  const DatainitialState = {
    videos: [],
    categories: [],
    sortBy: "All",
  };
  const [Datastate, Datadispatch] = useReducer(DataReducer, DatainitialState);
  useEffect(() => {
    (async () => {
      try {
        const vidData = await getVideoService();
        Datadispatch({
          type: Abbreviations.INITIAL_VIDEOS,
          payload: vidData.data.videos,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [Datadispatch]);
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
    <VideoContext.Provider value={{ Datadispatch, Datastate }}>
      {children}
    </VideoContext.Provider>
  );
};

const VideoContext = createContext();
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
