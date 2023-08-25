import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './Components/Error'
import About from './pages/About'
import Navbar from './Components/Navbar'
import MovieList from './Components/MovieList'
import MovieDetails from './pages/MovieDetails'
import Footer from './Components/Footer'
import Categories from './Components/Categories'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={'Categories'} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/movies/:type' element={<MovieList />} />
        <Route path='/movie/categories' element={<Categories />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
