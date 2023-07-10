import React from "react";
import Carousel from "../../../component/carousel/Carousel"
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";


const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    const navigate = useNavigate();
    
    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
            onClick={() => console.log(navigate)}
        />
    );
};

export default Recommendation;