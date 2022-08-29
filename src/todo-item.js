import Cross from './images/icon-cross.svg'
import {useState} from 'react'

function TodoItem(props){
    function removeItem(){
        props.setTodos(
            props.todos.filter((value,index,array)=>{
                return index !== props.index
            })
        )
    }
    function checkTodo(){
            props.setTodos(
                [...props.todos.filter((value,index,array)=>{
                    return index !== props.index
                }),{value:props.todo.value,checked:!props.todo.checked}]
            )
    }

    return (
        <div className="todo-item">
            <div className={props.todo.checked ? "circle checked":"circle"} onClick={checkTodo}></div>
            <div className="todo">{props.todo.value}</div>
            <img src={Cross} 
            alt="cross todo" 
            className="cross"
            onClick={removeItem}
                />
        </div>
    );
};



export default TodoItem;