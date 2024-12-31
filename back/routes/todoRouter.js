const express = require('express');
const mongoose = require('mongoose');
const {todoPostController, todoGetController, todoPutController, todoDeleteController, todoCompleteController } = require('../controllers/todoControllers');

const router = express.Router();

router.post('/post',todoPostController)

router.get('/get',todoGetController)

router.put('/put',todoPutController)

router.delete('/delete',todoDeleteController)

router.put('/complete',todoCompleteController)

module.exports =  router