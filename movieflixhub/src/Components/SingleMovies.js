import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovies = () => {
    const { id } = useParams()

    // http://www.omdbapi.com/?apikey=e1825798&
    return (
        <div className='bg-purple-800 text-red-700'>
            SIngle movies {id}
        </div>
    )
}

export default SingleMovies
