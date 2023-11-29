import { LazyLoadImage } from 'react-lazy-load-image-component';

declare module "*.jpg";
declare module "*.png";


type ImageProps = {
    imageUrl: string;
}

export function ImageLazyLoad({ imageUrl, ...props }: ImageProps) {
    return (
        <>
            <LazyLoadImage
                {...props}
                alt="loadng-image"
                height="100%"
                width="100%"
                effect='blur'
                src={imageUrl}
            />
        </>
    )
}