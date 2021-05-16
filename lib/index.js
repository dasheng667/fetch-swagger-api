"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = __importDefault(require("./fetch"));
const Swagger_1 = __importDefault(require("./core/Swagger"));
const test1_json_1 = __importDefault(require("./mock/test1.json"));
async function start(url) {
    let requestBody = null;
    try {
        requestBody = await fetch_1.default(url);
    }
    catch (e) {
        console.log('请求数据异常');
        throw new Error(e);
    }
    const swagger = new Swagger_1.default(test1_json_1.default);
    swagger
        .query({ path: 'stimulate' })
        .toResponseJSON()
        .toTypeScript();
    return swagger;
}
start();
