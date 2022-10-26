const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));
app.use(express.json());

const list = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
                    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
                    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
                    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

app.get("/", (req, res) => {
    res.render("form");
});

app.get("/8ball", (req, res) => {
    console.log(req.body);
    let index = Math.ceil(Math.random() * 20);  
    res.send(list[index]);
});

app.listen(9090, err =>{
    console.log("Server is running on 9090");
});