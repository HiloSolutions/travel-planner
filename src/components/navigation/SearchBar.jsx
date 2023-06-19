import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = ({ handleSearch, nextWord, searchValue, selectSug }) => {
  
  
  return (
    <form className='search'>
      <div className="search-inputs">
        <label htmlFor="location">
          <div className="label">Location</div>
          <input
            name="location"
            id="location"
            placeholder="Where are you going?"
          />
        </label>
      </div>
      <div className="search-button">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  )
}

export default SearchBar