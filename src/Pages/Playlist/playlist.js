import { useMediaPredicate } from "react-media-hook";
import { Footer } from "../../Components/Fixed-Footer/footer";
import PlaylistCard from "../../Components/PlaylistCard/playlistcard";
import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useVideo } from "../../Context/dataContext";
import emptyLikeImg from "../../Assets/like.png";
import { useNavigate } from "react-router-dom";
const Playlist = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  const { Datastate } = useVideo();
  const { playlist } = Datastate;
  const { navigate } = useNavigate();
  return (
    <>
      {!biggerThan600 ? <Sidebar /> : <Footer />}

      {playlist.length > 0 ? (
        <section className="home-section home-section-like">
          <div className="text">
            {playlist &&
              playlist.map((video) => (
                <PlaylistCard video={video} key={video._id} />
              ))}
          </div>
        </section>
      ) : (
        <>
          <div className="flex-wrap-row">
            <img src={emptyLikeImg} alt="empty-liked" className="img-empty" />
            <div className="flex-wrap-column">
              <h2>Heya! Start making your playlist now!</h2>
              <button
                class="btn-com btn-primary-outline btn-video"
                onClick={() => navigate("/explore")}
              >
                {" "}
                Explore Now{" "}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Playlist;
