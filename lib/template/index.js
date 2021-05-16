"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interfaceTemp = void 0;
const utils_1 = require("../utils");
function getInterfaceType(value) {
    const type = value.type;
    if (type === 'integer')
        return 'number';
    if (type === 'file')
        return 'any';
    if (type === 'ref')
        return 'any';
    return type || 'any';
}
;
/**
 *
 * @param name interface的名称
 * @param data
 * @returns
 */
const interfaceTemp = (name, data) => {
    let str = `export interface ${utils_1.stringCase(name)}{`;
    Object.keys(data).forEach((val) => {
        const description = val.description && `/** 备注：${val.description} 示例：${val.example || ''} */`;
        const content = `${val.name}${!val.required ? '?' : ''}:${getInterfaceType(val)}`;
        str += description;
        str += content;
    });
    str += '} \n';
    return str;
};
exports.interfaceTemp = interfaceTemp;
