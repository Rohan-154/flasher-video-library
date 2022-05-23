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
    case Abbreviations.CREATE_PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
      };
    case Abbreviations.UPDATE_VIDEO_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map((list) =>
          list._id === action.payload._id ? action.payload : list
        ),
      };
    case Abbreviations.SEARCH_VIDEOS:
      return {
        ...state,
        search: action.payload,
      };
      case Abbreviations.SORT_BY_DATE:
      return {
        ...state,
        sortByDate: !state.sortByDate,
      };
  }
};

export { DataReducer };
