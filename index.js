//blog site
const express = require('express')
const path = require('path')

const { engine } = require('express-edge')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Post = require('./database/models/post')

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })

app.use(express.static('public'))

app.use(engine)

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async (req, res) => {

    const posts = await Post.find({})

    res.render('index', {
        posts
    })

})

app.get('/about', (req, res) => {

    res.render('about')

})

app.get('/post/:id', async (req, res) => {

    const post = await Post.findById(req.params.id)

    res.render('post')

})

app.get('/post/new', (req, res) => {

    res.render('create')

})

app.post('/post/store', (req, res) => {

    Post.create(req.body, (error, post) => {
        res.redirect('/')
    })
})

app.get('/contact', (req, res) => {

    res.render('contact')

})

app.listen(4000, () => {

    console.log('App listing on port 4000')

})