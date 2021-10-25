
//use a schema model

const mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: String
    },
    content: {
        type: String
    }
});
module.exports = mongoose.model('Article', articleSchema);

