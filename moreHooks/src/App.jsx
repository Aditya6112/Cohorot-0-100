import { useState } from 'react'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
function App() {
  const [id, setId] = useState(1)
  return (
    <>
      <button onClick={function () {
        setId(1)
      }}>1</button>
      <button onClick={function () {
        setId(2)
      }}>2</button>
      <button onClick={function () {
        setId(3)
      }}>3</button>
      <button onClick={function () {
        setId(4)
      }}>4</button>
      <button onClick={function () {
        setId(5)
      }}>5</button>
      <TodobyId id={id} />
    </>
  )
}
//if we have to find todo by id
function TodobyId({ id }) {
  const [todos, setTodos] = useState({});
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(function (res) {
        setTodos(res.data.todo)
      })
  }, [id])//whenever id cheanges re run this 

  return (
    <div>
      <b>Title: </b>{todos.title}<br />
      <b>Description: </b>{todos.description}<br />
    </div>
  )
}

export default App
