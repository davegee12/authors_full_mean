var mongoose = require('mongoose');
require('../models/models.js');

const Author = mongoose.model('Author');


module.exports={
    index: (req, res) => {
        Author.find({}).sort({name: -1}).exec( (err, result) => {
            if(err){
                res.json({message: "Failed!", error: err})
            }
            else{
                res.json({message: "Success!", result: result})
            }
        })
    },
    show: (req, res) => {
        Author.findById(req.params.id, (err, author) => {
            if(err){
                res.json({message: "Failed!", error: err})
            }
            else{
                res.json({message: "Success!", result: author})
            }
        })
    },
    create: (req, res) => {
        console.log("POST DATA", req.body);
        Author.create(req.body, (err, result) => {
            if (err){
                res.json({message: "Failed!", error: err.errors})
            }
            else{
                res.json({message: "Success!", result: result});
            }
        })
    },
    update: (req, res) => {
        console.log(req.body);
        Author.findByIdAndUpdate({_id: req.params.id},{$set: req.body}, {runValidators: true, context: 'query'},(err, result) => {
            if(err){
                res.json({message: "Failed!", error: err.errors});
            }
            else{
                res.json({message: "Success!", result: result});
            }
        })
    },
    delete: (req, res) => {
        Author.remove({_id: req.params.id}, (err, result) => {
            if (err){
                res.json({message: "Failed!", error: err})
            }
            else{
                res.json({message: "Success!", result: result});
            }
        })
    },
    update_like: (req, res) => {
        Author.findById({_id: req.params.id}, (err, grabbedAuthor) => {
            var countlike = grabbedAuthor.like_count;
            countlike++;
            grabbedAuthor.like_count = countlike;

            grabbedAuthor.save((err, result) => {
                if(err){
                    res.json({message: "Could not update this author", error: err})
                } else {
                    res.json({message: "Success!", data: result})
                }
            });
        });
    },
    toggle_like: (req, res) => {
        Author.findById({_id: req.params.id}, (err, grabbedAuthor) => {
            var liked = grabbedAuthor.liked;
            liked = true;
            grabbedAuthor.liked = liked;

            grabbedAuthor.save((err, result) => {
                if(err){
                    res.json({message: "Could not update this author", error: err})
                } else {
                    res.json({message: "Success!", data: result})
                }
            });
        })
    }
}