import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { lazy, Suspense, useContext, useState } from 'react'
import { CountContext } from './components/Context';

//1st code starts here
// const Dashboard = lazy(() => import('./components/Dashboard'))
// const Landing = lazy(() => import('./components/Landing'))

// function App() {
//   //suspense API
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback="...loading"><Dashboard /></Suspense>} />
//           <Route path="/" element={<Suspense fallback="...loading"><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => {
//         // window.location.href = "/";
//         navigate("/")
//       }}>Landing Page</button>
//       <button onClick={() => {
//         // window.location.href = "/dashboard";
//         navigate("/dashboard")
//       }}>Dashboard Page</button>
//       {/* not work beacuse navigate should be in Browser Router */}
//     </div>
//   )
// }
//1st code ends here

function App() {
  const [count, setCount] = useState(0);

  //wrap everyone who wants to teleported from one component to another component here count is that.
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ count, setCount }) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    Counter: {count}
  </div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
