const MongoLib=require('../lib/mongo')


class ApiKeyService {
    constructor(){
        this.collection='api-keys'
        this.mongodb= new MongoLib()
    }
    async getApiKey({token}){
        const [apiKey]=await this.mongodb.getAll(this.collection,{token})
        return apiKey
    }
}

module.exports=ApiKeyService