const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = require("config").get("ATLAS_URI");

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log("Mongo DB Connected successfully");
})
// app.use("/todo", require("./router/todolist"));
app.use("/users", require("./router/users"));

app.listen(port, () => {
    console.log(`Server is running on : ${port}`);
})

