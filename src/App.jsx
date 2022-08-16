import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AllRoutes } from './components/AllRoutes'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
