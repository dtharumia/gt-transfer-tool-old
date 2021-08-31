const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Courses = require('./models/courses')
const app = express();

mongoose.connect('mongodb://localhost:27017/gt-transfer-tool');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected')
})

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
    res.render('home')
})

app.post('/', async (req, res) => {
    gt_course = req.body.class
    const courses = await Courses.find({ 'gt_class': gt_course });
    // res.render('home', { courses })
    console.log({ courses })
    res.render('courses', { courses })
})

app.listen(3000, () => {
    console.log('serving on port 3000')
})