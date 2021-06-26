
export interface Query {
  keyword?: string;
  tag?: string;
  path?: string | string[];
}

export interface QueryListItem {
  [key: string]: any
}

export interface ResponseCallback {
  [path: string]: {
    request: any;
    response: any;
  }
}

export interface InterfaceTempCallback {
  [path: string]: {
    propsString: string;
    resultString: string;
    methods: "get" | "post" | "put" | "delete";
  };
}

export interface BuildMockOption {
  /** 生成路径 */
  outputPath: string;

  /**
   * 写入文件的类型
   * dir = 目录
   * hump = 驼峰
   */
  fileType?: '' | 'dir' | 'hump';

  /* 需要过滤的path前缀 */
  filterPathPrefix?: string;
}

export interface BuildApiOption {
  /** 生成路径 */
  outputPath: string;

  fileType?: "js" | "ts";

  /* 需要过滤的path前缀 */
  filterPathPrefix?: string;

  /* import 头部*/
  requestLibPath: string;
}