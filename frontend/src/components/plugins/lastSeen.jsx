import React, { useState } from "react";
import { useQuery, gql } from '@apollo/client'
import GradientBadge from "../components/gradientBadge";

const LastSeen = () => {

    const { loading, error, data } = useQuery(gql`
        query {
            lastSeens ( 
                sort: "publishedAt:desc"
                ){
                data {
                attributes {
                    nameId
                    lastSeen
                    pos {
                    lat
                    lon
                    }
                    type
                    counter
                    payload
                }
                }
            }
        }
    `)

    const convertToDataArray = (jsonData) => {
        const dataArray = jsonData.lastSeens.data.map((item) => {
            const { attributes } = item;
            return {
                nameId: attributes.nameId,
                lastSeen: attributes.lastSeen,
                pos: attributes.pos,
                type: attributes.type,
                counter: attributes.counter,
                payload: attributes.payload,
            };
        });
        return dataArray;
    };

    if (error) {
        return <div>Oops! Something went wrong.</div>;
    } else if (loading) {
        return <div>Loading...</div>;
    } else {
        console.log(data)
        const dat = convertToDataArray(data)
        console.log(dat)
        return (
            <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Last Seen
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Type
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Counter
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Payload
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dat.map((item, index) => (
                                <tr key={index} className={`bg-${index % 2 === 0 ? "white" : "gray-50"} border-b dark:bg-gray-800 dark:border-gray-700`}>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.nameId}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.lastSeen}
                                    </td>
                                    <td className="px-6 py-4">
                                        {`${item.pos.lat}, ${item.pos.lon}`}
                                    </td>
                                    <td className="px-6 py-4">
                                        <GradientBadge>{item.type}</GradientBadge>
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.counter}
                                    </td>
                                    <td className="px-6 py-4">
                                        {JSON.stringify(item.payload)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



            </div>
        );
    }
};

export default LastSeen;
