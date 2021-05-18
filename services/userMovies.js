const MongoLib=require('../lib/mongo')


class userMoviesService {
    constructor(){
        this.collection='user-movies'
        this.mongoDB=new MongoLib()
    }

    async getUserMovies({userId}){
        const query= userId && {userId}
        const userMovie=await this.mongoDB.getAll(this.collection,query)
        return userMovie || []
    }
    async createUserMovie({userMovie}){
       const createUserMovieId = await this.mongoDB.create(this.collection,userMovie)
        return createUserMovieId
    }
    async deleteUserMovie({userMovieId}){
        const deteleUserMovieId = await this.mongoDB.delete(this.collection,userMovieId)
        return deteleUserMovieId
    }
}

module.exports={
    userMoviesService
}