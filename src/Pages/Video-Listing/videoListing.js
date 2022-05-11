import { Sidebar } from "../../Components/Sidebar/sidebar";
import { VideoCard } from "../../Components/VideoCard/video-card";
import { useVideo } from "../../Context/dataContext";
import { SortedCategory } from "../../helper_functions/categorySort";
import { Abbreviations } from "../../services/abbreviations";
import "../Video-Listing/videoListing.css";
const VideoListing = () => {
  const { Datastate, Datadispatch } = useVideo();
  const { categories, videos, sortBy } = Datastate;
  const sortHandler = (catName) => {
    Datadispatch({ type: Abbreviations.SORT_BY, payload: catName });
  };
  const sortedCategory = SortedCategory(videos, sortBy);
  console.log(videos);
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
                  className="category-single"
                  onClick={()=> sortHandler(categoryName)}
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
