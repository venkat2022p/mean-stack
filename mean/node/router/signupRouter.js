const  express = require('express');
const  router = express.Router();
const dbConn  = require('../config/db');

app.post("/user/create", function(req, res) {
    var dbConn = BD();

    var post = {
        username: req.body.username,
        password: req.body.password
    };

    dbConn.query(`INSERT INTO tutorials_tbl(tutorial_id, tutorial_title, tutorial_author, submission_date) VALUES ('${input.tutorial_id}', '${input.tutorial_title}', '${input.tutorial_author}', '${input.submission_date}', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())`, (err, res) => {
        if (err) {
            result({ message: 'sql error', data: err });
        } else {
            result({ message: 'success', data: res });
        }
    })
});



module.exports = router;