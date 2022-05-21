import { deleteLikeHandler, postLikeHandler } from "../Handlers/likeHandler";

const LikeHandler = (token, singleVideo, Datadispatch, isInLiked) => {
  console.log(isInLiked);
  isInLiked
    ? deleteLikeHandler(token, singleVideo._id, Datadispatch)
    : postLikeHandler(token, Datadispatch, singleVideo);
};

export { LikeHandler };
