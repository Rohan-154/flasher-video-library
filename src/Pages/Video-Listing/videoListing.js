import { Sidebar } from "../../Components/Sidebar/sidebar";
import { VideoCard } from "../../Components/VideoCard/video-card";
import { useVideo } from "../../Context/dataContext";
import { useTheme } from "../../Context/themeContext";
import {
  SearchVideos,
  SortedCategory,
  sortVideosByDate,
} from "../../helper_functions/categorySort";
import { Abbreviations } from "../../services/abbreviations";
import "../Video-Listing/videoListing.css";
import { useMediaPredicate } from "react-media-hook";
import { Footer } from "../../Components/Fixed-Footer/footer";
const VideoListing = () => {
  const { Datastate, dataDispatch } = useVideo();
  const { categories, videos, sortBy, search, sortByDate } = Datastate;
  const sortHandler = (catName) => {
    dataDispatch({ type: Abbreviations.SORT_BY, payload: catName });
  };
  const sortedSearch = SearchVideos(videos, search);
  const sortedCategory = SortedCategory(sortedSearch, sortBy);
  const sortedDate = sortVideosByDate(sortedCategory, sortByDate);
  const { theme } = useTheme();
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  return (
    <>
      {!biggerThan600 ? <Sidebar /> : <Footer />}
      <section className="home-section">
        <div className="flex-wrap-column-2">
          <div className="category-list">
            {categories &&
              categories.map(({ _id, categoryName }) => (
                <div
                  key={_id}
                  className={`category-single ${
                    categoryName === sortBy && "active-category"
                  }`}
                  onClick={() => sortHandler(categoryName)}
                  style={{
                    color: theme === "light" ? "black" : "#fff",
                    backgroundColor: theme === "light" ? "#e0e0eb" : "#404040",
                  }}
                >
                  {categoryName}
                </div>
              ))}
          </div>
          <div
            className="sort-date"
            onClick={() => dataDispatch({ type: Abbreviations.SORT_BY_DATE })}
          >
            {sortByDate ? (
              <>
                <span>Clear</span>
              </>
            ) : (
              <>
                <i className="fa fa-sort-amount-desc" aria-hidden="true" />
                <span> Sort Latest</span>
              </>
            )}
          </div>
        </div>
        <div className="text">
          {sortedDate &&
            sortedDate.map((video) => (
              <VideoCard video={video} key={video._id} />
            ))}
        </div>
      </section>
    </>
  );
};
export { VideoListing };
