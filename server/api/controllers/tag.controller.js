const mongoose = require('mongoose');
const { getRandomItem, COLORS } = require('../utils');
const Tag = mongoose.model('Tag');

/**
 * listTags - function to list Tags
 * 
 * @param {*} req request from user
 * @param {*} res response to send to user
 * 
 * @return {[Tag]} returns Tag array
 */
const listTags = async (req, res) => {
    try {
        // let query = {}
        // console.log('query => ', query);
        
        //find ALL tags
        let tags = await Tag.find({});
        console.log('tags => ', tags);

        //return tags
        res.json(tags);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

/**
 * createTag - function to create a Tag
 * 
 * @param {*} req request from user
 * @param {*} res response to send to user
 * 
 * @return {Tag} returns Tag object
 */
const createTag = async (req, res) => {
    try {
        let query = { _id: req.params.tagId }
        let doc = req.body
        console.log('query => ', query);
        console.log('doc => ', doc);

        //define a random color
        let color = getRandomItem(COLORS) //'#AABBCC';
        console.log('color => ', color.hexString);

        doc.color = color.hexString
    
        //create tag
        const newtag = new Tag(doc);
        let tag = await newtag.save();
        console.log('tag => ', tag);

        //return tag
        res.json(tag);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

/**
 * readTag - function to retrieve a Tag
 * 
 * @param {*} req request from user
 * @param {*} res response to send to user
 * 
 * @return {Tag} returns Tag object
 */
const readTag = async (req, res) => {
    try {
        let query = { _id: req.params.tagId }
        console.log('query => ', query);
    
        //find tag
        let tag = await Tag.findById(query);
        console.log('tag => ', tag);

        //return tag
        res.json(tag);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

/**
 * updateTag - function to update a Tag
 * 
 * @param {*} req request from user
 * @param {*} res response to send to user
 * 
 * @return {Tag} teturns Tag object
 */
const updateTag = async (req, res) => {
    try {
        let query = { _id: req.params.tagId }
        let data = req.body
        let options = { new: true }

        console.log('query => ', query);
    
        //find and update
        let tag = await Tag.findOneAndUpdate(
            query,
            data,
            options
        );
        console.log('tag => ', tag);

        //return tag updated
        res.json(tag);
    
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

/**
 * deleteTag - function to delete a Tag
 * 
 * @param {*} req request from user
 * @param {*} res response to send to user
 * 
 * @return {string} message Success message to forward to user
 */
const deleteTag = async (req, res) => {
    try {
        let query = { _id: req.params.tagId }
        console.log('query => ', query);
    
        //delete
        let deleted = await Tag.deleteOne(query);
        console.log('deleted => ', deleted);

        //return tag deleted message
        res.json({
            message: 'Tag successfully deleted',
           _id: req.params.tagId
        });    
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

module.exports = {
    listTags: listTags,
    createTag: createTag,
    readTag: readTag,
    updateTag: updateTag,
    deleteTag: deleteTag
};