import { CollectionInsertOneOptions, ReplaceOneOptions, ObjectID, Db, Collection, InsertOneWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject } from 'mongodb';
import { Model } from 'typescript-data-model';
export declare class MongoModel extends Model {
    static readonly collectionName: string;
    static database: Db;
    static readonly collection: Collection<Model>;
    static readonly col: Collection<Model>;
    _id: ObjectID;
    toMongoDocs(fields?: string[], withId?: boolean): Object;
    readonly locator: {
        [attr: string]: any;
    };
    insert(options?: CollectionInsertOneOptions): Promise<InsertOneWriteOpResult>;
    update(options?: ReplaceOneOptions): Promise<UpdateWriteOpResult>;
    updateByDocs(docs: Object, options?: ReplaceOneOptions): Promise<UpdateWriteOpResult>;
    delete(docs: Object, options?: {
        w?: number | string;
        wtimmeout?: number;
        j?: boolean;
        bypassDocumentValidation?: boolean;
    }): Promise<DeleteWriteOpResultObject>;
}
