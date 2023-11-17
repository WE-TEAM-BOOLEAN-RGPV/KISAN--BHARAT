const mongoose = require("./database")

const fpo_app_schema = new mongoose.Schema({

    name: {type: String, required: true},
    aadhar: {type: Number, required: true, unique: true},
    Phone: {type: Number, required: true, unique: true},
    DOB: {type: String, required: true},
    annual_income: {type: Number, required: true},
    land_owned: {type: Number, required: true},
    description: {type: String, required: true}
});

const job_list_schema = new mongoose.Schema({

    title: {type: String, required: true},
    description: {type: String, required: true},
    ministry: {type: String, required: true},
    duration: {type: Number, required: true},
    vacancies: {type: Number, required: true},
    payment: {type: Number, required: true},
    location: {type: String, required: true},
    deadline: {type: String, required: true}
});

const fpo_app = mongoose.model('fpo_applicants', fpo_app_schema);
const job_list = mongoose.model('job_lists', job_list_schema);

module.exports = {
    fpo_app,
    job_list
}