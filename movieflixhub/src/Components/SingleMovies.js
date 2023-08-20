import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Hooks/GlobalHooks'

const SingleMovies = () => {
    const { id } = useParams()
    const { movies } = useGlobalContext()
    console.log(movies)
    return (
        <div className='bg-purple-800 text-red-700'>
            SIngle movies {id}
        </div>
    )
}

export default SingleMovies
