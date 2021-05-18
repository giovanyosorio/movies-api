const express=require('express')

const app=express()
const {config}=require('./config/index')
const moviesApi=require('./routes/movies')
const {logErrors,errorHandler, wrapErrors}=require('./utils/middlewares/errorHandlers')
const notFoundHandler=require('./utils/middlewares/notFoundHandler')


app.use(express.json())//body parser

moviesApi(app)

//catch eror 404
app.use(notFoundHandler)
//erro middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port,function    () {
    console.log(`listenning http://localhost:${config.port}`);
})
