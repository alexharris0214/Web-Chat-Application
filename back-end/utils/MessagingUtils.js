import UserModel from "../models/Users.js";

export const getUsersForConversation = async (conversationId) => {
    const userModels = await UserModel.find({conversationIds: conversationId})
    return await userModels
}