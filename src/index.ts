import {CollectionInsertOneOptions, ReplaceOneOptions, ObjectID, Db, Collection, 
    InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject} from 'mongodb'
import { Model } from 'typescript-data-model'
import { omit } from 'lodash'
export class MongoModel extends Model {

    static get collectionName(): string {
        return this.kebabClassName
    }

    static database: Db
    
    static get collection(): Collection<Model> {
        return this.database.collection<Model>(this.collectionName)
    }
    static get col(): Collection<Model> {
        return this.collection
    }
    
    _id: ObjectID

    toMongoDocs(fields?: string[], withId: boolean=false): Object {
        return omit(this.toDocs(fields), ['_id'])
    }

    get locator(): {[attr: string]: any} {
        return {_id: this._id}
    }

    async insert(options?: CollectionInsertOneOptions) {
        return await MongoModel.col.insertOne(this.toMongoDocs(), options)
    }

    async update(options?: ReplaceOneOptions) {
        return await MongoModel.col.updateOne(this.locator, {"$set":this.toMongoDocs()}, options)
    }
    async updateByDocs(docs: Object, options?: ReplaceOneOptions) {
        return await MongoModel.col.updateOne(this.locator, docs, options)
    }

    async delete(docs: Object, 
                 options?: { w?: number | string, wtimmeout?: number, j?: boolean, bypassDocumentValidation?: boolean }) {
        return await MongoModel.col.deleteOne(this.locator, options)
    }
}