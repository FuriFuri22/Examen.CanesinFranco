const router = require('express').Router();

const {
    getTask,
    postTask
 } = require('../controllers/Tasks.controllers');

const v_JWT = require('../middlewares/validator.jwt');

router.get('/Tasks',[v_JWT],getTask);

router.post('/Tasks',[v_JWT],postTask);

module.exports = router