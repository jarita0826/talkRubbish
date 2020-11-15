// Include express from node_modules and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const discourse = require('./talk')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

// setting the route and corresponding response
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const answer = discourse(req.body.role)
    console.log(`random password is:${discourse(req.body.role)}`)

    //把釋出的結果 渲染至頁面
    res.render('index', { answer: answer })
})

// Listen the server when it started
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})