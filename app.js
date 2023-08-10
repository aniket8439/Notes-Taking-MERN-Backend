//const server = require('http');
//const express = require('express');
//const chalk = require('chalk');
import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from 'cors';
//import { connection } from './src/shared/db/connection.js';
import noteRoutes from './src/modules/notes/routes/notesroutes.js';
import { createConnection } from './src/shared/db/connection.js';
import userRoutes from './src/modules/user/routes/userroutes.js';
//import mongoose from './src/shared/db/connection.js';
const app = express();
dotenv.config(); //read .env file and load env variables 
app.use(cors());
//app.use(connection); //attach middleware
app.use(express.json());
//app.get('/', (req, res) => res.send('hey there!'));
app.use('/', noteRoutes);
app.use('/', userRoutes);
const server = app.listen(process.env.PORT || 1234, (err) => {
    if (err) {
        console.log(chalk.red.bold('server crashed...', err));
    } else {
        console.log(chalk.blue.bold('server is running....', server.address().port));
        createConnection();
    }
})