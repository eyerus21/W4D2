const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));
app.use(express.json());
const list = {};
app.get("/", (req, res) => {
    res.render("form");
});
app.post("/add", (req, res) => {
    console.log(req.body);
    list[req.body.fname + " " + req.body.lname + " " + req.body.arrivalTime] = { ...req.body };
    res.status(200);
    res.end();
});
app.get("/list", (req, res) => {
    res.render("list", { list: list });
});
app.listen(3000, err =>{
    console.log("Server is running on 3000");
});