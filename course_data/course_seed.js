const mongoose = require('mongoose');
const Courses = require('../models/courses')
const csvtojson = require("csvtojson");

const csvFilePath = 'data.csv'

mongoose.connect('mongodb://localhost:27017/gt-transfer-tool');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected')
})

csvtojson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        Courses.deleteMany({});
        Courses.insertMany(jsonObj).then(function () {
            console.log("Data inserted")  // Success
            mongoose.disconnect()
        }).catch(function (error) {
            console.log(error)      // Failure
            mongoose.disconnect()
        });
    })
