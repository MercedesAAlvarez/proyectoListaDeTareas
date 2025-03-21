
const express = require('express');
let path = require('path');
const app = express();
require('dotenv').config()
const apiRouter= require('./routes/api')
const port = 3017;
const cors = require('cors');
const corsOptions ={
    origin: ["http://localhost:5173"]
};



app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);


app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}\n`))

