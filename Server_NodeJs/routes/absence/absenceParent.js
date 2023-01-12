var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');


router.get("/absenceParentView",function(req,res){
   
        if (req.session.loggedin) {
            
            db.query('SELECT * FROM absstudent WHERE id_student IN (SELECT id_student FROM students WHERE id_par =?)',[req.session.username], function(error, result){
                
                  if(error){
                    throw error;
                }
                
      
                res.render("absenceParentView",{json:JSON.parse(JSON.stringify(result))});
      
      

            });
            }else{
                res.render("index");
            }
    });

    


    
module.exports = router;   
    


