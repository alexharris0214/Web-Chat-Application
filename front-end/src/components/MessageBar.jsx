import { useContext, useState } from "react"
import { ConversationContext } from "../providers/ConversationProvider"
import axios from "axios"
import { API_URL } from "../constans"
import { AuthContext } from "../providers/AuthProvider"

export const MessageBar = () => {
    const [message, setMessage] = useState("")
    const {conversations, selectedConversationIndex} = useContext(ConversationContext)
    const {userId} = useContext(AuthContext)

    const conversationId = conversations[selectedConversationIndex]?._id
    const handleSendButton = async () => {
        const messageToSend = {
            message,
            conversationId,
            recipientId : conversations[selectedConversationIndex].userModels._id,
            senderId: userId
        }
        const response = await axios.post(API_URL + "/api/messages/insert-message", messageToSend)
        setMessage("")
    }
    return(
        <>
            <input type="text" onChange={(event) => setMessage(event.target.value)} value={message} placeholder="Enter message here..."style={{width:"90%"}}/>
            <button style={{width:"10%"}} onClick={handleSendButton}>Send</button>
        </>
    )
}