import {stringCase, dataType} from '../utils'

function getInterfaceType(value) {
  const {type, items} = value;
  if (type === 'integer') return 'number';
  if (type === 'file') return 'any';
  if (type === 'ref') return 'any';
  if(type === 'array' && items && items.type){
    return `${items.type}[]`;
  }
  if(dataType.includes(type)) {
    return type;
  }
  if(type){
    return stringCase(type);
  }
  return 'any';
};

/**
 * ts接口模板
 * @param name interface的名称
 * @param data 
 * @returns 
 */
export const interfaceTemp = (name: string, data: any) => {
  let str = `export interface ${stringCase(name)} { \n`
  Object.keys(data).forEach((key: any)=>{
    const val = data[key];
    const name = val.name || key || '';
    const description = val.description ? `  /** 备注：${val.description} ${val.example ? `示例：${val.example}` : ''} */ \n` : '';
    const content = ` ${name}${val.required === false ? '?' : ''}: ${getInterfaceType(val)}; \n`;
    str += description;
    str += content;
  });
  str += '} \n\n';
  return str;
}
