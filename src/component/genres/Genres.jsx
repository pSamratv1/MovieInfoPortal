import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import "./style.scss";

const Genres = ({data}) => {
    const {genres} = useSelector((state) => state.home)
  return (
    <div className='genres'>
      {data?.map((genre) => {
        if(!genres[genre]?.name) return;
        return (
            <div className="genre" key={genre}>
                {genres[genre]?.name}
            </div>
        )
      })}
    </div>
  )
}

export default Genres
