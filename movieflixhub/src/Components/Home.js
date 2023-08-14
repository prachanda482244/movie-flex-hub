import React from 'react'
import { useGlobalContext } from '../Hooks/GlobalHooks'

const Home = () => {
    const name = useGlobalContext()
    return (
        <div>
            home {name}
        </div>
    )
}

export default Home
