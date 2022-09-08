import React, { FC } from 'react';

import { Category } from '@/types';

interface MenuInformationProps {
    category: Category
}

const MenuInformation: FC<MenuInformationProps> = ({ category }) => {
    return (
        <>
            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                {category.featured.map((item) => (
                    <div key={item.name} className="group relative text-base sm:text-sm">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                                alt={item.imageAlt}
                                className="object-cover object-center"
                                src={item.imageSrc}
                            />
                        </div>
                        <a className="mt-6 block font-medium text-gray-900" href={item.href}>
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                        Shop now
                        </p>
                    </div>
                ))}
            </div>
            <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                {category.sections.map((section) => (
                    <div key={section.name}>
                        <p className="font-medium text-gray-900" id={`${section.name}-heading`}>
                            {section.name}
                        </p>
                        <ul
                            aria-labelledby={`${section.name}-heading`}
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                            role="list"
                        >
                            {section.items.map((item) => (
                                <li key={item.name} className="flex">
                                    <a className="hover:text-gray-800" href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MenuInformation;
