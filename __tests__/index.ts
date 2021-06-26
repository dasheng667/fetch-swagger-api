import Swagger from "../index";

const swagger = new Swagger();

swagger.fetchApi('https:/xxx').then(res=>{

})

// swagger(testMock)
//   .query({ path: ["listDeliveryExpressOrder"] })
//   .toResponseJSON()
//   .buildMock({
//     distPath: path.resolve("./dist/mock"),
//     fileType: "hump",
//     filterPathPrefix: "api",
//   })
//   .toTypeScript()
//   .toInterfaceTemp()
//   .buildApi({
//     distPath: path.resolve("./dist/api"),
//     fileType: "js",
//     apiContent: "export default axios.{methods}({url})",
//     filterPathPrefix: "api",
//   });
