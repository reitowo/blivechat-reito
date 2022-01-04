<template>
  <chat-renderer ref="renderer"  
  :showGiftInfo="config.showGiftInfo"
  :danmakuAtBottom="config.danmakuAtBottom" :tickerAtButtom="config.tickerAtButtom"
  :showTranslateDanmakuOnly="config.showTranslateDanmakuOnly"
  :minGiftPrice="config.minGiftPrice" :minTickerPrice="config.minTickerPrice" 
  :maxNumber="config.maxNumber" :fadeOutNum="config.fadeOutNum" :pinTime="config.pinTime" 
  :imageShowType="config.imageShowType" :maxImage="config.maxImage"
  >
  </chat-renderer>
</template>

<script>
import {mergeConfig, toBool, toInt, toFloat} from '@/utils'
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
      config: { ...chatConfig.DEFAULT_CONFIG },
      chatClient: null,
      pronunciationConverter: null
    }
  },
  computed: {
    blockKeywords() {
      return this.config.blockKeywords.split('\n').filter(val => val)
    },
    blockUsers() {
      return this.config.blockUsers.split('\n').filter(val => val)
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
      // console.log("初始化config")
      //* 留空的使用上次预设值
      let cfg = {...chatConfig.getLocalConfig()}
      for (let i in this.strConfig) {
        if (this.strConfig[i] !== '') {
          cfg[i] = this.strConfig[i]
        }
      }
      //* 若上次预设值有留空，则使用默认值
      cfg = mergeConfig(cfg, chatConfig.DEFAULT_CONFIG)
  
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

      cfg.showTranslateDanmakuOnly = toBool(cfg.showTranslateDanmakuOnly)
      cfg.translationSign = cfg.translationSign.toString()

      cfg.maxNumber = toInt(cfg.maxNumber, chatConfig.DEFAULT_CONFIG.maxNumber)
      cfg.fadeOutNum = toInt(cfg.fadeOutNum, chatConfig.DEFAULT_CONFIG.fadeOutNum)
      cfg.pinTime = toInt(cfg.pinTime, chatConfig.DEFAULT_CONFIG.pinTime)
      
      cfg.imageShowType = toInt(cfg.imageShowType, chatConfig.DEFAULT_CONFIG.imageShowType)
      cfg.maxImage = toInt(cfg.maxImage, chatConfig.DEFAULT_CONFIG.maxImage)

      cfg.blockGiftDanmaku = toBool(cfg.blockGiftDanmaku)
      cfg.blockLevel = toInt(cfg.blockLevel, chatConfig.DEFAULT_CONFIG.blockLevel)
      cfg.blockNewbie = toBool(cfg.blockNewbie)
      cfg.blockNotMobileVerified = toBool(cfg.blockNotMobileVerified)
      cfg.blockMedalLevel = toInt(cfg.blockMedalLevel, chatConfig.DEFAULT_CONFIG.blockMedalLevel)
      cfg.relayMessagesByServer = toBool(cfg.relayMessagesByServer)
      cfg.autoTranslate = toBool(cfg.autoTranslate)

      cfg.minDanmakuInterval = toInt(cfg.minDanmakuInterval, chatConfig.DEFAULT_CONFIG.minDanmakuInterval)
      cfg.maxDanmakuInterval = toInt(cfg.maxDanmakuInterval, chatConfig.DEFAULT_CONFIG.maxDanmakuInterval)


      this.config = cfg
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
      if(this.config.showTranslateDanmakuOnly) {
        let content_str = data.content
        if(content_str.charAt(0) != this.config.translationSign) {
          // console.log("只显示以“"+ this.config.translationSign +"”开头的翻译弹幕")
          return
        } else {
          data.content = "翻译：" + content_str.substring(1)
        }
      }
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_TEXT,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorType: data.authorType,
        content: data.content,
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
      if(this.config.showTranslateDanmakuOnly) {
        // console.log("只显示以“"+ this.config.translationSign +"”开头的翻译弹幕")
        return
      }
      
      let price = (data.coinType == 'gold') ? (data.totalCoin / 1000) : 0
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
      if(this.config.showTranslateDanmakuOnly) {
        // console.log("只显示以“"+ this.config.translationSign +"”开头的翻译弹幕")
        return
      }
      let price = data.privilegeType == 3 ? 198 : data.privilegeType == 2 ? 1998 : 19998
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_MEMBER,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorNamePronunciation: this.getPronunciation(data.authorName),
        privilegeType: data.privilegeType,
        title: data.authorName,
        price: price
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
      if(this.config.showTranslateDanmakuOnly) {
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
      for (let id of data.ids) {
        this.$refs.renderer.delMessage(id)
      }
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
      return this.filterSuperChatMessage(data)
    },
    filterSuperChatMessage(data) {
      for (let keyword of this.blockKeywords) {
        if (data.content.indexOf(keyword) !== -1) {
          return false
        }
      }
      return this.filterNewMemberMessage(data)
    },
    filterNewMemberMessage(data) {
      for (let user of this.blockUsers) {
        if (data.authorName === user) {
          return false
        }
      }
      return true
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
    }
  }
}
</script>
