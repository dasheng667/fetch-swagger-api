import { Query, QueryListItem, InterfaceTempCallback, ResponseCallback, BuildMockOption } from '../../typings/swagger';
/**
 * Swagger 拉取工具
 */
export default class Swagger {
    body: any;
    responseData: any;
    typescriptData: any;
    queryList: QueryListItem;
    step: '' | 'mock' | 'typescript';
    constructor(body: any);
    query(options: Query): this;
    /**
     * 转换成响应数据
     * @param callback
     * @returns
     */
    toResponseJSON(callback?: (data: {
        [path: string]: any;
    }) => void): this;
    /**
     * 转换成ts声明文件
     * @param callback
     * @returns
     */
    toTypeScript(callback?: (data: ResponseCallback) => void): this;
    /**
     * 转换成ts的接口模板
     */
    toInterfaceTemp(callback?: (data: InterfaceTempCallback) => void): this;
    /**
     * 生成模拟模拟的文件
     */
    buildMock(options: BuildMockOption): this;
}
