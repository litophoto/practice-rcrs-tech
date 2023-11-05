import React from 'react'
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import Next from './pages/Next';

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Next' element={<Next/>}/>
        </Routes>
    </div>
  )
}

export default App