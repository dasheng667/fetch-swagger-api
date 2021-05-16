export interface Props { 
  /** 备注：活动code  */ 
 activityCode: string; 
  /** 备注：群主Code  */ 
 groupCode: string; 
  /** 备注：支付金额  */ 
 orderAmount: string; 
  /** 备注：订单id  */ 
 orderId: string; 
  /** 备注：商品id  */ 
 productIds: string[]; 
  /** 备注：货架id  */ 
 shelfId: string; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: boolean; 
 msg: string; 
 success: boolean; 
} 

