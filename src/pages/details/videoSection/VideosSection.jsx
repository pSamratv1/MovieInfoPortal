// eslint-disable-next-line
import React, {useState} from 'react';
import VideoPopup from '../../../component/videoPopup/VideoPopup';
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';
import Img from '../../../component/lazyLoadImage/Img';
import { PlayIcon } from '../Playbtn';
import './style.scss';



const VideoSection = ({data , loading}) => {
    
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(0);
 
    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>

            </div>
        )
    }

  return (
    <div className="videosSection">
        <ContentWrapper>
            <div className="sectionHeading">Offical Video</div>
            {!loading ? (
            <div className="videos">
                {data?.results?.map((video) => (
                    <div 
                        key={video.id}
                        className="videoItem"
                        onClick={()=> {
                            setVideoId(video.key);
                            setShow(true);
                        }}
                        >
                        <div className="videoThumbnail">
                            <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                            <PlayIcon />
                        </div>
                        <div className="videoTitle">
                            {video.name}
                        </div>
                        </div>
                        
                ))}
            </div>
        ) : (
            <div className="videoSkeleton">
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}

            </div>
        )}
        </ContentWrapper>
        <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
    </div>
  )
}

export default VideoSection
