import { VFC } from 'react';
import { useStateContext } from "../context/StateProvider";

export const ContextB : VFC = () => {
    const { setDark } = useStateContext();
    console.log("rendered ContentB");
    return (
        <div className="flex justify-center items-center flex-col">
            <p className="font-bold my-3">ContextA</p>
            <button
                className="py-2 px-3 text-sm text-white bg-green-600 hover:bg-green-700 rounded"
                onClick={() => setDark(false)}
            >
            Dark Mode Off
            </button>
        </div>
    )
}