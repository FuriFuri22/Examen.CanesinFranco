const jwt = require('jsonwebtoken');

const generatorJWT = (uid) => {
    return new Promise((resolve, reject) => {
        jwt.sign(uid, process.env.SECRET, {
            expiresIn: '10h'
        }, (err, token) => {
            if(err){
                reject('No se pudo generar el token');
            }

            resolve(token);
        })
    })
}


module.exports = generatorJWT;