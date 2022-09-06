const express = require("express")
const app = express()
const mongoose = require("mongoose");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/form")
    .then(() => { console.log("Database connection success !") })
    .catch((e) => { console.log("Failed to connect Database\n", e) })
//



app.use(()=>{
    const universiteler = "abc" //from database
})

app.get("/api/universiteler", (req, res) => {

    res.json(universiteler)
})
