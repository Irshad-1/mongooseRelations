const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    category_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    social_profile: {
        linkedIn: String,
        facebook: String,
        twiter: String,
        github: String,
        instagram: String,
    },
    addresses: [{
        line1: String,
        city: String,
        state: String,
        pinCode: String,
    }],
    blog_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ]
});

const categorySchema = new mongoose.Schema({
    name: String
});

const commentSchema = new mongoose.Schema({
    blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: String,
    rating: Number
})


const likeSchema = new mongoose.Schema({
    blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    emoji: String
})

const Blog = mongoose.model('Blog', blogSchema);
const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', categorySchema);
const Comment = mongoose.model('Comment', commentSchema);
const Like = mongoose.model('Like', likeSchema);

module.exports = {
    Blog, User, Category, Comment, Like
}