export type HomeVidoes = {
  type: string;
  vidoe: VidoeProps;
};

type ImageProps = {
  height: number;
  width: number;
  url: string;
};

export type VidoeProps = {
  author: {
    avatar: ImageProps[];
    title: string;
    channelId: string;
    badges: {
      text: string;
      type: string;
    }[];
    canonicalBaseUrl: string;
  };
  lengthSeconds: number;

  movingThumbnails: ImageProps[];
  publishedTimeText: string;
  isLiveNow: boolean;
  stats: {
    views: number;
  };
  thumbnails: ImageProps[];
  videoId: string;
};
