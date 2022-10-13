const User = require("../models/User");

const generatorJWT = require("../helpers/generador.jwt");

const bcrypt = require('bcrypt');

const ctrlAuth = {};

ctrlAuth.login = async(req, res)=>{
    const {userName, password} = req.body;

    try{
        const userFind = await User.findOne({userName});

        if(!userFind) { 
            return res.status(400).json({
            ok: false,
            msg: 'El usuario no esta'
          });}

          if(!userFind.isActive){
            return res.status(400).json({
                ok: false,
                msg: 'isActive es false'
            });
          }
       const verifyPass = bcrypt.compareSync(password, userFind.password);

       if(!verifyPass){
        return res.status(400).json({
            ok: false,
            msg: 'Las contraseñas no coinciden'
        });
       }

       const token = await generatorJWT({ uid: userFind._id })

       return res.json({ token });
    }catch(err){
        return res.json({ msg: 'Fallo el inicio de sesion' });
    }
}

module.exports = ctrlAuth