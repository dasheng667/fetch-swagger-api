
export interface Query {
  keyword?: string;
  tag?: string;
  path?: string;
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
  propsString: string;
  resultString: string;
}