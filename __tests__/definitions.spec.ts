import eachDefinitions from "../src/core/eachDefinitions";
import definitionsData from "./mock/definitions1";

describe("测试 eachDefinitions", () => {
  it("definitions.ref.string", () => {
    const data = eachDefinitions({
      definitions: definitionsData,
      ref: "String",
    });
    expect(data).toEqual({
      type: "string",
    });
  });

  it("definitions.null", () => {
    const data = eachDefinitions({
      definitions: definitionsData,
      ref: "AAA",
    });
    expect(data).toEqual(null);
  });

  it("definitions.NoObject", () => {
    const data = eachDefinitions({
      definitions: definitionsData,
      ref: "NoObject",
    });
    expect(data).toEqual({});
  });

  it("definitions.1", () => {
    const data = eachDefinitions({
      definitions: definitionsData,
      ref: "#/definitions/AbnormalSignRecordQueryVO",
    });
    expect(data).toEqual({
      addTimeEnd: {
        description: "创建结束日期",
        format: "date-time",
        type: "string",
      },
      addTimeStart: {
        description: "创建开始日期",
        format: "date-time",
        type: "string",
      },
      billId: {
        description: "单据号",
        example: 1,
        format: "int64",
        type: "integer",
      },
      productCode2: {
        description: "商品编码",
        example: "FE14156",
        type: "string",
      },
      responsibleId: { description: "责任方id", example: "1", type: "string" },
      responsibleType: {
        description:
          "责任方类型 字典：responsiblePartyType(1-无人货架、2-自贩机、3-智能柜、4-第三方、5-前置仓)",
        example: 1,
        format: "int32",
        type: "integer",
      },
      sourceBillId: {
        description: "来源单据号",
        example: 1,
        format: "int64",
        type: "integer",
      },
    });
  });

  it("definitions.array", () => {
    const data = eachDefinitions({
      definitions: definitionsData,
      ref: "#/definitions/Array1",
    });
    expect(data).toEqual({
      dataList: {
        addTime: {
          description: "添加时间",
          format: "date-time",
          type: "string",
        },
        addUserId: {
          description: "添加人Id",
          example: 1,
          format: "int64",
          type: "integer",
        },
        isArray: true,
      },
    });
  });

  it("definitions.schema.array", () => {
    const data = eachDefinitions({
      definitions: definitionsData,
      ref: "#/definitions/Array2",
    });
    expect(data).toEqual({
      dataList: {
        addTime: {
          description: "添加时间",
          format: "date-time",
          type: "string",
        },
        addUserId: {
          description: "添加人Id",
          example: 1,
          format: "int64",
          type: "integer",
        },
        isArray: true,
      },
    });
  });

  it("definitions.AbnormalSignRecordVO", () => {
    const data = eachDefinitions({
      definitions: definitionsData,
      ref: "#/definitions/ModelResult«DataPage«AbnormalSignRecordVO»»",
    });
    expect(data).toEqual({
      code: {
        type: "string",
      },
      currentTimeMillis: {
        format: "int64",
        type: "integer",
      },
      data: {
        dataList: {
          abnormalNum: {
            description: "异常数量",
            example: 1,
            format: "int32",
            type: "integer",
          },
          isArray: true,
        },
        order: {
          type: "string",
        },
        pageList: {
          items: {
            format: "int32",
            type: "integer",
          },
          type: "array",
        },
        pageNo: {
          format: "int32",
          type: "integer",
        },
      },
      msg: {
        type: "string",
      },
      success: {
        type: "boolean",
      },
    });
  });
});
