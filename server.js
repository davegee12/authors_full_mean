var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var routes_setter = require('./server/config/routes.js');

app.use(bodyParser.json());
routes_setter(app);
app.use(express.static( __dirname + '/public/dist/public' ));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

// Mongoose stuff
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes.js')(app);

app.listen(4200, function () {
    console.log("listening on port 4200");
});