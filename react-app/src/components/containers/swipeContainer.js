import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const SwipeContainer = ({ fetchUrl, fetchUrl2, fetchUrl3 }) => {
    const [movie, setMovies] = useState([]);
    const goodList = [];
    const badList = [];
    const count = [];
    const counter = [];


    const onSwipe = async (direction, mov) => {
        const swipeRight = direction === "right" ? true : false;
        const swipeLeft = direction === "left" ? true : false;
        const request2 = await axios.get(fetchUrl2)
        const request3 = await axios.get(fetchUrl3)
        if (count.length === 19) {
            counter.push("done")
            if(counter.length===1){
                return setMovies(request2.data.results)
            }
            if(counter.length===2){
                return setMovies(request3.data.results)
            }
        }
        else if (swipeRight) {
            count.push("right")
            goodList.push(mov)
            console.log(goodList, count)
        }
        else if (swipeLeft) {
            count.push("left")
            badList.push(mov)
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

        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="swipeDetails">
                {movie.map((mov) => (
                    <TinderCard
                        className="swipeCard"
                        key={mov.id}
                        onSwipe={(dir) => onSwipe(dir, mov)}
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
