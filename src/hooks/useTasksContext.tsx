import { useContext } from "react"
import { createTask, deleteTask } from "../service/apiTasks";
import { Tarefa, TasksContextType } from "../data/@types/ITask";
import { TasksContext } from "../context/tasksContext";

function useTasksContext():TasksContextType{
    const context = useContext(TasksContext)
    
    const addTarefa = async (task:Tarefa) => {
        createTask(task)
    }

    const excluirTarefa = async (id:string) => {
        deleteTask(id)
    }

    return { context, addTarefa, excluirTarefa};
}

export default useTasksContext