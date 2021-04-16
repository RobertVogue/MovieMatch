import React from "react";
import { useHistory, } from "react-router-dom";
import FriendsContainer from '../../components/containers/friendsContainer'
import MessageContainer from '../../components/containers/messagesContainer'
import MeetingContainer from '../../components/containers/meetingContainer'
import SwipeContainer from '../../components/containers/swipeContainer'
import requests from "../../requests";
import Row from '../additional/Movie'
import '../../index.css'

const Home = () => {
    let history = useHistory();


return (
    <div className="homePage">
        <div className="HomeBottomHalf">
            <div className="HomeLeftSection">
                <FriendsContainer />
            </div>
            <div className="HomeMiddleSection">
                <SwipeContainer fetchUrl={requests.fetchEmAll}/>
            </div>
            <div className="HomeRightSection"></div>
        </div>
    </div>
)
}
export default Home
