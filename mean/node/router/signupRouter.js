// const express = require('express');
// const mongoose = require('mongoose');
// const config = require ('../config/db');
// const userSignup = require ('../model/signUpModel');

// module.exports = (signup) => {
//     const url = config.mongoURI;
//     const connect = mongoose.createConnection(url, {useCreateIndex:true,useFindAndModify:false,useUnifiedTopology: true ,useNewUrlParser:true });
//  var data = userSignup ({
    
//  })   
// }
const express = require("express");
const signupRouter = express();
const signup = require("../model/signUpModel");

// signupRouter.post("/signupuser", (req, res) => {
//     console.log(req.body);
//   const data = new signup({
//     name: request.body.name,
//     email: request.body.email,
//     password: request.body.password
//   });
//   try {
//     const dataToSave = data.save();
//     res.status(200).json(dataToSave);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
signupRouter.post("/addname", (req, res) => {
    
    var myData = new signup(
{
    name: request.body.name,
    email: request.body.email,
    password: request.body.password
}
    );
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

module.exports = signupRouter;
