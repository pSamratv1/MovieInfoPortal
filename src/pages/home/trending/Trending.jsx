import React, {useState} from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTab/SwitchTabs';
import useFetch from '../../../hooks/useFetch';


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const {data,loading} = useFetch(`/trending/all/${endpoint}`);
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
    </div>
  )
} 

export default Trending
