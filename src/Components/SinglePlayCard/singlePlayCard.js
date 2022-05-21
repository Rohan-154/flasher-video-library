import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useVideo } from "../../Context/dataContext";
import { DeletePlaylistVideohandler } from "../../Handlers/playlisthandler";
const SinglePlayCard = ({ video, playlistId }) => {
  const { token } = useAuth();
  const { dataDispatch } = useVideo();
  const navigate = useNavigate();
  return (
    <>
      <div class="container container-playlist">
        <figure class="menu-card">
          <img
            src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
            onClick={() => navigate(`/video/${video._id}`)}
          />
          <figcaption>
            <div className="date-three-bars">
              <h3 className="video-title">{video.title}</h3>

              <i
                className="fa fa-trash"
                onClick={() =>
                  DeletePlaylistVideohandler(
                    token,
                    video._id,
                    playlistId,
                    dataDispatch
                  )
                }
              ></i>
            </div>
            <p>{video.catchName}</p>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export { SinglePlayCard };
