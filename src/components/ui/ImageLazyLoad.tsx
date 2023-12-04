import React, { useState, useEffect, ImgHTMLAttributes } from 'react';

interface LazyLoadImageProps {
    imageUrl: string;
    alt?: string;
    className: string;
    readonly props?: ImgHTMLAttributes<HTMLImageElement>
}

export const ImageLazyLoad: React.FC<LazyLoadImageProps> = ({ imageUrl,
    className,
    alt = 'youtube-images', ...props }) => {
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
            image.onload = null;
        };
    }, [imageUrl]);

    console.log();


    return (
        <div
            className={`relative ${loaded ? 'filter-none' : 'filter-blur-md'}`}
        >
            <img
                src={imageUrl}
                loading='lazy'
                alt={alt}
                {...props}
                className={`${className} ${loaded ? "blur-sm" : "blur-none"}`}
            />
        </div>
    );
};
