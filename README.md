# Mongo Data Model For Typescript
#### By Somefive

This library is based on `typescript-data-model` and the single class **MongoModel** provides some easy way to use `mongodb`.

## Installing with npm
Run `npm install --save typescript-mongo-data-model`.

Then use `import { MongoModel } from 'typescript-mongo-data-model'`

## Introduction

### MongoModel
The MongoModel automatically use its class name's kebab case as the collection name which means if your model names "CarMaker", the default collection name will be "car-maker". But you can also rename it by overriding **collectionName**.

Before usage, the database have to be configured explicitly such as
```javascript
MongoModel.database = await MongoClient.connect(url)
```
If you want to use different database for different class, then you can configure databases in each class as you want.

**collection**, as well as **col**, can be used to get the instance of database collection in mongodb so you can directly use it like
```javascript
CarMaker.col.findOne({})
```

**toMongoDocs** is a function that is used to generate document that will be used in **insert** and **update**. By default, it omit field _id since the insert process and the update (using $set) does not need _id field. *But currently, if there is _id field in nested documents it would not be ignored.*

**locator** is a getter to make the identifier of the current object. By default, it will use _id field to identify this object. This is used in **update** and **delete**. 