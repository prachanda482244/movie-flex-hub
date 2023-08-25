import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { NavLink } from 'react-router-dom'
const Card = ({ movie }) => {
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1500);
    }, [])
    return (
        <>
            {
                isLoading ?
                    <div className='cards'>
                        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                            <Skeleton count={5} />
                        </SkeletonTheme>
                    </div> : <NavLink to={`/movie/${movie.id}`}>
                        <div className="cards">
                            <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ''}`} alt="movie" className="cards__img " />
                            <div className="cards__overlay">
                                <div className="font-extrabold">
                                    {movie ? movie.original_title : ''}
                                </div>
                                <div className="mb-1 font-sm">
                                    {movie ? movie.release_date : ''}
                                    <span className="text-right">{movie ? movie.vote_average : ''}
                                        <i className='fas fa-star' />
                                    </span>
                                </div>
                                <div className="text-sm mb-1">
                                    {movie ? movie.overview.slice(0, 118) + '...' : ''}
                                </div>
                            </div>
                        </div>
                    </NavLink>
            }
        </>
    )
}

export default Card
