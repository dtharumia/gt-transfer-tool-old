const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Courses = require('./models/courses')

mongoose.connect('mongodb://localhost:27017/gt-transfer-tool');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    console.log('Database connected')
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res)=> {
    res.render('home')
})

app.listen(3000, () => {
    console.log('serving on port 3000')
})