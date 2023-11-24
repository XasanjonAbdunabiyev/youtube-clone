import { videos } from "../data/homepage-vidoes/vidoes";

export const getVidoeDetails = (id: string) => {
    const video = videos.filter(video => video.id === id);

    return video;
};
