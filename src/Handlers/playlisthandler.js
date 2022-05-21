import { Abbreviations } from "../services/abbreviations";
import {
  deletePlayListService,
  deletePlayListVideoService,
  postPlaylistService,
  postPlayListVideoService,
} from "../services/playlistservice";

const postPlaylistHandler = async (
  token,
  dataDispatch,
  playListTitle,
  setShowInput
) => {
  try {
    const {
      data: { playlists },
    } = await postPlaylistService(token, playListTitle);
    setShowInput(false);
    playlists &&
      dataDispatch({
        type: Abbreviations.CREATE_PLAYLIST,
        payload: playlists,
      });
  } catch (error) {
    console.log(error);
  }
};

const deletePlaylistHandler = async (token, dataDispatch, videoId) => {
  try {
    const {
      data: { playlists },
    } = await deletePlayListService(token, videoId);
    playlists &&
      dataDispatch({
        type: Abbreviations.CREATE_PLAYLIST,
        payload: playlists,
      });
  } catch (error) {
    console.log(error);
  }
};
const postPlaylistVideoHandler = async (
  token,
  dataDispatch,
  playListVideo,
  playListId
) => {
  try {
    const {
      data: { playlist },
    } = await postPlayListVideoService(token, playListId, playListVideo);
    playlist &&
      dataDispatch({
        type: Abbreviations.UPDATE_VIDEO_PLAYLIST,
        payload: playlist,
      });
  } catch (error) {
    console.log(error);
  }
};

const DeletePlaylistVideohandler = async (
  token,
  videoId,
  playListId,
  dataDispatch
) => {
  try {
    const {
      data: { playlist },
    } = await deletePlayListVideoService(token, videoId, playListId);
    playlist &&
      dataDispatch({
        type: Abbreviations.UPDATE_VIDEO_PLAYLIST,
        payload: playlist,
      });
  } catch (error) {
    console.log(error);
  }
};
export {
  postPlaylistHandler,
  deletePlaylistHandler,
  postPlaylistVideoHandler,
  DeletePlaylistVideohandler,
};
