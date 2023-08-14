import React from 'react'
import { useGlobalContext } from '../Hooks/GlobalHooks'

const Movies = () => {
    const { movies } = useGlobalContext()
    return (
        <div>
            {movies?.map((movie, id) => {
                return <div key={id}>{movie.Title}</div>
            })}
        </div>
    )
}

export default Movies
