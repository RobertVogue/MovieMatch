import React, {useState, useEffect} from "react";
import { useHistory, } from "react-router-dom";
import '../../index.css'

const Home = () => {
    let history = useHistory();


return (
    <div className="homePage">
        <div className="HomeTopHalf">
            <div className="HomeTopLeft">
                <h2>User Info</h2>
            </div>
            <div className="HomeTopRight">
                <h2>Movie Info</h2>
            </div>
        </div>
        <div className="HomeBottomHalf">
            <div className="HomeLeftSection">
                <h2>Friends</h2>
            </div>
            <div className="HomeMiddleSection">
                <h2>Swipe Object</h2>
            </div>
            <div className="HomeRightSection">
                <h2>Swipe Info</h2>
            </div>
        </div>
    </div>
)
}
export default Home
