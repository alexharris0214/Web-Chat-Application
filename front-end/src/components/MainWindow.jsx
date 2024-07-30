import React from 'react';
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";
import { generateWindowHeadingFromConversation, generateMessagesFromConversation } from '../utils/MainWindowUtils';

export const MainWindow = () => {
    const {conversations, selectedConversationIndex, setSelectedConversationIndex} = useContext(ConversationContext)
    const windowHeading = generateWindowHeadingFromConversation(conversations[selectedConversationIndex])
    const messages = generateMessagesFromConversation(conversations[selectedConversationIndex])
    return (
        <div className="container-fluid">
            <pre><h1 className="mt-4">{windowHeading}</h1></pre>
            <div className='card' style={{ height: '80%'}}>
                <div className='list-group' style={{maxHeight:"100%"}}>
                    {messages}
                </div>
            </div>
        </div>
    );
};