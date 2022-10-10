const mongoose = require('mongoose');

const dbConnect = async()=>{
    try {
        mongoose.connect('mongodb+srv://furanko:furanko4@cluster1000.sld5u54.mongodb.net/?retryWrites=true&w=majority');
        console.log('BD enlazada')
    } catch (error) {
        console.log(error)
        console.log('Algo fallo al conectar')
    }
}

module.exports = dbConnect;