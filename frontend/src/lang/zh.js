export default {
  sidebar: {
    home: '首页',
    stylegen: '样式生成器',
    help: '使用教程/帮助',
    projectAddress: '项目地址',
    giftRecordOfficial: '官方打赏记录',
  },
  home: {
    roomIdEmpty: '房间ID不能为空',
    roomIdInteger: '房间ID必须为正整数',

    openSpecificTutorial: '打开对应教程',

    general: '常规',
    roomId: '直播房间ID',
    showDanmaku: '显示消息弹幕',
    showSuperchat: '显示醒目留言(SC)',
    showNewMember: '显示新舰长',
    showGift: '显示礼物',
    showGiftInfo: '显示礼物信息',
    mergeSameUserDanmaku: '合并同用户连续弹幕',
    mergeSameUserDanmakuInterval: '合并弹幕发送间隔(秒)',
    mergeSimilarDanmaku: '合并相似弹幕',
    mergeGift: '合并礼物',
    
    minGiftPrice: '显示高于价格打赏',
    minTickerPrice: '停驻高于价格打赏',
    minGiftPricePlaceholder: '(元)',
    maxNumber: '最大弹幕数',
    fadeOutNum: '预留淡出弹幕数',
    pinTime: '淡出前停留时长(秒)',
    pinTimePlaceholder: '0持续停留',
    
    special: '特殊功能',
    danmakuAtBottom: '弹幕居下',
    tickerAtButtom: '底部显示SC固定栏',
    randomXOffset: '随机弹幕X轴位置',
    randomXRangeMin: 'X最小值',
    randomXRangeMax: 'X最大值',
    randomYOffset: '随机弹幕Y轴位置',
    randomYRangeMin: 'Y最小值',
    randomYRangeMax: 'Y最大值',
    randomXInitialOffset: '初始X轴偏移',
    randomYInitialOffset: '初始Y轴偏移',
    floatDistanceXMin: '最小X移动距离',
    floatDistanceXMax: '最大X移动距离',
    floatDistanceXPlaceholder: 'X往右正数，往左负数',
    floatDistanceYMin: '最小Y移动距离',
    floatDistanceYMax: '最大Y移动距离',
    floatDistanceYPlaceholder: 'Y往下正数，往上负数',
    floatDistanceThreshold: '移动距离阈值',
    pixelPlaceholder: '(px)',
    floatTime: '停留时长(漂浮时长)',
    timePlaceholder: '(秒)',
    allowTextColorSetting: '用户自定义弹幕颜色',

    showTranslateDanmakuOnly: '只显示翻译弹幕',
    blockTranslateDanmaku: '屏蔽翻译弹幕',
    translationSign: '翻译弹幕首字符',
    onlyOneCharacter: '只能输入一个字符，如【',

    autoRenderOfficialEmoji: '自动添加官方表情',
    isGreedyMatch: '贪婪匹配',
    isSkipSameImage: '不重复显示相同图片',
    imageShowType: '图片展示方式',
    imageShowTypes: [
      {
        id: '0',
        name: '替换关键词(无需符号)'
      },
      {
        id: '1',
        name: '在文字消息后添加'
      }
    ],
    maxImage: '最大换行图片数',
    maxEmoji: '最大同行图片数',

    imageAlignType: '图片排放方式',
    imageAlignTypes: [
      {
        id: 'inline',
        name: '同行(emoji)'
      },
      {
        id: 'block',
        name: '换行(图片)'
      }
    ],
    imageLevel: '图片权限等级',
    imageLevels: [
      {
        id: 0,
        name: '所有人'
      },
      {
        id: 3,
        name: '舰长'
      },
      {
        id: 2,
        name: '提督'
      },
      {
        id: 1,
        name: '总督'
      }
    ],

    block: '屏蔽',
    giftDanmaku: '屏蔽礼物弹幕',
    blockLevel: '屏蔽用户等级低于',
    informalUser: '屏蔽非正式会员',
    unverifiedUser: '屏蔽未绑定手机用户',
    blockKeywords: '屏蔽关键词',
    onePerLine: '一行一个',
    blockUsers: '屏蔽用户',
    blockMedalLevel: '屏蔽当前直播间勋章等级低于',

    advanced: '高级',
    relayMessagesByServer: '通过服务器转发消息',
    autoTranslate: '自动翻译弹幕到日语（需要通过服务器转发消息）',
    giftUsernamePronunciation: '标注打赏用户名读音',
    dontShow: '不显示',
    pinyin: '拼音',
    kana: '日文假名',

    testing: '测试',
    minDanmakuInterval: '最小弹幕发送间隔',
    maxDanmakuInterval: '最大弹幕发送间隔',

    emoticon: '自定义表情',
    emoticonKeyword: '替换关键词',
    emoticonAlign: '图片排列',
    emoticonHeight: '图片高度',
    emoticonUrl: 'URL',
    operation: '操作',
    addEmoticon: '添加表情(同行)',
    addPicture: '添加图片(换行)',

    roomUrl: '房间URL',
    copy: '复制',
    enterBilibili: '进入B站直播间',
    openTutorial: '使用教程',
    
    enterRoom: '进入房间',
    enterTestRoom: '进入测试房间',
    exportConfig: '导出配置',
    importConfig: '导入配置',

    failedToParseConfig: '配置解析失败：'
  },
  stylegen: {
    legacy: '经典',
    lineLike: '仿微信',

    light: '明亮',
    dark: '黑暗',

    global: '全局',
    danmakuAtBottom: '弹幕从底部出现',
    tickerAtButtom: '底部显示SC固定栏',
    
    outlines: '描边',
    showOutlines: '显示描边',
    outlineSize: '描边尺寸',
    outlineColor: '描边颜色',

    avatars: '头像',
    showAvatars: '显示头像',
    avatarSize: '头像尺寸',

    userNames: '用户名',
    showUserNames: '显示用户名',
    randomUserNamesColor: '随机名字颜色',
    font: '字体',
    fontSize: '字体尺寸',
    lineHeight: '行高（0为默认）',
    normalColor: '普通颜色',
    ownerColor: '主播颜色',
    moderatorColor: '房管颜色',
    memberColor: '舰长颜色',
    showBadges: '显示用户勋章',
    showColon: '用户名后显示冒号',
    badgesSize: '勋章大小',

    medal: '粉丝勋章(牌子)',
    showMedal: '显示勋章',
    showOnlyOwnerMedal: '只显示直播主勋章',
    showMedalName: '显示勋章名',
    showMedalLevel: '显示勋章等级',
    emoticonSize: '表情大小',
    emoticonInlineBorderRadius: '同行表情圆角',
    emoticonBlockBorderRadius: '换行表情圆角',

    messages: '消息',
    color: '颜色',
    onNewLine: '在新行显示',
    mergeSameUser: '合并同用户消息为组',
    groupBlockPadding: '消息组内消息的间距',
    

    time: '时间',
    showTime: '显示时间',
    showTimeRight: '在右侧显示时间',

    backgrounds: '背景',
    bgColor: '背景色',
    useBarsInsteadOfBg: '用条代替消息背景',
    messageBgColor: '消息背景色',
    ownerMessageBgColor: '主播消息背景色',
    moderatorMessageBgColor: '房管消息背景色',
    memberMessageBgColor: '舰长消息背景色',

    scAndNewMember: '打赏、舰长',
    firstLineFont: '第一行字体',
    firstLineFontSize: '第一行字体尺寸',
    firstLineLineHeight: '第一行行高（0为默认）',
    firstLineColor: '第一行颜色',
    secondLineFont: '第二行字体',
    secondLineFontSize: '第二行字体尺寸',
    secondLineLineHeight: '第二行行高（0为默认）',
    secondLineColor: '第二行颜色',
    scContentLineFont: 'Super Chat内容字体',
    scContentLineFontSize: 'Super Chat内容字体尺寸',
    scContentLineLineHeight: 'Super Chat内容行高（0为默认）',
    scContentLineColor: 'Super Chat内容颜色',
    showNewMemberBg: '显示新舰长背景',
    showScTicker: '显示Super Chat固定栏',
    showOtherThings: '显示Super Chat固定栏之外的内容',

    animation: '动画',
    animateIn: '进出动画',
    fadeInTime: '淡入时间（毫秒）',
    animateOut: '移除旧消息',
    animateOutWaitTime: '移除前等待时间（秒）',
    fadeOutTime: '淡出时间（毫秒）',
    slide: '滑动',
    reverseSlide: '反向滑动',
    playAnimation: '播放动画',

    result: '结果',
    copy: '复制',
    resetConfig: '恢复默认设置'
  },
  help: {
    help: '帮助',
    p1: '1. 从B站直播间网页复制房间ID',
    p2: '2. 把房间ID输入到首页的房间ID，复制房间URL',
    p3: '3. 使用样式生成器生成样式，复制CSS',
    p4: '4. 在OBS中添加浏览器源',
    p5: '5. URL处输入之前复制的房间URL，自定义CSS处输入之前复制的CSS'
  },
  chat: {
    moderator: '管理员',
    guardLevel1: '总督',
    guardLevel2: '提督',
    guardLevel3: '舰长',
    sendGift: '赠送 {giftName}x{num}',
    membershipTitle: '新会员',
    tickerMembership: '会员'
  }
}
