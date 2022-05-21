import { Abbreviations } from "../services/abbreviations";
import {
  deletePlayListService,
  deletePlayListVideoService,
  postPlaylistService,
  postPlayListVideoService,
} from "../services/playlistservice";

const postPlaylistHandler = async (
  token,
  Datadispatch,
  playListTitle,
  setShowInput
) => {
  try {
    const {
      data: { playlists },
    } = await postPlaylistService(token, playListTitle);
    console.log(playlists);
    setShowInput(false);
    playlists &&
      Datadispatch({
        type: Abbreviations.CREATE_PLAYLIST,
        payload: playlists,
      });
  } catch (error) {
    console.log(error);
  }
};

const deletePlaylistHandler = async (token, Datadispatch, videoId) => {
  try {
    const {
      data: { playlists },
    } = await deletePlayListService(token, videoId);
    playlists &&
      Datadispatch({
        type: Abbreviations.CREATE_PLAYLIST,
        payload: playlists,
      });
  } catch (error) {
    console.log(error);
  }
};
const postPlaylistVideoHandler = async (
  token,
  Datadispatch,
  playListVideo,
  playListId
) => {
  try {
    const {
      data: { playlist },
    } = await postPlayListVideoService(token, playListId, playListVideo);
    playlist &&
      Datadispatch({
        type: Abbreviations.UPDATE_VIDEO_PLAYLIST,
        payload: playlist,
      });
  } catch (error) {
    console.log(error);
  }
};

const DeletePlaylistVideohandler = async (token, videoId, playListId) => {
  try {
    const {
      data: { playlist },
    } = await deletePlayListVideoService(token, videoId, playListId);
    playlist &&
      Datadispatch({
        type: Abbreviations.UPDATE_VIDEO_PLAYLIST,
        payload: playlist,
      });
  } catch (error) {
    console.log(error);
  }
};
export { postPlaylistHandler, deletePlaylistHandler, postPlaylistVideoHandler,DeletePlaylistVideohandler };
