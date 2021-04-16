import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const SwipeContainer = ({ fetchUrl }) => {
    const [movie, setMovies] = useState([]);
    // const [movie, setSingle] = useState("");
    // const [list, setList] = useState([])
    // const onSwipe = (direction) => {
    //     let count = 0;
    //     const swipe = direction === "right" ? true : false;
    //     if (swipe) {
    //         count += 1
    //         setList(...list, movie)
    //         setSingle(array[count])
    //     }
    //     else {
    //         count += 1
    //         setSingle(array[count])
    //     }
    // }

    useEffect(() => {
            async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request

        }
        fetchData();
    }, [])

    return (
        <div className="swipeDetails">
                {movie.map((mov) => (
                    <TinderCard
                        className="swipeCard"
                        key={mov.id}
                        preventSwipe={['up', 'down']}>
                        <div style={{ backgroundImage: `url(${base_url}${mov.poster_path})`}}
                        className="cardItself"
                        >
                            <div className="descr">Description</div>
                            <div className="swipeSyn">
                            <h3>{mov.overview}</h3>
                            </div>
                        </div>
                    </TinderCard>
                ))}
        </div>

    )


}
export default SwipeContainer
