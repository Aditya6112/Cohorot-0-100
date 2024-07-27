import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
let counter=4
function App() {
  const [todos,setTodos]=useState([
    {
      id:1,
      title:"Wake up",
      description:"at 6 AM"
    },
    {
      id:2,
      title:"Do Breakfast",
      description:"at 9 AM"
    },
    {
      id:3,
      title:"Go to college",
      description:"at 11 AM"
    }
  ])
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title: Math.random(),
      description:Math.random()
    }])
  }
  return (
    <>
      <button onClick={addTodo}>Add a Todo</button><br/><br/>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

export default App
