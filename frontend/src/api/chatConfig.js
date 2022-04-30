import _ from 'lodash'

import { mergeConfig } from '@/utils'

export const DEFAULT_CONFIG = {
  minGiftPrice: 0, // ￥0.0
  minTickerPrice: 0.1, // ￥0.1
  showDanmaku: true,
  showTranslateDanmakuOnly: false,
  translationSign: '【',
  showSuperchat: true,
  showNewMember: true,
  showGift: true,
  showGiftInfo: true,
  mergeSimilarDanmaku: false,
  mergeGift: false,
  danmakuAtBottom: true,
  tickerAtButtom: false,
  maxNumber: 30,
  fadeOutNum: 3,
  pinTime: 0,


  autoRenderOfficialEmoji: true,
  isGreedyMatch: true,
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

  emoticons: [
    {
      "keyword": "猫猫九轴",
      "level": 0,
      "align": "block",
      "height": 120,
      "url": "\\emoticons\\angleXY.gif"
    },
    {
      "keyword": "九轴",
      "level": 0,
      "align": "block",
      "height": 120,
      "url": "\\emoticons\\na_o_mi_angleXY.gif"
    },
    {
      "keyword": "好",
      "level": 0,
      "align": "block",
      "height": 64,
      "url": "\\emoticons\\hao.png"
    },
    {
      "keyword": "可以涩涩",
      "level": 0,
      "align": "block",
      "height": 140,
      "url": "\\emoticons\\h_ok.png"
    },
    {
      "keyword": "大笑死",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\wa_ra_u.gif"
    },
    {
      "keyword": "草",
      "level": 0,
      "align": "inline",
      "height": 20,
      "url": "\\emoticons\\kusa.jpg"
    },
    {
      "keyword": "吓我一跳",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\bi_ku_ri_si_da.gif"
    },
    {
      "keyword": "哭了",
      "level": 0,
      "align": "inline",
      "height": 20,
      "url": "\\emoticons\\cry.png"
    },
    {
      "keyword": "希望人没事",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\da_i_jo_u_bu.jpg"
    },
    {
      "keyword": "不中",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\da_me.jpg"
    },
    {
      "keyword": "摸不着头脑",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\do_u_i_u_ko_to.jpg"
    },
    {
      "keyword": "喝茶",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\drink_tea.gif"
    },
    {
      "keyword": "饮茶先",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\drink_tea_yeah.jpg"
    },
    {
      "keyword": "我看不懂",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\e_gu_i.jpg"
    },
    {
      "keyword": "emo",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\emo.jpg"
    },
    {
      "keyword": "做猪最重要的是开心",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\happy_is_important.gif"
    },
    {
      "keyword": "地铁老人手机",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\i_mi_wa_ka_ran.jpg"
    },
    {
      "keyword": "杀了我",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\kill_me.jpg"
    },
    {
      "keyword": "钱",
      "level": 0,
      "align": "inline",
      "height": 20,
      "url": "\\emoticons\\money.png"
    },
    {
      "keyword": "睡了",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\ne_ru.gif"
    },
    {
      "keyword": "yabe",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\yabe.jpg"
    },
    {
      "keyword": "不忍直视",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\yabe.jpg"
    },
    {
      "keyword": "笑死",
      "level": 0,
      "align": "inline",
      "height": 20,
      "url": "\\emoticons\\wa_ra_u.gif"
    },
    {
      "keyword": "二次元是大家的家",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\yamero.jpg"
    },
    {
      "keyword": "不够色",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\not_h.jpg"
    },
    {
      "keyword": "晚安",
      "level": 0,
      "align": "inline",
      "height": 100,
      "url": "\\emoticons\\o_ya_su_mi.jpg"
    },
    {
      "keyword": "中嘞",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\ojbk.jpg"
    },
    {
      "keyword": "明白",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\wa_ka_tta.png"
    },
    {
      "keyword": "铁咩",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\tie_mie.jpg"
    },
    {
      "keyword": "好耶",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\hao_ye.jpg"
    },
    {
      "keyword": "勇！",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\yu_u_ki.jpg"
    },
    {
      "keyword": "二次元是不会背叛你的",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\ni_ji_gen_never_die_1.jpg"
    },
    {
      "keyword": "呜呜呜",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\hai_sifu_cry.png"
    },
    {
      "keyword": "可以H",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\h_ok.png"
    },
    {
      "keyword": "椅师傅",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\chair_sifu.png"
    },
    {
      "keyword": "小椅师傅",
      "level": 0,
      "align": "inline",
      "height": 20,
      "url": "\\emoticons\\chair_sifu.png"
    },
    {
      "keyword": "小海式",
      "level": 0,
      "align": "inline",
      "height": 20,
      "url": "\\emoticons\\hai_sifu.png"
    },
    {
      "keyword": "海式",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\hai_sifu.png"
    },
    {
      "keyword": "小尚未",
      "level": 0,
      "align": "inline",
      "height": 20,
      "url": "\\emoticons\\na_o_mi.png"
    },
    {
      "keyword": "尚未",
      "level": 0,
      "align": "block",
      "height": 100,
      "url": "\\emoticons\\na_o_mi.png"
    }
  ] // [{ keyword: '', url: '' }, ...]
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

// FIXME: 前端上传表情包设置
export function sanitizeConfig(config) {
  let newEmoticons = []
  if (config.emoticons instanceof Array) {
    for (let emoticon of config.emoticons) {
      try {
        let newEmoticon = {
          keyword: emoticon.keyword,
          level: emoticon.level,
          align: emoticon.align,
          height: emoticon.height,
          url: emoticon.url
        }
        if ((typeof newEmoticon.keyword !== 'string') || (typeof newEmoticon.url !== 'string') || (typeof newEmoticon.align !== 'string') || (typeof newEmoticon.height !== 'number') || (typeof newEmoticon.level !== 'number')) {
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
