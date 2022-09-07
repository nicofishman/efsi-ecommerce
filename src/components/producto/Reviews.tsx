import React, { FC } from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

import { Review } from '../../types';

interface ReviewsProps {
    reviews: Review;
}

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
    return (
        <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
                <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                            )}
                        />
                    ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500" href={reviews.href}>
                    {reviews.totalCount} reviews
                </a>
            </div>
        </div>
    );
};

export default Reviews;
