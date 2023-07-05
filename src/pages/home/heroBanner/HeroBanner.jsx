import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./style.scss";


const HeroBanner = () => {
  const [background, setBackground] = useState();
  const [query,setQuery] = useState();
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">
            Welcome.
          </span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover.
            Explore now. 
          </span>
          <div className="searchInput">
            <input type="text"
            placeholder='Search for Movie or TV show.....' 
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}/>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
