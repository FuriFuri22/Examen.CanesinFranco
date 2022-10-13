const router = require('express').Router();
const {
    postUser,
    getUser
}=require('../controllers/User.controllers');

const v_JWT = require('../middlewares/validator.jwt');

router.post('/User', postUser);

router.get('/User',[v_JWT],getUser);
module.exports = router