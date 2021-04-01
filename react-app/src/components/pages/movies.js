import React, {useState, useEffect} from "react";
import { useHistory, } from "react-router-dom";
import '../../index.css'

const Movie = () => {
    let history = useHistory();


return (
    <div className="moviePage">
        <div className="MovieTopHalf">
            <div className="MovieTopLeft"></div>
            <div className="MovieTopRight"></div>
        </div>
        <div className="MovieBottomHalf">
            <div className="MovieLeftSection"></div>
            <div className="MovieMiddleSection"></div>
            <div className="MovieRightSection"></div>
        </div>
    </div>
)
}
export default Movie
