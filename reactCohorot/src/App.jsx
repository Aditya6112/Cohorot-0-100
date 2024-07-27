import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={
          function() {
            // setCount((count) => count + 1)
            setCount(Math.ceil(Math.random()*10))
          }
        }>
        count is {count}
      </button>
    </div>
  )
}

export default App
