//blog site
const express = require('express')
const path = require('path')
const { engine } = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')

const Post = require('./database/models/Post')

const createPostController = require('./controllers/createPost')
const homePagecontroller = require('./controllers/homePage')
const storePostcontroller = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

app.use(fileupload())
app.use(express.static('public'))
app.use(engine)
app.set('views', `${__dirname}/views`);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', homePagecontroller)

app.get('/post/:id', getPostController)

app.get('/post/new', createPostController)

app.post('/post/store', storePostcontroller)



app.listen(4000, () => {

    console.log('App listing on port 4000')

})