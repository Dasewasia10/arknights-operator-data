import React from 'react';
import debounce from 'lodash.debounce'

const Search = ({ state, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(state)

        const resultArray = state.filter(state => state.name.toLowerCase().includes(e.target.value) || state._id.toUpperCase().includes(e.target.value) || state.name.includes(e.target.value))

        setSearchResults(resultArray)
    }
    const debounceOnchange = debounce(handleSearchChange, 500)
    return (
        <header>
            <form className='search' onSubmit={handleSubmit}>
                <input 
                    className='search_input'
                    type="text"
                    id="search"
                    onChange={debounceOnchange}
                />
            </form>
        </header>
    )
}

export default Search
