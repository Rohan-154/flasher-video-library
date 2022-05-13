import { Abbreviations } from "../services/abbreviations";
import {
  clearHistoryService,
  deleteHistoryService,
  postHistoryService,
} from "../services/historyService";

const postHistoryHandler = async (token, Datadispatch, videoItem) => {
  try {
    const {
      data: { history },
    } = await postHistoryService(token, videoItem);
    history &&
      Datadispatch({
        type: Abbreviations.ADD_TO_HISTORY,
        payload: history,
      });
  } catch (error) {
    console.log("Ching!", error);
  }
};
const deleteHistoryHandler = async (token, Datadispatch, videoId) => {
  try {
    const {
      data: { history },
    } = await deleteHistoryService(token, videoId);
    history &&
      Datadispatch({
        type: Abbreviations.ADD_TO_HISTORY,
        payload: history,
      });
  } catch (error) {
    console.log("Unable to delete!", error);
  }
};
const clearAllHistoryHandler = async (token, Datadispatch)=>{
  try {
    const {data : {history}}= await clearHistoryService(token);
    Datadispatch({
      type: Abbreviations.ADD_TO_HISTORY,
      payload: history
    })
  } catch (error) {
    console.log("Ching! Error", error);
  }
}
export { postHistoryHandler, deleteHistoryHandler,clearAllHistoryHandler };
