import path from 'path';
import fetch from './fetch';
import Swagger from './core/Swagger';
import testMock from './mock/boms.json';

async function start(url?: string){
  let requestBody: any = null;
  try{
    // requestBody = await fetch(url);
  } catch(e){
    console.log('请求数据异常');
    throw new Error(e);
  }

  const swagger = new Swagger(testMock);
  swagger
    .query({path: ['listDeliveryExpressOrder']})
    .toResponseJSON()
    .buildMock({distPath: path.resolve('./dist/mock'), fileType: 'hump', filterPathPrefix: 'api' })
    .toTypeScript()
    .toInterfaceTemp()
    .buildApi({distPath: path.resolve('./dist/api'), fileType: 'js', apiContent: 'export default axios.{methods}({url})', filterPathPrefix: 'api' })

  return swagger;
}

start();