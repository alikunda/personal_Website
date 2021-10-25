const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');
const Article = require('../models/article');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/aboutMe', (req, res) => {
    res.render('aboutMe');
});

router.get('/connect', (req, res) => {
    res.render('connect');
});

router.get('/Resources', (req, res) => {
    res.render('Resources');
});

router.get('/sende-mail', (req, res) => {
    res.render('sende-mail');
});
router.get('/suggestion', (req, res) => {
    res.render('suggestion');
});
router.get('/article', (req, res) => {
    res.render('article');
});

router.post('/submitContact', (req, res) => {
    //use schema model
    const contact = new Contact({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        subject: req.body.subject,
        comment: req.body.comment
    });
    contact.save()
        .then(result => {
            res.render('submitContact', { contact: contact });
        })
        .catch(err => console.log(err))
});
//use a schema model
router.post('/submitArticle', (req, res) => {
    const date = new Date().toLocaleString();
    const article = new Article({
        name: req.body.name,
        title: req.body.title,
        date: date,
        content: req.body.content
    });

    Article.collection.insertOne(article)
        .then(result => {
            console.log('result');
        })
        .catch(err => console.log(err));

    Article.find()
        .then(results => {
            res.render('submitArticle', { articles: results });
        })
        .catch(err => concole.log(err));
});


module.exports = router;