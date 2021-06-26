const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static("public"));

server.set('views',path.join(__dirname, 'views'));

//Pega o conteudo do formulario decodifica e manda para o controller -Middleware

server.use(express.urlencoded({extended: true}));

server.use(route);


server.listen(3000, () => console.log("RODANDO"));