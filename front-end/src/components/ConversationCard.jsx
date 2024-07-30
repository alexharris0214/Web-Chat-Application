import React from "react";
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";

export const ConversationCard = ({firstName, lastName, mostRecentMessage, index}) => {

    const {setSelectedConversationIndex, selectedConversationIndex} = useContext(ConversationContext)
    
    const handleOnClick = () => {
        setSelectedConversationIndex(index)
    }
    return (
        <>
            <div className="card" style={{margin:10}} onClick={handleOnClick}>
                <p>{`${firstName}, ${lastName}`}</p>
                <p>{mostRecentMessage}</p>  
            </div>
        </>
    )
}