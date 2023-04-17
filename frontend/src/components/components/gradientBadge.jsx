import React from 'react';

const GradientBadge = ({ children }) => {
    return (
        <div>
            <span class="bg-gradient-to-br from-purple-600 to-blue-500 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {children}
            </span>
        </div>
    );
};

export default GradientBadge;
