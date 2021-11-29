import { useState, useEffect } from "react";
import { useStateContext } from "../context/StateProvider";
import axios from "axios";

//Custom Hooks
export const useClassicalFetch = () => {
    const { tasks, setTasks } = useStateContext();
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true); // ここで2回目のレンダリングが走る
            try {
                const res = await axios.get("http://localhost:8000/api/tasks/");
                setTasks(res.data); // ここで3回目のレンダリングが走る
            } catch (error) {
                setError(true);
            }
            setLoading(false); //  ここで4回目のレンダリングが走る
        };
        fetchData();
    },[setTasks]);

    return { tasks, isLoading, isError };
}
