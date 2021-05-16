"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eachDefinitions_1 = __importDefault(require("./eachDefinitions"));
function parametersBody(definitions = {}, request = {}) {
    const { parameters } = request;
    if (!parameters)
        return null;
    const body = {};
    if (parameters.length == 1 && parameters[0].in == 'body') {
        const value = eachDefinitions_1.default({ definitions, ref: parameters[0].schema.$ref });
        Object.assign(body, value);
        return body;
    }
    parameters.map(item => {
        if (item.schema && item.schema.$ref) {
            const value = eachDefinitions_1.default({ definitions, ref: item.schema.$ref });
            // if(item.schema.$ref.indexOf('SortVO') > -1){
            //   console.log('value>>>>>', value);
            // }
            body[item.name] = value;
        }
        else {
            body[item.name] = item;
        }
    });
    return body;
}
exports.default = parametersBody;
;
