import { deleteLikeHandler } from "../Handlers/likeHandler";
import { deleteWatchLaterHandler, postWatchLaterHandler } from "../Handlers/watchLaterhandler";

const watchLaterHandler = (token, Datadispatch, video, isInWatchLater) => {
  isInWatchLater
    ? deleteWatchLaterHandler(token, Datadispatch, video._id)
    : postWatchLaterHandler(token, Datadispatch, video);
};
export { watchLaterHandler };
