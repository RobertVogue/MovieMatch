import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const SwipeContainer = ({ fetchUrl }) => {
    const [array, setMovies] = useState([]);
    const [movie, setSingle] = useState([]);
    let count = 0;
    const onSwipe = (direction) => {
        const swipe = direction === "right" ? true : false;
        if (swipe) {
            count += 1
            return setSingle(array[count])
        }
        else {
            count += 1
            return setSingle(array[count])
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setSingle(request.data.results[0])
            return request

        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className="swipeCard">
            <div className="swipeDetails">
                <div className="row_posters2">
                    <TinderCard
                            key={movie?.id}
                            onSwipe={onSwipe}
                            preventSwipe={['up', 'down']}>
                            <img
                                key={movie?.id}
                                className="row_poster3"
                                src={`${base_url}${movie?.poster_path}`} alt={movie.name} />
                                <div className="swipeTitle">
                                    <h1>{movie?.name || movie?.original_name || movie?.title}</h1>
                                </div>
                             <div className="swipeSyn">
                                <h3>{movie?.overview}</h3>
                        </div>
                    </TinderCard>
                </div>
            </div>
        </div>
    )


}
export default SwipeContainer
