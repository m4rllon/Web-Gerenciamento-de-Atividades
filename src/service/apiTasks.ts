import axios from "axios";
import { Tarefa } from "../data/@types/ITask";

export const getTasks = async () => {
    try{
        const response = await axios.get('http://localhost:3000/tasks')
        return response.data
    } catch (err) {
        console.log('Ocorreu um erro', err)
    }
}

export const getTaskById = async (id:number) => {
    try{
        const response = await axios.get(`http://localhost:3000/tasks/${id}`)
        return response.data
    } catch (err) {
        console.log('Ocorreu um erro', err)
    }
}

export const createTask = async (task:Tarefa) => {
    try{
        const response = await axios.post('http://localhost:3000/tasks', task)
        console.log(response.data)
    } catch (err){
        console.log('Ocorreu um erro', err)
    }
}

export const deleteTask = async (id:string) => {
    try{
        const response = await axios.delete(`http://localhost:3000/tasks/${id}`)
        console.log('Task removida', response)
    } catch (err){
        console.log('Ocorreu um erro', err)
    }
}