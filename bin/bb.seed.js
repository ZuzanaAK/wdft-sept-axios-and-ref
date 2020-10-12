// make sure db is connected while seeding
require('../config/db.config')

// get my db model
let BBModel = require('../models/bb.model')

let mongoose = require('mongoose')

let axios = require('axios')

axios.get('https://breakingbadapi.com/api/characters')
    .then((response) => {
        //console.log(response.data)
        BBModel.insertMany(response.data)
          .then(() => {
              console.log('Data inserted')
              mongoose.connection.close()
          })
    })
    .catch(() => {
        console.log('Error. Something went wrong')
    })