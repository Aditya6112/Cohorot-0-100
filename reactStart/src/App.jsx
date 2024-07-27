// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);   //[1,2]

//   // function onClickHandler(){
//   //   setCount(count+1)
//   // }
//   return (
//     <div>
//       {/* <button onClick={onClickHandler}>Counter {count}</button> */}
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// //lets create a component for button
// function CustomButton(props){
//   function onClickHandler(){
//     // eslint-disable-next-line react/prop-types
//     props.setCount(props.count+1);
//   }
//   return(
//     // eslint-disable-next-line react/prop-types
//     <button onClick={onClickHandler}>Counter {props.count}</button>           
//   )
// }

// export default App


//TODO


import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]); 

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App