const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pageRouter = require('./routes/pages');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", pageRouter);
mongoose.connect('mongodb+srv://root:root@cluster0.y21un.mongodb.net/ProjectDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        app.listen(4000, () => {
            console.log('MongoDB is connected and Express server is running');
        });
    });