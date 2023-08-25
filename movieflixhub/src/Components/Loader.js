import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader = () => {
    const loader = <div className='h-[70vh] w-[90vw] mx-auto flex flex-col gap-3 items-center justify-center'>
        <h2 className='text-2xl animate-pulse my-3'>Loading....</h2>
        <Circles
            height="200"
            width="200"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperClass=""
            visible={true}
        />
    </div>
    return (
        <div>
            {loader}
        </div>
    )
}

export default Loader
