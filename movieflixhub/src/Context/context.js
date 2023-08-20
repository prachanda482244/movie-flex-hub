import React, { useEffect, useState } from "react";
import axios from 'axios'
export const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_APIKEY}`
export const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [isError, setIsError] = useState({ show: false, msg: '' })
    const [query, setQuery] = useState('titanic')

    const getMovies = async (url) => {
        setIsLoading(true)
        try {
            const { data } = await axios({
                url: url,
                method: 'get'
            })

            console.log(data)
            if (data.Response === 'True') {
                setIsLoading(false)
                setIsError({ show: false, msg: '' })
                setMovies(data.Search)
            } else {
                setIsError({ show: true, msg: data.Error })
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`)
        }, .900)
        return () => clearTimeout(timerOut)
    }, [query])
    return <AppContext.Provider value={{ isLoading, isError, movies, query, setQuery }}>{children}</AppContext.Provider>
}