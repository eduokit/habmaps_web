import React from 'react';


const GradientTitle = ({ children }) => {
    const regex = /\*\*(.*?)\*\*/g;

    const processText = (text) => {
        const [before, middle, after] = text.split(regex);
        return middle ? (
            <>
                <span>{before}</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    {middle}
                </span>
                <span>{after}</span>
            </>
        ) : (
            <span>{text}</span>
        );
    };

    const parsedText = processText(children);

    return (
        <div className="">
            {parsedText}
        </div>
    );
};

export default GradientTitle;
