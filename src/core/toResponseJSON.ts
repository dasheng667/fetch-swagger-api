import { verifyNodeIsDeclarationType } from '../utils';

/**
 * 模拟数据转response
 * @param data 
 * @returns 
 */
export default  function toResponseJSON(data: any){
  const result = {};

  function transformDataResult(data: any){
    const {type, format, description, explame } = data;
    if(explame) return explame;
    if(data.type === 'integer' || data.type === 'number'){
      return 1
    }
    if(data.type === 'string'){
      return 'string';
    }
    return null;
  }

  function each(result, data){
    if(Array.isArray(data)){
      data.forEach(value => {
        console.log('数组的暂没有处理~');
      });
    } else if(data && typeof data === 'object'){
      Object.keys(data).forEach(key => {
        const value = data[key];

        if(verifyNodeIsDeclarationType(value)){
          // 是一个正常的数据声明格式
          result[key] = transformDataResult(value);
        } else {
          result[key] = {};
          each(result[key], value);
        }

      });
    }
  }

  each(result, data)

  return result;
}