const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const todoRouter = require("./routes/todoRouter");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });

app.use("/todos", todoRouter);
app.all("*", (req, res) => {
    res.send("404 Not Found");
});
