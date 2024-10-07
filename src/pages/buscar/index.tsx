import { SearchOutlined } from "@mui/icons-material"
import { useContext, useEffect, useState } from "react"
import { TasksContext } from "../../context/tasksContext"
import TaskCard from "../../components/taskCard"
import ModalTask from "../../components/ModalTask"
import { Tarefa } from "../../data/@types/ITask"

const Buscar = () => {
    const context = useContext(TasksContext)
    const tasks = context?.tasks

    const [tasksTarget, setTasksTarget] = useState(tasks)
    const [input, setInput] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    const [modalTask, setModalTask] = useState<Tarefa | null>(null)

    const openOrCloseModal = (idTask:string, taskTarget:Tarefa) => {
        if(idTask && modalTask?.id !== idTask){
            setIsOpen(true)
            setModalTask(taskTarget)
        } else {
            setModalTask(null)
            setIsOpen(false)
        }
    }

    const searchTasks = () => {
        const newListTasks = tasks?.filter(task => {
            if(task.titletask?.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || task.desctask?.toLocaleLowerCase().includes(input.toLocaleLowerCase())) return task
        })
        setTasksTarget(newListTasks)
    }

    const resetFilter = () => {
        searchTasks()
    }

    const setFilter = () => {
        const tasksCompletedList = tasksTarget?.filter(task => task.status)
        setTasksTarget(tasksCompletedList)
    }

    useEffect(()=>{
        searchTasks()
    }, [input])

    return <section className="w-full p-5 md:w-4/6 md:flex">
        <div>
            <h1 className="text-2xl font-bold mb-5">Busque por suas tarefas aqui!</h1>
            <div className="flex flex-col gap-5 md:flex-row justify-start md:mb-5">
                <span className="flex gap-2">
                    <input  
                    className="text-black h-10 rounded-md px-3 bg-slate-200 w-full md:w-96"
                    type="text" 
                    placeholder="Digíte as informações da tarefa aqui" 
                    onChange={(e) => setInput(e.target.value)} />
                </span>
                <span className="flex gap-3">
                    <button className="bg-indigo-600 p-5 h-10 w-13 flex items-center rounded-lg font-bold" onClick={resetFilter}>Todas</button>
                    <button className="bg-amber-600 p-5 h-10 w-13 flex items-center rounded-lg font-bold" onClick={setFilter}>Finalizadas</button>
                </span>
            </div>

            <div>
                {tasksTarget?.map(task => {
                    const idtask = task.id ? task.id : 'Tarefa não entrada'
                    return <TaskCard key={task.id} id={idtask} openOrCloseModal={openOrCloseModal}/>
                    })}
            </div>
        </div>
        {modalTask && <ModalTask taskTarget={modalTask} isOpen={isOpen}/>}
    </section>
}

export default Buscar