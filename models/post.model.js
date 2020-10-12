const mongoose = require('mongoose')

let PostSchema = new mongoose.Schema({
      body: String, 
      myUser: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
      }
}) 


let PostModel = mongoose.model('post', PostSchema)

module.exports = PostModel