"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const Swagger_1 = __importDefault(require("./core/Swagger"));
const boms_json_1 = __importDefault(require("./mock/boms.json"));
async function start(url) {
    let requestBody = null;
    try {
        // requestBody = await fetch(url);
    }
    catch (e) {
        console.log('请求数据异常');
        throw new Error(e);
    }
    const swagger = new Swagger_1.default(boms_json_1.default);
    swagger
        .query({ path: ['listDeliveryExpressOrder'] })
        .toResponseJSON()
        .buildMock({ distPath: path_1.default.resolve('./dist/mock'), fileType: 'hump', filterPathPrefix: 'api' })
        .toTypeScript()
        .toInterfaceTemp()
        .buildApi({ distPath: path_1.default.resolve('./dist/api'), fileType: 'js', apiContent: 'export default axios.{methods}({url})', filterPathPrefix: 'api' });
    return swagger;
}
start();
