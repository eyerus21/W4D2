const express = require('express');
const path = require('path');
const app = express();

const session = require('express-session');
const route = require('./route');
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.json());
app.use('/css', express.static(path.join(__dirname,"views", "css"))); 

app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.use(express.urlencoded()); 

app.use(session({
    secret: 'salt for cookie signing',
  }));

app.get('/',route.homePage);
app.get('/shoppingcart', route.itemsInCart);
app.post('/addToCart',route.productDetails);

app.get('/tomato',route.registerItem);
app.get('/banana',route.registerItem);
app.get('/pumpkin',route.registerItem);

app.listen(3000,()=>{console.log("server is running at port 3000")});