import React from 'react'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import VillanousRandomSelector from '../pages/VillanousRandomSelector'
import VillanousSoloMode from '../pages/VillanousSoloMode'

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/Vselector' Component={VillanousRandomSelector}/>
            <Route path='/VSMode' Component={VillanousSoloMode}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes