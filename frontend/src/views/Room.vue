<template>
  <chat-renderer ref="renderer"
  :showGiftInfo="config.showGiftInfo"
  :danmakuAtBottom="config.danmakuAtBottom"
  :tickerAtButtom="config.tickerAtButtom"
  :minGiftPrice="config.minGiftPrice"
  :minTickerPrice="config.minTickerPrice"
  :maxNumber="config.maxNumber"
  :fadeOutNum="config.fadeOutNum"
  :pinTime="config.pinTime"
  >
  </chat-renderer>
</template>

<script>
import * as i18n from '@/i18n'
import { mergeConfig, toBool, toInt, toFloat } from '@/utils'
import * as trie from '@/utils/trie'
import * as pronunciation from '@/utils/pronunciation'
import * as chatConfig from '@/api/chatConfig'
import ChatClientTest from '@/api/chat/ChatClientTest'
import ChatClientDirect from '@/api/chat/ChatClientDirect'
import ChatClientRelay from '@/api/chat/ChatClientRelay'
import ChatRenderer from '@/components/ChatRenderer'
import * as constants from '@/components/ChatRenderer/constants'

export default {
  name: 'Room',
  components: {
    ChatRenderer
  },
  props: {
    roomId: {
      type: Number,
      default: null
    },
    strConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      config: chatConfig.deepCloneDefaultConfig(),
      chatClient: null,
      pronunciationConverter: null
    }
  },
  computed: {
    blockKeywordsTrie() {
      let blockKeywords = this.config.blockKeywords.split('\n')
      let res = new trie.Trie()
      for (let keyword of blockKeywords) {
        if (keyword !== '') {
          res.set(keyword, true)
        }
      }
      return res
    },
    blockUsersTrie() {
      let blockUsers = this.config.blockUsers.split('\n')
      let res = new trie.Trie()
      for (let user of blockUsers) {
        if (user !== '') {
          res.set(user, true)
        }
      }
      return res
    },
    // TODO: 解析用户设置的 emoticons
    emoticonsTrie() {
      let res = new trie.Trie()
      for (let emoticon of this.config.emoticons) {
        // 1个个添加 emoticon
        if (emoticon.keyword !== '' && emoticon.align !== '' && emoticon.height !== '' && emoticon.url !== '') {
          res.set(emoticon.keyword, emoticon)
        }
      }
      return res
    }
  },
  mounted() {
    this.initConfig()
    this.initChatClient()
    if (this.config.giftUsernamePronunciation !== '') {
      this.pronunciationConverter = new pronunciation.PronunciationConverter()
      this.pronunciationConverter.loadDict(this.config.giftUsernamePronunciation)
    }

    // 提示用户已加载
    this.$message({
      message: 'Loaded',
      duration: '500'
    })
  },
  beforeDestroy() {
    if (this.chatClient) {
      this.chatClient.stop()
    }
  },
  methods: {
    initConfig() {
      let locale = this.strConfig.lang
      if (locale) {
        i18n.setLocale(locale)
      }

      //* {} 内留空的使用上次预设值
      let cfg = { ...chatConfig.getLocalConfig() }
      for (let i in this.strConfig) {
        if (this.strConfig[i] !== '') {
          cfg[i] = this.strConfig[i]
        }
      }
      //* 若上次预设值有留空，则使用默认值
      // cfg = mergeConfig(cfg, chatConfig.DEFAULT_CONFIG)
      cfg = mergeConfig(cfg, chatConfig.deepCloneDefaultConfig())
  
      cfg.minGiftPrice = toFloat(cfg.minGiftPrice, chatConfig.DEFAULT_CONFIG.minGiftPrice)
      cfg.minTickerPrice = toFloat(cfg.minTickerPrice, chatConfig.DEFAULT_CONFIG.minTickerPrice)

      cfg.showDanmaku = toBool(cfg.showDanmaku)
      cfg.showSuperchat = toBool(cfg.showSuperchat)
      cfg.showNewMember = toBool(cfg.showNewMember)
      cfg.showGift = toBool(cfg.showGift)
      cfg.showGiftInfo = toBool(cfg.showGiftInfo)

      cfg.mergeSimilarDanmaku = toBool(cfg.mergeSimilarDanmaku)
      cfg.mergeGift = toBool(cfg.mergeGift)

      cfg.danmakuAtBottom = toBool(cfg.danmakuAtBottom)
      cfg.tickerAtButtom = toBool(cfg.tickerAtButtom)

      cfg.blockTranslateDanmaku = toBool(cfg.blockTranslateDanmaku)
      cfg.showTranslateDanmakuOnly = toBool(cfg.showTranslateDanmakuOnly)
      cfg.translationSign = cfg.translationSign.toString()

      // TODO: blockGiftDanmaku
      cfg.autoRenderOfficialEmoji = toBool(cfg.autoRenderOfficialEmoji)
      cfg.isGreedyMatch = toBool(cfg.isGreedyMatch)
      cfg.maxNumber = toInt(cfg.maxNumber, chatConfig.DEFAULT_CONFIG.maxNumber)
      cfg.fadeOutNum = toInt(cfg.fadeOutNum, chatConfig.DEFAULT_CONFIG.fadeOutNum)
      cfg.pinTime = toInt(cfg.pinTime, chatConfig.DEFAULT_CONFIG.pinTime)
      cfg.imageShowType = toInt(cfg.imageShowType, chatConfig.DEFAULT_CONFIG.imageShowType)
      cfg.maxImage = toInt(cfg.maxImage, chatConfig.DEFAULT_CONFIG.maxImage)
      cfg.maxEmoji = toInt(cfg.maxEmoji, chatConfig.DEFAULT_CONFIG.maxEmoji)

      cfg.blockGiftDanmaku = toBool(cfg.blockGiftDanmaku)
      cfg.blockLevel = toInt(cfg.blockLevel, chatConfig.DEFAULT_CONFIG.blockLevel)
      cfg.blockNewbie = toBool(cfg.blockNewbie)
      cfg.blockNotMobileVerified = toBool(cfg.blockNotMobileVerified)
      cfg.blockMedalLevel = toInt(cfg.blockMedalLevel, chatConfig.DEFAULT_CONFIG.blockMedalLevel)

      cfg.relayMessagesByServer = toBool(cfg.relayMessagesByServer)
      cfg.autoTranslate = toBool(cfg.autoTranslate)
      cfg.emoticons = this.toObjIfJson(cfg.emoticons)

      cfg.minDanmakuInterval = toInt(cfg.minDanmakuInterval, chatConfig.DEFAULT_CONFIG.minDanmakuInterval)
      cfg.maxDanmakuInterval = toInt(cfg.maxDanmakuInterval, chatConfig.DEFAULT_CONFIG.maxDanmakuInterval)
      
      chatConfig.sanitizeConfig(cfg)
      this.config = cfg
    },
    toObjIfJson(str) {
      if (typeof str !== 'string') {
        return str
      }
      try {
        return JSON.parse(str)
      } catch {
        return {}
      }
    },
    initChatClient() {
      if (this.roomId === null) {
        this.chatClient = new ChatClientTest(this.config.minDanmakuInterval, this.config.maxDanmakuInterval)
      } else {
        if (!this.config.relayMessagesByServer) {
          this.chatClient = new ChatClientDirect(this.roomId)
        } else {
          this.chatClient = new ChatClientRelay(this.roomId, this.config.autoTranslate)
        }
      }
      this.chatClient.onAddText = this.onAddText
      this.chatClient.onAddGift = this.onAddGift
      this.chatClient.onAddMember = this.onAddMember
      this.chatClient.onAddSuperChat = this.onAddSuperChat
      this.chatClient.onDelSuperChat = this.onDelSuperChat
      this.chatClient.onUpdateTranslation = this.onUpdateTranslation
      this.chatClient.start()
    },

    start() {
      this.chatClient.start()
    },
    stop() {
      this.chatClient.stop()
    },

    onAddText(data) {
      if (!this.config.showDanmaku || !this.filterTextMessage(data) || this.mergeSimilarText(data.content)) {
        // console.log("收到一般消息弹幕，但：是否显示弹幕为" + this.config.showDanmaku + "，是否合并弹幕为" + this.config.mergeSimilarDanmaku)
        return
      }
      // TODO: 只显示翻译弹幕
      if (this.config.showTranslateDanmakuOnly) {
        let content_str = data.content
        if (content_str.charAt(0) !== this.config.translationSign) {
          // console.log("只显示以“"+ this.config.translationSign +"”开头的翻译弹幕")
          return
        } else {
          data.content = content_str.substring(1)
        }
      }

      // TODO: 屏蔽翻译弹幕
      if (this.config.blockTranslateDanmaku) {
        let content_str = data.content
        if (content_str.charAt(0) === this.config.translationSign) {
          return
        }
      }
      
      // TODO: richContent 的研究
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_TEXT,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorType: data.authorType,
        content: data.content,
        richContent: this.getRichContent(data),
        privilegeType: data.privilegeType,
        medalName: data.medalName,
        medalLevel: data.medalLevel,
        isFanGroup: data.isFanGroup,
        repeated: 1,
        translation: data.translation
      }
      this.$refs.renderer.addMessage(message)
    },
    onAddGift(data) {
      if (!this.config.showGift) {
        // console.log("收到礼物，但是否显示礼物为" + this.config.showGift)
        return
      }
      if (this.config.showTranslateDanmakuOnly) {
        // console.log("只显示以“"+ this.config.translationSign +"”开头的翻译弹幕")
        return
      }
      
      let price = data.coinType == 'gold' ? data.totalCoin / 1000 : 0
      if (this.mergeSimilarGift(data.authorName, price, data.giftName, data.num)) {
        return
      }
      // 银瓜子礼物不丢人
      // if (price < this.config.minGiftPrice) {
      //  return
      // }
      
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_GIFT,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorNamePronunciation: this.getPronunciation(data.authorName),
        price: price,
        giftName: data.giftName,
        num: data.num
      }
      this.$refs.renderer.addMessage(message)
    },
    onAddMember(data) {
      if (!this.config.showNewMember || !this.filterNewMemberMessage(data)) {
        // console.log("收到上舰，但是否显示上舰信息为" + this.config.showNewMember)
        return
      }
      if (this.config.showTranslateDanmakuOnly) {
        // console.log("只显示以“"+ this.config.translationSign +"”开头的翻译弹幕")
        return
      }
      let price = 198
      if (data.privilegeType == 2) {
        price = 1998
      } else if (data.privilegeType == 3) {
        price = 19998
      }
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_MEMBER,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorNamePronunciation: this.getPronunciation(data.authorName),
        privilegeType: data.privilegeType,
        price: price,
        title: this.$t('chat.membershipTitle')
      }
      this.$refs.renderer.addMessage(message)
    },
    onAddSuperChat(data) {
      if (!this.config.showSuperchat || !this.filterSuperChatMessage(data)) {
        // console.log("收到打赏(醒目留言SC)，但显示打赏(醒目留言SC)为" + this.config.showSuperchat)
        return
      }
      if (data.price < this.config.minGiftPrice) { // 丢人
        // console.log("打赏小于最低打赏金额，不以显示")
        return
      }
      if (this.config.showTranslateDanmakuOnly) {
        // console.log("只显示以“"+ this.config.translationSign +"”开头的翻译弹幕")
        return
      }

      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_SUPER_CHAT,
        avatarUrl: data.avatarUrl,
        authorName: data.authorName,
        authorNamePronunciation: this.getPronunciation(data.authorName),
        price: data.price,
        time: new Date(data.timestamp * 1000),
        content: data.content.trim(),
        translation: data.translation
      }
      this.$refs.renderer.addMessage(message)
    },
    onDelSuperChat(data) {
      this.$refs.renderer.delMessages(data.ids)
    },
    onUpdateTranslation(data) {
      if (!this.config.autoTranslate) {
        return
      }
      this.$refs.renderer.updateMessage(data.id, { translation: data.translation })
    },

    filterTextMessage(data) {
      if (this.config.blockGiftDanmaku && data.isGiftDanmaku) {
        return false
      } else if (this.config.blockLevel > 0 && data.authorLevel < this.config.blockLevel) {
        return false
      } else if (this.config.blockNewbie && data.isNewbie) {
        return false
      } else if (this.config.blockNotMobileVerified && !data.isMobileVerified) {
        return false
      } else if (this.config.blockMedalLevel > 0 && data.medalLevel < this.config.blockMedalLevel) {
        return false
      }
      return this.filterByContent(data.content) && this.filterByAuthorName(data.authorName)
    },
    filterSuperChatMessage(data) {
      return this.filterByContent(data.content) && this.filterByAuthorName(data.authorName)
    },
    filterNewMemberMessage(data) {
      return this.filterByAuthorName(data.authorName)
    },
    filterByContent(content) {
      let blockKeywordsTrie = this.blockKeywordsTrie
      for (let i = 0; i < content.length; i++) {
        let remainContent = content.substring(i)
        if (blockKeywordsTrie.nonGreedyMatch(remainContent) !== null) {
          return false
        }
      }
      return true
    },
    filterByAuthorName(authorName) {
      return !this.blockUsersTrie.has(authorName)
    },
    mergeSimilarText(content) {
      if (!this.config.mergeSimilarDanmaku) {
        return false
      }
      return this.$refs.renderer.mergeSimilarText(content)
    },
    mergeSimilarGift(authorName, price, giftName, num) {
      if (!this.config.mergeGift) {
        return false
      }
      return this.$refs.renderer.mergeSimilarGift(authorName, price, giftName, num)
    },
    getPronunciation(text) {
      if (this.pronunciationConverter === null) {
        return ''
      }
      return this.pronunciationConverter.getPronunciation(text)
    },
    getRichContent(data) {
      let richContent = []

      // 翻译弹幕，只显示文字
      if (this.config.showTranslateDanmakuOnly == true) {
        richContent.push({
          type: constants.CONTENT_TYPE_TEXT,
          text: data.content
        })
        return richContent
      }

      // B站官方表情
      // TODO: 屏蔽官方表情
      if (data.emoticon !== null && this.config.autoRenderOfficialEmoji === true) {
        richContent.push({
          type: constants.CONTENT_TYPE_EMOJI,
          text: data.content,
          url: data.emoticon
        })
        return richContent
      }

      // 没有自定义表情，只能是文本
      if (this.config.emoticons.length === 0) {
        richContent.push({
          type: constants.CONTENT_TYPE_TEXT,
          text: data.content
        })
        return richContent
      }

      // FIXME: getRichContent 核心拆分文字表情emoticon代码
      // 可能含有自定义表情，需要解析
      let emoticonsTrie = this.emoticonsTrie
      let startPos = 0
      let pos = 0
      let emojiCount = 0
      let imageCount = 0
      if (this.config.imageShowType === 1) {
        richContent.push({
          type: constants.CONTENT_TYPE_TEXT,
          text: data.content
        })
      }
      while (pos < data.content.length) {
        let remainContent = data.content.substring(pos)
        // TODO: 新增 nonGreedyMatch
        let matchEmoticon
        if (this.config.isGreedyMatch) {
          matchEmoticon = emoticonsTrie.greedyMatch(remainContent)
        } else {
          matchEmoticon = emoticonsTrie.nonGreedyMatch(remainContent)
        }

        if (matchEmoticon === null) {
          pos++
          continue
          // 直到找到第1个 emoticon
        }

        // 加入之前的文本
        if (pos !== startPos && this.config.imageShowType !== 1) {
          richContent.push({
            type: constants.CONTENT_TYPE_TEXT,
            text: data.content.slice(startPos, pos)
          })
        }

        // 加入表情
        // TODO: 增加 emoticon 舰长等级 data.privilegeType
        // 如果不满足使用权限，或者超过inline,block类型图片各自的上限
        let emoticonLevel = toInt(matchEmoticon.level)
        let privilegeType = toInt(data.privilegeType)

        if ((emoticonLevel > 0 && (privilegeType > emoticonLevel || privilegeType == 0))
          || (matchEmoticon.align === 'inline' && emojiCount >= this.config.maxEmoji)
          || (matchEmoticon.align === 'block' && imageCount >= this.config.maxImage)) {
          richContent.push({
            type: constants.CONTENT_TYPE_TEXT,
            text: matchEmoticon.keyword
          })
        } else {
          // 如果没有
          if (matchEmoticon.align === 'inline') {
            emojiCount++
          } else {
            imageCount++
          }
          richContent.push({
            type: constants.CONTENT_TYPE_IMAGE,
            text: matchEmoticon.keyword,
            align: matchEmoticon.align,
            height: matchEmoticon.height,
            level: matchEmoticon.level,
            url: matchEmoticon.url
          })
        }
        pos += matchEmoticon.keyword.length
        startPos = pos
      } // end while
      // 加入尾部的文本
      if (pos !== startPos && this.config.imageShowType !== 1) {
        richContent.push({
          type: constants.CONTENT_TYPE_TEXT,
          text: data.content.slice(startPos, pos)
        })
      }
      return richContent
    }
  }
}
</script>
