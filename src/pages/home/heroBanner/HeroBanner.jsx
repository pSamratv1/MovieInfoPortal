import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import "./style.scss";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../component/lazyLoadImage/Img';
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';



const HeroBanner = () => {
  const [background, setBackground] = useState();
  const [query,setQuery] = useState();
  const navigate = useNavigate();
  const { url } =useSelector((state) => state.home)
  const {data,loading} = useFetch("/movie/upcoming")

  const searchQueryHandler = (e) => {
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data])
  

  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper >
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
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
