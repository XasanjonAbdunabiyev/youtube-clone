import { LazyLoadImage } from 'react-lazy-load-image-component';

import { FC } from "react";

declare module "*.jpg";
declare module "*.png";

type ImageProps = {
    imageUrl: string;
}

export const ImageLazyLoad: FC<ImageProps> = ({ imageUrl, ...props }: ImageProps): JSX.Element => {
    return (
        <LazyLoadImage
            {...props}
            alt="loadng-image"
            height="100%"
            width="100%"
            effect='blur'
            src={imageUrl}
        />
    )
}