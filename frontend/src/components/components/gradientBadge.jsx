import React from 'react';

const GradientBadge = ({ children }) => {
    const isLongText = children.length > 3;

    return (
        <div>
            <span
                className={`${isLongText ? 'bg-gradient-to-br from-green-400 to-blue-500 dark:text-gray-50' : 'bg-gradient-to-br from-purple-600 to-blue-500 dark:text-blue-300'
                    } text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900`}
            >
                {children}
            </span>
        </div>
    );
};

export default GradientBadge;
