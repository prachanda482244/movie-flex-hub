import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Result from './Result'
import { Link } from 'react-router-dom'
import background from '../assets/background.png'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [showResult, setShowResult] = useState(false);
    const [heading, setHeading] = useState('')
    const [genres, setGenres] = useState([])
    const [showCategories, setShowCategories] = useState(false)
    const [showTopCategories, setShowTopCategories] = useState(false)
    const getData = async (type) => {
        const { data } = await axios({
            url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`,
            method: 'get',
        })
        console.log(data)
        setCategories(data.genres)
    }
    useEffect(() => {
        getData()
    }, [])
    const onClickHandler = async (id, name) => {
        const { data } = await axios({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=${id}`,
            method: 'get'
        })
        console.log(data)
        setGenres(data.results)
        setShowResult(true)
        setHeading(name)
    }

    const topCategoriesList = [
        { title: "Popular", link: '/movies/popular' },
        { title: 'Top rated', link: '/movies/top_rated' },
        { title: 'Upcoming', link: '/movies/upcoming' },
    ]
    return (
        <div>
            <div>
                <div className={` mt-3 overflow-x-scroll h-32  flex  items-center  border p-2 sm:block sm:h-auto sm:overflow-x-visible sm:border-none`}>
                    <div className='flex justify-between px-4'>
                        <h2 className='text-2xl font-bold cursor-pointer mb-2' onClick={() => {
                            setShowCategories(!showCategories)
                            setShowTopCategories(false)
                        }}>Categories</h2>
                        <h2 className='text-2xl font-bold cursor-pointer mb-2' onClick={
                            () => {
                                setShowTopCategories(!showTopCategories)
                                setShowCategories(false)
                            }
                        }>Top categories</h2>
                    </div>
                    <hr className='w-full my-3' />
                    {showCategories && categories.map((element) => {
                        return (
                            <span key={element.id}>
                                <button
                                    onClick={() => {
                                        onClickHandler(element.id, element.name);
                                    }}

                                    className='font-bold uppercase px-7 py-3 rounded-full outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 sm:mb-4 ring-2 hover:bg-white hover:text-black'
                                    type="button"
                                >
                                    {element.name}
                                </button>
                            </span>
                        );
                    })}
                </div>

                {
                    showTopCategories && topCategoriesList.map((element) => {
                        const { title, link } = element;
                        return (

                            <Link key={title}
                                to={link}
                                className='font-bold uppercase px-7 py-3 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150 sm:mb-4 ring-2 hover:bg-white hover:text-black mx-2 '
                            >
                                {title}
                            </Link>
                        );
                    })}
                <hr className='w-full my-7' />
                {showResult ? <div>
                    <Result name={heading} movieList={genres} />
                </div>
                    :
                    <div className='p-5 sm:h-[70vh] flex items-center flex-col'>
                        <h2 className='py-4 px-2 uppercase font-2xl'>Use Categories to see the movies</h2>
                        <img src={background} alt="heroes" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Categories
