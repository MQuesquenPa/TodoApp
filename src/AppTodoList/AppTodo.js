import React, { useEffect, useReducer } from 'react'
import {TodoAdd} from './TodoAdd'
import { TodoList } from './TodoList'
import {todoReducer} from './todoReducer'

const initialState = []

const init =  () => {
    return JSON.parse(localStorage.getItem('todos')) || []; 
}
const AppTodo = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type: 'ADD',
            payload: todo
        }
        dispatch(action)
    }

    return (
    <>
        <div className='mt-3 mx-4'> 
        <h1 className='text-light'>TODO LIST 10, <small className='text-danger'>PENDIENTES: 2</small></h1>
        </div>
        <div className='row px-4 '>
            <div className='col-7 mt-5'>
                <TodoList todos={todos}/>
            </div>
            <div className='col-5'>
                <h3 className='text-light'>AGREGAR TODO</h3>
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </div>
    </>
  )
}

export default AppTodo
