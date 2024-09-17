const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const projects = require("./projects/index");
const tasks = require("./tasks/index");
require("dotenv").config(); //load env
// const AWS = require('aws-sdk');

// AWS.config.update({
//     region: process.env.AWS_REGION || 'us-east-1',
// })

//create AWS client
// const dynamoDb = new AWS.DynamoDB.DocumentClient();

var corsOptions = {
    origin: '*', // enabled origins
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions)); // enables cors with provided options
app.use(express.json()); // enables json parsing and makes req.body available

//subroutes
// app.use('/projects', projects);
app.use('/tasks', tasks);

app.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
})