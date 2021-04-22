import React from "react";
import '../../index.css'
import requests from "../../requests";
import Row2 from '../additional/Movie4Friends';

const Friend = () => {



return (
    <div className="friendPage">
        <div className="FriendOrder">
            <div className="friendName">
                <p className="ptag">User1</p>
                <p className="ptag22 green">Match: 85%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch1}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User2</p>
                <p className="ptag22 green">Match: 98%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch2}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User3</p>
                <p className="ptag22 orange">Match: 55%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch3}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User4</p>
                <p className="ptag22 red">Match: 25%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch4}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User5</p>
                <p className="ptag22 orange">Match: 67%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch5}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User6</p>
                <p className="ptag22 red">Match: 15%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch6}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User7</p>
                <p className="ptag22 green">Match: 95%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch7}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User8</p>
                <p className="ptag22 green">Match: 88%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch8}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User9</p>
                <p className="ptag22 orange">Match: 75%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch9}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User10</p>
                <p className="ptag22 green">Match: 80%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch10}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User11</p>
                <p className="ptag22 red">Match: 35%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch11}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User12</p>
                <p className="ptag22 green">Match: 83%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch12}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User13</p>
                <p className="ptag22 red">Match: 12%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch13}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User14</p>
                <p className="ptag22 orange">Match: 50%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch14}/>
            </div>
        </div>
        <div className="FriendOrder2">
            <div className="friendName2">
                <p className="ptag2">User15</p>
                <p className="ptag22 green">Match: 94%</p>
            </div>
            <div className="MovieMatch">
                <Row2 fetchUrl={requests.fetch15}/>
            </div>
        </div>

    </div>
)
}
export default Friend
