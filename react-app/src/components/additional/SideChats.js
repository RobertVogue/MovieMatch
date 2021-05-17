import React from "react";
import "../../index.css"
import { Avatar } from "@material-ui/core";

function SideChats({ addNewChat }) {


    const createChat = () => {
        const roomName = prompt("Enter Name");

        if (roomName) {
            // coming back Need to fix.
        }
    };

return !addNewChat ? (
    <div className="sidechatmain">
        <Avatar src={`https://avatars.dicebear.com/api/human/700.svg`}/>
        <div className="sidechatinfo">
            <h2 className="avfont">user2</h2>
            <p>Looks like we have a match!</p>
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
