import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';


const Details = () => {

  const { mediaType, id } = useParams();
  const {data ,loading} = useFetch(`/${mediaType}/${id}`);


  return (
    <div>
      
    </div>
  )
}

export default Details
