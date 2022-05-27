import React from 'react'
import Home from './Home'
import {Route,Routes} from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'

const Pages = () => {
  return (
    <div className="pages">

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:type' element={<Cuisine />}/>
        <Route path="/search/:search" element={<Searched/>}/>
      </Routes>
  

      
    </div>
  )
}

export default Pages