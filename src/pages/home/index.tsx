import { useContext, useState } from "react";
import { TasksContext } from "../../context/tasksContext";
import { TypeContext } from "../../data/@types/ITask";
import { Button } from "@mui/material";
import FormAddTask from "../../components/formAddTask";
import TaskCard from "../../components/taskCard";

const Home = () => {
    const [addTaskSelect, setAddTaskSelect] = useState(false)
    const context = useContext<TypeContext | undefined>(TasksContext)
    const tasks = context?.tasks

    return <section className="w-full flex flex-row justify-start">
        <div className="pt-12 flex flex-col w-2/4 justify-start">
        <span className="flex justify-between items-center my-4">
            <h1 className="text-3xl font-bold text-start">Gerencie suas tarefas</h1>
            <Button 
            onClick={() => setAddTaskSelect(prev => !prev)} 
            variant="contained"
            color={addTaskSelect ? 'error' : 'secondary'}
            sx={{backgroundColor: '#66BB6A', color: 'black'}}>{addTaskSelect ?  'Cancelar' : 'Adicionar tarefa'}</Button>
        </span>

        <div>
            { addTaskSelect && <FormAddTask setTaskSelect={setAddTaskSelect}/>}
        </div>
        
        <div className="flex flex-col text-lg">
            <p>Suas tarefas:</p>
            <div className="mt-2 border-[1px] border-slate-600"></div>
            {
                tasks && tasks.map(task => {
                    return <TaskCard key={task.id} id={task.id} titletask={task.titletask} desctask={task.desctask} datetask={task.datetask} status={task.status}/>
                })
            }
        </div>
    </div>
    </section>
}

export default Home