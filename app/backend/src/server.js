const express = require("express")
const app = express()
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/form")
    .then(() => { console.log("Database connection success !") })
    .catch((e) => { console.log("Failed to connect Database\n", e) })
//


app.post("/save", (req, res) => {
    const x = req.body
    console.log(x)
    res.send("asd")
})

app.listen("1234", () => {
    console.log("listening...")
})