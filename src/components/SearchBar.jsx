import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className='search__bar'>
            <div className="search__bar_input">
                <span class="icon material-symbols-outlined">
                    search
                </span>
                <input type="text" name="" id="" placeholder='search by contact or message' />
            </div>
            <div className="search__bar_notification">
                <span class="material-symbols-outlined">
                    notifications
                </span>
            </div>
        </div>
    )
}

export default SearchBar