const router = require('express').Router();
const { where } = require('sequelize');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User
                },
            ],
            where: {
                user_id: req.session.user_id
            }
        });
        const posts = postData.map((post) => post.get({ plain: true}));
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;