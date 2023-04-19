import GradientBadge from "../components/gradientBadge";
import useLastSeens from "../../hooks/lastSeen";
import Skeleton from "../components/skeleton";
import JsonTable from "../components/jsonTable";
import TDate from "../components/TDate";

const LastSeen = () => {

    const { loading, error, lastSeens } = useLastSeens();

    if (error) {
        return <div>Oops! Something went wrong.</div>;
    } else if (loading) {
        return <Skeleton></Skeleton>
    } else {
        console.log(lastSeens)
        return (
            <div>
                <div class="relative overflow-x-auto  shadow-2xl m-6 sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-800 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-3 py-3">
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
                            {lastSeens.map((item, index) => (
                                <tr key={index} className={`bg-${index % 2 === 0 ? "white" : "gray-50"} border-b dark:bg-slate-900 dark:border-gray-700`}>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.nameId}
                                    </td>
                                    <td className="px-6 py-4">
                                        <TDate>{item.lastSeen}</TDate>
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
                                        <JsonTable data={item.payload}></JsonTable>

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
