import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../index.css'
import MessageContainer from "../containers/messagesContainer"
import { getAllFriends } from "../../store/friend";

const Meeting = () => {
    const sessionUser = useSelector((state) => state?.session?.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionUser) {
          dispatch(getAllFriends(sessionUser.id));
        }
      }, [dispatch, sessionUser]);

    /* hard coded a little for presentation */
    return (
        <div className="meetingPage">
            <div className="MeetingTopHalf">
                <div className="MeetingTopLeft"></div>
                <div className="MeetingTopRight"></div>
            </div>
            <div className="MeetingBottomHalf">
                <div className="MeetingLeftSection">
                    <div className="friends">
                        <div className="small">
                            <h1>Friends</h1>
                        </div>
                        <div className="friendList">
                            <p>User1</p>
                            <p>User2</p>
                            <p>User3</p>
                            <p>User4</p>
                            <p>User5</p>
                            <p>User6</p>
                            <p>User7</p>
                            <p>User8</p>
                            <p>User9</p>
                            <p>User10</p>
                            <p>User11</p>
                            <p>User12</p>
                            <p>User13</p>
                            <p>User14</p>
                            <p>User15</p>
                        </div>
                    </div>
                </div>
                <div className="MeetingMiddleSection">
                    <MessageContainer />
                </div>
                <div className="MeetingRightSection"></div>
            </div>
        </div>

    )
    }
export default Meeting
