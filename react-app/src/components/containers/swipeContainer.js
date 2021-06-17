import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const SwipeContainer = ({ fetchUrl1, fetchUrl2, fetchUrl3}) => {

    let movieId;
    let userId;

    const [movie, setMovies] = useState([]);
    const [movie2, setMovies2] = useState([]);
    const [movie3, setMovies3] = useState([]);
    const [info, setInfo] = useState('');
    const movieArray = []
    const allMovies = movieArray.concat(movie, movie2, movie3).reverse()

    const goodList = [];
    const badList = [];


    const onSwipe = async (direction, mov) => {
        const swipeRight = direction === "right" ? true : false;
        const swipeLeft = direction === "left" ? true : false;

        if (swipeRight) {
            let id = JSON.parse(localStorage.user).id
            const res = await fetch(`/api/users/${id}/swipe/${movieId}`, {
                method: 'POST',
                body: JSON.stringify({
                    userId: userId, movieId: movieId
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            return await res.json()

        }
        else if (swipeLeft) {
            badList.push(mov)
        }

    }
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl1);
        setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl1])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl2);
        setMovies2(request.data.results);
        }
        fetchData();
    }, [fetchUrl2])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl3);
        setMovies3(request.data.results);
        }
        fetchData();
    }, [fetchUrl3])

















    return (
        <div className="swipeDetails">
                {allMovies.map((mov) => (
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
