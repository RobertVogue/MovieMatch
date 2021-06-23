import React, { useState, useEffect } from "react";
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const QuickMatch = ({fetchUrl1}) => {

    const [movie, setMovies] = useState([]);


    useEffect(() => {
            async function fetchData() {
            const request = await axios.get(fetchUrl1);
            setMovies(request.data.results);
            }
            fetchData();
    }, [fetchUrl1])


    return (
        <div className="minimatch">Trending Movies by Genre
            {/* <div className="scrollbox">
                <p>Action</p>
                <p>Adventure</p>
                <p>Animation</p>
                <p>Comedy</p>
                <p>Crime</p>
                <p>Documentary</p>
                <p>Drama</p>
                <p>Family</p>
                <p>Fantasy</p>
                <p>History</p>
                <p>Horror</p>
                <p>Music</p>
                <p>Mystery</p>
                <p>Romance</p>
                <p>Science Fiction</p>
                <p>Thriller</p>
                <p>TV Movie</p>
                <p>War</p>
                <p>Western</p>
            </div> */}
        </div>
    )
}
export default QuickMatch
