import axios from "axios";

const getLikeService = (token) => {
  return axios.get("/api/user/likes", {
    headers: {
      authorization: token,
    },
  });
};

const postLikeService = (token, video) => {
  return axios.post(
    "/api/user/likes",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );
};
const deleteLikeService = (token, videoId) => {
  return axios.delete(`/api/user/likes/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};

export {getLikeService,postLikeService,deleteLikeService}