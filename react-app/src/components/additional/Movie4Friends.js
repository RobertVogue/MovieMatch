import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row2({ fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className="row2">
            <div className="row_posters2">
                {movies.map(movie => (
                   <>
                    <img
                    key={movie.id}
                    className="row_poster2"
                    src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                    </>
                ))}

            </div>
        </div>
    )
}

export default Row2
