"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interfaceTemp = void 0;
const utils_1 = require("../utils");
function getInterfaceType(value) {
    const { type, items } = value;
    if (type === 'integer')
        return 'number';
    if (type === 'file')
        return 'any';
    if (type === 'ref')
        return 'any';
    if (type === 'array' && items && items.type) {
        return `${items.type}[]`;
    }
    if (utils_1.dataType.includes(type)) {
        return type;
    }
    if (type) {
        return utils_1.stringCase(type);
    }
    return 'any';
}
;
/**
 * ts接口模板
 * @param name interface的名称
 * @param data
 * @returns
 */
const interfaceTemp = (name, data) => {
    let str = `export interface ${utils_1.stringCase(name)} { \n`;
    Object.keys(data).forEach((key) => {
        const val = data[key];
        const name = val.name || key || '';
        const description = val.description ? `  /** 备注：${val.description} ${val.example ? `示例：${val.example}` : ''} */ \n` : '';
        const content = ` ${name}${val.required === false ? '?' : ''}: ${getInterfaceType(val)}; \n`;
        str += description;
        str += content;
    });
    str += '} \n\n';
    return str;
};
exports.interfaceTemp = interfaceTemp;
