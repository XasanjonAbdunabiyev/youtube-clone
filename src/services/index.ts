import { videos } from "../data/homepage-vidoes/vidoes";

export const getVidoeDetails = (id: string) => {
  const video = videos.filter((video) => video.id === id);
  return video;
};

export const getVideosByCategory = (category: string) => {
  const filteredCategory = videos.filter(
    (video) => video.category.toLowerCase() == category.toLowerCase()
  );
  return filteredCategory;
};
