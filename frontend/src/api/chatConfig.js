import _ from 'lodash'

import { mergeConfig } from '@/utils'

export const DEFAULT_CONFIG = {
  minGiftPrice: 0, // ￥0.0
  minTickerPrice: 0.1, // ￥0.1
  showDanmaku: true,
  showTranslateDanmakuOnly: false,
  translationSign:'【',
  showSuperchat: true,
  showNewMember: true,
  showGift: true,
  showGiftInfo: true,
  mergeSimilarDanmaku: false,
  mergeGift: false,
  danmakuAtBottom: false,
  tickerAtButtom: false,
  maxNumber: 30,
  fadeOutNum: 3,
  pinTime: 0,


  imageShowType: 0,
  maxEmoji: 5,
  maxImage: 1,

  blockGiftDanmaku: true,
  blockLevel: 0,
  blockNewbie: false,
  blockNotMobileVerified: false,
  blockKeywords: '',
  blockUsers: '',
  blockMedalLevel: 0,

  minDanmakuInterval: 400,
  maxDanmakuInterval: 1200,

  relayMessagesByServer: false,
  autoTranslate: false,
  giftUsernamePronunciation: '',

  emoticons: [] // [{ keyword: '', url: '' }, ...]
}

export function deepCloneDefaultConfig() {
  return _.cloneDeep(DEFAULT_CONFIG)
}

export function setLocalConfig(config) {
  config = mergeConfig(config, DEFAULT_CONFIG)
  window.localStorage.config = JSON.stringify(config)
}

export function getLocalConfig() {
  try {
    let config = JSON.parse(window.localStorage.config)
    config = mergeConfig(config, deepCloneDefaultConfig())
    sanitizeConfig(config)
    return config
  } catch {
    return deepCloneDefaultConfig()
  }
}

// TODO: 前端上传表情包设置
export function sanitizeConfig(config) {
  let newEmoticons = []
  if (config.emoticons instanceof Array) {
    for (let emoticon of config.emoticons) {
      try {
        let newEmoticon = {
          keyword: emoticon.keyword,
          align: emoticon.align,
          height: emoticon.height,
          url: emoticon.url
        }
        if ((typeof newEmoticon.keyword !== 'string') || (typeof newEmoticon.url !== 'string') || (typeof newEmoticon.align !== 'string') || (typeof newEmoticon.height !== 'number')) {
          continue
        }
        newEmoticons.push(newEmoticon)
      } catch {
        continue
      }
    }
  }
  config.emoticons = newEmoticons
}
