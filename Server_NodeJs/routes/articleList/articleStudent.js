const express = require('express');
var app = express();
const router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = require('../db');


router.get("/articleStudentView",function(req,res){
  if (req.session.loggedin) {
      
      db.query('SELECT article.* FROM article where article.id_student=?',[req.session.username], function(error, result){
          
            if(error){
              throw error;
          }
          

          res.render("articleStudentView",{json:JSON.parse(JSON.stringify(result))});



      });
      }else{
          res.render("index");
      }
  });


  router.post('/addArticle', (req, res) => {
  
    var sql = `INSERT INTO article(id_student, article_body, posted_on, valide) values(?,?,NOW(),1) `;
    db.query(sql, [req.session.username, req.body.art_body], function (err, result) {
        if (err) throw err;
        res.redirect('/articleStudentView');
    });
  });

module.exports = router;
