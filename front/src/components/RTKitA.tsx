import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, selectCount } from '../slices/counterSlice';

export const RTKitA : VFC = () => {
    const count = useAppSelector(selectCount); // Redux管理のStateを取得
    const dispatch = useAppDispatch();
    console.log("rendered RTkitA");
    return (
        <div className="flex justify-center items-center flex-col">
            <p className="font-bold my-3">RTKitA</p>
            {count}
            <button
                className="py-2 px-3 mt-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
        </div>
    )
}