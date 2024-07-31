import ConversationsModel from "../models/Conversations.js"
import UserModel from "../models/Users.js"
import { getUsersForConversation } from "../utils/MessagingUtils.js"
export const insertMessage = async (req, res) => {
    const conversationId = req.body.conversationId
    const message = req.body.message
    const receiverId = req.body.receiverId
    const senderId = req.body.senderId
    const newMessage = {
        text:message,
        receiverId,
        senderId,
        timeStamp: new Date()
    }
    const newModel = await ConversationsModel.updateOne(
        {_id: conversationId}, 
        { $push: { messages: newMessage } }
    )
    console.log(newModel)

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
            let userModels = await getUsersForConversation(conversation._id)
            userModels = userModels.filter(userModel => {
                return userModel._id != userId
            })
            userModels = userModels.map(userModel => {
                return(
                    {
                        _id: userModel._id,
                        firstName: userModel.firstName,
                        lastName: userModel.lastName,
                    }
                )
            })
            let conversationObj = conversation.toObject();
            conversationObj["userModels"] = userModels[0];
            return await conversationObj;
        })
        conversations = await Promise.all(conversations)
        res.send(conversations);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};
