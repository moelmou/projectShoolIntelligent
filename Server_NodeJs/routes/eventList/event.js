var express = require('express');
var router = require('express').Router();
fileUpload = require("express-fileupload");
bodyParser = require("body-parser");
var path = require('path');
var app = express();
module.exports = router;
var db = require('../db');


router.get("/eventView",function(req,res){
    if (req.session.loggedin) {
        var data;
      
        db.query('select * from events',function(error,result){
            if(error){
                throw error;
            }
                    data=result;
                res.render("eventView",{json:JSON.parse(JSON.stringify(data))});
        });
        }else{
            res.render("index");
        }
    });
    app.use(fileUpload());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    router.post("/uploadEvent",function(request,response){
        
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
                } else {  db.query("INSERT INTO events (name, date_event, file_description) VALUES (?, ?,?)",[request.body.name,request.body.date_event, realpath], function(err, result) {
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
                response.redirect('eventView');
            }
        });
    } else {
        response.render("index");
    }
});


//delete

router.get("/delevent/:id",function(req,res){
    if (req.session.loggedin)
    {
       var del =req.params.id;

       db.query(
        "DELETE FROM events WHERE id =  '"+req.params.id+"'",function(err,result){
          if (err) {
                res.send("Unable to do");
                throw err;
            } else { // redirect to users list page
                res.redirect("/eventView");
            } 
        }); 

    }else
    {
    res.render("index");}
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