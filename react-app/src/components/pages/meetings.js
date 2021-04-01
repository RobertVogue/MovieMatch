import React, {useState, useEffect} from "react";
import { useHistory, } from "react-router-dom";
import '../../index.css'

const Meeting = () => {
    let history = useHistory();


return (
    <div className="meetingPage">
        <div className="MeetingTopHalf">
            <div className="MeetingTopLeft"></div>
            <div className="MeetingTopRight"></div>
        </div>
        <div className="MeetingBottomHalf">
            <div className="MeetingLeftSection"></div>
            <div className="MeetingMiddleSection"></div>
            <div className="MeetingRightSection"></div>
        </div>
    </div>
)
}
export default Meeting
