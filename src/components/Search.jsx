import React from 'react'

const Search = ({ state, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(state)

        const resultArray = state.filter(state => state.name.toLowerCase().includes(e.target.value) || state._id.toUpperCase().includes(e.target.value) || state.name.includes(e.target.value))
        
        setSearchResults(resultArray)
    }
    return (
        <header>
            <form className='search' onSubmit={handleSubmit}>
                <input 
                    className='search_input'
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
            </form>
        </header>
    )
}

export default Search
