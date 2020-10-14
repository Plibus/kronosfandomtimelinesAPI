const Images = require('../models/images');

exports.getAllImages = async(req, res, next) => {
    try {
        const [allImages] = await Images.fetchAll();
        res.status(200).json(allImages);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.getImage = async(req, res, next) => {
    try {
        const Image = await Images.fetch(req.params.id);
        res.status(200).json(Image);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.getFandomImages = async(req, res, next) => {
    try {
        const [allImages] = await Images.fetchAllOfFandom(req.params.id);
        res.status(200).json(allImages);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.putImage = async(req, res, next) => {
    console.log('PUTPOST');
    try {
        const postResponse = await Images.update(req.params.id, req.body.fandomId, req.body.media, req.body.mediaCaption, req.body.mediaAlt, req.body.mediaCredit, req.body.uploader);
        res.status(200).json(postResponse);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

exports.deleteImage = async(req, res, next) => {
    try {
        const Image = await Images.delete(req.params.id);
        res.status(200).json(Image);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
};

