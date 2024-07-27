import { useEffect, useState } from 'react'
import './App.css'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
          const data = await res.json()
          setTodos(data.todos)
        })
        .catch(error => console.error('Error fetching todos:', error))
    }, 5000)

    // Cleanup on component unmount
    return () => clearInterval(interval)
  }, [])
  //anythig changes in this array then useEffect call 
  //if array is empty then wnenever it is mounted then it is called.

  return (
    <>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  )
}

export default App
