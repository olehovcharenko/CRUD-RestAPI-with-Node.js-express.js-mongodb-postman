import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 8080;
const DB_URL = "mongodb+srv://Oleh:23082000oo@cluster0.xmjp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



const app = express()
app.use(express.json());
app.use("/api", router);



