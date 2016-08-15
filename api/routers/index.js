var express = require('express');
var router = express.Router();
var commentCtrl = require('../controllers/comment-ctrl.js');

router.get('/videos/:videoId/comments', commentCtrl.getComments);

module.exports = router;
