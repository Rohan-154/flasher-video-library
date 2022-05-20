const SortedCategory = (videos, sortBy) => {
  if (sortBy !== "All") {
    return videos.filter((video) => video.category === sortBy);
  }
  return videos;
};
const SearchVideos = (videos, search) => {
  return search
    ? videos.filter((video) =>
        video.title.trim().toLowerCase().includes(search.toLowerCase())
      )
    : videos;
};

export { SortedCategory, SearchVideos };
