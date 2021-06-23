import React from "react";
// import { useHistory, } from "react-router-dom";
// import FriendsContainer from '../../components/containers/friendsContainer'
// import MessageContainer from '../../components/containers/messagesContainer'
// import MeetingContainer from '../../components/containers/meetingContainer'
import SwipeContainer from '../../components/containers/swipeContainer'
import QuickMatch from '../../components/containers/quickmatch'
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
                <SwipeContainer fetchUrl1={requests.fetchAction} fetchUrl2={requests.fetchAdventure} fetchUrl3={requests.fetchAnimation} fetchUrl4={requests.fetchComedy} fetchUrl5={requests.fetchCrime} fetchUrl6={requests.fetchDocumentary} fetchUrl7={requests.fetchDrama} fetchUrl8={requests.fetchFamily} fetchUrl9={requests.fetchFantasy} fetchUrl10={requests.fetchHistory} fetchUrl11={requests.fetchHorror} fetchUrl12={requests.fetchMusic} fetchUrl13={requests.fetchMystery} fetchUrl14={requests.fetchRomance} fetchUrl15={requests.fetchScienceFiction} fetchUrl16={requests.fetchTVMovie} fetchUrl17={requests.fetchThriller} fetchUrl18={requests.fetchWar} fetchUrl19={requests.fetchWestern}/>
            </div>

            <div className="HomeRightSection"></div>
        </div>
    </div>
)
}
export default Home
