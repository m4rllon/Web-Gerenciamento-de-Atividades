import { createContext, ReactNode, useState } from "react";
import { Tarefa, TypeContext } from "../data/@types/ITask";
import { tarefas } from '../mocks/tasks'

interface TasksProviderType {
    children: ReactNode;
}

export const TasksContext = createContext<TypeContext | undefined>(undefined)

TasksContext.displayName = 'Tarefas'

export const TasksProvider = ({children}: TasksProviderType) => {
    const [ tasks, setTasks ] = useState<Tarefa[]>(tarefas)
    const [ tasksCompleted, setTasksCompleted ] = useState<Tarefa[]>(tarefas.filter(tarefa => tarefa.status)) 

    return <TasksContext.Provider value={{tasks, setTasks, tasksCompleted, setTasksCompleted}}>
        {children}
    </TasksContext.Provider>
}
