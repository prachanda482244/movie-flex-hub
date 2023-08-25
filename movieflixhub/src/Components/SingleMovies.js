// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useGlobalContext } from '../Hooks/GlobalHooks'
// import axios from 'axios'
// import { API_URL } from '../Context/context'

// const SingleMovies = () => {
//     const { id } = useParams()
//     const [movie, setMovie] = useState({})

//     const { setIsLoading, setIsError } = useGlobalContext()

//     const getMovie = async (url) => {
//         setIsLoading(true)
//         try {
//             const { data } = await axios({
//                 url: url,
//                 method: 'get'
//             })

//             console.log(data)
//             if (data.Response === 'True') {
//                 setIsLoading(false)
//                 setIsError({ show: false, msg: '' })
//                 setMovie(data)
//             } else {
//                 setIsError({ show: true, msg: data.Error })
//             }
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     useEffect(() => {
//         let timerOut = setTimeout(() => {
//             getMovie(`${API_URL}&i=/${id}`)
//         }, .900)
//         return () => clearTimeout(timerOut)
//     }, [id])
//     console.log(movie)
//     return (
//         <div className='bg-purple-800 text-red-700'>
//             SIngle movies {id}
//         </div>
//     )
// }

// export default SingleMovies
