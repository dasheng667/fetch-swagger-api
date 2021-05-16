"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCase = exports.isObject = exports.writeTS = exports.writeMock = exports.findResponseRef = exports.verifyNodeIsDeclarationType = exports.validataQuery = void 0;
const fs_1 = __importDefault(require("fs"));
const validataQuery = function (requestData, requestPath, options) {
    const { tags, description } = requestData;
    const { keyword, tag, path } = options;
    if (keyword && description.indexOf(keyword) == -1) {
        return false;
    }
    if (path && requestPath.indexOf(path) == -1) {
        return false;
    }
    if (tag && Array.isArray(tags)) {
        return tags.some((tag) => {
            return tag.toLocaleUpperCase().indexOf(tag.toLocaleUpperCase()) === -1;
        });
    }
    return true;
};
exports.validataQuery = validataQuery;
/**
 * 校验节点是不是声明类型，声明数据必有type
 * @param node 节点
 * @returns
 */
function verifyNodeIsDeclarationType(node) {
    if (!node)
        return false;
    const arr = ['string', 'number', 'array', 'object', 'integer', 'boolean'];
    if (node.type === undefined)
        return false;
    return arr.includes(node.type);
}
exports.verifyNodeIsDeclarationType = verifyNodeIsDeclarationType;
function findResponseRef(request) {
    try {
        const { responses: { '200': { schema: { '$ref': ref } } } } = request;
        return ref;
    }
    catch (e) {
        // console.error(e)
    }
    return null;
}
exports.findResponseRef = findResponseRef;
function writeMock(fileName, data) {
    fs_1.default.writeFile(`./src/mock/${fileName}`, JSON.stringify(data, null, "\t"), null, () => {
    });
}
exports.writeMock = writeMock;
function writeTS(fileName, content) {
    fs_1.default.writeFile(`./src/mock/${fileName}`, content, null, () => {
    });
}
exports.writeTS = writeTS;
function isObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
}
exports.isObject = isObject;
function stringCase(str) {
    if (typeof str !== 'string')
        return '';
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
exports.stringCase = stringCase;
