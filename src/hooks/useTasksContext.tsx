import { useContext } from "react"
import { TasksContextType } from "../data/@types/ITask";
import { TasksContext } from "../context/tasksContext";

function useTasksContext():TasksContextType{
    const context = useContext(TasksContext)

    return { context };
}

export default useTasksContext