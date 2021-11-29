import { VFC } from 'react';
import { useNavigate } from 'react-router';
import { useQueryTasks } from '../hooks/useQueryTasks';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

export const ReactQueryA : VFC = () => {
    const navigator = useNavigate();
    const { status, data } = useQueryTasks();
    console.log("rendered ReactQueryA");
    if (status === 'loading') return <div>Loading...</div>
    if (status === 'error') return <div>Error</div>
    return (
        <>
            <p className="font-bold my-3">ReactQueryA</p>
            {/* ここで2回目のレンダリングが走る */}
            { data?.map((task) => <p key={task.id}>{task.title}</p>) }
            <ChevronDoubleRightIcon
                onClick={() => navigator('/query-b')}
                className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
            />
            <p className="text-sm">ReactQuery B</p>
        </>
    ) 
}
