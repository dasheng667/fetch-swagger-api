import fs from 'fs';
import { Query } from '../../typings/swagger';

export const validataQuery = function(requestData: any, requestPath: string, options: Query){
  const { tags, description } = requestData;
  const { keyword, tag, path } = options;
  if(keyword && description.indexOf(keyword) == -1){
    return false;
  }
  if(typeof path === 'string' && requestPath.indexOf(path) == -1){
    return false;
  }
  if(Array.isArray(path) && path.every(p => requestPath.indexOf(p) == -1)){
    return false;
  }
  if(tag && Array.isArray(tags)){
    return tags.some((tag) => {
      return tag.toLocaleUpperCase().indexOf(tag.toLocaleUpperCase()) === -1
    })
  }
  return true;
}

export const dataType = ['string', 'number', 'array', 'object', 'integer', 'boolean'];

/**
 * 校验节点是不是声明类型，声明数据必有type
 * @param node 节点
 * @returns 
 */
export function verifyNodeIsDeclarationType(node: any){
  if(!node) return false;
  const arr = dataType;
  if(node.type === undefined) return false;
  return arr.includes(node.type);
}


export function findResponseRef(request){
  try{
    const { responses: { '200': { schema : { '$ref': ref } } } } = request;
    return ref;
  }
  catch(e){
    // console.error(e)
  }
  return null;
}

export function writeMock(fileName: string, data){
  fs.writeFile(`./src/mock/${fileName}`, JSON.stringify(data,null,"\t"), null, () => {

  });
}

export function writeTS(fileName: string, content: string){
  fs.writeFile(`./src/mock/${fileName}`, content, null, () => {

  });
}

export function isObject(val: any){
  return Object.prototype.toString.call(val) === "[object Object]";
}

export function stringCase(str: string){
  if(typeof str !== 'string') return '';
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}