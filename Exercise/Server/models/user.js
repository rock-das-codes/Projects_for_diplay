const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const schema = mongoose.Schema

const userSchema = new schema({
    email:{
        type:String,
        required : true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.statics.signup = async function(email , password){

  //validation
  if(!email || !password){
    throw Error('All field must be filled!')
  }
  if(!validator.isEmail(email)){
    throw Error("email ot valid")
  }
  if(!validator.isStrongPassword(password)){
    throw Error("password not strong enough")
  }   
const exists = await this.findOne({email})

if(exists){
    throw Error("email already exists")
}
const salt = await bcrypt.genSalt(10)
const hash = await bcrypt.hash(password,salt)

const user = await this.create({email,password: hash})

return user

}
userSchema.statics.login = async function(email,password){
const user = await this.findOne({email})

if(!user){
    throw Error("email already exists")
}
const match = await bcrypt.compare(password,user.password)

if(!match){
    throw Error("incorrect password")
}
return user;
}
module.exports = mongoose.model('User',userSchema)