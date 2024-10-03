// import { Input, InputLabel, TextField } from "@mui/material"
import { Button } from "@mui/material"
import React, {  useContext, useState } from "react"
import { Tarefa } from "../../data/@types/ITask";
import { TasksContext } from "../../context/tasksContext";

interface ChildComponentProps {
    setTaskSelect: React.Dispatch<React.SetStateAction<boolean>>;
    tarefa?: Tarefa;
}


const FormAddTask = ({ setTaskSelect, tarefa}:ChildComponentProps) => {
    
    const prevId = `${Math.floor(Math.random() * (1000 - 1 + 1)) + 1000}`
    const context = useContext(TasksContext)
    const setTasks = context?.setTasks
    const tasks = context?.tasks
    const [dataForm, setDataForm] = useState<Tarefa>( tarefa ? tarefa : {id: prevId, status: false})

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const addTarefa = () => {
        if(setTasks) setTasks(prev => [...prev, dataForm])
    }

    const editTask = () => {
        const newTasksList = tasks?.map(task => {
            if(task.id === tarefa?.id) return dataForm
            else return task
        })
        console.log(newTasksList)
        if(setTasks && newTasksList) setTasks(newTasksList)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const taskTarget = tasks?.find(task => task.id === tarefa?.id)
        if(taskTarget) editTask()
        else addTarefa()
        setTaskSelect(prev=> !prev)
    }

    return <div className='rounded-lg bg-[#1E1E1E] shadow-xl p-2 my-4'>
        {tarefa ? <h2 className="text-xl font-bold mb-2">Edite as informações desta tarefa:</h2> : <></>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col">
                <label htmlFor="titletask">Título da tarefa</label>
                <input
                className="text-black" 
                type="text" 
                name="titletask" 
                onChange={handleChangeValue}
                placeholder="Digíte o título da tarefa aqui"
                defaultValue={tarefa?.titletask}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="desctask">Descrição da tarefa</label>
                <input
                className="text-black" 
                type="text" 
                name="desctask" 
                onChange={handleChangeValue}
                placeholder="Digíte a descrição da tarefa aqui"
                defaultValue={tarefa?.desctask}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="datetask">Data limite</label>
                <input
                className="text-black" 
                type="date" 
                name="datetask" 
                onChange={handleChangeValue}
                placeholder="Digíte a descrição da tarefa aqui"
                defaultValue={tarefa?.datetask}
                />
            </div>
            <Button type="submit" variant="contained">Salvar</Button>
        </form>
    </div> 
}

export default FormAddTask