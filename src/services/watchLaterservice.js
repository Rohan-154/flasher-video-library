import axios from "axios";

const getWatchLaterService = (token) => {
  return axios.get("/api/user/watchlater", {
    headers: {
      authorization: token,
    },
  });
};

const postWatchLaterService = (token, video) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

const deleteWatchLaterService = (token, videoId) => {
  return axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};
export { getWatchLaterService, postWatchLaterService, deleteWatchLaterService };
