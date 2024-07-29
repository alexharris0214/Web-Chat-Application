import React from "react";
import { ConversationCard } from "./ConversationCard";

export const SideChatWindow = () => {
    return (
        <div className="d-flex flex-column vh-100 text-white p-3" style={{ minWidth: '350px',  borderRight: '2px solid black' }}>
            <div className="list-group list-group-flush">
                <ConversationCard
                    firstName = "DummyFirstName"
                    lastName = "DummyLastName"
                    mostRecentMessage = "This is a sample of the most recent message sent by dummy blah blah blah"
                />
                <ConversationCard
                    firstName = "DummyFirstName"
                    lastName = "DummyLastName"
                    mostRecentMessage = "This is a sample of the most recent message sent by dummy blah blah blah"
                />
                <ConversationCard
                    firstName = "DummyFirstName"
                    lastName = "DummyLastName"
                    mostRecentMessage = "This is a sample of the most recent message sent by dummy blah blah blah"
                />
                <ConversationCard
                    firstName = "DummyFirstName"
                    lastName = "DummyLastName"
                    mostRecentMessage = "This is a sample of the most recent message sent by dummy blah blah blah"
                />
            </div>
        </div>
    );
};
