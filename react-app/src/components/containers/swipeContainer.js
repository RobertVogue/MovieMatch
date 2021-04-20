import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const SwipeContainer = ({ fetchUrl, fetchUrl2 }) => {
    const [movie, setMovies] = useState([]);
    const [movie2, setMovies2] = useState([]);
    const goodList = [];
    const badList = [];
    const count = [];

    const onSwipe = (direction, path) => {

        const swipeRight = direction === "right" ? true : false;
        const swipeLeft = direction === "left" ? true : false;
        if (count.length === 19) {
            setMovies(badList)
        }
        else if (swipeRight) {
            count.push("right")
            goodList.push(path)
            console.log(goodList, count)
        }
        else if (swipeLeft) {
            count.push("left")
            badList.push(path)
            console.log(badList, count)
        }

    }
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
            const request2 = await axios.get(fetchUrl2);
            // const request3 = await axios.get(fetchUrl);
            // const request4 = await axios.get(fetchUrl);
            // const request5 = await axios.get(fetchUrl);
            // const request6 = await axios.get(fetchUrl);
            // const request7 = await axios.get(fetchUrl);
            // const request8 = await axios.get(fetchUrl);
            // const request9 = await axios.get(fetchUrl);
            // const request10 = await axios.get(fetchUrl);
            // const request11 = await axios.get(fetchUrl);
            // const request12 = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setMovies2(request2.data.results)
        }
        fetchData();
    }, [])

    return (
        <div className="swipeDetails">
                {movie.map((mov) => (
                    <TinderCard
                        className="swipeCard"
                        key={mov.id}
                        onSwipe={(dir) => onSwipe(dir, mov.poster_path)}
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
