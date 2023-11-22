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


export type IVidoesProps =  {
  category: string;
  channel : {
    name : string;
    profileUrl: string;
    id : string;
  }
  title: string;
  duration: number;
  id: string;
  postedAt: Date;
  views: number;
  thumbnailUrl: string;
  iframeUrl: string;
}