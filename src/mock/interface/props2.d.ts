///boms/api/orderDelivery/listDeliveryExpressOrder 
export interface Props { 
 deliveryOrderQueryVO: DeliveryOrderQueryVO; 
} 

export interface DeliveryOrderQueryVO { 
  /** 备注：地址 示例：深南大道1号 */ 
 address: string; 
  /** 备注：省市区 示例：广东省深圳市南山区 */ 
 areaAddress: string; 
  /** 备注：承运商 示例：SS速运 */ 
 expressGroupName: string; 
  /** 备注：承运商单号 示例：12312314 */ 
 expressNumber: string; 
  /** 备注：收货人姓名 示例：张三 */ 
 linkName: string; 
  /** 备注：手机号码 示例：18688775320 */ 
 mobile: string; 
  /** 备注：DDID 示例：1231324234 */ 
 orderId: string; 
 pageNo: number; 
 pageSize: number; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: Data; 
 msg: string; 
 success: boolean; 
} 

export interface DataList { 
  /** 备注：地址 示例：深南大道1号 */ 
 address: string; 
  /** 备注：省市区 示例：广东省深圳市南山区 */ 
 areaAddress: string; 
  /** 备注：发货数量 示例：11 */ 
 deliveryNum: string; 
  /** 备注：数据行ID 示例：12312312 */ 
 deliveryOrderId: string; 
  /** 备注：承运商名称 示例：SS速运 */ 
 expressGroupName: string; 
  /** 备注：承运商单号 示例：200001 */ 
 expressNumber: string; 
  /** 备注：收货人姓名 示例：张三 */ 
 linkName: string; 
  /** 备注：手机号码 示例：18688775320 */ 
 mobile: string; 
  /** 备注：商品名称 示例：大闸蟹 */ 
 productName: string; 
  /** 备注：包装规格 示例：1斤/4个 */ 
 productSpecDesc: string; 
  /** 备注：规格商品编码 示例：123123123 */ 
 productSpecId: string; 
  /** 备注：供应商名称 示例：苏州水产品供应公司 */ 
 supplyGroupName: string; 
} 

export interface Data { 
 dataList: DataList[]; 
 endIndex: number; 
 first: number; 
 hasNext: boolean; 
 hasPrev: boolean; 
 needData: boolean; 
 needTotalCount: boolean; 
 nextPage: number; 
 order: string; 
 orderBy: string; 
 orderBySetted: boolean; 
 pageList: number[]; 
 pageNo: number; 
 pageSize: number; 
 prevPage: number; 
 startIndex: number; 
 totalCount: number; 
 totalPages: number; 
} 

