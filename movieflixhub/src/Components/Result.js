import React from 'react'
import Card from './Card'

const Result = ({ movieList, name }) => {
    return (
        <div className='p-3'>
            <h2 className=" m-3 uppercase text-center text-2xl">Category : {name}</h2>
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

export default Result
