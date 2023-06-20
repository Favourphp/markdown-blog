const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db/connect')
require('dotenv').config()


const articleRouter = require('./routes/articles')
const app = express()
 
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))





app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt:new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', {articles: articles })
})

app.use('/articles',articleRouter)

const port = process.env.PORT || 5000;

const start = async() => {
    try {
        // connect to DB 
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
       console.log(error) 
    }
}

 start()