import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Fixed-Footer/footer";
import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useVideo } from "../../Context/dataContext";
import { useMediaPredicate } from "react-media-hook";
import { SinglePlayCard } from "../../Components/SinglePlayCard/singlePlayCard";

const SinglePlay = () => {
  const { playlistId } = useParams();
  const { Datastate } = useVideo();
  const { playlist } = Datastate;
  const playlistObj = playlist.find((item) => item._id === playlistId);
  const { videos } = playlistObj;
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  return (
    <>
      {!biggerThan600 ? <Sidebar /> : <Footer />}
      <section className="home-section home-section-like">
        <div className="text">
          {videos.length > 0 ? (
            videos &&
            videos.map((video) => (
              <SinglePlayCard video={video} playlistId={playlistId} />
            ))
          ) : (
            <>
              <h1>empty</h1>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export { SinglePlay };
