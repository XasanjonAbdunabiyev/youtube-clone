import React, { useState, useEffect } from 'react';

interface LazyLoadImageProps {
    imageUrl: string;
    alt?: string;
    props?: React.ImgHTMLAttributes<HTMLImageElement>;
}

const ImageLazyLoad: React.FC<LazyLoadImageProps> = ({ imageUrl, alt = 'youtube-images', ...props }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = imageUrl;

        image.onload = () => {
            setLoaded(true);
        };

        const timeout = setTimeout(() => {
            setLoaded(false)
        }, 3000);

        return () => {
            clearTimeout(timeout)
            image.onload = null; // O'nchirish
        };
    }, [imageUrl]);

    console.log();


    return (
        <div
            className={`relative ${loaded ? 'filter-none' : 'filter-blur-md'}`}
        >
            <img src={imageUrl}
                loading='lazy'
                alt={alt} {...props} className={`${props.props?.className} ${loaded ? "blur-sm" : "blur-none"}`} />
        </div>
    );
};

export default ImageLazyLoad