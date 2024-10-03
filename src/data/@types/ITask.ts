export type Tarefa = {
    id: string | undefined;
    titletask?: string | undefined;
    desctask?: string | undefined;
    datetask?: string | undefined;
    status: boolean | undefined;
}

export interface Contexto {
    tasks: Array<Tarefa>;
    setTasks: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

export type TypeContext = {
    tasks: Array<Tarefa>;
    setTasks: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

export interface TasksContextType {
    context: TypeContext | undefined;
    addTarefa?: (task:Tarefa) => void;
    excluirTarefa?: (id:string) => void;
}