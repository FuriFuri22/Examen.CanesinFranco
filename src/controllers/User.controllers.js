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

        const token = await generatorJWT(userSave._id )
        return res.json({
        msg: 'Bienvenido seas, ahora puede iniciar sesion usando su nombre de usuario, contraseña y el siguiente token ',
        token
    })
    
    } catch (error) {
        console.log(error)
    }
  
};

ctrlUser.getUser =async  (req, res)=>{
  const uid = req.user._id;

  const userFind = await User.findById(uid);

  return res.json({
    msg: "Esta es su informacion de usuario",
    userFind
  })
}

ctrlUser.putUser = async (req, res)=>{
  const uid = req.user._id;

  const userFind = await User.findById(uid);

  const {password:receivedPassword, userName, email} = req.body;
  
  const newPassword = bcrypt.hashSync(receivedPassword, 10);

  try {
    await User.updateOne({userName, password: newPassword, email})
    return res.json({
      msg: "datos actualizados"
    })
  } catch (error) {
    return res.json({
      error
    })
  }

}

ctrlUser.deleteUser = async(req, res)=>{
  const uid = req.user._id;

  try {
    await User.updateOne({_id: uid}, {isActive: false})
    return res.json({
      msg: "Adios y gracias por haber utilizado nuestros servicios"
    })
  } catch (error) {
    return res.json({
     error
    })
  }
}
module.exports = ctrlUser;