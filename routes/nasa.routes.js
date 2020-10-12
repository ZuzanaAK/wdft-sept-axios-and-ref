const express = require('express');
const router  = express.Router();
const axios = require('axios');
const { route } = require('.');

// for the API_KEY that we stored in the .env file
// this gives us process.env with all values in the .env file
require('dotenv').config()


router.get('/mars', (req, res) => {
    // make the axios request and return images to the user
    let API_KEY = process.env.API_KEY

    // use template literals  -> ``
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
        .then((response) => {
            // axios returns the data always inside a 'data' key inside your response
            let photos = response.data.photos

            res.render('nasa', {photos} )
        })
})


module.exports = router;