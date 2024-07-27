import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  //suspense API
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback="...loading"><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback="...loading"><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        // window.location.href = "/";
        navigate("/")
      }}>Landing Page</button>
      <button onClick={() => {
        // window.location.href = "/dashboard";
        navigate("/dashboard")
      }}>Dashboard Page</button>
      {/* not work beacuse navigate should be in Browser Router */}
    </div>
  )
}

export default App
