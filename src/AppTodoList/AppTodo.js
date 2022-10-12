import React, { useReducer } from 'react'
import {TodoAdd} from './TodoAdd'
import { TodoList } from './TodoList'
import {todoReducer} from './todoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime()*3,
        description: 'Recolectar la piedra del poder',
        done: false,
    }
]

const AppTodo = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) =>{
        // console.log({todo})

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
