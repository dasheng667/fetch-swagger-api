/**
 * 创建文件
 * @param filePath
 * @param callback
 */
export declare const createFileSync: (filePath: string, callback?: (err: any, data: any) => void) => void;
export declare function writeJSON(filePath: string, data: any, callback?: (err: any, data: any) => void): void;
export declare function writeMock(fileName: string, data: any): void;
export declare function writeTS(fileName: string, content: string): void;
