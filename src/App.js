import SunImage from './images/icon-sun.svg'
import MoonImage from './images/icon-moon.svg'
import TodoItem from './todo-item'
import {useState, useEffect} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function App() {
  const [nightMode, setNightMode] = useState(false)
  const [todos, setTodos] = useState([])
  const [viewedTodos, setViewedTodos] = useState(todos)

useEffect(()=>{
  setViewedTodos(todos)
},[todos])


  var parsedTodos = viewedTodos.map((todo, i)=>{
    return (
      <Draggable key={i} draggableId={i.toString()} index={i}>
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
        <TodoItem todo={todo} index={i} todos={todos} setTodos={setTodos}/>
    </div>
  )}
</Draggable>
    )
  })
  function addTodo(ev){
    if(ev.key === 'Enter'){
      setTodos(
        [...todos,{value:ev.target.value,checked:false}]
        )
        ev.target.value = ''
        console.log(todos);
    }
  }
  function allBtn(){
    setViewedTodos(todos)
  }
  function completedBtn(){
    setViewedTodos(
      todos.filter(val=>{
        return val.checked
      })
    )
  }
  function activeBtn(){
    setViewedTodos(
      todos.filter(val=>{
        return !val.checked
      })
    )
  }
  function clearCompleted(){
    setTodos(
      todos.filter(val=>{
        return !val.checked
      })
    )
  }
  function dragEnd(ev){
    var dest = ev.destination.index
    var src = ev.source.index
    var filtered = todos.filter((val,index)=>{
      return index !== src
    })
    setTodos([...filtered.slice(0, dest),{value:todos[src].value,checked:todos[src].checked},...filtered.slice(dest)])
  }

  return (
    <div className={nightMode ? 'dark' : 'light'}>
      <div className='container'>
        <header>
          <h1>TODO</h1>
          <img onClick={()=>{
            setNightMode(!nightMode) 
            console.log(nightMode)
          }}
          src={nightMode ? SunImage : MoonImage} 
          alt="theme changer " 
            />
        </header>

      <div className="input-sec">
        <span className='circle'></span>
        <input placeholder='Type Something' className='todo-input' type="text" onKeyDown={addTodo} />
      </div>


  <section className="todo-body-footer">
    <DragDropContext onDragEnd={dragEnd}>
        <div className="todo-body">
      <Droppable droppableId='hola' type="PERSON">
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
            {[...parsedTodos]}
      {provided.placeholder}
      
    </div>
  )}
  
</Droppable>;
  </div>
    </DragDropContext>

      <div className="footer">
        <div className="items-left">
          {todos.length} items left
        </div>
        <div className="filter">
          <p tabIndex={0} onClick={allBtn}>All</p>
          <p tabIndex={0} onClick={activeBtn}>Active</p>
          <p tabIndex={0} onClick={completedBtn}>Completed</p>
        </div>
        <div className="clear-completed" onClick={clearCompleted}>
          Clear Completed
        </div>
      </div>

  </section>


      <p className="drag-mes">
        Drag and drop to reorder list
      </p>

      </div>
    </div>
  );
}

export default App;
