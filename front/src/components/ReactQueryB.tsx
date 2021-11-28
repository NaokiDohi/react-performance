import { VFC } from 'react';
import { useNavigate } from 'react-router';
import { useQueryClient } from 'react-query';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';
import { Task } from '../types/types';

export const ReactQueryB : VFC = () => {
    const navigator = useNavigate();
    const queryClient = useQueryClient(); // キャッシュへアクセスするためのクライアント
    const data = queryClient.getQueryData<Task[]>('tasks'); // キャッシュからデータを取得 引数はqueryKeyに設定したキー名
    console.log("rendered ReactQueryB");
    return (
        <>
            <p className="font-bold my-3">ReactQueryB</p>
            { data?.map((task) => <p key={task.id}>{task.title}</p>) }
            <ChevronDoubleLeftIcon
                onClick={() => navigator('/')}
                className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
            />
            <p className="text-sm">ReactQuery A</p>
        </>
    )
}
