import React from "react";

export const MessageComponent = ({text, timeStamp, senderId}) => {
    return(
        <div className="card" style={senderId == 0 ? {alignSelf:"flex-start"} : {alignSelf:"flex-end"}}>
            <p>{text}</p>
            <p>{timeStamp}</p>
        </div>
    )
}