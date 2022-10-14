const router = require('express').Router();
const {
    postUser,
    getUser,
    putUser,
    deleteUser
}=require('../controllers/User.controllers');

const v_JWT = require('../middlewares/validator.jwt');

router.post('/User', postUser);

router.get('/User',[v_JWT],getUser);

router.put('/User',[v_JWT],putUser);

router.delete('/User', [v_JWT], deleteUser);

module.exports = router