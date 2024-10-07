export type Tarefa = {
    id?: string;
    titletask?: string;
    desctask?: string;
    datetask?: string;
    status?: boolean;
}

export interface Contexto {
    tasks: Array<Tarefa>;
    setTasks: React.Dispatch<React.SetStateAction<Tarefa[]>>;
    tasksCompleted?: Array<Tarefa>;
    setTasksCompleted?: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

export type TypeContext = {
    tasks: Array<Tarefa>;
    setTasks: React.Dispatch<React.SetStateAction<Tarefa[]>>;
    tasksCompleted?: Array<Tarefa>;
    setTasksCompleted?: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

export interface TasksContextType {
    context: TypeContext | undefined;
    addTarefa?: (task:Tarefa) => void;
    excluirTarefa?: (id:string) => void;
}