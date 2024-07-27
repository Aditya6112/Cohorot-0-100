import { useState, memo, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputFunction = useCallback(() => {
    console.log("app rerender")
  }, [])
  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button onClick={() => setCount(count + 1)}>Counter({count})</button>
    </div>
  )
}

const ButtonComponent = memo((inputFunction) => {
  console.log("child rerender")
  return (
    <>
      <button>Button Clicked</button>
    </>
  )
})
export default App
