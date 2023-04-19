import React from "react";

function JsonTable({ data }) {


    const entries = Object.entries(data);
    return (
        <div className="relative overflow-x-auto text-xs sm:rounded-lg">
            <table className="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs sm:text-sm text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Key
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map(([key, value]) => (
                        <tr
                            key={key}
                            className="border-b  border-gray-200 dark:border-gray-700"
                        >
                            <th
                                scope="row"
                                className="px-6 py-1   text-gray-900 whitespace-nowrap dark:text-gray-500 "
                            >
                                {key}
                            </th>
                            <td className="px-6 py-1">{typeof value === 'number' ? value.toFixed(2) : value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default JsonTable;