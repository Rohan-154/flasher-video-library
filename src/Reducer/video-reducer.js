import { Abbreviations } from "../services/abbreviations";

const DataReducer = (state, action) => {
  switch (action.type) {
    case Abbreviations.INITIAL_VIDEOS:
      return { ...state, videos: action.payload };
    case Abbreviations.INITIAL_CATEGORY:
      return { ...state, categories: action.payload };
    case Abbreviations.SORT_BY:
      return { ...state, sortBy: action.payload };
    case Abbreviations.LOGOUT:
      return { ...state };
    case Abbreviations.LIKE_VIDEO:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInLiked: action.payload.some((item) => item._id === video._id),
        })),
      };
    case Abbreviations.WATCH_LATER:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInWatchLater: action.payload.some((item) => item._id === video._id),
        })),
      };
      case Abbreviations.ADD_TO_HISTORY:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInHistory: action.payload.some((item) => item._id === video._id),
        })),
      };
  }
};

export { DataReducer };
