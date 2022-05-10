import { Abbreviations } from "../services/abbreviations";
import {
  deleteLikeService,
  getLikeService,
  postLikeService,
} from "../services/likeServices";

const getLikeHandler = async (token, Datadispatch) => {
  try {
    const {
      data: { likes },
    } = await getLikeService(token);
    likes &&
      Datadispatch({
        type: Abbreviations.LIKE_VIDEO,
        payload: likes,
      });
  } catch (error) {
    console.log("Like Handler Currently Down!", error);
  }
};

const postLikeHandler = async (token, Datadispatch, videoItem) => {
  try {
    const {
      data: { likes },
    } = await postLikeService(token, videoItem);
    likes &&
      Datadispatch({
        type: Abbreviations.LIKE_VIDEO,
        payload: likes,
      });
  } catch (error) {
    console.log("Unable to like the video, try after some time!", error);
  }
};

const deleteLikeHandler = async (token, videoId, Datadispatch) => {
  try {
    const {
      data: { likes },
    } = await deleteLikeService(token, videoId);
    likes &&
      Datadispatch({
        type: Abbreviations.LIKE_VIDEO,
        payload: likes,
      });
  } catch (error) {
    console.log("Unable to delete video!", error);
  }
};
export { deleteLikeHandler, getLikeHandler, postLikeHandler };
