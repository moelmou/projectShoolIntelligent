var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');


router.get("/absenceStudentView",function(req,res){
   
        if (req.session.loggedin) {
      
            db.query('SELECT * FROM absstudent where id_student = ?',[req.session.username], function(error, result){
                
                  if(error){
                    throw error;
                }
                
      
                res.render("absenceStudentView",{json:JSON.parse(JSON.stringify(result))});
      
      

            });
            }else{
                res.render("index");
            }
    });

    


    
module.exports = router;   
    


