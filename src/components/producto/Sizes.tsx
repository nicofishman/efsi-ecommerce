import React, { FC, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';

import { Size } from '@/types';
import { useProductInfoContext } from '@/context/ProductInfoContext';

interface SizesProps {
 sizes: Size[]
}

const Sizes: FC<SizesProps> = ({ sizes }) => {
    const { selectedSize, setSelectedSize } = useProductInfoContext();

    useEffect(() => {
        setSelectedSize(sizes[0]);
    }, []);

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a className="text-sm font-medium text-indigo-600 hover:text-indigo-500" href="#">
                    Size guide
                </a>
            </div>

            <RadioGroup className="mt-4" value={selectedSize} onChange={setSelectedSize}>
                <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {sizes.map((size) => (
                        <RadioGroup.Option
                            key={size.name}
                            className={({ active }) =>
                                classNames(
                                    size.inStock
                                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                    active ? 'ring-2 ring-indigo-500' : '',
                                    'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                )
                            }
                            disabled={!size.inStock}
                            value={size}
                        >
                            {({ active, checked }) => (
                                <>
                                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                    {size.inStock
                                        ? (
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    active ? 'border' : 'border-2',
                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                    'pointer-events-none absolute -inset-px rounded-md'
                                                )}
                                            />
                                        )
                                        : (
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                            >
                                                <svg
                                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                    preserveAspectRatio="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 100 100"
                                                >
                                                    <line vectorEffect="non-scaling-stroke" x1={0} x2={100} y1={100} y2={0} />
                                                </svg>
                                            </span>
                                        )}
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};

export default Sizes;
