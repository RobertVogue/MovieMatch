import React, {useEffect, useState} from "react";
import "../../index.css"
import { Avatar } from "@material-ui/core";

function SideChats({ addNewChat }) {
    const [av, setAv] = useState('')

    useEffect(() => {
        setAv(Math.floor(Math.random() * 10000))
    }, [])

    const createChat = () => {
        const roomName = prompt("enter name");

        if (roomName) {
            // coming back
        }
    };

return !addNewChat ? (
    <div className="sidechatmain">
        <Avatar src={`https://avatars.dicebear.com/api/human/${av}.svg`}/>
        <div className="sidechatinfo">
            <h2 className="avfont">Room Name Test</h2>
            <p>last Message...</p>
        </div>
    </div>
): (
    <div onClick={createChat}
    className="sidechatmain2">
        <h2>Add Room</h2>

    </div>
);



}
export default SideChats
