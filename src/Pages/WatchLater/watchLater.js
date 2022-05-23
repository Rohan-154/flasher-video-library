import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useVideo } from "../../Context/dataContext";
import { useMediaPredicate } from "react-media-hook";
import { Footer } from "../../Components/Fixed-Footer/footer";
import { useAuth } from "../../Context/authContext";
import { deleteWatchLaterHandler } from "../../Handlers/watchLaterhandler";
import { useNavigate } from "react-router-dom";
import emptyLikeImg from "../../Assets/naruto.png";
import { useTheme } from "../../Context/themeContext";
import { useEffect } from "react";
const WatchLater = () => {
  const { Datastate, dataDispatch } = useVideo();
  const { videos } = Datastate;
  const { token } = useAuth();
  const { navigate } = useNavigate();
  const watchLaterVideos = videos.filter((item) => item.isInWatchLater);
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Watch Later";
  }, []);
  return (
    <>
      {!biggerThan600 ? <Sidebar /> : <Footer />}
      {watchLaterVideos.length > 0 ? (
        <section className="home-section home-section-like">
          <div className="text">
            {watchLaterVideos &&
              watchLaterVideos.map((video) => (
                <div class="container" key={video._id}>
                  <figure
                    class="menu-card"
                    style={{
                      color: theme === "light" ? "black" : "#fff",
                      backgroundColor:
                        theme === "light" ? "#e0e0eb" : "#191921",
                      boxShadow:
                        theme === "light"
                          ? "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                          : "rgba(179, 179, 0) 5px 5px",
                    }}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
                      onClick={() => navigate(`/video/${video._id}`)}
                    />
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
      ) : (
        <div className="flex-wrap-row">
          <img src={emptyLikeImg} alt="empty-liked" className="img-empty" />
          <div className="flex-wrap-column">
            <h2>Heya! It seems you have not saved anything yet!</h2>
            <button
              class="btn-com btn-primary-outline btn-video"
              onClick={() => navigate("/")}
            >
              {" "}
              Explore Now{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { WatchLater };
