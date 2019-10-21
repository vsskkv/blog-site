const mongoose = require('mongoose')

//Users, posts, products
// def of how 
const PostSchema = new mongoose.Schema({

 title: String,
 description: String,
 content: String
    
})

const post = mongoose.model('post', PostSchema)

module.exports = post