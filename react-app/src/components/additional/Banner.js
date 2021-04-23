import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[0])
            return request
        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className="banner"
        style={{
            backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "200% 200%",
        }}
        >
            <div className="bannerinner">
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie.original_name}</h1>
                <h1 className="bannerSyn">{movie?.overview}</h1>
            </div>


        </div>
    )
}

export default Banner
