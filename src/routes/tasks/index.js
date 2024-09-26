import express from 'express';
import path from 'path';
import {getTask}  from './services.js';

const router = express.Router();

router.get('/gettask', function(req, res){
    getTask(req, res);
})

export default router;

