// const express = require('express'); 
// const app = express();   

// const port = 5000;                 
// var bodyParser = require('body-parser');
// const signupRouter = require('./router/signupRouter')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// // router
// app.use('/api/signup', signupRouter);



// app.listen(port, () => {           
//     console.log(`Now listening on port ${port}`); 
// });
const express=require('express')
const app=express()
const mysql = require("mysql");
const cors=require("cors")
app.use(cors())
const port = 5000;      
app.listen(port, () => {           
    console.log(`Now listening on port ${port}`); 
});
app.use(express.json())


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Venkat@12",
    database: "tuda",
    

  });
  // open the MySQL connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  app.get('/learners' , (req, res) => {
   let query= connection.query('SELECT * FROM tuda_user_table', (err, rows, fields) => {
   
    console.log(query,"query")
    if(err) {
      console.log(err)
    }else{
    return res.json({
        "message":"Dispaly Successfully",
        "status":200
      })
    }
  
    } );
},
  
//  post user details
app.post("/saveuserdetails",(req,res)=>{
 
   
    let USER_ID  =req.body.USER_ID;
    let MOBILE_NUM = req.body.MOBILE_NUM;
    let USER_NAME = req.body.USER_NAME;
    let ID_No = req.body.ID_NUM;

   let query= connection.query(`INSERT INTO tuda_user_table (USER_ID, MOBILE_NUM, USER_NAME, ID_No) VALUES ('${USER_ID}','${MOBILE_NUM}','${USER_NAME}','${ID_No}')`,
    (err,result)=>{

      console.log(query,"query")
        if(err) {
          console.log(err)
        }else{
        return res.json({
            "message":"Saved Successfully",
            "status":200
          })
        }

       
    })


})
  )
  
