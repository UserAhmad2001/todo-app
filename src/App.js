import SunImage from './images/icon-sun.svg'
import MoonImage from './images/icon-moon.svg'
import TodoItem from './todo-item'
import {useState} from 'react'

function App() {
  const [nightMode, setNightMode] = useState(false)
  const [todos, setTodos] = useState([])
  var parsedTodos = todos.map((todo, i)=>{
    return (
      <TodoItem todo={todo} key={i} index={i} todos={todos} setTodos={setTodos} />
    )
  })
  function addTodo(ev){
    if(ev.key === 'Enter'){
      setTodos(
        [...todos,{value:ev.target.value,checked:false}]
      )
      ev.target.value = ''
    }
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
      <div className="todo-body">
        {
          [...parsedTodos]
        }
      </div>

      <div className="footer">
        <div className="items-left">
          5 items left
        </div>
        <div className="filter">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <div className="clear-completed" onClick={()=>{setTodos([])}}>
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
