const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
          include: [
            {
              model: User
            },
          ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', { 
          posts, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        res.status(500).json(err);
      }
});