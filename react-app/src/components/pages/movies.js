import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import '../../index.css'
import requests from "../../requests";
import Row from '../additional/Movie'

const Movie = () => {
    const dispatch = useDispatch();
    const [allPosts, setAllPosts] = useState({});
    const sessionUser = useSelector((state) => state?.session?.user);

    useEffect(() => {
        const getPosts = async () => {
          const response = await fetch(`/api/movies/all/${sessionUser?.id}`);
          const data = await response.json();
          setAllPosts(data.posts);
        };
        if (sessionUser?.id) {
          getPosts();
        }

      }, [dispatch, sessionUser]);

  const allPostsComponents =
    allPosts &&
    Object.values(allPosts).map((post) => {
      return (
        <div key={post.id} className="boxxy">
          <Link to={`/${post.username}`}>
            <img src={post.movieArt} alt="art" className="allImages" />
          </Link>
        </div>
      );
    });

  return (
      <div className="moviePage">
        <div className="MovieBottomHalf">
            <div className="MovieLeftSection"></div>
            <div className="MovieMiddleSection">
              <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
              <Row title="Top Movies" fetchUrl={requests.fetchTopRated}/>
            </div>
            <div className="MovieRightSection"></div>
        </div>
      </div>
  )
  }
export default Movie
