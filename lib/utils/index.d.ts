import { Query } from '../types/swagger';
export declare const validataQuery: (requestData: any, requestPath: string, options: Query) => boolean;
/**
 * 校验节点是不是声明类型，声明数据必有type
 * @param node 节点
 * @returns
 */
export declare function verifyNodeIsDeclarationType(node: any): boolean;
export declare function findResponseRef(request: any): any;
export declare function writeMock(fileName: string, data: any): void;
export declare function writeTS(fileName: string, content: string): void;
export declare function isObject(val: any): boolean;
export declare function stringCase(str: string): string;
