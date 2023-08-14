import React, { useEffect, useState } from "react";
import axios from 'axios'
export const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=e1825798&s=titanic`
export const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [isError, setIsError] = useState({ show: false, msg: '' })
    const getMovies = async (url) => {
        try {
            const { data } = await axios({
                url: url,
                method: 'get'
            })

            console.log(data)
            if (data.Response === 'True') {
                setIsLoading(false)
                setMovies(data.Search)
            } else {
                setIsError({ show: true, msg: data.error })

            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getMovies(API_URL)
    }, [])
    return <AppContext.Provider value={{ isLoading, isError, movies }}>{children}</AppContext.Provider>
}