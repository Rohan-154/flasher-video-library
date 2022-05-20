import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useVideo } from "../../Context/dataContext";
import { useMediaPredicate } from "react-media-hook";
import { Footer } from "../../Components/Fixed-Footer/footer";
import { useAuth } from "../../Context/authContext";
import { deleteWatchLaterHandler } from "../../Handlers/watchLaterhandler";
const WatchLater = () => {
  const { Datastate, dataDispatch } = useVideo();
  const { videos } = Datastate;
  const { token } = useAuth();
  const WatchLaterVideos = videos.filter((item) => item.isInWatchLater);
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  return (
    <>
      <Footer />
      {!biggerThan600 && <Sidebar />}
      <section className="home-section home-section-like">
        <div className="text">
          {WatchLaterVideos &&
            WatchLaterVideos.map((video) => (
              <div class="container" key={video._id}>
                <figure class="menu-card">
                  <img src={`https://i.ytimg.com/vi/${video._id}/0.jpg`} />
                  <figcaption>
                    <h3 className="video-title">{video.title}</h3>
                    <p className="subtitle">{video.catchName}</p>
                    <div className="date-three-bars">
                      <p>{video.uploaded}</p>
                      <div
                        onClick={() =>
                          deleteWatchLaterHandler(
                            token,
                            dataDispatch,
                            video._id
                          )
                        }
                      >
                        <span>
                          <i class="fa-solid fa-trash"></i>
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export { WatchLater };
