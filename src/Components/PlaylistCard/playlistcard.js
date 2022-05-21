import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { useVideo } from "../../Context/dataContext";
import { deletePlaylistHandler } from "../../Handlers/playlisthandler";
import "../PlaylistCard/playlistcard.css";
import { useNavigate } from "react-router-dom";
const PlaylistCard = ({ video }) => {
  const { _id, title, videos } = video;
  const [showOption, setShowOption] = useState(false);
  const { token } = useAuth();
  const { dataDispatch } = useVideo();
  const navigate = useNavigate();
  console.log(video);
  return (
    <>
      {videos.length > 0 ? (
        <div class="container container-playlist">
          <figure class="menu-card">
            <img
              src={`https://i.ytimg.com/vi/${videos[0]._id}/0.jpg`}
              onClick={() => navigate(`/playlist/${_id}`)}
            />
            <figcaption>
              <div
                className="date-three-bars"
                onClick={() => setShowOption((showOption) => !showOption)}
              >
                <h3 className="video-title">{title}</h3>
                <i
                  className="fa fa-trash"
                  onClick={() =>
                    deletePlaylistHandler(token, dataDispatch, _id)
                  }
                ></i>
              </div>
            </figcaption>
            <div className="card-cout">
              <i class="fa-solid fa-circle-play"></i>
              <p>{videos.length + "+"}</p>
            </div>
          </figure>
        </div>
      ) : (
        <h1>Empty</h1>
      )}
    </>
  );
};

export default PlaylistCard;
