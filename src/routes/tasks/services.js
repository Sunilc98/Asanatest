import express from 'express';
const router = express.Router();
// const fetch = require('node-fetch');

export function getTask(req, res) {

    const ASANA_URL = process.env.ASANA_BASE_URL;
    var token = process.env.ASANA_TOKEN;
    var taskId = process.env.TASK_GID;
    var clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

    try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", 'application/json');

        fetch(`${ASANA_URL}${taskId}?client_id=${clientId}&client_secret=${clientSecret}`, {
            method: 'GET',
            headers: myHeaders
        })
            .then((data1) => data1.json())
            .then((data) => {
                res.send(data)
                console.log("response", data)
            })
    }
    catch {
        (err => console.log(err))
    }
}
