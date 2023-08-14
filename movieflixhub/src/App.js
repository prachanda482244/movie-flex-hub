import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import SingleMovies from './Components/SingleMovies'
import Error from './Components/Error'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMovies />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
