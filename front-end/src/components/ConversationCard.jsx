import React from "react";

export const ConversationCard = ({firstName, lastName, mostRecentMessage}) => {

    const handleOnClick = () => {
        console.log('here')
    }
    return (
        <>
            <div class="card" style={{margin:10}} onClick={handleOnClick}>
                <p>{`${firstName}, ${lastName}`}</p>
                <p>{mostRecentMessage}</p>
            </div>
        </>
    )
}