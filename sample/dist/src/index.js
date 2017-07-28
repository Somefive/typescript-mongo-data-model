"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_data_model_1 = require("typescript-data-model");
var lodash_1 = require("lodash");
var MongoModel = (function (_super) {
    __extends(MongoModel, _super);
    function MongoModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MongoModel, "collectionName", {
        get: function () {
            return this.kebabClassName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MongoModel, "collection", {
        get: function () {
            return this.database.collection(this.collectionName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MongoModel, "col", {
        get: function () {
            return this.collection;
        },
        enumerable: true,
        configurable: true
    });
    MongoModel.prototype.toMongoDocs = function (fields, withId) {
        if (withId === void 0) { withId = false; }
        return lodash_1.omit(this.toDocs(fields), ['_id']);
    };
    Object.defineProperty(MongoModel.prototype, "locator", {
        get: function () {
            return { _id: this._id };
        },
        enumerable: true,
        configurable: true
    });
    MongoModel.prototype.insert = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MongoModel.col.insertOne(this.toMongoDocs(), options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MongoModel.prototype.update = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MongoModel.col.updateOne(this.locator, { "$set": this.toMongoDocs() }, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MongoModel.prototype.updateByDocs = function (docs, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MongoModel.col.updateOne(this.locator, docs, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MongoModel.prototype.delete = function (docs, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MongoModel.col.deleteOne(this.locator, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MongoModel;
}(typescript_data_model_1.Model));
exports.MongoModel = MongoModel;
