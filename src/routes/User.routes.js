const router = require('express').Router();

const {postUser}=require('../controllers/User.controllers');

const v_JWT = require('../middlewares/validator.jwt');

router.post('/User', [v_JWT], postUser)

module.exports = router