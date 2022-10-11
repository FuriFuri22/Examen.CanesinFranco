const express = require('express');
const cors = require('cors');
const morgan =  require('morgan');
const helmet = require('helmet');
const path = require('path');
const dbConnect = require('./src/db/connection');
require('dotenv').config();

const app = express();
dbConnect();

const port = process.env.PORT || 3000;

app.use(express.json());


app.listen(port, ()=>console.log(`Rick, estamos en curso por http://localhost:${port}`))