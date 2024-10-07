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
        if(setTasks && newTasksList) setTasks(newTasksList)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const taskTarget = tasks?.find(task => task.id === tarefa?.id)
        if(taskTarget){
            editTask()
        } 
        else {
            addTarefa()
        }
        setTaskSelect(prev=> !prev)
    }

    return <div className='rounded-lg bg-[#1E1E1E] shadow-xl p-2 my-4'>
        {tarefa ? <h2 className="text-xl font-bold mb-2">Edite as informações desta tarefa:</h2> : <></>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col">
                <label className="font-semibold text-lg" htmlFor="titletask">Título da tarefa</label>
                <input
                className="text-black h-10 rounded-md px-3 bg-slate-200" 
                type="text" 
                name="titletask" 
                onChange={handleChangeValue}
                placeholder="Digíte o título da tarefa aqui"
                defaultValue={dataForm.titletask}
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold text-lg" htmlFor="desctask">Descrição da tarefa</label>
                <input
                className="text-black h-10 rounded-md px-3 bg-slate-200" 
                type="text" 
                name="desctask" 
                onChange={handleChangeValue}
                placeholder="Digíte a descrição da tarefa aqui"
                defaultValue={dataForm.desctask}
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold text-lg" htmlFor="datetask">Data limite</label>
                <input
                className="text-black h-10 rounded-md px-3 bg-slate-200" 
                type="date" 
                name="datetask" 
                onChange={handleChangeValue}
                placeholder="Digíte a descrição da tarefa aqui"
                defaultValue={dataForm.datetask}
                />
            </div>
            <Button type="submit" variant="contained">Salvar</Button>
        </form>
    </div> 
}

export default FormAddTask