export interface Props { 
  /** 备注：activityCode  */ 
 activityCode: string; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: Data; 
 msg: string; 
 success: boolean; 
} 

export interface Data { 
  /** 备注：活动code  */ 
 activityCode: string; 
  /** 备注：邀请id  */ 
 inviteId: string; 
} 

