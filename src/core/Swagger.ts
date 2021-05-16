import { Query, QueryListItem } from '../types/swagger';
import eachDefinitions from './eachDefinitions';
import parameters from './parameters';
import toResponseJSON from './toResponseJSON';
import toTypeScript from './toTypeScript';
import toInterfaceTemp from './toInterfaceTemp';
import { writeMock, writeTS, validataQuery, findResponseRef } from '../utils';

/**
 * Swagger 拉取工具
 */
export default class Swagger {
  body: any;
  responseData: any;
  typescriptData: any;
  queryList: QueryListItem;

  constructor(body){
    if(body == null || typeof body !== 'object'){
      throw new Error(`Swagger 参数异常: ${body}`);
    }
    this.body = body;
    this.queryList = {};
    this.responseData = null;
    this.typescriptData = null;
  }

  query(options: Query){
    const { paths, definitions } = this.body;
    const queryList = {};

    Object.keys(paths).forEach(path=>{
      const apiData = paths[path];
      const { post, get, put } = apiData;
      const request = post || get || put;

      if(!validataQuery(request, path, options)) return;

      const ref = findResponseRef(request);
      const parametersData = parameters(definitions, request);
      if(!ref) return;

      const res = eachDefinitions({definitions, ref});
      queryList[path] = {
        request: parametersData,
        response: res
      };
    });
    this.queryList = queryList;
    writeMock('queryList.json', queryList);
    return this;
  }

  /**
   * 转换成响应数据
   * @param callback 
   * @returns 
   */
  toResponseJSON(callback?: Function){
    const keys = Object.keys(this.queryList);
    if(keys.length === 0) return this;
    const json = {};
    
    keys.forEach(key=>{
      const { response } = this.queryList[key];
      json[key] = toResponseJSON(response);
    });

    this.responseData = json;
    writeMock('response.json', json);
    if(typeof callback === 'function'){
      callback(json);
    }
    return this;
  }

  /**
   * 转换成ts声明文件
   * @param callback 
   * @returns 
   */
  toTypeScript(callback?: Function){
    const keys = Object.keys(this.queryList);
    if(keys.length === 0) return this;

    const json = {};
    keys.forEach(key=>{
      const { request, response } = this.queryList[key];
      json[key] = {
        request: toTypeScript(request, 'props'),
        response: toTypeScript(response, 'result')
      };
    });
    this.typescriptData = json;
    writeMock('typescript.json', json);
    if(typeof callback === 'function'){
      callback(json);
    }
    return this;
  }

  /**
   * 转换成ts的接口模板
   */
  toInterfaceTemp(){
    const keys = Object.keys(this.typescriptData);
    if(keys.length === 0) return this;
    
    let a = 0;
    keys.forEach(path=>{
      const {request, response} = this.typescriptData[path];
      let propsString = toInterfaceTemp(request);
      propsString += toInterfaceTemp(response);

      a++;
      writeTS(`interface/props${a}.d.ts`, propsString);
    });

    return this;
  }
}