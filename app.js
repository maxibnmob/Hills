const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = require('hbs');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: "index",
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));

app.use(express.static(__dirname + '/public'));

require("./routers/router")(app);

mongoose.connect('mongodb://127.0.0.1:27017/products');

app.listen(port, () => {
	console.log('Сервер http://localhost:3000');
});