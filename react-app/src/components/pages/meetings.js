import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../index.css'
import MessageContainer from "../containers/messagesContainer"
import { getAllFriends } from "../../store/friend";

const Meeting = () => {
    const sessionUser = useSelector((state) => state?.session?.user);
    const dispatch = useDispatch();
    const friends = useSelector((state) => state?.friend?.friends)

    useEffect(() => {
        if (sessionUser) {
          dispatch(getAllFriends(sessionUser.id));
        }
      }, [dispatch, sessionUser]);

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
                            {sessionUser?.frienders}
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
