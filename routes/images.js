const express = require('express');
const multer = require('multer');

const storage  = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/img/'+new Date().getFullYear()+'/');
    },
    filename: function(req, file, cb) {
        cb(null,  'KFTLIMG-' + (new Date().getTime()) + file.originalname);
    }
});

const upload = multer({storage: storage, limits: 
    { fileSize: 1024 * 1024 * 25}
})

const Images = require('../models/images');
const imageController = require('../controllers/images');
const router = express.Router();

router.get('/', imageController.getAllImages);

router.get('/:id', imageController.getImage);

router.get('/fandom/:id', imageController.getFandomImages);

router.post('/', upload.single('media'), async (req, res, next) => { 
    try {
        const postResponse = await Images.post(req.body.fandomId, req.file.path, req.body.mediaCaption, req.body.mediaAlt, req.body.mediaCredit, req.body.uploader);
        res.status(200).json(postResponse);
    } catch(e) {
        if(!e.statusCode) {
            e.statusCode = 500;
        }
        next.e;
    }
});
    
router.put('/:id', imageController.putImage);

router.delete('/:id', imageController.deleteImage);

module.exports = router;