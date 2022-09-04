import Cross from './images/icon-cross.svg'
import CheckImage from './images/icon-check.svg'

function TodoItem(props){
    function removeItem(){
        props.setTodos(
            props.todos.filter((value,index,array)=>{
                return index !== props.index
            })
        )
    }
    function checkTodo(){
        var todo = props.todo.value
        var ind = props.index
        var f = props.todos.filter((value,index,array)=>{
            return index !== props.index
        })
            props.setTodos(
                [...f.slice(0, ind),{value:todo,checked:true},...f.slice(ind)]
            )
    }
    function drag(ev){
        var bodyY = document.querySelector('.todo-body').getBoundingClientRect().top
        var elPos = ev.target.getBoundingClientRect()
        console.log(elPos, bodyY);
    }
    function changeOrder(ind){
        var todo = props.todo.value
        var f = props.todos.filter((value,index,array)=>{
            return index !== props.index
        })
            props.setTodos(
                [...f.slice(0, ind),{value:todo,checked:true},...f.slice(ind)]
            )
    }
    return (
        <div className="todo-item" draggable="true" onDrag={drag}>
            <div className={props.todo.checked ? 'checked' : 'circle'} onClick={checkTodo}>
                <img src={CheckImage} alt="check sign" />
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