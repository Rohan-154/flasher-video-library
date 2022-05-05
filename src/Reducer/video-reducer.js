import { Abbreviations } from "../services/abbreviations";

const DataReducer = (state, action) => {
  switch (action.type) {
    case Abbreviations.INITIAL_VIDEOS:
      return { ...state, videos: action.payload };
    case Abbreviations.INITIAL_CATEGORY:
      return { ...state, categories: action.payload };
case Abbreviations.SORT_BY:
    return {...state, sortBy : action.payload}
    default:
      return state;
  }
};

export { DataReducer };
