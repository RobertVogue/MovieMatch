import React, {useState, useEffect} from "react";
import { useHistory, } from "react-router-dom";
import '../../index.css'

const Profile = () => {
    let history = useHistory();


return (
    <div className="profilePage">
        <div className="ProfileTopHalf">
            <div className="ProfileTopLeft"></div>
            <div className="ProfileTopRight"></div>
        </div>
        <div className="ProfileBottomHalf">
            <div className="ProfileLeftSection"></div>
            <div className="ProfileMiddleSection"></div>
            <div className="ProfileRightSection"></div>
        </div>
    </div>
)
}
export default Profile
