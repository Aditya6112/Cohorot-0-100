import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}
function MyComponent() {
  useEffect(() => {
    console.error("component mounted")
    //lifecycle event after 10 sec component unmounted get logged
    return () => {
      console.log("component unmounted")
    };
  }, []);

  return <>
    From inside my component
  </>
}

export default App