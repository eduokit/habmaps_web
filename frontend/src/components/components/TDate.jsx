import React from 'react';

const TDate = ({ children }) => {
    const date = new Date(children);
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return (
        <div>
            <p className="text-xs">{formattedDate}</p>
            <p className="text-base font-bold">{formattedTime}</p>
        </div>
    );
};

export default TDate;
