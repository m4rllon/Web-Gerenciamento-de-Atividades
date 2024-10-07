import { Tarefa } from "../data/@types/ITask";

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

// 'action' é um objeto com as chaves type: qual operação será feita, e payload: que é a unidade a ser usada nessa operação (se é adicionar algo em um array, o payload é esse algo a ser adicionado)
// 'state' é o estado inicial e que será sempre atualizado quando a as operações são feitas

export enum OperationsTypes {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    UPDATE_TASK = 'UPDATE_TASK',
}

type Action = | {type: OperationsTypes.ADD_TASK, payload: Tarefa} | {type: OperationsTypes.DELETE_TASK, payload: Tarefa} | {type: OperationsTypes.UPDATE_TASK, payload: Tarefa}

type State = Tarefa[] 

export const tasksReducer = (state:State, action:Action) => {
    const operationObject = action.payload
    const operationType = action.type
    console.log(state)
    switch (operationType) {
        case OperationsTypes.ADD_TASK:
            console.log(state)
            console.log(action)
            return [...state, operationObject]
        default:
            console.log(state)
            return state
    }
    
}