const express = require('express');
var app = express();
const router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = require('../db');


router.get("/documentsView",function(req,res){
  if (req.session.loggedin) {
      
      db.query('SELECT files.*, faculty.name FROM files JOIN faculty ON faculty.id = files.id_prof', function(error, result){
          
            if(error){
              throw error;
          }
          

          res.render("documentsView",{json:JSON.parse(JSON.stringify(result))});



      });
      }else{
          res.render("index");
      }
  });



module.exports = router;
