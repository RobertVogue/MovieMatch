import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import axios from '../../axios'
import "../../index.css"

const base_url = "https://image.tmdb.org/t/p/original/"

const SwipeContainer = ({ fetchUrl1, fetchUrl2, fetchUrl3, fetchUrl4, fetchUrl5, fetchUrl6, fetchUrl7, fetchUrl8, fetchUrl9, fetchUrl10, fetchUrl11, fetchUrl12, fetchUrl13, fetchUrl14, fetchUrl15, fetchUrl16, fetchUrl17, fetchUrl18, fetchUrl19}) => {

    let movieId;
    let userId;

    // Main List - changes based on genre
    const [movies, setMovies] = useState([]);

    //Genre Lists
    const [action, setAction] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [crime, setCrime] = useState([]);
    const [documentary, setDocumentary] = useState([]);
    const [drama, setDrama] = useState([]);
    const [family, setFamily] = useState([]);
    const [fantasy, setFantasy] = useState([]);
    const [history, setHistory] = useState([]);
    const [horror, setHorror] = useState([]);
    const [music, setMusic] = useState([]);
    const [mystery, setMystery] = useState([]);
    const [romance, setRomance] = useState([]);
    const [scienceFiction, setScienceFiction] = useState([]);
    const [tVMovie, setTVMovie] = useState([]);
    const [thriller, setThriller] = useState([]);
    const [war, setWar] = useState([]);
    const [western, setWestern] = useState([]);


    const [movie2, setMovies2] = useState([]);
    const [movie3, setMovies3] = useState([]);
    const [info, setInfo] = useState('');
    const movieArray = []
    const allMovies = movieArray.concat(movies, movie2, movie3).reverse()

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
        const request = await axios.get(fetchUrl1);
        setAction(request.data.results);
        }
        fetchData();
    }, [fetchUrl1])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl2);
        setAdventure(request.data.results);
        }
        fetchData();
    }, [fetchUrl2])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl3);
        setAnimation(request.data.results);
        }
        fetchData();
    }, [fetchUrl3])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl4);
        setComedy(request.data.results);
        }
        fetchData();
    }, [fetchUrl4])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl5);
        setCrime(request.data.results);
        }
        fetchData();
    }, [fetchUrl5])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl6);
        setDocumentary(request.data.results);
        }
        fetchData();
    }, [fetchUrl6])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl7);
        setDrama(request.data.results);
        }
        fetchData();
    }, [fetchUrl7])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl8);
        setFamily(request.data.results);
        }
        fetchData();
    }, [fetchUrl8])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl9);
        setFantasy(request.data.results);
        }
        fetchData();
    }, [fetchUrl9])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl10);
        setHistory(request.data.results);
        }
        fetchData();
    }, [fetchUrl10])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl11);
        setHorror(request.data.results);
        }
        fetchData();
    }, [fetchUrl11])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl12);
        setMusic(request.data.results);
        }
        fetchData();
    }, [fetchUrl12])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl13);
        setMystery(request.data.results);
        }
        fetchData();
    }, [fetchUrl13])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl14);
        setRomance(request.data.results);
        }
        fetchData();
    }, [fetchUrl14])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl15);
        setScienceFiction(request.data.results);
        }
        fetchData();
    }, [fetchUrl15])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl16);
        setTVMovie(request.data.results);
        }
        fetchData();
    }, [fetchUrl16])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl17);
        setThriller(request.data.results);
        }
        fetchData();
    }, [fetchUrl17])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl18);
        setWar(request.data.results);
        }
        fetchData();
    }, [fetchUrl18])
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl19);
        setWestern(request.data.results);
        }
        fetchData();
    }, [fetchUrl19])

    const handleAction = () => {
        return setMovies(action)
    }
    const handleAdventure = () => {
        return setMovies(adventure)
    }
    const handleAnimation = () => {
        return setMovies(animation)
    }
    const handleComedy = () => {
        return setMovies(comedy)
    }
    const handleCrime = () => {
        return setMovies(crime)
    }
    const handleDocumentary = () => {
        return setMovies(documentary)
    }
    const handleDrama = () => {
        return setMovies(drama)
    }
    const handleFamily = () => {
        return setMovies(family)
    }
    const handleFantasy = () => {
        return setMovies(fantasy)
    }
    const handleHistory = () => {
        return setMovies(history)
    }
    const handleHorror = () => {
        return setMovies(horror)
    }
    const handleMusic = () => {
        return setMovies(music)
    }
    const handleMystery = () => {
        return setMovies(mystery)
    }
    const handleRomance = () => {
        return setMovies(romance)
    }
    const handleScienceFiction = () => {
        return setMovies(scienceFiction)
    }
    const handleTVMovie = () => {
        return setMovies(tVMovie)
    }
    const handleThriller = () => {
        return setMovies(thriller)
    }
    const handleWar = () => {
        return setMovies(war)
    }
    const handleWestern = () => {
        return setMovies(western)
    }



    return (
        <div className="swipeDetails">
                {movies.map((mov) => (
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
                <div className="minimatch">Trending Movies by Genre
            <div className="scrollbox">
                <p onClick={handleAction}>Action</p>
                <p onClick={handleAdventure}>Adventure</p>
                <p onClick={handleAnimation}>Animation</p>
                <p onClick={handleComedy}>Comedy</p>
                <p onClick={handleCrime}>Crime</p>
                <p onClick={handleDocumentary}>Documentary</p>
                <p onClick={handleDrama}>Drama</p>
                <p onClick={handleFamily}>Family</p>
                <p onClick={handleFantasy}>Fantasy</p>
                <p onClick={handleHistory}>History</p>
                <p onClick={handleHorror}>Horror</p>
                <p onClick={handleMusic}>Music</p>
                <p onClick={handleMystery}>Mystery</p>
                <p onClick={handleRomance}>Romance</p>
                <p onClick={handleScienceFiction}>Science Fiction</p>
                <p onClick={handleThriller}>Thriller</p>
                <p onClick={handleTVMovie}>TV Movie</p>
                <p onClick={handleWar}>War</p>
                <p onClick={handleWestern}>Western</p>
            </div>
        </div>
        </div>


    )


}
export default SwipeContainer
