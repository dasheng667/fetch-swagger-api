"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eachDefinitions_1 = __importDefault(require("./eachDefinitions"));
const parameters_1 = __importDefault(require("./parameters"));
const toResponseJSON_1 = __importDefault(require("./toResponseJSON"));
const toTypeScript_1 = __importDefault(require("./toTypeScript"));
const toInterfaceTemp_1 = __importDefault(require("./toInterfaceTemp"));
const utils_1 = require("../utils");
/**
 * Swagger 拉取工具
 */
class Swagger {
    constructor(body) {
        if (body == null || typeof body !== 'object') {
            throw new Error(`Swagger 参数异常: ${body}`);
        }
        this.body = body;
        this.queryList = {};
        this.responseData = {};
        this.typescriptData = {};
    }
    query(options) {
        const { paths, definitions } = this.body;
        const queryList = {};
        Object.keys(paths).forEach(path => {
            const apiData = paths[path];
            const { post, get, put } = apiData;
            const request = post || get || put;
            if (!utils_1.validataQuery(request, path, options))
                return;
            const ref = utils_1.findResponseRef(request);
            const parametersData = parameters_1.default(definitions, request);
            if (!ref)
                return;
            const res = eachDefinitions_1.default({ definitions, ref });
            console.log('查询到path: ', path);
            queryList[path] = {
                request: parametersData,
                response: res
            };
        });
        this.queryList = queryList;
        utils_1.writeMock('queryList.json', queryList);
        return this;
    }
    /**
     * 转换成响应数据
     * @param callback
     * @returns
     */
    toResponseJSON(callback) {
        const keys = Object.keys(this.queryList);
        if (keys.length === 0)
            return this;
        const json = {};
        keys.forEach(path => {
            const { response } = this.queryList[path];
            json[path] = toResponseJSON_1.default(response);
        });
        this.responseData = json;
        utils_1.writeMock('response.json', json);
        if (typeof callback === 'function') {
            callback(json);
        }
        return this;
    }
    /**
     * 转换成ts声明文件
     * @param callback
     * @returns
     */
    toTypeScript(callback) {
        const keys = Object.keys(this.queryList);
        if (keys.length === 0)
            return this;
        const json = {};
        keys.forEach(path => {
            const { request, response } = this.queryList[path];
            json[path] = {
                request: toTypeScript_1.default(request, 'props'),
                response: toTypeScript_1.default(response, 'result')
            };
        });
        this.typescriptData = json;
        utils_1.writeMock('typescript.json', json);
        if (typeof callback === 'function') {
            callback(json);
        }
        return this;
    }
    /**
     * 转换成ts的接口模板
     */
    toInterfaceTemp(callback) {
        const keys = Object.keys(this.typescriptData);
        if (keys.length === 0)
            return this;
        let propsString = '';
        let resultString = '';
        let a = 0;
        keys.forEach(path => {
            a++;
            const { request, response } = this.typescriptData[path];
            propsString += toInterfaceTemp_1.default(request);
            resultString += toInterfaceTemp_1.default(response);
            utils_1.writeTS(`interface/props${a}.d.ts`, `//${path} \n` + propsString + resultString);
            propsString = '';
            resultString = '';
        });
        if (typeof callback === 'function') {
            // callback({
            //   propsString,
            //   resultString
            // });
        }
        return this;
    }
}
exports.default = Swagger;
