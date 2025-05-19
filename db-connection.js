const mongoose = require('mongoose');

const uri = process.env.DB

const db = mongoose.connect(uri);

module.exports = db;