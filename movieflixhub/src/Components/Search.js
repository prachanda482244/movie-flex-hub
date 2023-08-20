import React from 'react'
import { useGlobalContext } from '../Hooks/GlobalHooks'

const Search = () => {
    const { query, setQuery, isError } = useGlobalContext()
    return (
        <section className='search-section'>
            <h2>Search your favourite movie</h2>
            <form action="#" onSubmit={(e) => e.preventDefault()} >
                <div className='search-item'>
                    <input className='py-2 px-3 outline-1' type="text" placeholder='search here' value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
            </form>
            <div className='card-error'>
                <p className='h-6'>
                    {isError.show && isError.msg}
                </p>
            </div>
        </section>

    )
}

export default Search
