const express = require('express');
const router  = express.Router();

const BBModel = require('../models/bb.model')
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
    // get the data from our DB
    BBModel.find()
      .then((characters) => {
  
        res.render('index', {characters})
      })

});

router.get('/quotes', (req, res) => {

  axios.get('https://breakingbadapi.com/api/quotes')
    .then((response) => {
        //axios always returns the API data in a data key inside your response object
        // we will get our data in quotes.data
        //console.log(quotes.data)
        // let myObj = {
        //   quotes: response.data
        // }
        //let quotes = response.data
        res.render('quotes.hbs', {quotes: response.data})
    })
})

module.exports = router;
