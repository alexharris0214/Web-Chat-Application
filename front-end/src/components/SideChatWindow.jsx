import React from "react";
import { ConversationCard } from "./ConversationCard";
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";

export const SideChatWindow = () => {
    const {conversations} = useContext(ConversationContext)

    return (
        <div className="d-flex flex-column vh-100 text-white p-3" style={{ minWidth: '350px',  borderRight: '2px solid black' }}>
            <div className="list-group list-group-flush">
                {conversations.map(conversation => {
                    return(
                        <ConversationCard
                            firstName = {conversation.firstName}
                            lastName = {conversation.lastName}
                            mostRecentMessage = "This is a sample of the most recent message sent by dummy blah blah blah"
                        />
                    )
                })}
            </div>
        </div>
    );
};
