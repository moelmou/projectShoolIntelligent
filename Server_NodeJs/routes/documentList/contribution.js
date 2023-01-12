const express = require('express');
var app = express();
const router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = require('../db');
fileUpload = require("express-fileupload");
bodyParser = require("body-parser");
var path = require('path');
var app = express();

router.get("/contributionView",function(req,res){
    if (req.session.loggedin) {
        
        db.query('SELECT contribution.*, students.name FROM contribution JOIN files ON files.id_prof =? JOIN students ON students.id = contribution.id_student WHERE files.id_prof=?',[req.session.username,req.session.username] , function(error, result){
            
              if(error){
                throw error;
            }
            
  
            res.render("contributionView",{json:JSON.parse(JSON.stringify(result))});
  
  
  
        });
        }else{
            res.render("index");
        }
    });
  
  /*
    app.use(fileUpload());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    router.post("/uploadDocument",function(request,response){
        
        if (request.session.loggedin)
        {
            if (!request.files) {
                response.status(400).send("No files were uploaded.");
                return;
            }
            let pdfFile = request.files.pdfFile;
            pdfFile.mv(path.join(__dirname,'../../uploads/', pdfFile.name), function (err) {
                var realpath=request.protocol + '://' + request.get('host') + "/uploads/"+ pdfFile.name;
                if (err) {
                    response.status(500).send(err);
                } else {  db.query("INSERT INTO files (id_prof, type, posted_on,path , name) VALUES (?,?,?,?,?)",[request.session.username,request.body.type,request.body.posted_on, realpath,request.body.name], function(err, result) {
                    console.log("my new new error is ",err)
                    if (err) {
                        if(err.code == "ER_DUP_ENTRY" ){
                            console.log("Error Duplicate");
                        }else{
                            throw err;
                        }
                    } else {
                        console.log("record inserted");
                    }
                });
                response.redirect('documentsProfView');
            }
        });
    } else {
        response.render("index");
    }
});*/


module.exports = router;