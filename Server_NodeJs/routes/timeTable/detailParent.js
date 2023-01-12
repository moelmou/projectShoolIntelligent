var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');

   
    

/* TimeTable Generation Method   . */

 
 router.get("/detailParentView",function(req,res){
    if (req.session.loggedin) {

        var data;
        db.query('SELECT (select paye FROM parents where id=? ) AS paye,( select retard FROM students where id_par=?) AS retards ',[req.session.username, req.session.username],function(error,result){
            if(error){
                throw error;
            }
                 data=result;
                 console.log(JSON.parse(JSON.stringify(data[0])));
                res.render("detailParentView",{totals:JSON.parse(JSON.stringify(data))});
        });
    }else{
        res.render("index");
        console.log(err);
    }
    });

    
 module.exports = router;