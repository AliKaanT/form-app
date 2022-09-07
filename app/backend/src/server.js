const express = require("express")
const app = express()
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


const DATABASE_ENDPOINT = "mongodb://localhost:27017/form"


mongoose.connect(DATABASE_ENDPOINT)
    .then(() => { console.log("Database connection success !") })
    .catch((e) => { console.log("Failed to connect Database\n", e) })
//

const schema1 = new mongoose.Schema({
    answers: {}
})

const Form = mongoose.model("Form", schema1);


app.post("/save", async (req, res) => {
    const data = req.body
    console.log(data)
    const form = new Form({
        answers: data
    })
    await form.save()
    res.send("success")
})

app.listen("1234", () => {
    console.log("listening...")
})