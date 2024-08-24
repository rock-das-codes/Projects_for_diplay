const express = require("express");
const router = express.Router();
const Post = require('../models/post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
      } catch (err) {
        res.json({ message: err });
      }
    });


    router.post('/', async (req, res) => {
        const post = new Post({
          title: req.body.title,
          content: req.body.content
        });
      
        try {
          const savedPost = await post.save();
          res.json(savedPost);
        } catch (err) {
          res.json({ message: err });
        }
});

module.exports = router;  