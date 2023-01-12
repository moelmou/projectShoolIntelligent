var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');


router.get("/absenceView",function(req,res){
   
        if (req.session.loggedin) {
      
            db.query('SELECT absence.*, faculty.name FROM absence JOIN faculty ON faculty.id = absence.id', function(error, result){
                
                  if(error){
                    throw error;
                }
                
      
                res.render("absenceView",{json:JSON.parse(JSON.stringify(result))});
      
      

            });
            }else{
                res.render("index");
            }
    });

    


    
module.exports = router;   
    