var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');


router.get("/noteProfView",function(req,res){
    if (req.session.loggedin) {
        var data;
      
        db.query('select * from note',function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                res.render("noteProfView",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });
router.post("/addnote",function(req,res){
    if (req.session.loggedin)
    { 
        db.query(
       "INSERT INTO note (subject_id, id_student, note) VALUES ('"+req.body.subject_id+"', '"+req.body.id_student+"', '"+req.body.note+"')",function(err,result){
         if (err) {
           if(err.code == "ER_DUP_ENTRY" ){
               console.log("Error Dupliacate");
           }else{
                throw err;
           }
        }
        console.log("record inserted");
   }); 
   res.redirect('noteProfView');

}});

    


    
module.exports = router;   
    