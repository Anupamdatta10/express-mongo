const MongoClient = require('mongodb').MongoClient
const ev=require('../config/env.json')
const mongoose = require('mongoose');
const connect =MongoClient.connect(`${ev.DB_HOST}/${ev.DB_NAME}`)

const db = mongoose.connection;

module.exports=db;