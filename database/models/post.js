const mongoose = require('mongoose')

//Users, posts, products
// def of how 
const PostSchema = new mongoose.Schema({

 title: String,
 subtitle: String,
 content: String,
 username: String,
 createdAt: {
     type: Date,
     default: new Date()
 }
    
})

const post = mongoose.model('post', PostSchema)

module.exports = post 