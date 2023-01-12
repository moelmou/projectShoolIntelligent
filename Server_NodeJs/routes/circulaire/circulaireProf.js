var express = require('express');
var router = require('express').Router();
fileUpload = require("express-fileupload");
bodyParser = require("body-parser");
var path = require('path');
var app = express();
module.exports = router;
var db = require('../db');


router.get("/circulaireProfView",function(req,res){
    if (req.session.loggedin) {
        var data;
      
        db.query('select * from circulaire',function(error,result){
            if(error){
                throw error;
            }
                    data=result;
                res.render("circulaireProfView",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });
   
    
// router.get('/download/:id', function(req, res) {
//     var file;
//     var id = req.params.id;
//     db.query('SELECT path FROM circulaire WHERE id = ?', id, function(error, result) {
//         if (error) {
//             throw error;
//         }
//         file = result[0].path;
//         res.download(file);
//     });
//     res.render("detailView");
// });

module.exports = router;