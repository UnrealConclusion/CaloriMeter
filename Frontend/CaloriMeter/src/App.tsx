import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginPage } from "./pages";
import './App.css'

import CaloriesCounter from './components/CaloriesCounter.tsx';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
