import { useContext, useState } from "react";
import { TasksContext } from "../../context/tasksContext";
import { Tarefa, TypeContext } from "../../data/@types/ITask";
import { Button } from "@mui/material";
import FormAddTask from "../../components/formAddTask";
import TaskCard from "../../components/taskCard";
import ModalTask from "../../components/ModalTask";

const Home = () => {
    const [addTaskSelect, setAddTaskSelect] = useState(false)
    const context = useContext<TypeContext | undefined>(TasksContext)
    const tasks = context?.tasks
    const [isOpen, setIsOpen] = useState(false)
    const [modalTask, setModalTask] = useState<Tarefa| null>(null)

    const openOrCloseModal = (idTask:string, taskTarget:Tarefa) => {
        if(idTask && modalTask?.id !== idTask){
            setIsOpen(true)
            setModalTask(taskTarget)
        } else {
            setModalTask(null)
            setIsOpen(false)
        }
    }

    return <section className="flex flex-col md:flex-row md:ml-12">
        <div className="p-3">
            <span className="flex flex-col gap-3 pb-4">
                <h1 className="text-3xl font-bold text-center md:text-start">Gerencie suas tarefas</h1>
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
                <p className="text-xl font-semibold">Suas tarefas:</p>

                <div className="mt-2 border-[1px] border-slate-600"></div>

                {
                    tasks && tasks.map(task => {
                        if(task.id) return <TaskCard key={task.id} id={task.id} openOrCloseModal={openOrCloseModal}/>
                    })
                }
            </div>
        </div>

        {modalTask && <ModalTask taskTarget={modalTask} isOpen={isOpen}/>}
    </section>
}

export default Home