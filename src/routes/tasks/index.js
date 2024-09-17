const express = require('express');
const router = express.Router();
const path = require('path');
const {getTask} = require('./services');

router.get('/gettask', function(req, res){
    getTask(req, res);
})

module.exports = router;