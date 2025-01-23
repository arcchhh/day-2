import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import RegForm from './components/RegForm'
import Navbar from './components/Navbar'
import ChristTable from './components/ChristTable'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/"element={<First/>}/>
          <Route path='/r'element={<RegForm/>}/>
          <Route path='/c'element={<ChristTable/>}/>
          <Route path="/s"element={<Statebasics/>}/>
          <Route path="/v"element={<Task/>}/>


        </Routes>
        
    </>
  );
}

export default App
