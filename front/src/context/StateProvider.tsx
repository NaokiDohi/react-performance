import { useContext, useState, createContext } from "react";
import { Task } from '../types/types';

interface StateContextType {
    tasks: Task[]| null;
    dark: boolean;
    setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>; // useStateの更新用のデータ型
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext({} as StateContextType);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[] | null>(null); // serverから取得したデータを保持する
    const [dark, setDark] = useState<boolean>(false); // Reactの状態を保持する

    return (
        <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () : StateContextType => useContext(StateContext);