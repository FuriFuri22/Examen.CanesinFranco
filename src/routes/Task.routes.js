const router = require('express').Router();

const {
    getTask,
    postTask,
    putTask,
    deleteTask
 } = require('../controllers/Tasks.controllers');

const v_JWT = require('../middlewares/validator.jwt');

router.get('/Tasks',[v_JWT],getTask);

router.post('/Tasks',[v_JWT],postTask);

router.put('/Tasks/:id',[v_JWT], putTask);

router.delete('/Tasks/:id', [v_JWT], deleteTask);

module.exports = router