import React, { FC } from 'react';

import { Image } from '@/types';

interface ImagesProps {
    images: Image[]
}

const Images: FC<ImagesProps> = ({ images }) => {
    return (
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-[3/4] hidden overflow-hidden rounded-lg lg:block">
                <img
                    alt={images[0].alt}
                    className="h-full w-full object-cover object-center"
                    src={images[0].src}
                />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-[3/2] overflow-hidden rounded-lg">
                    <img
                        alt={images[1].alt}
                        className="h-full w-full object-cover object-center"
                        src={images[1].src}
                    />
                </div>
                <div className="aspect-[3/2] overflow-hidden rounded-lg">
                    <img
                        alt={images[2].alt}
                        className="h-full w-full object-cover object-center"
                        src={images[2].src}
                    />
                </div>
            </div>
            <div className="aspect-[4/5] sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <img
                    alt={images[3].alt}
                    className="h-full w-full object-cover object-center"
                    src={images[3].src}
                />
            </div>
        </div>
    );
};

export default Images;
