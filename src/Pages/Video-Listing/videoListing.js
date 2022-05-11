import { Sidebar } from "../../Components/Sidebar/sidebar";
import { VideoCard } from "../../Components/VideoCard/video-card";
import { useVideo } from "../../Context/dataContext";
import "../Video-Listing/videoListing.css";
const VideoListing = () => {
  const { Datastate } = useVideo();
  const { categories, videos } = Datastate;
  return (
    <>
      <Sidebar />
      <section className="home-section">
      
        <div>
          <div className="category-list">
            {categories.map(({ _id, categoryName }) => (
              <div
                key={_id}
                className="category-single"
              >
                {categoryName}
              </div>
            ))}
          </div>
        </div>
        <div className="text">
          {videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
       
      </section>
    </>
  );
};
export { VideoListing };
