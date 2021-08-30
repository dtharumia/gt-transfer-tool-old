const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
    index: Number,
    state: String,
    term: String,
    t_school: String,
    t_class: String,
    t_title: String,
    t_level: String,
    t_mingrade: String,
    gt_class: String,
    gt_title: String,
    gt_ch: Number
})

module.exports = mongoose.model('Courses', CoursesSchema)