import React, {useState, useEffect} from "react";
import { useHistory, } from "react-router-dom";
import '../../index.css'

const Home = () => {
    let history = useHistory();


return (
    <div className="homePage">
        <div className="HomeTopHalf">
            <div className="HomeTopLeft"></div>
            <div className="HomeTopRight"></div>
        </div>
        <div className="HomeBottomHalf">
            <div className="HomeLeftSection"></div>
            <div className="HomeMiddleSection"></div>
            <div className="HomeRightSection"></div>
        </div>
    </div>
)
}
export default Home
