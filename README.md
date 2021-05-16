# fetch-swagger-api
swagger接口拉取工具，可以生产json模拟数据和typescript声明文件。

## 安装
```
yarn add fetch-swagger-api
```

## 示例
```js
const Swagger = required('fetch-swagger-api');

Swagger()
  .query({path: 'activity'})
  .toResponseJSON()
  .toTypeScript()
  .toInterfaceTemp()
```

## 方法

### query
模糊匹配api，参数：
+ path 【api路径】
+ tag 【版本号】
+ keyword 【api接口描述】


### toResponseJSON
根据查询结果转换成模拟数据。
```js
.toResponseJSON(callbcak?: function);
```
回调函数的参数类型：
+ [path: string] any
```js
toResponseJSON((data)=>{
  /**
   * { 
     '/api/activity': {
        code: '200',
        data: {
          ...
        },
        success: true
   *  }
   * }
   * /
})
```


### toTypeScript
根据查询结果转换成`typescript`的数据类型结构。
```js
.toTypeScript(callbcak?: function);
```
回调函数的参数类型：
+ [path: string] {request: any; response: any;}
```js
toResponseJSON((data)=>{
  /**
   * { 
     '/api/activity': {
        request: {
          props: {}
        };
        response: {
          result: {}
        };
   *  }
   * }
   * /
})
```


### toInterfaceTemp
将上一步的数据结构，转换成`typescript`字符串，这里的字符串支持`.d.ts`文件。
```js
.toInterfaceTemp(callbcak?: function);
```
回调函数的参数类型：
+ propsString: string;
+ resultString: string;
```js
toInterfaceTemp((data)=>{
  /**
   * { 
      propsString: string;
      resultString: string;
   * }
   * /
})
```