import { Abbreviations } from "../services/abbreviations";
import {
  clearHistoryService,
  deleteHistoryService,
  postHistoryService,
} from "../services/historyService";

const postHistoryHandler = async (token, dataDispatch, videoItem) => {
  try {
    const {
      data: { history },
    } = await postHistoryService(token, videoItem);
    history &&
      dataDispatch({
        type: Abbreviations.ADD_TO_HISTORY,
        payload: history,
      });
  } catch (error) {
    console.log("Ching!", error);
  }
};
const deleteHistoryHandler = async (token, dataDispatch, videoId) => {
  try {
    const {
      data: { history },
    } = await deleteHistoryService(token, videoId);
    history &&
      dataDispatch({
        type: Abbreviations.ADD_TO_HISTORY,
        payload: history,
      });
  } catch (error) {
    console.log("Unable to delete!", error);
  }
};
const clearAllHistoryHandler = async (token, dataDispatch)=>{
  try {
    const {data : {history}}= await clearHistoryService(token);
    dataDispatch({
      type: Abbreviations.ADD_TO_HISTORY,
      payload: history
    })
  } catch (error) {
    console.log("Ching! Error", error);
  }
}
export { postHistoryHandler, deleteHistoryHandler,clearAllHistoryHandler };
