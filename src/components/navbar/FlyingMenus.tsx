import React, { FC, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';

import MenuInformation from './MenuInformation';

import navigation from '@/public/navigation.json';

interface FlyingMenusProps {

}

const FlyingMenus: FC<FlyingMenusProps> = () => {
    return (
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                        {({ open }) => (
                            <>
                                <div className="relative flex">
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? 'border-indigo-600 text-indigo-600'
                                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                        )}
                                    >
                                        {category.name}
                                    </Popover.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Panel className="absolute inset-x-0 top-full z-50 text-sm text-gray-500">
                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                                        <div className="relative bg-white">
                                            <div className="mx-auto max-w-7xl px-8">
                                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                    <MenuInformation category={category}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                ))}

                {navigation.pages.map((page) => (
                    <a
                        key={page.name}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        href={page.href}
                    >
                        {page.name}
                    </a>
                ))}
            </div>
        </Popover.Group>
    );
};

export default FlyingMenus;
