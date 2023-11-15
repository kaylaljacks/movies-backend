require('dotenv').config();
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TOKEN_TMDB
        }
    };
    
    fetch(`http://api.themoviedb.org/3/discover/movie`, options)
    .then(response => response.json())
    .then(response => {

    res.json({ result: true, movies: response.results });
 })
    .catch(err => {
     res.json({result:false, msg:err})
 });
});



module.exports = router;
