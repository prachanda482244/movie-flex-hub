import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    const getData = async (type) => {
        const { data } = await axios({
            url: `https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`,
            method: 'get',
        })
        console.log(data)
        setMovieList(data.results)
    }

    useEffect(() => {
        getData(type)
    }, [type])
    return (
        <div className='p-3'>
            <h2 className="text-lg m-3 uppercase">{type ? type : 'Popular'}</h2>
            <div className="flex flex-wrap justify-center">
                {
                    movieList.map((movie, i) => {
                        return (
                            <Card movie={movie} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList
