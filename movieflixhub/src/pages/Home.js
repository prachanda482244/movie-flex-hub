import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import MovieList from '../Components/MovieList';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const getData = async () => {
        const { data } = await axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`,
            method: 'get',
        })
        setPopularMovies(data.results)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='poster'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map(movie => {
                        return (
                            <NavLink to={`movie/${movie.id}`} key={movie.id}>

                                <div className='posterImage'>
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                </div>
                                <div className='posterImage_overlay'>
                                    <div className="posterImage_title">
                                        {movie ? movie.original_title : ''}
                                    </div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ''}
                                        <span className='posterImage__rating'>
                                            {movie ? movie.vote_average : ''}
                                            <i className='fas fa-star' />{""}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">
                                        {movie ? movie.overview : ''}
                                    </div>
                                </div>

                            </NavLink>

                        )
                    })
                }
            </Carousel>
            <MovieList />


        </div>
    )
}

export default Home
