const User = require('../models/User');
const bcrypt = require('bcrypt');
const generatorJWT = require('../helpers/generador.jwt');
const ctrlUser = {};

ctrlUser.postUser = async(req, res)=>{

    const {userName, password: receivedPassword, email } = req.body;

    const newPassword = bcrypt.hashSync(receivedPassword, 10);

    const newUser = new User({
        userName,
        password: newPassword,
        email
    });
    try {
        const userSave = await newUser.save();

        const token = await generatorJWT({ uid: userSave._id })
        return res.json({
        msg: 'Bienvenido seas, ahora puede iniciar sesion usando su nombre de usuario, contraseña y el siguiente token ',
        token
    })
    
    } catch (error) {
        console.log(error)
    }
  
};

ctrlUser.getUser = (req, res)=>{
  const uid = req.params._id;

  const userFind = User.findById(uid);

  return res.json({
    msg: "Esta es su informacion de usuario",
    userFind
  })
}

module.exports = ctrlUser;