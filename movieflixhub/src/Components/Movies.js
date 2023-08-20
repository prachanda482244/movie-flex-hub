import React from 'react'
import { useGlobalContext } from '../Hooks/GlobalHooks'
import { NavLink } from 'react-router-dom'
const Movies = () => {
    const { movies, query } = useGlobalContext()
    return (
        <section className='movie-page'>
            <h2 className='text-center text-2xl py-3 uppercase'>{query} movies</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 py-2'>

                {movies?.map((movie, id) => {
                    const { imdbID, Title, Poster } = movie
                    return <NavLink to={`/movie/${imdbID}`} key={imdbID}>
                        <div className='card'>
                            <div className='card-info'>
                                <h2 className='text-center '>{Title.length >= 15 ? `${Title.substring(0, 15)} ...` : Title}</h2>
                                <img src={Poster} alt="Poster" />
                            </div>
                        </div>
                    </NavLink>
                })}
            </div>
        </section>
    )
}

export default Movies
