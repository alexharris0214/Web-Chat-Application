import UserModel from "../models/Users";

export const createUser = async (req, res) => {
    const body = req.body
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const userData = {
        firstName,
        lastName,
        email,
        password,
        conversations: [
        ]
    }
    const userModel = UserModel(userData)
    try{
        userModel.save()
    } catch(err){
        console.log(err)
    }
}