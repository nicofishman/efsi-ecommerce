import React, { FC, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';

import { Color } from '@/types';
import { useProductInfoContext } from '@/context/ProductInfoContext';

interface ColorsProps {
    colors: Color[]
}

const Colors: FC<ColorsProps> = ({ colors }) => {
    const { selectedColor, setSelectedColor } = useProductInfoContext();

    useEffect(() => {
        setSelectedColor(colors[0]);
    }, []);

    return (
        <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>

            <RadioGroup className="mt-4" value={selectedColor} onChange={setSelectedColor}>
                <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                <div className="flex items-center space-x-3">
                    {colors.map((color) => (
                        <RadioGroup.Option
                            key={color.name}
                            className={({ active, checked }) =>
                                classNames(
                                    active && checked ? 'ring ring-offset-1' : '',
                                    !active && checked ? 'ring-2' : '',
                                    color.selectedClass,
                                    '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                )
                            }
                            value={color}
                        >
                            <RadioGroup.Label as="span" className="sr-only">
                                {' '}
                                {color.name}{' '}
                            </RadioGroup.Label>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    color.class,
                                    'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                )}
                                style={{ backgroundColor: color.color }}
                            />
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};

export default Colors;
