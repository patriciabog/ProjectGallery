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
                console.log(`Has been conected with database!! (identificador=${connection.threadId})`);
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
});

//Endpoint insert project using endpoint tipe POST

app.post("/api/project/add", (req, res)=>{
//we have to as from where is coming the data to insert in the project, in this case come from the body
const data = req.body;
console.log(data);
//now we have to insert in the database, in this case consult sql projects adn authors
let sqlAuthor = "INSERT INTO authors (author, job, photo) VALUES (?, ?, ?)";
let valuesAuthor = [
    data.author, data.job, data.photo
];
let sqlProject = "INSERT INTO projects (name, description, slogan, repo, technologies, image, fkIdAutor, infoURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
connection
.query(sqlAuthor, valuesAuthor)
.then(([results, fields]) => {
 console.log(results);
 let valuesProject = [
    data.name,
    data.description,
    data.slogan,
    data.repo,
    data.technologies,
    data.image,
    results.insertId
 ];
    connection
        .query(sqlProject, valuesProject)
        .then(([results, fields]) => {
            let response = {
                "success": true,
                "cardURL":`http://localhost:4000/api/projects/${results.insertId}`
            }
            res.json(response);
        })
        .catch((err) => {
            throw err;
        });
 
}).catch((err) => {
    throw err;
})

});
