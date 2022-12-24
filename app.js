require('dotenv').config();
require('./config/db')

const express = require('express');
const app = express();
const router = require('./routes/index')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 3000;

app.use(express.json({limit:"50mb"}));

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api',router);

app.listen(port , () => {
    console.log(`server started successfully ${port}`);
})