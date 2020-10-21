const express = require('express');
const http = require('http')
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');
//const usersRoutes = require('./routes/users');
const imageRoutes = require('./routes/images');
const errorsController = require('./controllers/errors');
const app = express();
const port = process.env.PORT || 80;
app.use(express.static(path.join(__dirname, '/dist/kronos')));

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/posts', postsRoutes);
app.use('/images', imageRoutes);
//app.use('/users', usersRoutes);

app.use(errorsController.get404);
app.use(errorsController.get500);

app.listen(port, () => console.log('listening on port ' + port));