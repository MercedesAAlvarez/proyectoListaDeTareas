const express = require('express');
let path = require('path');
const app = express();
const cors = require('cors');
require('dotenv').config()
const apiRouter= require('./routes/api')
const port = 3017;

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);


app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}\n`))

