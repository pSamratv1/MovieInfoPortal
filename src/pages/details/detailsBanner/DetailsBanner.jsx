import dayjs from 'dayjs';
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./style.scss";
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';
import Genres from '../../../component/genres/Genres';
import Rating from '../../../component/rating/Rating';
import Img from '../../../component/lazyLoadImage/Img';

const DetailsBanner = ({video, cast}) => {


    const { mediaType, id } = useParams();
    const {data ,loading} = useFetch(`/${mediaType}/${id}`);
    
    const toHoursAndMinutes = ( totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return  `${hours}h${minutes > 0 ? `${minutes}m` : ""}`;
    };

  return (
    <div className='detailsBanner'>
        {!loading ? (
            <div>Details Content...</div>
        ) : (
        <div className="detailsBannerSkeleton">
        <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
            </div>
        </ContentWrapper>
      </div>
        )}
    </div>
  )
}

export default DetailsBanner
