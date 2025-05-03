import { useState } from 'react'
import './App.css'

import CaloriesCounter from './components/CaloriesCounter.tsx';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <>
      <NavBar/>
      <CaloriesCounter/>
    </>
  )
}

export default App
