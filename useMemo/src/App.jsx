import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)//for count button
  const [num,setNum]=useState(0)
  const [counter,setCounter]=useState(0)//for num upto n
  //using useMemo
  // let ans=useMemo(()=>{
  //   let finalCount=0;
  //   for(let i=1;i<=num;i++){
  //     finalCount+=i
  //   }
  //   return finalCount;
  // },[num])

  //using useEffect same thing
  useEffect(()=>{
    let finalCount=0;
    for(let i=1;i<=num;i++){
      finalCount+=i;
    }
    setCounter(finalCount);
  },[num])
  
  return (
    <>
      <input type='number' placeholder='Find sum upto n' onChange={(e)=>{
        setNum(e.target.value)
      }}></input><br/>
      <div>Sum is {counter}</div>
      <button onClick={()=>{setCount(count+1)}}>Counter ({count})</button>
    </>
  )
}

export default App
