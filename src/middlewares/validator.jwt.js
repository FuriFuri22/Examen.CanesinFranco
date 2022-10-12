const jwt = require('jsonwebtoken');

const User = require('../models/User');

const v_JWT = async(req, res, next)=>{
    let token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            msg: '1 Autenticacion fallida'
        })
    };

    try {
        const {uid}= await jwt.verify(token, 'eso');

        const userFind = await User.findById(uid);

        if(!userFind){
            return res.status(401).json({
                error: '2 El usuario no esta'
            })
        }
        if (!usuario.isActive) {
            return res.status(401).json({
                msg: '3 Usuario isInactive'
            });
        }

        req.user = userFind

        next();

    } catch (err) {
        console.log(err)
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = v_JWT