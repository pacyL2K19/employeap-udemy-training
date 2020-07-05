import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
const app = express ()
const mongoUrl = 'mongo "mongodb+srv://cluster0.eldg9.mongodb.net/<dbname>" --username pacy1'
app.get('/', (res, req) => {
    res.setEncoding('welcome')
})

app.listen(3000, () => {
    console.log('Server is running')
})