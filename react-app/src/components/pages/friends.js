import React, {useState, useEffect} from "react";
import { useHistory, } from "react-router-dom";
import '../../index.css'

const Friend = () => {
    let history = useHistory();


return (
    <div className="friendPage">
        <div className="FriendTopHalf">
            <div className="FriendTopLeft"></div>
            <div className="FriendTopRight"></div>
        </div>
        <div className="FriendBottomHalf">
            <div className="FriendLeftSection"></div>
            <div className="FriendMiddleSection"></div>
            <div className="FriendRightSection"></div>
        </div>
    </div>
)
}
export default Friend
