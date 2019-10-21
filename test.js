const mongoose = require('mongoose')

const Post = require('./database/models/post')

mongoose.connect('mongodb://localhost/node-js-test-blog')


/* Post.create({
    title: 'my first blog post',
    description: 'words ifdhksbkfds',
    content: 'fjksdhkfndljfsfsdfhfhf efhfhfhfhsef sfsefhsefhsdfhsdkfhk fsefhseukfw'
}, (error, post) => {
    console.log(error, post)
}) */

Post.find({
}, (error, post) => {
    console.log(error, post)    
})