//blog site
const express = require('express')
const path = require('path')

const app = new express()

app.use(express.static('public'))

app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'pages/index.html'))

})

app.listen(4000, () => {

    console.log('App listing on port 4000')

})