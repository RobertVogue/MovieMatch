import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findMeetings } from "../../store/meeting"
import "../../index.css"
import io from "socket.io-client";
import createNewMessage from "../../store/messages";
import {Avatar} from "@material-ui/core"
import Row2 from '../additional/Movie4Friends'
import requests from "../../requests";

const url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5000/"
        : "https://moviematch2.herokuapp.com/";

export const socket = io.connect(url, {
    secure: true,
});

const MessageContainer = () => {
    const chatBox = document.querySelector(".chatMessages");
    const dispatch = useDispatch();
    const [messageInput, setMessageInput] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [newMessage, setNewMessage] = useState(false);
    const { meetingId } = useParams();
    const user = useSelector((state) => state.session.user);
    const meeting = useSelector((state) => state.meeting);

    const handleNewMessage = (e) => {
        e.preventDefault();
        if (!messageInput) return;
        socket.emit("new message", { user: user.username, room: meeting.id });
        createNewMessage(messageInput, user, meeting);
        setMessageInput("");
    };

    useEffect(() => {
        if (isLoaded && user && meeting)
            socket.emit("join", { username: user.username, room: meeting.id });
    }, [isLoaded, user, meeting]);

    useEffect(() => {
        socket.on("load message", () => {
            if (process.env.NODE_ENV === "production")
            setNewMessage(true);
        });
    }, []);

    useEffect(() => {
        socket.on("new user", (message) => {
            console.log(message.message);
        });
        return () => socket.disconnect();
    }, []);

    useEffect(() => {
        dispatch(findMeetings(meetingId));
        setNewMessage(false);
    }, [meetingId, newMessage, dispatch]);

    useEffect(() => {
        if (meeting) {
            setIsLoaded(true);
            if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
        }
    }, [meeting, chatBox]);

    return (
        isLoaded && (
            <div className="everything">
                <div className="chatheader">
                    <Avatar src={`https://avatars.dicebear.com/api/human/700.svg`}/>
                    <div className="headinfo">
                        <h3>user2</h3>
                    </div>


                </div>
                <div className="chatMessages">
                    <p className="chatmessage"><span className="chatname">user2</span>
                    Hey Everyone, glad you're here!</p>
                    <p className={`chatmessage ${true && "chatreceive"}`}>
                    <span className="chatname">Bo</span>
                    Thanks!
                    <span className="time">
                        5:07pm
                    </span>
                    </p>
                    <p className="chatmessage">
                    <span className="chatname">user2</span>
                    Messaging Currently Offline. Please Try Again later!</p>
                </div>
                <div className="messageInputs">
                <form onSubmit={(e) => handleNewMessage(e)}>
                    <input
                        className="inputs"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button className="inputButton" type="submit">
                    Send Message
                    </button>
                </form>
                </div>
            </div>
        )
    )


}




export default MessageContainer
