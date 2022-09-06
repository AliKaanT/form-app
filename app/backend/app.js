const express = require("express")
const app = express()
const mongoose = require("mongoose");
const path = require("path");
const favicon = require('serve-favicon')


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


