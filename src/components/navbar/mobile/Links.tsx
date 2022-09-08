import React, { FC, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

import navigation from '@/public/navigation.json';

interface LinksProps {

}

const Links: FC<LinksProps> = () => {
    return (
        <Tab.Group as="div" className="mt-2">
            <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                        <Tab
                            key={category.name}
                            className={({ selected }) =>
                                classNames(
                                    selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                    'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                )
                            }
                        >
                            {category.name}
                        </Tab>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels as={Fragment}>
                {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                        <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item) => (
                                <div key={item.name} className="group relative text-sm">
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <img alt={item.imageAlt} className="object-cover object-center" src={item.imageSrc} />
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
                        {category.sections.map((section) => (
                            <div key={section.name}>
                                <p className="font-medium text-gray-900" id={`${category.id}-${section.id}-heading-mobile`}>
                                    {section.name}
                                </p>
                                <ul
                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                    className="mt-6 flex flex-col space-y-6"
                                    role="list"
                                >
                                    {section.items.map((item) => (
                                        <li key={item.name} className="flow-root">
                                            <a className="-m-2 block p-2 text-gray-500" href={item.href}>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Links;
