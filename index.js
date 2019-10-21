//blog site
const express = require('express')
const path = require('path')

const { engine } = require('express-edge')

const app = new express()

app.use(express.static('public'))

app.use(engine)

app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {

    res.render('index')

})

app.get('/about', (req, res) => {

    res.render('about')

})

app.get('/post', (req, res) => {

    res.render('post')

})

app.get('/contact', (req, res) => {

    res.render('contact')

})


app.listen(4000, () => {

    console.log('App listing on port 4000')

})