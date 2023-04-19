import express  from "express";

import handlebars from 'express-handlebars';


import __dirname from './utils.js';
import viewRouter from './routes/views.routers.js';

const PORT = 8080;

const app = express();

app.use(express.static(__dirname +'public') );

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set ('view engine', 'handlebars');


app.use ('/', viewRouter);

const server = app.listen(PORT, ()=>{
    console.log('Servidor iniciado por puerto:'+ PORT)
} )