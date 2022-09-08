import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from '../navbar/MobileMenu';
import FlyingMenus from '../navbar/FlyingMenus';
import Cart from '../navbar/Cart';

import logo from '@/public/logo.png';
interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <MobileMenu open={open} setOpen={setOpen}/>

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                type="button"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to='/'>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        alt=""
                                        className="h-8 w-auto"
                                        src={logo}
                                    />
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <FlyingMenus />

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800" href="#">
                                        Sign in
                                    </a>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800" href="#">
                                        Create account
                                    </a>
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a className="flex items-center text-gray-700 hover:text-gray-800" href="#">
                                        <img
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
                                        />
                                        <span className="ml-3 block text-sm font-medium">ARG</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <a className="p-2 text-gray-400 hover:text-gray-500" href="#">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                                    </a>
                                </div>

                                {/* Cart */}
                                <Cart />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
