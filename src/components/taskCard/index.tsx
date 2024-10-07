import { Button } from "@mui/material"
import { Tarefa } from "../../data/@types/ITask"
import Delete from "@mui/icons-material/Delete"
import { AssignmentOutlined, 
    CheckCircle, 
    Edit, 
    RadioButtonUncheckedOutlined } from "@mui/icons-material"
import { useContext, useEffect, useState } from "react"
import { TasksContext } from "../../context/tasksContext"
import FormAddTask from "../formAddTask"
import setDateTaskCard from "../../utils/setDateTaskCard"

interface props {
    id: string;
    openOrCloseModal: (idTask:string, taskTarget:Tarefa) => void;
}

const TaskCard = ({id, openOrCloseModal}: props) => {
    const [editSelect, setEditSelect] = useState(false)
    
    const context = useContext(TasksContext)
    const [tasks, setTasks] = [context?.tasks, context?.setTasks]
    
    const [tarefa, setTarefa] = useState<Tarefa | undefined>(tasks?.find(task => task.id === id))
    const [newStatus, setNewStatus] = useState(tarefa?.status)

    const getTaskByID = () => {
        return tasks?.find(task => task.id === id)
    }
    
    const deleteTask = () => {
        const taskTarget = tasks?.find(task => task.id === id) 
        const newTasksList = tasks?.filter(task => task.id !== taskTarget?.id)
        if(setTasks && newTasksList) setTasks(newTasksList)
    }

    const editTask = (tarefa:Tarefa) => {
        const newTasksList = tasks?.map(task => {
            if(task.id === tarefa?.id) return tarefa
            else return task
        })
        if(setTasks && newTasksList) setTasks(newTasksList)
    }

    useEffect(()=>{
        const newTask = {...tarefa, status: newStatus}
        setTarefa(newTask)
    }, [newStatus])

    useEffect(()=>{
        if(tarefa)
        editTask(tarefa)
    }, [tarefa])

    useEffect(()=>{
        setTarefa(getTaskByID())
    }, [tasks])

    return <>
    {
        !editSelect ? <div className="border-slate-600 w-full my-1 p-2 border-b-2">
            <span className="flex flex-col justify-start items-start gap-5">
                <div className="" onClick={() => {if(tarefa) openOrCloseModal(id, tarefa)}}>
                    <span className="flex gap-2 items-center">
                        <button onClick={() => setNewStatus(prev => !prev)}>{
                            newStatus ? <CheckCircle sx={{color:'#66BB6A'}}/> : <RadioButtonUncheckedOutlined sx={{color:'#66BB6A'}}/>}</button>
                        <h6 className={`font-bold ${newStatus ? 'line-through text-slate-600': ''}`}>{tarefa?.titletask}</h6>
                    </span>
                    <p className={`text-md line-clamp-1 ${newStatus ? 'text-slate-600' : ''}`}>{tarefa?.desctask}</p>
                    <p className={`${newStatus ? 'text-slate-600' : 'text-red-500'}`}>
                    <AssignmentOutlined/>  {tarefa?.datetask ? setDateTaskCard(tarefa?.datetask) : ''}</p>
                </div>

                <span className="flex justify-start items-end gap-4">
                    <Button 
                    variant="contained" 
                    size="small" 
                    startIcon={<Edit />}
                    onClick={()=> setEditSelect(prev => !prev)}>
                        Editar
                    </Button>
                    <Button 
                    variant="outlined" 
                    sx={{borderColor: 'rgb(239, 68, 68)', color: 'rgb(239, 68, 68)'}}
                    size="small" 
                    startIcon={<Delete sx={{color: 'rgb(239, 68, 68)'}}/>}
                    onClick={deleteTask}>
                        Excluir
                    </Button>
                </span>
            </span>

        </div>
        : 
        <div>
            <FormAddTask tarefa={tarefa} setTaskSelect={setEditSelect}/>
        </div> 
    }
    </> 
}

export default TaskCard