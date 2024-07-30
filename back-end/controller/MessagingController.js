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

export const getConversations = async (req, res) => {
    const userId = req.body.userId;

    try {
        // Find the user and get their conversation IDs
        const userModel = await UserModel.findById(userId);
        const conversationIds = userModel.conversationIds;

        // Use map to create an array of promises for fetching conversations
        const conversationPromises = conversationIds.map(async (conversationId) => {
            // Fetch each conversation by ID
            return await ConversationsModel.findById(conversationId);
        });

        // Wait for all promises to resolve
        const conversations = await Promise.all(conversationPromises);

        // Log the conversations
        console.log(conversations);

        // Send the conversations in the response
        res.send(conversations);
    } catch (err) {
        // Log the error
        console.log(err);
        res.status(500).send('Server Error');
    }
};
