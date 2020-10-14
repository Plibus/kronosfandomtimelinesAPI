const express = require('express');

const postController = require('../controllers/posts');

const router = express.Router();

router.get('/:id', postController.getPost);

router.get('/fandom/:id', postController.getAllPostsOfFandom);

router.get('/fandom/:id/:catagory', postController.fetchAllOfFromFandomOfType);

router.get('/type/:type', postController.getPostType);

router.get('/', postController.getAllPosts);

router.post('/', postController.postPost);

router.put('/:id', postController.putPost);

router.put('/likes/:id', postController.putLikes);

router.put('/views/:id', postController.putViews);

router.delete('/:id', postController.deletePost);

module.exports = router;