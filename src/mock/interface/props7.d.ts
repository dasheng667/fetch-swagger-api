export interface Props { 
  /** 备注：活动code  */ 
 activityCode: string; 
  /** 备注：群主code  */ 
 groupCode: string; 
 pageNo: number; 
 pageSize: number; 
  /** 备注：货架id  */ 
 shelfId: string; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: Data; 
 msg: string; 
 success: boolean; 
} 

export interface DataList { 
  /** 备注：好友头像链接 示例：www.xxx.com/xxx */ 
 headImgUrl: string; 
  /** 备注：好友昵称 示例：张三 */ 
 nickName: string; 
  /** 备注：购买金额 示例：2.35 */ 
 orderAmount: string; 
  /** 备注：购买时间状态 示例：刚刚 */ 
 timeStatus: string; 
} 

export interface Data { 
 dataList: DataList; 
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
 pageList: integer[]; 
 pageNo: number; 
 pageSize: number; 
 prevPage: number; 
 startIndex: number; 
 totalCount: number; 
 totalPages: number; 
} 

