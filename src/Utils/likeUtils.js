import { deleteLikeHandler, postLikeHandler } from "../Handlers/likeHandler";

const LikeHandler = (token, singleVideo, dataDispatch, isInLiked) => {
  isInLiked
    ? deleteLikeHandler(token, singleVideo._id, dataDispatch)
    : postLikeHandler(token, dataDispatch, singleVideo);
};

export { LikeHandler };
