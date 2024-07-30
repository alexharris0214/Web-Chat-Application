import { MessageComponent } from "../components/MessageComponent"

export const generateWindowHeadingFromConversation = (conversation) => {
    return `${conversation.firstName} ${conversation.lastName}`
}

export const generateMessagesFromConversation = (conversation) => {
    return(
        conversation.messages.map((message, index) => {
            return(
                <MessageComponent
                    text={message.text}
                    timeStamp={message.timeStamp}
                    key={index}
                    senderId = {message.senderId}
                />
            )
        })
    )
}