import "../VideoCard/video-card.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { watchLaterHandler } from "../../Utils/watchLaterUtils";
import { useAuth } from "../../Context/authContext";
import { useVideo } from "../../Context/dataContext";
import { postHistoryHandler } from "../../Handlers/historyHandler";
import { useTheme } from "../../Context/themeContext";
const VideoCard = ({ video }) => {
  const [showOption, setShowOption] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dataDispatch, setModal, setmodalData } = useVideo();
  const { _id, title, catchName, uploaded } = video;
  const singlePageNavigator = () => {
    navigate(`/video/${_id}`);
    token &&
      !video.isInHistory &&
      postHistoryHandler(token, dataDispatch, video);
  };
  const addToPlaylist = () => {
    if (token) {
      setModal(true);
      setmodalData(video);
    } else {
      navigate("/login", {
        replace: true,
        state: { from: location.pathname },
      });
    }
  };
  const { theme } = useTheme();
  return (
    <>
      <div class="container">
        <figure
          class="menu-card"
          style={{
            color: theme === "light" ? "black" : "#fff",
            backgroundColor: theme === "light" ? "#e0e0eb" : "#191921",
            boxShadow:
              theme === 'light' ? "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset": "rgba(179, 179, 0) 5px 5px",
          }}
        >
          <img
            src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
            onClick={() => singlePageNavigator()}
          />
          <figcaption>
            <h3 className="video-title">{title}</h3>
            <p className="subtitle">{catchName}</p>
            <div
              className="date-three-bars"
              onClick={() => setShowOption((showOption) => !showOption)}
            >
              <p>{uploaded}</p>
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>
              <div
                className={`options ${
                  showOption ? `display-flex` : `display-none`
                }`}
              >
                <div
                  onClick={() =>
                    token
                      ? watchLaterHandler(
                          token,
                          dataDispatch,
                          video,
                          video.isInWatchLater
                        )
                      : navigate("/login", {
                          replace: true,
                          state: { from: location.pathname },
                        })
                  }
              
                >
                  <i
                    class={`fa ${
                      video.isInWatchLater ? "fa-trash" : "fa-clock-o"
                    }`}
                  ></i>
                  {video.isInWatchLater
                    ? "Delete from Watch Later"
                    : "Add to Watch Later"}
                </div>
                <div onClick={() => addToPlaylist()}>
                  <i className="fa fa-play-circle"></i> Add to Playlist
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export { VideoCard };
