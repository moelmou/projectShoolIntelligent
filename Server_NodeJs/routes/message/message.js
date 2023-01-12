var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Pusher = require('pusher');

var pusher = new Pusher({
    appId : "1536709",
    key : "ce7c88a8b93c931d682e",
    secret : "608abd59e7637abe5ad3",
    cluster : "eu"
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var messages = [];
router.get('/', (req, res) => {
    res.render('message', { messages });
});

/* POST message */
router.post('/', function (req, res, next) {
  // Validate the incoming request
  if(!req.body.message || !req.body.sender) {
    return res.status(400).send({error: 'invalid request'});
  }
  // Send the message to Pusher
  pusher.trigger('chat', 'message', req.body);
  res.sendStatus(200);
});

module.exports = router;
