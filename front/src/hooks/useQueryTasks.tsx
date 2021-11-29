import { useQuery } from "react-query";
import axios from "axios";
import { Task } from "../types/types";

const getTasks = async () => {
    const { data } = await axios.get<Task[]>('http://localhost:8000/api/tasks/')
    return data
}
  
export const useQueryTasks = () => {
    return useQuery<Task[], Error>({
        queryKey: 'tasks',
        queryFn: getTasks,
        cacheTime: 10000,
        //　useQueryを使用しているコンポーネント(今回ならReactQueryA)がアンマウントされてからキャッシュをクリアするまでの時間
        staleTime: 10000,
        // 古いのキャッシュとして扱うまでの時間
    })
}

