import ConversationsModel from "../models/Conversations.js"
import UserModel from "../models/Users.js"
import { getUsersForConversation } from "../utils/MessagingUtils.js"
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

export const getConversations = async (req, res) => {
    const userId = req.body.userId;

    try {
        const userModel = await UserModel.findById(userId);
        const conversationIds = userModel.conversationIds;
        const conversationPromises = conversationIds.map(async (conversationId) => {
            return await ConversationsModel.findById(conversationId);
        });
        let conversations = await Promise.all(conversationPromises);
        conversations = conversations.map(async (conversation) => {
            const userModels = await getUsersForConversation(conversation._id)
            let conversationObj = conversation.toObject();
            conversationObj["userModels"] = await userModels; 
            return await conversationObj;
        })
        let conversation = await Promise.all(conversations)
        res.send(conversation);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};
