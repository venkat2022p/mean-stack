// const mongoose=require('mongoose')
// // const shortid=require('short-id')
// const Schema=mongoose.Schema;
// const contactSchema=new Schema({
//      // supportid:{type:String,'default':shortid.generate},
//      name:{type:String},
//      emailid:{type:String},
//      password:{type:Number},
// })
// module.exports=mongoose.model('signup',contactSchema)

const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const signupSchema=new Schema({
     name:{type:String},
     email:{type:String},
     password:{type:Number}
})

const signup=mongoose.model("usersihnup",signupSchema);
module.exports=signup;


