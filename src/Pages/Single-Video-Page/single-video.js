import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Fixed-Footer/footer";
import { Sidebar } from "../../Components/Sidebar/sidebar";
import "../Single-Video-Page/singleVideo.css";
import { useMediaPredicate } from "react-media-hook";
import { LikeHandler } from "../../Utils/likeUtils";
import { useNavigate, useLocation } from "react-router-dom";
import { useVideo } from "../../Context/dataContext";
import { useAuth } from "../../Context/authContext";
import { watchLaterHandler } from "../../Utils/watchLaterUtils";
const SingleVideo = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  const { videoId } = useParams();
  const { Datastate, Datadispatch } = useVideo();
  const { videos } = Datastate;
  const { token } = useAuth();
  const singleVideo =
    videos.length !== 0 && videos?.find((video) => video._id === videoId);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Footer />
      {!biggerThan600 && <Sidebar />}
      <div className="spv-div">
        <div className="single-wrapper">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="vid-content-wrapper">
          <div className="vid-content">
            <h2> {singleVideo.title}</h2>
            <p>{singleVideo.catchName}</p>
            <div className="cta-btn">
              <div
                className={singleVideo.isInLiked ? `active-feat` : `normal-btn`}
                onClick={() =>
                  token
                    ? LikeHandler(
                        token,
                        singleVideo,
                        Datadispatch,
                        singleVideo.isInLiked
                      )
                    : navigate("/login", {
                        replace: true,
                        state: { from: location.pathname },
                      })
                }
              >
                <span>
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{" "}
                  {singleVideo.isInLiked ? "Liked" : "Like"}
                </span>
              </div>
              <div
                className={
                  singleVideo.isInWatchLater ? `active-feat` : `normal-btn`
                }
                onClick={() =>
                  token
                    ? watchLaterHandler(
                        token,
                        Datadispatch,
                        singleVideo,
                        singleVideo.isInWatchLater
                      )
                    : navigate("/login", {
                        replace: true,
                        state: { from: location.pathname },
                      })
                }
              >
                <span>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  {singleVideo.isInWatchLater
                    ? "Delete From Watch Later"
                    : "Add To Watch Later"}
                </span>
              </div>
              <div className="normal-btn">
                <span>
                  <i className="fa fa-play-circle" aria-hidden="true"></i> Save
                </span>
              </div>
              <div className="normal-btn">
                <span>
                  {" "}
                  <i class="fa-solid fa-share-nodes"></i> Share
                </span>
              </div>
            </div>
            <h2>Description : </h2>
            <p>
              {" "}
            {singleVideo.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleVideo };