import mongoose from "mongoose";


const UsersSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true
    },
    conversationIds: [{
        type:String,
    }]
  });
  
const UserModel = mongoose.model('Users', UsersSchema);
export default UserModel