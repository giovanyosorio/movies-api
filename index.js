const express=require('express')

const app=express()
const {config}=require('./config/index')
const moviesApi=require('./routes/movies')
const {logErrors,errorHandler, wrapErrors}=require('./utils/middlewares/errorHandlers')
const notFoundHandler=require('./utils/middlewares/notFoundHandler')
const userMoviesApi=require('./routes/userMovies')
const authApi = require('./routes/auth')

app.use(express.json())//body parser

moviesApi(app)
authApi(app)

userMoviesApi(app)
//catch eror 404
app.use(notFoundHandler)
//erro middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port,function    () {
    console.log(`listenning http://localhost:${config.port}`);
})
