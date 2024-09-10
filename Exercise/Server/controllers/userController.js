const mongoose = require("mongoose")
const User = require('../models/user')
const validator = require("validator")
const jwt = require("jsonwebtoken")

const createToken = (_id)=>{
 return jwt.sign({_id},'sgahdjbnxusixmsd',{expiresIn: '30d'})
}
const loginUser = async (req, res) => {
    const {email,password} = req.body
    try{
        const user = User.login(email,password)
        const token = createToken(user._id)
        res.status(300).json({email,token})
    }
    catch(error){
     res.status(400).json({error:error.message})
    }
    
    
}

const signupUser = async (req, res) => {

    const {email,password} = req.body
    try{
        const user = await User.signup(email,password)
        

        const token = createToken(user._id)

        res.status(200).json({email,token})
        return;
    }
    catch(error){
     res.status(400).json({error : error.message})
    }
    res.json({mssg: 'signup user'})
}

module.exports = {signupUser, loginUser}