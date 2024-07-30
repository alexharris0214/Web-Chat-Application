import UserModel from "../models/Users.js";

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
        await userModel.save()
    } catch(err){
        console.log(err)
    }
}

export const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try{
        const userModel = await UserModel.findOne({email: email})
        console.log(userModel)
        if(userModel.password === password){
            res.send(userModel._id)
        }
        console.log(userModel)
    } catch(err){
        console.log(err)
    }
}