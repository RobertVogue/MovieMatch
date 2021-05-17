import React from "react";
// import { useHistory, } from "react-router-dom";
// import FriendsContainer from '../../components/containers/friendsContainer'
// import MessageContainer from '../../components/containers/messagesContainer'
// import MeetingContainer from '../../components/containers/meetingContainer'
import SwipeContainer from '../../components/containers/swipeContainer'
import requests from "../../requests";
// import Row from '../additional/Movie'
import '../../index.css'

const Home = () => {
    // let history = useHistory();


return (
    <div className="homePage">
        <div className="HomeBottomHalf">
            <div className="HomeLeftSection">

            </div>
            <div className="HomeMiddleSection">
                <SwipeContainer fetchUrl1={requests.fetch1} fetchUrl2={requests.fetch2} fetchUrl3={requests.fetch3} fetchUrl4={requests.fetch4} fetchUrl5={requests.fetch5} fetchUrl6={requests.fetch6} fetchUrl7={requests.fetch7} fetchUrl8={requests.fetch8} fetchUrl9={requests.fetch9} fetchUrl10={requests.fetch10} fetchUrl11={requests.fetch11} fetchUrl12={requests.fetch12} fetchUrl13={requests.fetch13} fetchUrl14={requests.fetch14} fetchUrl15={requests.fetch15}/>
            </div>
            <div className="HomeRightSection"></div>
        </div>
    </div>
)
}
export default Home
