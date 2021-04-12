import React from "react";
import '../../index.css'
import requests from "../../requests";
import Row from '../additional/Movie'

const Movie = () => {
  return (
      <div className="moviePage">
        <div className="MovieBottomHalf">
            <div className="MovieLeftSection"></div>
            <div className="MovieMiddleSection">
              <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
              <Row title="Top Movies" fetchUrl={requests.fetchTopRated}/>
              <Row title="This Year's Hits" fetchUrl={requests.fetchThisYearsHits}/>
            </div>
            <div className="MovieRightSection"></div>
        </div>
      </div>
  )
  }
export default Movie
