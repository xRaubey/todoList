const express = require('express');
const mongoose = require('mongoose');
const {todoPostController, todoGetController, todoPutController, todoDeleteController, todoCompleteController } = require('../controllers/todoControllers');

const router = express.Router();

router.post('/post',todoPostController)

router.get('/get',todoGetController)

router.put('/put/:id',todoPutController)

router.delete('/delete/:id',todoDeleteController)

router.put('/complete/:id',todoCompleteController)

module.exports =  router