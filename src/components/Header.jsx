import PropType from 'prop-types'
import React from 'react'

function Header({ onSearch }) {
    const [textSearch, setTextSearch] = React.useState('')
    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a className="text-white" href="#">Home</a>
                    <a className="text-white" href="#">About</a>
                    <a className="text-white" href="#">Contact</a>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" className="p-3 text-black" onChange={(e) => setTextSearch(e.target.value)} value={textSearch} />
                <button className="bg-red-600 text-white p-2 rounded-md" onClick={() => onSearch(textSearch)}>Search</button>
            </div>
        </div>

    )
}

Header.propTypes = {
    onSearch: PropType.func,
}

export default Header
