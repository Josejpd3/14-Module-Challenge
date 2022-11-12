const router = require('express').Router();
const { where } = require('sequelize');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

});