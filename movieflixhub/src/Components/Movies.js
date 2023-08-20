import React from 'react'
import { useGlobalContext } from '../Hooks/GlobalHooks'
import { NavLink } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'
const Movies = () => {
    const { movies, query, isLoading } = useGlobalContext()

    const loader =
        <div className='h-[70vh] w-[90vw] mx-auto flex flex-col gap-3 items-center justify-center'>
            <h2 className='text-2xl animate-pulse my-3'>Loading....</h2>
            <Circles
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperClass=""
                visible={true}
            />
        </div>
    return (
        <section className='movie-page'>
            <h2 className='text-center text-2xl py-3 uppercase'>{query} movies</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 py-2'>

                {isLoading ? loader : movies?.map((movie, id) => {
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
