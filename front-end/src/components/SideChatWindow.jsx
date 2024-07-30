import React from "react";
import { generateCardComponents } from "../utils/SideChatWindowUtils";
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";

export const SideChatWindow = () => {
    const {conversations} = useContext(ConversationContext)
    const cardComponents = generateCardComponents(conversations)
    
    return (
        <div className="d-flex flex-column vh-100 text-white p-3" style={{ minWidth: '350px',  borderRight: '2px solid black' }}>
            <div className="list-group list-group-flush">
                {cardComponents}
            </div>
        </div>
    );
};
