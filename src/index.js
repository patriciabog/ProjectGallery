//create and configurate the server

//import all modules from npm that we need: express, cors, and mysql2
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//to keep the conection
let connection; 

//to create the conection
mysql
    .createConnection({
        host: 'sql.freedb.tech',
        database: 'freedb_projectGallery',
        user: 'freedb_root-projectGallery',
        password: 'Y72QU2dMf*b2Gkr',
    })
    .then((conn) => {
        connection = conn;
        connection
            .connect()
            .then(() => {
                console.log('Has been conected with database!!' + connection.threadId);
            })
            //the catch can catch errors
            .catch((err) => {
                console.error('Error conection: ' + err.stack);
            });
    })
    .catch((err) => {
        console.error('Error configuration: ' + err.stack);
    });

//configuration of the server
const app = express();
app.use(cors());

//we will indicate the size of the server
app.use(express.json({limit: "10mb"}));

//we start the server
const port = 4000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

//Endpoints = server-name => method(get, post, put, delete, patch) => route and function (server.method: (req, res) =>{}
//list of projects
//all the endpoits must have an answer
app.get("/api/projects/all", (req, res)=> {
    let sql = "SELECT * FROM projects";
    connection
        .query(sql)
        .then(([results, fields]) => {
            console.log('Información recuperada:');
            results.forEach((result) => {
                console.log(result);
            });

            res.json(results);
        })
        .catch((err) => {
            throw err;
        });
})
