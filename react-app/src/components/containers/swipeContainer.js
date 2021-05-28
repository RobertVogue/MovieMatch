import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const SwipeContainer = ({ fetchUrl1, fetchUrl2, fetchUrl3}) => {

    let movieId;
    let userId;

    // , fetchUrl4, fetchUrl5, fetchUrl6, fetchUrl7, fetchUrl8, fetchUrl9, fetchUrl10, fetchUrl11, fetchUrl12, fetchUrl13, fetchUrl14, fetchUrl15
    const [movie, setMovies] = useState([]);
    const [movie2, setMovies2] = useState([]);
    const [movie3, setMovies3] = useState([]);
    const [info, setInfo] = useState('');
    // More Movies work. But super SLOW.
    // const [movie4, setMovies4] = useState([]);
    // const [movie5, setMovies5] = useState([]);
    // const [movie6, setMovies6] = useState([]);
    // const [movie7, setMovies7] = useState([]);
    // const [movie8, setMovies8] = useState([]);
    // const [movie9, setMovies9] = useState([]);
    // const [movie10, setMovies10] = useState([]);
    // const [movie11, setMovies11] = useState([]);
    // const [movie12, setMovies12] = useState([]);
    // const [movie13, setMovies13] = useState([]);
    // const [movie14, setMovies14] = useState([]);
    // const [movie15, setMovies15] = useState([]);
    const movieArray = []
    const allMovies = movieArray.concat(movie, movie2, movie3).reverse()
    // movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12, movie13, movie14, movie15

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
            // goodList.push(mov)
            // console.log(goodList)
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
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl4);
    //     setMovies4(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl4])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl5);
    //     setMovies5(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl5])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl6);
    //     setMovies6(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl6])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl7);
    //     setMovies7(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl7])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl8);
    //     setMovies8(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl8])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl9);
    //     setMovies9(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl9])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl10);
    //     setMovies10(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl10])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl11);
    //     setMovies11(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl11])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl12);
    //     setMovies12(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl12])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl13);
    //     setMovies13(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl13])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl14);
    //     setMovies14(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl14])
    // useEffect(() => {
    //     async function fetchData() {
    //     const request = await axios.get(fetchUrl15);
    //     setMovies15(request.data.results);
    //     }
    //     fetchData();
    // }, [fetchUrl15])
















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
