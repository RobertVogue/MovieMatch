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
            <div className="MeetingMiddleSection">
                <div className="displayMessage">
                </div>
                <div className="textArea" id="input_area">
                    <input type="text" id="user_message" placeholder="Type here..." autoComplete="pff"/>
                    <button type="button" name="button" id="send_message">Send</button>
                </div>
            </div>
            <div className="MeetingRightSection"></div>
        </div>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.6/socket.io.min.js"></script>
        <script src="{{ url_for('static', filename='scripts/socketio.js') }}"></script>
    </div>
)
}
export default Meeting
