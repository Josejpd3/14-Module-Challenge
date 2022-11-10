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

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
          include: [
            {
              model: User
            },
          ],
        });

        const commentData = await Comment.findAll({
            where:
            {
                post_id: req.params.id
            },
            include:
            [
                {
                    model: User
                },
                {
                    model: Post
                }
            ]
        })
    
        const post = postData.get({ plain: true });
        const comments = commentData.map((comment) => comment.get({ plain: true }))
    
        res.render('single-post', {
          ...post,
          comments,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});