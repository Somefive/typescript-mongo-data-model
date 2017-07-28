import { MongoModel } from '../src/index'
import { validate, NotEmptyValidator } from 'typescript-data-model'

class User extends MongoModel {
    @validate(new NotEmptyValidator())
    name: string
    constructor() {
        super()
        this.name = ""
    }
}

const user = new User()
console.log(user.validate())