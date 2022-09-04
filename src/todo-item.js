import Cross from './images/icon-cross.svg'

function TodoItem(props){
    function removeItem(){
        props.setTodos(
            props.todos.filter((value,index,array)=>{
                return index !== props.index
            })
        )
    }
    function checkTodo(){
        var todo = props.todo
        var ind = props.index
        var f = props.todos.filter((value,index,array)=>{
            return index !== props.index
        })
            props.setTodos(
                [...f.slice(0, ind),{value:todo.value,checked:!todo.checked},...f.slice(ind)]
            )
    }

    return (
        <div className="todo-item" draggable="true">
            <div className={props.todo.checked ? 'checked' : 'circle'} onClick={checkTodo}>
            </div>
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