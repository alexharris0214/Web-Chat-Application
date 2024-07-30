import mongoose, {Schema} from "mongoose";

const ConversationsSchema = new Schema({
    messages: {
        type: 
            [{
                text: {
                    type: String,
                    required: true
                },
                recipientId: {
                    type:String,
                    require:true
                },
                senderId: {
                    type:String,
                    require:true
                },
                timeStamp: {
                    type:String,
                    require:true
                },  
            }]
    }
})

const ConversationsModel = mongoose.model('Conversations', ConversationsSchema);
export default ConversationsModel