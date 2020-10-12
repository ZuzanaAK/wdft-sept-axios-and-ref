const express = require('express');
const router  = express.Router();

const UserModel = require('../models/user.model')
const PostModel = require('../models/post.model');
const { response } = require('express');

router.get('/posts', (req, res) => {
    // create a dummy post for a random user
        PostModel.create({body: 'Comment body', myUser: '5f844bbdbcf522040caa1c72'})
          .then(() => {
              res.send('Data entered')
          })
})

router.get('/list', (req, res) => {
      // get all posts for us
      PostModel.find()
      .populate('myUser')
        .then((posts) => {
          res.send(posts)
        })
})


module.exports = router;