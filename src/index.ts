import fetch from './fetch';
import Swagger from './core/Swagger';
import testMock from './mock/test1.json';

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
    .query({path: 'stimulate'})
    .toResponseJSON()
    .toTypeScript()
    .toInterfaceTemp()

  return swagger;
}

start();