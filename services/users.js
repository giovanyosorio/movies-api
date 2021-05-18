const MongoLib=require('../lib/mongo')
const bcrypt=require('bcryptjs');
//crear password en modo hashing

class UsersService{
    constructor(){
        this.collection='users'
        this.MongoLib= new MongoLib()
    }

    async getUser({email}){
        const [user]=await this.MongoLib.getAll(this.collection,{email})
        return user
    }
    async createUser({user}){
        const {name,email,password}=user
        const hashedPassword=await bcrypt.hash(password,10)
        
        const createUserId=await this.MongoLib.create(this.collection,{
            name,
            email,
            password:hashedPassword
        })
        return createUserId
    }
}

module.exports={
    UsersService
}
