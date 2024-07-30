import React, { useEffect } from 'react';
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";
import { generateWindowHeadingFromConversation, generateMessagesFromConversation } from '../utils/MainWindowUtils';
import { useState } from 'react';
export const MainWindow = () => {
    const {conversations, selectedConversationIndex} = useContext(ConversationContext)
    const [windowHeading, setWindowHeading] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(() => {
        console.log(conversations)
        if(conversations != undefined && conversations.length != 0){
            setWindowHeading(generateWindowHeadingFromConversation(conversations[selectedConversationIndex]))
            setMessages(generateMessagesFromConversation(conversations[selectedConversationIndex]))
        }
    }, [conversations])
    
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