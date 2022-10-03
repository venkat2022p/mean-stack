const express = require('express'); 
const app = express();   
const mongoose = require("mongoose");  
const dbconfig= require ('./config/db')    
const port = 5000;                 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(dbconfig.mongoURI,{useNewUrlParser: true}).then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log("oooopppppss", err)
})

// router

const signupRouter = require("./router/signupRouter") 

app.use('/',signupRouter);


app.listen(port, () => {           
    console.log(`Now listening on port ${port}`); 
});