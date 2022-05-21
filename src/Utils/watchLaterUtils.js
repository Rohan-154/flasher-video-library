import { deleteLikeHandler } from "../Handlers/likeHandler";
import { deleteWatchLaterHandler, postWatchLaterHandler } from "../Handlers/watchLaterhandler";

const watchLaterHandler = (token, dataDispatch, video, isInWatchLater) => {
  isInWatchLater
    ? deleteWatchLaterHandler(token, dataDispatch, video._id)
    : postWatchLaterHandler(token, dataDispatch, video);
};
export { watchLaterHandler };
