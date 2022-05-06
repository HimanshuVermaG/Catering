const express = require('express')
const mongoose = require('./db/mongoose')
const userRouter = require('./router/users')
// const orderRouter = require('./router/orders')
// const menuRouter = require('./router/menu')
const addresDetailRouter = require('./router/address_detail')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')
const cookieParser = require('cookie-parser')
// const auths = require('./middleware/auth')


const app = express()

const port = 3000


//app.use(express.json())
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicDirectoryPath))
app.use(cookieParser())

app.use(userRouter)
// app.use(orderRouter)
// app.use(menuRouter)
app.use(addresDetailRouter)






app.listen(port, () => {
    console.log(`Server started & listening on port: ${port}`)
})