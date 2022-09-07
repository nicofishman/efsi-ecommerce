import React, { FC } from 'react';

import { Breadcrumb } from '@/types';

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
    return (
        <>
            {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                    <div className="flex items-center">
                        <a className="mr-2 text-sm font-medium text-gray-900" href={breadcrumb.href}>
                            {breadcrumb.name}
                        </a>
                        <svg
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                            fill="currentColor"
                            height={20}
                            viewBox="0 0 16 20"
                            width={16}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                        </svg>
                    </div>
                </li>
            ))}
        </>
    );
};

export default Breadcrumbs;
