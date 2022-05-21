import { Sidebar } from "../../Components/Sidebar/sidebar";
import { VideoCard } from "../../Components/VideoCard/video-card";
import { useVideo } from "../../Context/dataContext";
import { SearchVideos, SortedCategory } from "../../helper_functions/categorySort";
import { Abbreviations } from "../../services/abbreviations";
import "../Video-Listing/videoListing.css";
const VideoListing = () => {
  const { Datastate, dataDispatch } = useVideo();
  const { categories, videos, sortBy,search } = Datastate;
  const sortHandler = (catName) => {
    dataDispatch({ type: Abbreviations.SORT_BY, payload: catName });
  };
  const sortedSearch = SearchVideos(videos,search)
  const sortedCategory = SortedCategory(sortedSearch, sortBy);
  return (
    <>
      <Sidebar />
      <section className="home-section">
        <div>
          <div className="category-list">
            {categories &&
              categories.map(({ _id, categoryName }) => (
                <div
                  key={_id}
                  className={`category-single ${categoryName === sortBy && "active-category"}`}
                  onClick={() => sortHandler(categoryName)}
                >
                  {categoryName}
                </div>
              ))}
          </div>
        </div>
        <div className="text">
          {sortedCategory &&
            sortedCategory.map((video) => (
              <VideoCard video={video} key={video._id} />
            ))}
        </div>
      </section>
    </>
  );
};
export { VideoListing };
