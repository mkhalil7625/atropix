var express = require('express');
var router = express.Router();
var apodService=require('../services/apod');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('fetchpicture');
});
// fetch a pic from NASA's astronomy picture of the day service
router.get('/fetchpicture', function (req, res, next) {
    apodService(function (err, apod_data) {
        if (err) {
            res.render('apodError', {message: err.message, title: 'Error'});

        } else {
            res.render('index', {apod: apod_data, title: 'APOD for ${apod_data}'});
        }
    },req.query.picturetype);
    });
   // if (req.query.picturetype==='random'){
     // res.send('todo:get random picture');
    // }else{
    //  // res.send('todo: get today\'s picture')
    // }

module.exports = router;
