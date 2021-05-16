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

export interface PrizePkg { 
  /** 备注：参与人数  */ 
 joinNum: number; 
  /** 备注：抽奖提示 示例：优惠券已到账 */ 
 lotteryMsg: string; 
  /** 备注：奖品数量  */ 
 lotteryNum: number; 
  /** 备注：奖品状态 示例：1-未参与 2-已参与 3-已中奖 4-活动已结束 5.未中奖 6:活动未开始 7:级别不够 */ 
 lotteryStatus: number; 
  /** 备注：orderNum 示例：12 */ 
 orderNum: number; 
  /** 备注：奖品说明 示例：请联系我们的客服登记您的联系方式，我们将第一时间联系您发放奖品，感谢 */ 
 prizeDesc: string; 
  /** 备注：prizeId 示例：1 */ 
 prizeId: number; 
  /** 备注：prizeName 示例：800积分 */ 
 prizeName: string; 
  /** 备注：奖品显示图片  */ 
 prizePic: string; 
 prizePkg: PrizePkg; 
  /** 备注：prizeType 示例：优惠券 | 奖品类型(1.现金红包 2.积分3.优惠劵 5:奖品包 6:实物奖品 )  */ 
 prizeType: string; 
  /** 备注：奖品价值 示例：1000 */ 
 prizeValue: string; 
} 

export interface Data { 
  /** 备注：参与人数  */ 
 joinNum: number; 
  /** 备注：抽奖提示 示例：优惠券已到账 */ 
 lotteryMsg: string; 
  /** 备注：奖品数量  */ 
 lotteryNum: number; 
  /** 备注：奖品状态 示例：1-未参与 2-已参与 3-已中奖 4-活动已结束 5.未中奖 6:活动未开始 7:级别不够 */ 
 lotteryStatus: number; 
  /** 备注：orderNum 示例：12 */ 
 orderNum: number; 
  /** 备注：奖品说明 示例：请联系我们的客服登记您的联系方式，我们将第一时间联系您发放奖品，感谢 */ 
 prizeDesc: string; 
  /** 备注：prizeId 示例：1 */ 
 prizeId: number; 
  /** 备注：prizeName 示例：800积分 */ 
 prizeName: string; 
  /** 备注：奖品显示图片  */ 
 prizePic: string; 
 prizePkg: PrizePkg; 
  /** 备注：prizeType 示例：优惠券 | 奖品类型(1.现金红包 2.积分3.优惠劵 5:奖品包 6:实物奖品 )  */ 
 prizeType: string; 
  /** 备注：奖品价值 示例：1000 */ 
 prizeValue: string; 
} 

