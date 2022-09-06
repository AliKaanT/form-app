const mongoose = require("mongoose");

const uniSchema = new mongoose.Schema({
    title: { String }
})

const UNI = mongoose.Model("UNI",uniSchema);