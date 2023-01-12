var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');


router.get("/noteParentView",function(req,res){
    if (req.session.loggedin) {
        var data;
       
        db.query(' SELECT * FROM note WHERE id_student IN (SELECT id_student FROM students WHERE id_par = ?)',[req.session.username],function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                res.render("noteParentView",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });


    


    
module.exports = router;   
    