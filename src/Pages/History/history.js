import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useVideo } from "../../Context/dataContext";
import { useMediaPredicate } from "react-media-hook";
import { Footer } from "../../Components/Fixed-Footer/footer";
import { useAuth } from "../../Context/authContext";
import { clearAllHistoryHandler, deleteHistoryHandler } from "../../Handlers/historyHandler";
const HistoryVideo = () => {
  const { Datastate, dataDispatch } = useVideo();
  const { videos } = Datastate;
  const { token } = useAuth();
  const HistoryVideo = videos.filter((item) => item.isInHistory);
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  return (
    <>
      <Footer/>
      
      {!biggerThan600 && <Sidebar />}
      <section className="home-section home-section-like">
        <div className="text">
        <button class="btn-com btn-primary-outline Clear-all" onClick={()=> clearAllHistoryHandler(token, dataDispatch)}> CLEAR ALL </button>
          {HistoryVideo &&
            HistoryVideo.map((video) => (
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
                          deleteHistoryHandler(token, dataDispatch, video._id)
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

export { HistoryVideo };
