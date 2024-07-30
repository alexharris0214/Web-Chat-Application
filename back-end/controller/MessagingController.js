import ConversationsModel from "../models/Conversations.js"
import UserModel from "../models/Users.js"
export const insertMessage = async (req, res) => {
    const data = 
        {
            messages: [
                {
                    text:"hi",
                    recipientId: "0",
                    senderId: "1",
                    timeStamp: "d"
                }
            ]
        }
    const dataUser = 
        {
            firstName: "admin",
            lastName: "admin",
            email:"admin@admins.com",
            password:"admin",
            conversationIds: [
                "383838"
            ]
        }
    
    res.send("hi")
    const modelUser = UserModel(dataUser)
    const model = ConversationsModel(data);
    model.save()
    modelUser.save()
}