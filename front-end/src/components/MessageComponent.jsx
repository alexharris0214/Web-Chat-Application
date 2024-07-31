import React from "react";

export const MessageComponent = ({text, timeStamp, senderId, userId}) => {

    return(
        <div className="card" style={senderId !== userId ? {alignSelf:"flex-start", margin: 10, padding: 10, borderRadius: 30} : {alignSelf:"flex-end", margin: 10, padding: 10, borderRadius: 30}}>
            <p>{text}</p>
            <p>{timeStamp}</p>
        </div>
    )
}