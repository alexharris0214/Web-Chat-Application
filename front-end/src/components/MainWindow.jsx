import React from 'react';
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";
import { generateWindowHeadingFromConversation } from '../utils/MainWindowUtils';

export const MainWindow = () => {
    const {conversations, selectedConversationIndex, setSelectedConversationIndex} = useContext(ConversationContext)
    const windowHeading = generateWindowHeadingFromConversation(conversations[selectedConversationIndex])

    return (
        <div className="container-fluid">
            <pre><h1 className="mt-4">{windowHeading}</h1></pre>
            <div className='card' style={{ minHeight: '80%'}}>

            </div>
        </div>
    );
};