"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("../template");
function buildInterfaceString(data) {
    let str = '';
    Object.keys(data).forEach(key => {
    });
    return str;
}
function toInterfaceTemp(data) {
    let str = '';
    Object.keys(data).forEach(key => {
        const val = data[key];
        str += template_1.interfaceTemp(key, val);
    });
    return str;
}
exports.default = toInterfaceTemp;
