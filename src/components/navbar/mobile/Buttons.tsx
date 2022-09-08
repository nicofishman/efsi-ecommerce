import React, { FC } from 'react';

interface ButtonsProps {

}

const Buttons: FC<ButtonsProps> = () => {
    return (
        <>
            <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
                    Sign in
                    </a>
                </div>
                <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
                    Create account
                    </a>
                </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4">
                <a className="-m-2 flex items-center p-2" href="#">
                    <img
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                </a>
            </div>
        </>
    );
};

export default Buttons;
