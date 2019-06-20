var path = require('path');
var fs = require('fs')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/author', {}, function(err){
    if(err){
        console.log('ERROR', err);
    }
    else{
        console.log('CONNECTED');
    }
});
let models_path = path.join(__dirname, './../models');

//iterates through the models folder and searches for all the model js files
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/' + file);
    }
});

