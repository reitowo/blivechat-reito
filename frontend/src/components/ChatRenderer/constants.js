export const IMAGE_SHOW_TYPE_REPLACE_DIRECT = 0
export const IMAGE_SHOW_TYPE_REPLACE = 1
export const IMAGE_SHOW_TYPE_ADD_AFTER = 2

import * as i18n from '@/i18n'

export const AUTHRO_TYPE_NORMAL = 0
export const AUTHRO_TYPE_MEMBER = 1
export const AUTHRO_TYPE_ADMIN = 2
export const AUTHRO_TYPE_OWNER = 3

export const AUTHOR_TYPE_TO_TEXT = [
  '',
  'member', // 舰队
  'moderator', // 房管
  'owner' // 主播
]

const GUARD_LEVEL_TO_TEXT_KEY = [
  '',
  'chat.guardLevel1',
  'chat.guardLevel2',
  'chat.guardLevel3'
]

export function getShowGuardLevelText(guardLevel) {
  let key = GUARD_LEVEL_TO_TEXT_KEY[guardLevel] || ''
  if (key === '') {
    return ''
  }
  return i18n.i18n.t(key)
}

export const MESSAGE_TYPE_TEXT = 0
export const MESSAGE_TYPE_GIFT = 1
export const MESSAGE_TYPE_MEMBER = 2
export const MESSAGE_TYPE_SUPER_CHAT = 3
export const MESSAGE_TYPE_DEL = 4
export const MESSAGE_TYPE_UPDATE = 5

export const MEDAL_CONFIGS = [
  {
    level: 37,
    colors: {
      bgColor:`linear-gradient(to right, #ff6e1a, #fdb870)`,
      borderColor: `#ff6e1a`,
      textColor:`#fdb870`
    }
  },
  {
    level: 33,
    colors: {
      bgColor:`linear-gradient(to right, #881537, #c15b85)`,
      borderColor: `#881537`,
      textColor:`#c15b85`
    }
  },
  {
    level: 29,
    colors: {
      bgColor:`linear-gradient(to right, #361b69, #7668c3)`,
      borderColor: `#361b69`,
      textColor:`#7668c3`
    }
  },
  {
    level: 25,
    colors: {
      bgColor:`linear-gradient(to right, #10205b, #6382e9)`,
      borderColor: `#10205b`,
      textColor:`#111111`
    }
  },
  {
    level: 21,
    colors: {
      bgColor:`linear-gradient(to right, #1e5950, #4e988d)`,
      borderColor: `#1e5950`,
      textColor:`#111111`
    }
  },
  {
    level: 17,
    colors: {
      bgColor:`#c79d24`,
      borderColor: `#c79d24`,
      textColor:`#c79d24`
    }
  },
  {
    level: 13,
    colors: {
      bgColor:`#be6686`,
      borderColor: `#be6686`,
      textColor:`#be6686`
    }
  },
  {
    level: 9,
    colors: {
      bgColor:`#8d7ca6`,
      borderColor: `#8d7ca6`,
      textColor:`#8d7ca6`
    }
  },
  {
    level: 5,
    colors: {
      bgColor:`#5d7b9e`,
      borderColor: `#5d7b9e`,
      textColor:`#5d7b9e`
    }
  },
  {
    level: 1,
    colors: {
      bgColor:`#5c968e`,
      borderColor: `#5c968e`,
      textColor:`#5c968e`
    }
  }
  
]

export const CONTENT_TYPE_TEXT = 0
export const CONTENT_TYPE_IMAGE = 1
export const CONTENT_TYPE_EMOJI = 2

// 美元 -> 人民币 汇率
// const EXCHANGE_RATE = 7
export const PRICE_CONFIGS = [
  { // RMB 1000红
    price: 1000,
    colors: {
      headerBg: 'rgba(208,0,0,1)',
      contentBg: 'rgba(230,33,23,1)',
      dividerColor: 'rgba(150,33,23,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)'
    },
    pinTime: 15
  },
  { // RMB 200 橙
    price: 100,
    colors: {
      headerBg: 'rgba(230,81,0,1)',
      contentBg: 'rgba(245,124,0,1)',
      dividerColor: 'rgba(180,100,0,1)',
      header: 'rgba(255,255,255,0.87451)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,0.87451)'
    },
    pinTime: 8
  },
  { // RMB 50 黄
    price: 50,
    colors: {
      headerBg: 'rgba(255,179,0,1)',
      contentBg: 'rgba(255,202,40,1)',
      dividerColor: 'rgba(200,140,10,1)',
      header: 'rgba(0,0,0,0.87451)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,0.87451)'
    },
    pinTime: 5
  },
  { // RMB 30 青绿色
    price: 30,
    colors: {
      headerBg: 'rgba(0,191,165,1)',
      contentBg: 'rgba(29,233,182,1)',
      dividerColor: 'rgba(0,150,120,1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)'
    },
    pinTime: 3
  },
  { // RMB 1 蓝色
    price: 1,
    colors: {
      headerBg: 'rgba(21,101,192,1)',
      contentBg: 'rgba(30,136,229,1)',
      dividerColor: 'rgba(10,70,160,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)'
    },
    pinTime: 0.4
  },
  { // RMB 0.1 青色
    price: 0.1,
    colors: {
      headerBg: 'rgba(119, 255, 246, 1)',
      contentBg: 'rgba(69, 230, 227, 1)',
      dividerColor: 'rgba(10,70,160,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)'
    },
    pinTime: 0.2
  },
  { // RMB 0 淡蓝
    price: 0,
    colors: {
      headerBg: 'rgba(153, 236, 255, 1)',
      contentBg: 'rgba(153, 236, 255, 1)',
      dividerColor: 'rgba(100,170,233,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)'
    },
    pinTime: 0.08
  }
]

export function getMedalConfig (level) {
  for (const config of MEDAL_CONFIGS) {
    if (level >= config.level) {
      return config
    }
  }
  return PRICE_CONFIGS[PRICE_CONFIGS.length - 1]
}

export function getPriceConfig(price) {
  for (const config of PRICE_CONFIGS) {
    if (price >= config.price) {
      return config
    }
  }
  return PRICE_CONFIGS[PRICE_CONFIGS.length - 1]
}

export function getShowContent(message) {
  if (message.translation) {
    return `${message.content}（${message.translation}）`
  }
  return message.content
}

export function getShowRichContent(message) {
  let richContent = [...message.richContent]
  if (message.translation) {
    richContent.push({
      type: CONTENT_TYPE_TEXT,
      text: `（${message.translation}）`
    })
  }
  return richContent
}

export function getGiftShowContent (message, showGiftInfo) {
  if (!showGiftInfo) {
    return ''
  }
  return i18n.i18n.t('chat.sendGift', { giftName: message.giftName, num: message.num })
}

export function getShowAuthorName(message) {
  if (message.authorNamePronunciation && message.authorNamePronunciation !== message.authorName) {
    return `${message.authorName}(${message.authorNamePronunciation})`
  }
  return message.authorName
}
