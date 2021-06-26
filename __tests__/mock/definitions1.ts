const definitions = {
  AbnormalSignRecordQueryVO: {
    type: "object",
    properties: {
      addTimeEnd: {
        type: "string",
        format: "date-time",
        description: "创建结束日期",
      },
      addTimeStart: {
        type: "string",
        format: "date-time",
        description: "创建开始日期",
      },
      billId: {
        type: "integer",
        format: "int64",
        example: 1,
        description: "单据号",
      },
      productCode2: {
        type: "string",
        example: "FE14156",
        description: "商品编码",
      },
      responsibleId: {
        type: "string",
        example: "1",
        description: "责任方id",
      },
      sourceBillId: {
        type: "integer",
        format: "int64",
        example: 1,
        description: "来源单据号",
      },
    },
    description: "异常签收记录VO",
  },

  AbnormalSignRecordVO: {
    type: "object",
    properties: {
      abnormalNum: {
        type: "integer",
        format: "int32",
        example: 1,
        description: "异常数量",
      },
    },
  },

  Array1: {
    type: "object",
    properties: {
      dataList: {
        type: "array",
        items: { $ref: "#/definitions/ArrayVO" },
      },
    },
    description: "Array1",
  },
  Array2: {
    type: "object",
    properties: {
      dataList: {
        type: "array",
        schema: { $ref: "#/definitions/ArrayVO" },
      },
    },
    description: "Array1",
  },
  NoObject: {
    type: "string",
  },
  ArrayVO: {
    type: "object",
    properties: {
      addTime: {
        type: "string",
        format: "date-time",
        description: "添加时间",
      },
      addUserId: {
        type: "integer",
        format: "int64",
        example: 1,
        description: "添加人Id",
      },
    },
    description: "Array1",
  },
  "/fillorder/abnormalSign/pageAbnormalSignRecord": {
    post: {
      tags: ["V4.2.0_Luzw", "异常签收记录"],
      summary: "分页查询异常签收记录",
      description: "返回结果",
      operationId: "pageAbnormalSignRecordUsingPOST",
      consumes: ["application/json"],
      produces: ["*/*"],
      parameters: [
        {
          name: "FFS-Head",
          in: "header",
          description: "用户登登ttoo",
          required: false,
          type: "string",
        },
        {
          name: "FFS-UserId",
          in: "header",
          description: "用户登登UserId",
          required: false,
          type: "string",
        },
        {
          in: "body",
          name: "queryVO",
          description: "queryVO",
          required: true,
          schema: { $ref: "#/definitions/AbnormalSignRecordQueryVO" },
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/ModelResult«DataPage«AbnormalSignRecordVO»»",
          },
        },
        201: { description: "Created" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden" },
        404: { description: "Not Found" },
      },
    },
  },

  "ModelResult«DataPage«AbnormalSignRecordVO»»": {
    type: "object",
    properties: {
      code: { type: "string" },
      currentTimeMillis: { type: "integer", format: "int64" },
      data: { $ref: "#/definitions/DataPage«AbnormalSignRecordVO»" },
      msg: { type: "string" },
      success: { type: "boolean" },
    },
  },

  "DataPage«AbnormalSignRecordVO»": {
    type: "object",
    properties: {
      dataList: {
        type: "array",
        items: { $ref: "#/definitions/AbnormalSignRecordVO" },
      },
      order: { type: "string" },
      pageList: {
        type: "array",
        items: { type: "integer", format: "int32" },
      },
      pageNo: { type: "integer", format: "int32" },
    },
  },
};

export default definitions;
