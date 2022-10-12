const User = require('../models/User');
const bcrypt = require('bcrypt');
const ctrlUser = {};

ctrlUser.postUser = async(req, res)=>{

    const {userName, password: receivedPassword, email } = req.body;

    const newPassword = bcrypt.hashSync(receivedPassword, 10);

    const newUser = new User({
        userName,
        password: newPassword,
        email
    });

    const user = await newUser.save();

    return res.json({
        msg: 'Bienvenido seas ',
        user
    })
};

module.exports = ctrlUser;