import React from 'react';
import { useHistory } from "react-router-dom";

const MessageBox = ({message, setMessageId}) => {
    let history = useHistory();

    const redirect = () => {
        setMessageId(message.messageId)
        history.push(`./messages/${message.messageId}`)
    }


    return (
        <div className="regularBox" onClick={redirect}>
            Hello
        </div>
    )
}





export default MessageBox
