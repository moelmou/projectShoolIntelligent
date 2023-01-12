var express = require('express');
var app = express();
var createError = require('http-errors');
var express = require('express');
fileUpload = require("express-fileupload");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var main = require('./routes/render'); 
bodyParser = require("body-parser");


			
//set view engine
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use('/message', require('./routes/message/message'));


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));



app.use('/', main); 

app.listen(3000,function(){
    console.log("Everything is fine");
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
