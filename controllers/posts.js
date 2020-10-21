const { json } = require('body-parser');
const Posts = require('../models/posts');

exports.getPost = async(req, res, next) => {
    try {
        const Post = await Posts.fetch(req.params.id);
        res.status(200).json(Post);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.getAllPosts = async(req, res, next) => {
    try {
        const [allPosts] = await Posts.fetchAll();
        res.status(200).json(allPosts);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.getAllPostsOfFandom = async(req, res, next) => {
    try {
        const [allPosts] = await Posts.fetchAllOfFandom(req.params.id);
        res.status(200).json(allPosts);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};


exports.fetchAllOfFromFandomOfType = async(req, res, next) => {
    try {
        const [allPosts] = await Posts.fetchAllOfFromFandomOfType(req.params.id, req.params.catagory);
        res.status(200).json(allPosts);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};


exports.getPostType = async(req, res, next) => {
    try {
        const [allPostsType] = await Posts.fetchAllOf(req.params.type);
        res.status(200).json(allPostsType);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.postPost = async(req, res, next) => {
    console.log('POSTPOST');
    var JSONObj = new Object();
    JSONObj = req.body;
    try {
        const postResponse = await Posts.post(req.body.fandomId, req.body.type, req.body.catagory, req.body.theme, req.body.name, req.body.description, req.body.creator, req.body.updator, JSONObj);
        res.json(postResponse);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.putPost = async(req, res, next) => {
    console.log('PUTPOST');
    var JSONObj = new Object();
    JSONObj = req.body;
    try {
        const postResponse = await Posts.update(req.params.id, req.body.theme, req.body.name, req.body.description, req.body.updator, JSONObj);
        res.json(postResponse);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.putLikes = async(req, res, next) => {
    console.log("PUTLIKE")
    try {
        const Post = await Posts.updateLikes(req.params.id);
        res.status(200).json(Post);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.putViews = async(req, res, next) => {
    console.log("PUTVIEW")
    try {
        const Post = await Posts.updateViews(req.params.id);
        res.status(200).json(Post);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.deletePost = async(req, res, next) => {
    try {
        const Post = await Posts.delete(req.params.id);
        res.status(200).json(Post);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

