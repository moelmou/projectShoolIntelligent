var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');


router.get("/studentProfView",function(req,res){
    if (req.session.loggedin) {
        var data;
      
        db.query('select * from students',function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                res.render("studentProfView",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });

    


    
module.exports = router;   
    