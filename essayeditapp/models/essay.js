const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const EditSchema = new mongoose.Schema({
    edit_comment: {type: String},
    assosiated_text: {type: String}

})

const EssaySchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    description: {type: String, required: true},
    topic: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: Number, required: true, min: 1, max: 5},
    requester: {type: ObjectID, required: false, default: null}, //TODO: change this to not be null on default, but have a required requester
    editor: {type: ObjectID, required: false, default: null},
    edits: [EditSchema],
    edit_rating: {type: Number, min: 1, max: 5}
});

const Essay = mongoose.model('Essay', EssaySchema);
module.exports = { Essay };
