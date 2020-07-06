import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Employee from './Employee'
const app = express ()
app.use(bodyParser.json())

const mongoUrl = 'mongo "mongodb+srv://cluster0.eldg9.mongodb.net/<dbname>" --username pacy1'
mongoose.connect(mongoUrl,  {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on('connected', () => {
    console.log('connected successfully')
})

mongoose.connection.on('error', (err) => {
    console.log('connection failled with error '+err)
})

app.post('/send', (req, res) => {
    console.log(req.body)
    res.send(('posted'))
})

app.get('/', (res, req) => {
    res.setEncoding('welcome')
})

app.listen(3000, () => {
    console.log('Server is running')
})