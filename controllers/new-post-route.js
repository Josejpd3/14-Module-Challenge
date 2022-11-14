const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        res.render('new-post', {  
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;