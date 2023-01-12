const express = require('express');
var app = express();
const router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = require('../db');


router.get("/articleView",function(req,res){
  if (req.session.loggedin) {
      
      db.query('SELECT article.*, students.name FROM article JOIN students ON students.id = article.id_student', function(error, result){
          
            if(error){
              throw error;
          }
          

          res.render("articleView",{json:JSON.parse(JSON.stringify(result))});



      });
      }else{
          res.render("index");
      }
  });


  router.post('/updateValide', (req, res) => {
    var id = req.body.id;
    var valide = req.body.valide;
    var sql = `UPDATE article SET valide = ? WHERE id = ?`;
    var data = [valide, id];
    db.query(sql, data, function (err, result) {
        if (err) throw err;
        res.redirect('/articleView');
    });
  });

module.exports = router;
