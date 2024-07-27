import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { lazy, Suspense, useState } from 'react'

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

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count({ count, setCount }) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer({ count }) {
  return <div>
    Counter: {count}
  </div>
}

function Buttons({ count, setCount }) {
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
