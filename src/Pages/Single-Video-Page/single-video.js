import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Fixed-Footer/footer";
import { Sidebar } from "../../Components/Sidebar/sidebar";
import "../Single-Video-Page/singleVideo.css";
import { useMediaPredicate } from "react-media-hook";
import { LikeHandler } from "../../Utils/likeUtils";
import { useNavigate, useLocation } from "react-router-dom";
import { useVideo } from "../../Context/dataContext";
import { useAuth } from "../../Context/authContext";
const SingleVideo = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  const { videoId } = useParams();
  const {Datastate, Datadispatch } = useVideo();
  const {videos} = Datastate;
  const {token} = useAuth();
  const singleVideo = videos.length !== 0 && videos?.find((video) => video._id === videoId);
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
              className={singleVideo.isInLiked ?`active-feat`: `normal-btn`}
              onClick={() =>
                token
                  ? LikeHandler(token, singleVideo,Datadispatch,singleVideo.isInLiked)
                  : navigate("/login", {
                      replace: true,
                      state: { from: location.pathname },
                    })
              }
            >
              <span>
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {singleVideo.isInLiked ? "Liked" : "Like"}
              </span>
            </div>
            <div className="normal-btn">
              <span>
                <i className="fa fa-clock-o" aria-hidden="true"></i> Watch Later
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
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum libero, officiis laborum nisi quos vero perferendis quam dolores facere aliquid doloribus iure veritatis. Iste accusamus atque dicta debitis assumenda delectus aliquam nulla soluta, odio provident minus illum? Obcaecati ipsum iusto quos iste reprehenderit enim amet commodi consequatur ipsa libero, asperiores exercitationem in quae quam ad nam aspernatur molestias, culpa inventore excepturi veritatis ut dolores hic magni. Ab corrupti provident earum necessitatibus in perspiciatis quas sapiente alias odit sunt placeat dicta, tenetur sequi accusantium quis? Fuga quasi debitis totam, pariatur dolorem alias ad! Adipisci fugit harum beatae consequatur ut expedita.</p>
        </div>
      </div>
      </div>
    </>
  );
};

export { SingleVideo };
