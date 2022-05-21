import { useMediaPredicate } from "react-media-hook";
import { Footer } from "../../Components/Fixed-Footer/footer";
import PlaylistCard from "../../Components/PlaylistCard/playlistcard";
import { Sidebar } from "../../Components/Sidebar/sidebar";
import { useVideo } from "../../Context/dataContext";
const Playlist = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");
  const { Datastate } = useVideo();
  const { playlist } = Datastate;
  console.log(playlist);
  return (
    <>
      <Footer />
      {!biggerThan600 && <Sidebar />}
      <section className="home-section home-section-like">
        <div className="text">
          {playlist.length > 0 ? (
            playlist &&
            playlist.map((video) => (
              <PlaylistCard video={video} key={video._id} />
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

export default Playlist;
