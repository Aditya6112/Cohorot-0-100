import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const value=setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false)
        })
    },n * 1000)
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false)
      })
      //because if we havn't cleane the old clock that had stopped if we don't
      //do it then there were 2 intervals running in the stack
      return(
        clearInterval(value)
      )
  }, [n])
  return { todos, loading };
}

function App() {

  const { todos, loading } = useTodos(10);
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App