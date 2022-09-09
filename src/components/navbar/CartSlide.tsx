import { Dialog, Transition } from '@headlessui/react';
import React, { FC, Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';

import { useCartContext } from '@/context/CartContext';

interface CartSlideProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const CartSlide: FC<CartSlideProps> = ({ open, setOpen }) => {
    const { cartProducts, removeFromCart } = useCartContext();

    return (
        <Transition.Root as={Fragment} show={open}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        type="button"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul className="-my-6 divide-y divide-gray-200" role="list">
                                                        {cartProducts.map(({ product, quantity }) => (
                                                            <li key={product.id} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        alt={product.images[0].alt}
                                                                        className="h-full w-full object-cover object-center"
                                                                        src={product.images[0].src}
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <a href={product.href}>{product.name}</a>
                                                                            </h3>
                                                                            <p className="ml-4">{`$${product.price}`}</p>
                                                                        </div>
                                                                        <div className='flex flex-row items-center gap-1'>
                                                                            <span
                                                                                aria-hidden="true"
                                                                                className={classNames(
                                                                                    product.colors[0].class,
                                                                                    'h-4 w-4 border-2 border-black border-opacity-10 mt-1 rounded-full'
                                                                                )}
                                                                                style={{ backgroundColor: product.colors[0].color }}
                                                                            />
                                                                            <p className="mt-1 text-sm text-gray-500">{product.colors[0].name}</p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{product.sizes[0].name}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500">Qty {quantity}</p>

                                                                        <div className="flex">
                                                                            <button
                                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                type="button"
                                                                                onClick={() => removeFromCart(product.id)}
                                                                            >
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>{`$${cartProducts.map(c => c.product.price * c.quantity).reduce((a, b) => a + b, 0)}`}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <a
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                    href="#"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                            <div className="mt-2 gap-2 flex flex-col justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or
                                                </p>
                                                <button
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                >
                                                        Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default CartSlide;
