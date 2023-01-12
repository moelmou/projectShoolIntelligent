var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('./db');


var faculty = require('./faculty/faculty'); 
var docStud= require('./documentList/documentListStud');
var studentProf = require('./student/studentProf'); 
var circulaireProf = require('./circulaire/circulaireProf'); 
var article = require('./articleList/article'); 
var articleS = require('./articleList/articleStudent'); 
var circulaire = require('./circulaire/circulaire'); 
var msg = require('./message/message');
var note = require('./note/note'); 
var student = require('./student/student'); 
var subject = require('./subject/subject'); 
var rooms = require('./rooms/rooms'); 
var period = require('./periods/period'); 
var enforce = require('./enforce/enforceValue'); 
var user = require('./user/user'); 
var genTimeTalbe = require('./timeTable/genTimeTable');
var timeTable = require('./timeTable/timeTable');
var doc= require('./documentList/documentList');
var docProf= require('./documentList/documentListProf');
var event= require('./eventList/event');
var abs=require('./absence/absence');
var absStudent=require('./absence/absenceStudent');
var absP=require('./absence/absenceParent');
var noteProf=require('./note/noteProf');
var contribution=require('./documentList/contribution');
var contributionS=require('./documentList/contributionStud');
var noteStudent=require('./note/noteStudent');
var noteParent=require('./note/noteParent');
var det_stud=require('./timeTable/detailStud');
var det_par=require('./timeTable/detailParent');
var circulairePar = require('./circulaire/circulaireParent');
var ev=require('./eventList/eventParent');
var timetableParent=require('./timeTable/genTimeTableParent');



 /* Importing all modules */
 router.use('/', circulaireProf);
 router.use('/', timetableParent);
 router.use('/', noteParent);
 router.use('/', ev);
 router.use('/', circulairePar);
 router.use('/', absP);
 router.use('/', det_par);
 router.use('/', det_stud);
 router.use('/', articleS);
 router.use('/', contributionS);
 router.use('/', docStud);
 router.use('/', absStudent);
 router.use('/', contribution);
 router.use('/', noteProf);
 router.use('/', studentProf);
 router.use('/', article);
 router.use('/', event);
 router.use('/', doc);
 router.use('/', docProf);
 router.use('/', abs);
 router.use('/', faculty); 
 router.use('/', circulaire); 
 router.use('/', note); 
 router.use('/', noteStudent); 
 router.use('/', student); 
 router.use('/', subject); 
 router.use('/', rooms); 
 router.use('/', period); 
 router.use('/', enforce); 
 router.use('/', user); 
 router.use('/',genTimeTalbe);
 router.use('/',timeTable);
 



/* GET home page. */
router.get("/",function(req,res){
    if (req.session.loggedin) {
		res.render("detailView");
	} else {
		res.render("index");
	}
	res.end();
    });


module.exports = router;   