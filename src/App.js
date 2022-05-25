import React from 'react'
import Category from './components/Category'
import Pages from './pages/Pages'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App