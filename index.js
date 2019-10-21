//blog site
const express = require('express')
const path = require('path')

const { engine } = require('express-edge')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

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

app.get('/', (req, res) => {

    res.render('index')

})

app.get('/about', (req, res) => {

    res.render('about')

})

app.get('/post', (req, res) => {

    res.render('post')

})

app.get('/post/new', (req, res) => {

    res.render('create')

})

app.get('/post/store', (req, res) => {

    console.log(req.body)
    res.redirect('/')
})

app.get('/contact', (req, res) => {

    res.render('contact')

})


app.listen(4000, () => {

    console.log('App listing on port 4000')

})