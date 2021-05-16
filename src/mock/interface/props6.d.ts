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

export interface Props { 
  /** 备注：groupCode  */ 
 groupCode?: string; 
  /** 备注：activityCode  */ 
 activityCode: string; 
 activitySort: ActivitySort; 
} 

export interface Sort2 { 
  /** 备注：背景图片 示例：1111 */ 
 activityStylePic: string; 
  /** 备注：下单序号 示例：517 */ 
 orderSerial: number; 
  /** 备注：奖品id 示例：1 */ 
 prizeId: number; 
  /** 备注：奖品名称 示例：E币50 */ 
 prizeName: string; 
  /** 备注：奖品图片 示例：11111 */ 
 prizePic: string; 
  /** 备注：中奖记录Id 示例：1111 */ 
 prizeRecordId: number; 
} 

export interface ActivitySort { 
  /** 备注：商品分类排序  */ 
 categorySortList: string[]; 
  /** 备注：商城首页弹窗排序  */ 
 shopIndexSortList: string[]; 
 sort2: Sort2; 
} 

export interface Props { 
  /** 备注：活动code  */ 
 activityCode: string; 
  /** 备注：邀请id  */ 
 inviteId: string; 
} 

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

export interface Props { 
  /** 备注：activityCode  */ 
 activityCode: string; 
} 

export interface Props { 
  /** 备注：活动code  */ 
 activityCode: string; 
  /** 备注：邀请id  */ 
 inviteId: string; 
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

export interface LotteryPrize { 
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

export interface Colors { 
  /** 备注：样式类型（1: 色值 2: 图片）  */ 
 styleType: number; 
  /** 备注：样式值或者图片  */ 
 styleValue: string; 
  /** 备注：用途类型（色值和图片的类型含义不一样）  */ 
 usageType: number; 
} 

export interface Pics { 
  /** 备注：样式类型（1: 色值 2: 图片）  */ 
 styleType: number; 
  /** 备注：样式值或者图片  */ 
 styleValue: string; 
  /** 备注：用途类型（色值和图片的类型含义不一样）  */ 
 usageType: number; 
} 

export interface LotteryTemplate { 
 colors: Colors; 
 pics: Pics; 
  /** 备注：抽奖模板名称 示例：九宫格抽奖 */ 
 templateName: string; 
  /** 备注：抽奖模板类型（1: 幸运转盘 2: 九宫格） 示例：1 */ 
 templateType: number; 
} 

export interface Lottery { 
 lotteryPrize: LotteryPrize; 
 lotteryTemplate: LotteryTemplate; 
} 

export interface StimulateActivityShare { 
  /** 备注：分享-可获取抽奖次数  */ 
 accessDrawNum: number; 
  /** 备注：邀请按钮  */ 
 inviteButton: string; 
  /** 备注：分享-邀请人数  */ 
 inviteNum: number; 
  /** 备注：分享-最高获取抽奖次数  */ 
 maxAccessDrawNum: number; 
  /** 备注：是否打开分享次数功能(1-开启 2-不开启)  */ 
 openShare: number; 
  /** 备注：是否打开抽奖次数规则说明(1-开启 2-不开启)  */ 
 openedDrawRule: number; 
  /** 备注：分享-已获取抽奖次数  */ 
 yetAccessDrawNum: number; 
} 

export interface Data { 
  /** 备注：活动详情  */ 
 activityDesc: string; 
  /** 备注：达成一次任务，可抽奖品次数  */ 
 activityDrawNum: number; 
  /** 备注：活动名称 示例：群接龙大赏 */ 
 activityName: string; 
  /** 备注：活动状态(1:未开始 2：活动中 3：已结束)  */ 
 activityStatus: number; 
  /** 备注：活动标题  */ 
 activityTitle: string; 
  /** 备注：公众号名称  */ 
 appName: string; 
  /** 备注：公众号二维码图片  */ 
 appPic: string; 
  /** 备注：活动说明pic  */ 
 descPic: string; 
  /** 备注：活动完成文案  */ 
 fullRemark: string; 
  /** 备注：活动主页pic  */ 
 homePic: string; 
  /** 备注：跑马灯数据  */ 
 horseLamp: string[]; 
  /** 备注：活动初始文案  */ 
 initRemark: string; 
  /** 备注：是否参与(1:已参与 2：未参与 3 已抽奖)  */ 
 isJoin: number; 
  /** 备注：是否关注(1:已关注 2:未关注)  */ 
 isSubscribe: number; 
 lottery: Lottery; 
  /** 备注：抽奖按钮pic  */ 
 lotteryButtonPic: string; 
  /** 备注：开奖日期  */ 
 lotteryDate: string; 
  /** 备注：抽奖次数  */ 
 lotteryNum: number; 
  /** 备注：开奖类型(1:开奖日期 2：达成任务就开奖) 示例：1 */ 
 lotteryType: number; 
  /** 备注：抽奖维度(1:订单维度 2：用户维度 3:单次维度 4.循环维度)  */ 
 lotteryUseType: number; 
  /** 备注：丰e社群福利官  */ 
 managerName: string; 
  /** 备注：丰e社群福利官头像  */ 
 managerPic: string; 
  /** 备注：当前日期  */ 
 nowDate: string; 
  /** 备注：下单金额， 任务类型为下单金额及次数使用 示例：10 */ 
 orderAmount: string; 
  /** 备注：下单次数， 任务类型为下单金额及次数使用  */ 
 orderNum: string; 
  /** 备注：商品名称  */ 
 productName: string; 
  /** 备注：已完成多少 示例：5005.32 */ 
 shortAim: string; 
  /** 备注：活动中文案  */ 
 startRemark: string; 
  /** 备注：任务开始时间  */ 
 startTime: string; 
  /** 备注：任务状态(1: 达成目标 2: 未达成目标)  */ 
 status: number; 
 stimulateActivityShare: StimulateActivityShare; 
  /** 备注：剩余抽奖字体颜色设置  */ 
 surplusDrawColor: string; 
  /** 备注：剩余抽奖字体字号设置  */ 
 surplusDrawFont: string; 
  /** 备注：剩余抽奖文本展示  */ 
 surplusDrawTxt: string; 
  /** 备注：任务目标（任务类型1、购买人数和GMV的目标值） 示例：10000 */ 
 taskAim: string; 
  /** 备注：任务周期(1: 每日 2 ：每周 3：活动时间 4：每周X)  */ 
 taskCycle: number; 
  /** 备注：任务类型(1:购买人数| 2：GMV 4：下单金额及次数 5:购物指定商品及次数 6:关注公众号)  */ 
 taskType: number; 
  /** 备注：活动标题pic  */ 
 titlePic: string; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: boolean; 
 msg: string; 
 success: boolean; 
} 

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: boolean; 
 msg: string; 
 success: boolean; 
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

export interface Result { 
 code: string; 
 currentTimeMillis: number; 
 data: Data; 
 msg: string; 
 success: boolean; 
} 

export interface Data { 
  /** 备注：最大奖品  */ 
 bigPrize: string; 
  /** 备注：微信昵称  */ 
 nickName: string; 
} 

