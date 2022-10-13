const dbConn  = require('../config/db');
const Obj = {}

Obj.insertItem = (input, result) => {
     console.log('input:::', input)
     dbConn.query(`INSERT INTO tutorials_tbl(tutorial_id, tutorial_title, tutorial_author, submission_date) VALUES ('${input.tutorial_id}', '${input.tutorial_title}', '${input.tutorial_author}', '${input.submission_date}', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())`, (err, res) => {
         if (err) {
             result({ message: 'sql error', data: err });
         } else {
             result({ message: 'success', data: res });
         }
     })
 }
 module.export = Obj