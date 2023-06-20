const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id: Number,
    category: String,
    image1: String,
    image2: String,
    image3: String,
    DataImage: String,
    DataTitle: String,
    DataDescription: String,
    DataDetailDescription: String,
    avatar: String,
    name: String,
    date: String
})

const model = mongoose.model("data", schema)

module.exports = model