import React from 'react';
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";

export const MainWindow = () => {
    const {conversations, selectedConversationIndex, setSelectedConversationIndex} = useContext(ConversationContext)
    
    return (
        <div className="container-fluid">
            <h1 className="mt-4">Selected Conversation</h1>
            <div className='card' style={{ minHeight: '80%'}}>
                
            </div>
        </div>
    );
};