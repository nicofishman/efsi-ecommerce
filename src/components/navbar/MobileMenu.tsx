import React, { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Links from './mobile/Links';

import navigation from '@/public/navigation.json';
import Buttons from '@/components/navbar/mobile/Buttons';

interface MobileMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ open, setOpen }) => {
    return (
        <Transition.Root as={Fragment} show={open}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-30" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                            <div className="flex px-4 pt-5 pb-2">
                                <button
                                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                    type="button"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Links */}
                            <Links />

                            <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a className="-m-2 block p-2 font-medium text-gray-900" href={page.href}>
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <Buttons />
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default MobileMenu;
