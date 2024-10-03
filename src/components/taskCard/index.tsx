import { Button } from "@mui/material"
import { Tarefa } from "../../data/@types/ITask"
import Delete from "@mui/icons-material/Delete"
import { AssignmentOutlined, CheckCircle, Edit, RadioButtonUncheckedOutlined } from "@mui/icons-material"
import { useContext, useEffect, useState } from "react"
import { TasksContext } from "../../context/tasksContext"
import FormAddTask from "../formAddTask"
import setDateTaskCard from "../../utils/setDateTaskCard"

const TaskCard = ({id, titletask, desctask, datetask, status}: Tarefa) => {
    const [tarefa, setTarefa] = useState({id, titletask, desctask, datetask, status})
    const [editSelect, setEditSelect] = useState(false)
    const [newStatus, setNewStatus] = useState(status)
    
    const context = useContext(TasksContext)
    const [tasks, setTasks] = [context?.tasks, context?.setTasks]

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
        editTask(tarefa)
    }, [tarefa])

    return <>
    {
        !editSelect ? <div className="w-full my-2 p-2 border-b-2 border-slate-600">
            <span className="flex justify-between items-center">
                <div className="">
                    <span className="flex gap-3 items-center">
                        <button onClick={() => setNewStatus(prev => !prev)}>{
                            newStatus ? <CheckCircle sx={{color:'#66BB6A'}}/> : <RadioButtonUncheckedOutlined sx={{color:'#66BB6A'}}/>}</button>
                        <h6 className={`font-bold ${newStatus ? 'line-through text-slate-600': ''}`}>{titletask}</h6>
                    </span>
                    <p className={`text-md line-clamp-1 ${newStatus ? 'text-slate-600' : ''}`}>{desctask}</p>
                    <p className={`${newStatus ? 'text-slate-600' : 'text-red-500'}`}>
                    <AssignmentOutlined/>  {datetask ? setDateTaskCard(datetask) : ''}</p>
                </div>

                <span className="h-20 flex justify-start items-end gap-4">
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