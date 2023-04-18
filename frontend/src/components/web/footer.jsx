import React from 'react';

const Footer = ({ text = "", links = [] }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {currentYear} {text}. All Rights Reserved.
                </span>
                {links.length > 0 && (
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="mr-4 hover:underline md:mr-6">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </footer>
    );
};

export default Footer;
