import React from "react";
import './SearchBar.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import searchFilter from "./searchFilter";
import { countries } from '../../sample-data/countries';



const SearchBar = ({
  searchQuery,
  setSearchQuery,
  label 
}) => {

  const dataFiltered = searchFilter(searchQuery, countries);

  return (
    <div className="search-bar-container">
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label={label}
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>

      <div style={{ padding: 3 }}>
        {dataFiltered.map((d, index) => (
          <div
            className="search-bar-dropdown"
            key={index}
          >
            {d}
          </div>
        ))}
      </div>
    </div>

  )
};

export default SearchBar;