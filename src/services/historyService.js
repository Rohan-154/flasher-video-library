import axios from "axios";

const getHistoryService = (token) => {
  return axios.get("/api/user/history", {
    headers: {
      authorization: token,
    },
  });
};

const postHistoryService = (token, video) => {
  return axios.post(
    "/api/user/history",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

const deleteHistoryService = (token, videoId) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};

const clearHistoryService = (token) => {
  return axios.delete("/api/user/history/all", {
    headers: { authorization: token },
  });
};

export { getHistoryService, postHistoryService, deleteHistoryService,clearHistoryService };
