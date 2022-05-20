import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { useVideo } from "../../Context/dataContext";
import {
  DeletePlaylistVideohandler,
  postPlaylistHandler,
  postPlaylistVideoHandler,
} from "../../Handlers/playlisthandler";
import "../PlaylistModal/playlist.css";
const PlaylistModal = () => {
  const { Datastate, modal, setModal, modalData, dataDispatch } = useVideo();
  const { playlist } = Datastate;
  const { token } = useAuth();
  const [showInput, setShowInput] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const createHandler = () => {
    setShowInput(true);
    playlistName &&
      postPlaylistHandler(token, dataDispatch, playlistName, setShowInput);
    setPlaylistName("");
  };
  return (
    <div
      className={`modal-wrap flex-center ${
        modal ? "display-flex" : "display-none"
      }`}
    >
      <div className="modal">
        <div className="modal-header">
          <h3>Save to</h3>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => setModal(!modal)}
          />
        </div>
        {playlist.map((item) => {
          const isInPlaylist = item.videos?.some(
            (item) => item._id === modalData._id
          );
          return (
            <div className="modal-header" key={item._id}>
              <label className="input-lable">
                <input
                  type="checkbox"
                  name="input"
                  checked={isInPlaylist}
                  onChange={(e) => {
                    e.target.checked
                      ? postPlaylistVideoHandler(
                          token,
                          dataDispatch,
                          modalData,
                          item._id
                        )
                      : DeletePlaylistVideohandler(
                          token,
                          modalData._id,
                          item._id
                        );
                  }}
                />
                <span className="input-lable-text"> {item.title}</span>
              </label>
            </div>
          );
        })}
        <div
          className={`modal-input ${
            showInput ? "display-flex" : "display-none"
          }`}
        >
          <label htmlFor="mail"> Playlist Name: </label>
          <input
            className="text-input"
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </div>
        <div className="modal-footer" onClick={() => createHandler()}>
          <button className="btn-playlist">Create New Playlist</button>
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
