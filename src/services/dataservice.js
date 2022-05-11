import axios from "axios";

const getCategoryService = () => {
  return axios.get("/api/categories");
};

const getVideoService = () => {
  return axios.get("/api/videos");
};

export { getCategoryService, getVideoService };
