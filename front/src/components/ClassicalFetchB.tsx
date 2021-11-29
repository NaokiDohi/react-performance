import { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/StateProvider';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

export const ClassicalFetchB : VFC = () => {
    const navigator = useNavigate();
    const { tasks } = useStateContext();
    // ClassFetchAでデータは取得済みなのでuseStateContextでStoreから取得する
    console.log("rendered classicalFetchB");

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-center font-bold mb-3">ClassicalFetchB</p>
            {tasks?.map((task) => (
                <p key={task.id}>{task.title}</p>
            ))}
            <ChevronDoubleLeftIcon
                onClick={() => navigator('/fetch-a')}
                className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
            />
            <p className="text-sm">Fetch A</p>
        </div>
    )
}
