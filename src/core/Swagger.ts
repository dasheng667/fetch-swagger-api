import path from 'path';
import { Query, QueryListItem, InterfaceTempCallback, ResponseCallback, BuildMockOption, BuildApiOption } from '../../typings/swagger';
import eachDefinitions from './eachDefinitions';
import parameters from './parameters';
import toResponseJSON from './toResponseJSON';
import toTypeScript from './toTypeScript';
import toInterfaceTemp from './toInterfaceTemp';
import { validataQuery, findResponseRef, transformPath, log } from '../utils';
import { writeMock, writeTS, writeJSON } from '../utils/fs';

/**
 * Swagger 拉取工具
 */
export default class Swagger {
  body: any;
  responseData: any;
  typescriptData: any;
  queryList: QueryListItem;
  step: '' | 'mock' | 'typescript';

  constructor(body){
    if(body == null || typeof body !== 'object'){
      throw new Error(`Swagger 参数异常: ${body}`);
    }
    this.body = body;
    this.queryList = {};
    this.responseData = {};
    this.typescriptData = {};
    this.step = '';
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
      console.log('query: ', path);
      
      queryList[path] = {
        request: parametersData,
        response: res,
        methods: Object.keys(apiData)[0]
      };
    });
    this.queryList = queryList;
    // writeMock('queryList.json', queryList);
    return this;
  }

  /**
   * 转换成响应数据
   * @param callback 
   * @returns 
   */
  toResponseJSON(callback?: (data: {[path: string]: any}) => void){
    this.step = 'mock';

    const keys = Object.keys(this.queryList);
    if(keys.length === 0) return this;
    const json = {};

    keys.forEach(path=>{
      const { response } = this.queryList[path];
      json[path] = toResponseJSON(response);
    });

    this.responseData = json;
    // writeMock('response.json', json);
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
  toTypeScript(callback?: (data: ResponseCallback) => void){
    this.step = 'typescript';

    const keys = Object.keys(this.queryList);
    if(keys.length === 0) return this;

    const json = {};
    keys.forEach(path=>{
      const { request, response, methods } = this.queryList[path];
      json[path] = {
        request: toTypeScript(request, 'props'),
        response: toTypeScript(response, 'result'),
        methods
      };
    });
    this.typescriptData = json;
    // writeMock('typescript.json', json);
    if(typeof callback === 'function'){
      callback(json);
    }
    return this;
  }

  /**
   * 转换成ts的接口模板
   */
  toInterfaceTemp(callback?: (data: InterfaceTempCallback) => void){
    const keys = Object.keys(this.typescriptData);
    if(keys.length === 0) return this;

    let propsString = '';
    let resultString = '';

    keys.forEach(path=>{
      const {request, response, methods} = this.typescriptData[path];
      propsString += toInterfaceTemp(request);
      resultString += toInterfaceTemp(response);

       if(typeof callback === 'function'){
        callback({ [path]: {
          propsString,
          resultString,
          methods
        }});
      }
      propsString = '';
      resultString = '';
    });
    return this;
  }

  /**
   * 生成模拟模拟的文件
   */
  buildMock(options: BuildMockOption){
    const { distPath, fileType = 'dir', filterPathPrefix } = options || {};

    if(!distPath || typeof distPath !== 'string' ){
      throw new Error(`distPath: 格式不合法 ${distPath}`);
    }

    const data = this.responseData;
    Object.keys(data).forEach(key => {
      const file = key;
      // 写入目录
      if(fileType === 'dir'){
        const fileName = path.join(distPath, `${file}.json`);
        writeJSON(fileName, data[file]);
      } else if(fileType === 'hump') {
        const fileData = transformPath(key, filterPathPrefix);
        const fileName = path.join(distPath, `${fileData.key}.json`);
        writeJSON(fileName, data[file]);
      }
    })

    return this;
  }


  /**
   * 
   * @returns 生成api文件
   */
  buildApi(options: BuildApiOption){
    const { distPath, apiContent, fileType, filterPathPrefix } = options || {};

    if(!distPath || typeof distPath !== 'string' ){
      throw new Error(`distPath: 格式不合法 ${distPath}`);
    }

    const keys = Object.keys(this.typescriptData);
    if(keys.length === 0) return this;

    this.toInterfaceTemp((data) => {
      Object.keys(data).forEach(path=>{
        const {propsString, resultString, methods} = data[path];
        if(distPath){
          const pathData = transformPath(path, filterPathPrefix);
          const content = apiContent.replace(/{url}/, `'${pathData.path}'`).replace(/{methods}/, methods);

          if(fileType === 'js'){
            writeTS(`${distPath}/${pathData.path}.js`, content);
          } else {
            writeTS(`${distPath}/${pathData.path}.d.ts`, propsString + resultString + `\n ${content}`);
          }
        }
      })
    });

    return this;
  }
}