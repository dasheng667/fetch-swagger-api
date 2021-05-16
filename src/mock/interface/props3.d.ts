export interface Props { 
  /** 备注：活动code  */ 
 activityCode: string; 
  /** 备注：邀请id  */ 
 inviteId: string; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: boolean; 
 msg: string; 
 success: boolean; 
} 

