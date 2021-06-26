import path from "path";
import Swagger from '../src/index';
import { writeFile } from "./utils"; 
import OMS from "./data/oms.json";
import BOMS from './data/boms.json'

const swagger = new Swagger(BOMS);

swagger
  .query({ path: ["listDeliveryExpressOrder"] }, (queryList) => {
    writeFile(`./example/build/queryList.json`, queryList);
  })
  .toResponseJSON((json) => {
    writeFile(`./example/build/response.json`, json);
  })
  .buildMockJSON({
    outputPath: path.resolve("./example/build/mock"),
    fileType: "hump",
    filterPathPrefix: "api",
  })
  .toTypeScript((json) => {
    writeFile(`./example/build/typescript.json`, json);
  })
  .toInterfaceTemp()
  .buildApi({
    outputPath: path.resolve("./example/build/api"),
    fileType: "ts",
    requestLibPath: "import request from '@/api/request'; ",
    filterPathPrefix: "api",
  });
