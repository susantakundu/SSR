const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const mongoose = require('mongoose');
const user = require('../models/user');

const video = require('../models/video');


const db = "mongodb://susant:susanta123@ds145911.mlab.com:45911/susantamongo";

mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error('Error' + err);
    }
});


router.get('/', function(req, res){
    res.send('api works');
});
//  Authentication part Api

router.post('/register',(req, res) => {
    let userData = req.body;
    let newUser = new user(userData);
    //newUser.email = req.body.email;
    //newUser.password = req.body.password;
    newUser.save((err, registerdUser) => {
        if(err){
            console.log('Error Registering user');
        }else {
            let payload = { subject: registerdUser._id }
            let token = jwt.sign(payload, 'secretKey') 
            res.json({token})
        }
    });
});

// login api

router.post('/login', function(req, res){
    let userData = req.body;

    user.findOne({email: userData.email}, function(error, user){
        if(error){
            console.log('Error');
        }else{
            if(!user) {
                res.status(401).send('Invalid User');
            } else 
            if(user.password !== userData.password) {
                res.status(401).send('Password did not match');
            }else{
                let payload = { subject: user }
                let token = jwt.sign(payload, 'secretKey')
                let decodedToken = jwt.decode(token)
                res.status(200).json({token})
            }
        }
    });
    
})




// getting all videos
router.get('/videos', function(req, res){
    console.log('retriving videos data');
    video.find({})
    .exec(function(err, videos){
        if(err){
            console.log('Error retriving videos');
        }else {
            res.json(videos);
        }
    });
});

// getting a single  video
router.get('/videos/:id', function(req, res){
    console.log('retriving single video');
    video.findById(req.params.id)
    .exec(function(err, videos){
        if(err){
            console.log('Error retriving video');
        }else {
            res.json(videos);
        }
    });
});

// posting video
router.post('/video', function(req, res){
    console.log('posting a video');
    var newVideo = new video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function(err, insertedViseo){
        if (err){
            console.log('Error posting Video');
        }else{
            res.json(insertedViseo);
        }
    });

});

//updating viseo

router.put('/video/:id', function(req, res){
    console.log('updating a video');
    video.findByIdAndUpdate(req.params.id,
        {
            $set: {title: req.body.title, url: req.body.url, description: req.body.description}
        },
        {
            new: true
        },
        function(err, updatedVideo){
            if(err){
                res.send('Error updating video');
            }else{
                res.json(updatedVideo);
            }
        }
    );

});

// deleting video 

router.delete('/video/:id', function(req, res){
    console.log('deleting a video');
    video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err) {
            res.send('error deleting video');
        }else{
            res.json(deletedVideo);
        }
    });
});





module.exports = router;