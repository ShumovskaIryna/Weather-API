import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'

function Header (): JSX.Element {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <span className="logo">Weather</span>
      </div>
      <div className="headerCenter">
        <div className="searchbar">
            <SearchIcon sx={{ mr: 1, ml: 2, fontSize: 28 }} />
            <input placeholder="Search for city" className="searchInput" />
        </div>
      </div>
      <div className="headerRight">
      </div>
    </div>
  )
}
export default Header
