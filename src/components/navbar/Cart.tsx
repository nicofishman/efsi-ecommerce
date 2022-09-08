import React, { FC, useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import CartSlide from '@/components/navbar/CartSlide';

interface CartProps {

}

const Cart: FC<CartProps> = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="ml-4 flow-root lg:ml-6">
                <a className="group -m-2 flex items-center p-2" href="#">
                    <ShoppingBagIcon
                        aria-hidden="true"
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        onClick={() => setOpen(true)}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                </a>
            </div>
            <CartSlide open={open} setOpen={setOpen} />
        </>
    );
};

export default Cart;
