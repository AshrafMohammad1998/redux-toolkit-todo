import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { toggleLogin } from '../features/todo/testSlice'

function Todos() {
    const todos = useSelector(state => state.todoReducer.todos)

    const isLogin = useSelector(state => state.loginReducer.isLoggedIn) 

    console.log(isLogin, "login status")
    const dispatch = useDispatch()
    console.log(isLogin, "after login status")
    

    return (
        <>
        <div>Todos</div>
        <ul className="list-none">
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>
        <button onClick={() => dispatch(toggleLogin())} > change login status</button>
        <p>Login Status: {isLogin ? "Logged In" : "Logged Out"}</p>
        </>
      )
}

export default Todos