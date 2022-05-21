import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useVideo } from "../../Context/dataContext";
import { useMediaPredicate } from "react-media-hook";
import { Footer } from "../../Components/Fixed-Footer/footer";
import { deleteLikeHandler } from "../../Handlers/likeHandler";
import { useAuth } from "../../Context/authContext";
import "../Liked-Videos/likeVideo.css";
import { useNavigate } from "react-router-dom";
import emptyLikeImg from "../../Assets/like.png";
const LikedVideo = () => {
  const { Datastate, dataDispatch } = useVideo();
  const { videos } = Datastate;
  const { token } = useAuth();
  const navigate = useNavigate();
  const likedVideo = videos.filter((item) => item.isInLiked);
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  return (
    <>
      {!biggerThan600 ? <Sidebar /> : <Footer />}
      {likedVideo.length > 0 ? (
        <section className="home-section home-section-like">
          <div className="text">
            {likedVideo &&
              likedVideo.map((video) => (
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
                            deleteLikeHandler(token, video._id, dataDispatch)
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
            <img
              src={emptyLikeImg}
              alt="empty-liked"
              className="img-empty"
            />
           <div className="flex-wrap-column">
           <h2>Heya! It seems you have not liked anything yet!</h2>
            <button class="btn-com btn-primary-outline btn-video" onClick={()=> navigate('/explore')}> Explore Now </button>
           </div>
          </div>
      
      )}
    </>
  );
};

export { LikedVideo };
