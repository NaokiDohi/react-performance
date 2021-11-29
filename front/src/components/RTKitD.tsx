import { VFC } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectMode } from '../slices/counterSlice';

export const RTKitD : VFC = () => {
    const mode = useAppSelector(selectMode); // Redux管理のStateを取得
    console.log("rendered RTkitD");
    return (
        <div className="flex justify-center items-center flex-col">
            <p className="font-bold my-3">RTKitD</p>
            <p className="text-blue-500">{mode ? 'Mode On' : 'Mode Off'}</p>
        </div>
    )
}