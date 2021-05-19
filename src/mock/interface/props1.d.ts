///boms/api/billReceipt/add 
export interface Props { 
 queryVO: QueryVO; 
} 

export interface AddBillReceiptItems { 
  /** 备注：金额 示例：2020.1 */ 
 amount: number; 
  /** 备注：收费模式(字典：boms_receiptsChargingMode) 示例：1 */ 
 chargingMode: number; 
  /** 备注：费用项目ID(字典：boms_receiptsCostProject) 示例：101 */ 
 costProject: number; 
  /** 备注：是否抵扣（1是，2否）(字典：boms_isDeduct) 示例：1 */ 
 isDeduct: number; 
  /** 备注：备注 示例：备注 */ 
 remark: string; 
  /** 备注：服务费率（0.1025代表10.25%） 示例：0.1025 */ 
 serviceRate: number; 
} 

export interface QueryVO { 
 addBillReceiptItems: AddBillReceiptItems[]; 
  /** 备注：账单名称字典ID 示例：202 */ 
 billDictId: number; 
  /** 备注：费用期间(例如2020-10) 示例：2020-10 */ 
 costDuring: string; 
  /** 备注：单据日期 示例：2018-10-01 */ 
 receiptsDate: string; 
  /** 备注：备注 示例：备注 */ 
 remark: string; 
  /** 备注：供应商ID 示例：1245 */ 
 supplyerId: string; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: boolean; 
 msg: string; 
 success: boolean; 
} 

