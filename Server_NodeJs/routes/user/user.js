var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('../db');
var username;
var password;

/* POST  submitLogin . */
        router.post("/submitLogin",function(request,response){
             username= request.body.username;
             password= request.body.password;
             role= request.body.role;
            if(username && password ){
                if(role==="directeur"){
                    db.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], function(err, results) {
            
                        console.log("User Name id Type of "+ typeof(username)+ "And Password is Type of "+ typeof(username)+ "Role is "+ role);
                        if(username == 'directeur' && password == 'directeurPassword'){
                            console.log("Test Passed of Authentiacatoin");
                        }else{
                            console.log("Test Failed Credential Not Matched ");
                        }
                        if (err){
                            throw err;
                        } 
                        if (results.length > 0) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            response.redirect("/detailView");
                        } else {
                            response.redirect("/roomlist");
                        }			
                        response.end();
                    
                    });

                }  else if(role==="etudiant"){
                    db.query('SELECT * FROM students WHERE id = ? AND name = ?', [username, password], function(err, results) {
            
                        console.log("User Name id Type of "+ typeof(username)+ "And Password is Type of "+ typeof(username) );
                        
                        if (results.length > 0) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            response.redirect("/absenceStudentView");
                        } else {
                            response.redirect("/#");
                        }			
                        response.end();
                    
                    });

            
                }else if(role==="parent"){
                    db.query('SELECT * FROM parents WHERE id = ? AND name = ?', [username, password], function(err, results) {
            
                        console.log("User Name id Type of "+ typeof(username)+ "And Password is Type of "+ typeof(username) );
                        
                        if (results.length > 0) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            console.log(username);
                            response.redirect("/detailParentView");
                        } else {
                            response.redirect("/#1");
                        }			
                        response.end();
                    
                    });
                }else if(role=="professeur"){
                    db.query('SELECT * FROM faculty WHERE id = ? AND name = ?', [username, password], function(err, results) {
            
                        console.log("User Name id Type of "+ typeof(username)+ "And Password is Type of "+ typeof(username) );
                        
                        if (results.length > 0) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            response.redirect("/documentsProfView");
                        } else {
                            response.redirect("/#2");
                        }			
                        response.end();
                    
                    });
                }  
        }
        });
        

         /* GET Logout Method  . */
        router.get("/logout",function(req,res){
            req.session.destroy(function(err)
            { if(err)
                { 
                console.log(err); 
                } 
                else 
                { 
                res.redirect('/'); 
                } 
                }); 
               });

    
module.exports = router;   
    
