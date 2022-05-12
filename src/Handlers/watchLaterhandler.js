import { Abbreviations } from "../services/abbreviations";
import {
  deleteWatchLaterService,
  postWatchLaterService,
} from "../services/watchLaterservice";

const postWatchLaterHandler = async (token, Datadispatch, videoItem) => {
  try {
    const {
      data: { watchlater },
    } = await postWatchLaterService(token, videoItem);
    watchlater &&
      Datadispatch({
        type: Abbreviations.WATCH_LATER,
        payload: watchlater,
      });
  } catch (error) {
    console.log("Could not save the video to watch later", error);
  }
};
const deleteWatchLaterHandler = async (token, Datadispatch, videoId) => {
  try {
    const {
      data: { watchlater },
    } = await deleteWatchLaterService(token, videoId);
    watchlater &&
      Datadispatch({
        type: Abbreviations.WATCH_LATER,
        payload: watchlater,
      });
  } catch (error) {
    console.log("Unable to delete the video", error);
  }
};
export { postWatchLaterHandler, deleteWatchLaterHandler };
