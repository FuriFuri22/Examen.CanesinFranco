const express = require('express');
const cors = require('cors');
const morgan =  require('morgan');
const helmet = require('helmet');
const path = require('path');



const app = express();

app.use(express.json());


app.listen(4000, ()=>console.log('Estamos en curso, Rick'))