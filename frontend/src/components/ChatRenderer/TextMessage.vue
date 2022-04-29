<template>
  <yt-live-chat-text-message-renderer
    :style="{'--repeated-text-color': randomColor}"
    :is-fan-group="isFanGroup"
    :medal-level="medalLevel"
    :author-type="authorTypeText"
    :privilegeType="privilegeType"
    :is-admin="authorType === 2"
    :is-deleted="isDelete"
    >
    <div id="card" class="style-scope yt-live-chat-text-message-renderer">
      <img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-text-message-renderer"
        :imgUrl="avatarUrl"
      ></img-shadow>
      <div id="content" class="style-scope yt-live-chat-text-message-renderer">
        <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">{{timeText}}</span>
        <yt-live-chat-author-chip class="style-scope yt-live-chat-text-message-renderer">
          <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip" :type="authorTypeText">{{
            authorName
            }}<!-- 这里是已验证勋章 -->
            <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
          </span>
          <span id="chat-medal" class="style-scope yt-live-chat-author-chip">
            <author-medal class="style-scope yt-live-chat-author-chip"
              :medalLevel="medalLevel" :medalName="medalName" :isFanGroup="isFanGroup"
            ></author-medal>
          </span>
          <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
            <author-badge class="style-scope yt-live-chat-author-chip"
              :isAdmin="authorType === 2" :privilegeType="privilegeType"
            ></author-badge>
          </span>
        </yt-live-chat-author-chip>
        <!-- 直接替换表情包 -->
        <div v-if="imageShowType == 0" id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
          <template v-for="(content, index) in richContent">
            <span :key="index" v-if="content.type === CONTENT_TYPE_TEXT" id="message" class="style-scope yt-live-chat-text-message-renderer"
              display="block"
            >{{ content.text }}</span>
            <img :key="index" v-else-if="content.type === CONTENT_TYPE_IMAGE"
              class="image yt-formatted-string style-scope yt-live-chat-text-message-renderer"
              :style="`display: ${content.align};`"
              width="auto"
              :src="content.url" :alt="content.text" :shared-tooltip-text="content.text" :id="`image-${content.text}`"
              :height="content.height" 
            >
            <img :key="index" v-else-if="content.type === CONTENT_TYPE_EMOJI"
              class="emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"
              :src="content.url" :alt="content.text" :shared-tooltip-text="content.text" :id="`emoji-${content.text}`"
            >
          </template>
          <el-badge :value="repeated" :max="99" v-if="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
            :style="{ '--repeated-mark-color': repeatedMarkColor }"
          ></el-badge>
        </div>

        <!-- 在文字后添加表情包 -->
        <!-- FIXME: 在文字后添加表情包-->
        <div v-else-if="imageShowType == 1" id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
          <span id="message" class="style-scope yt-live-chat-text-message-renderer">{{ content.text }}</span>
          <el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
              :style="{'--repeated-mark-color': repeatedMarkColor}"
          ></el-badge>
          <template v-if="!showTranslateDanmakuOnly && addDanmuPicAfter.length != 0 " >
            <img v-for="(item, index) in addDanmuPicAfter" :key="index" :name="keyword" :height="item.height" width="auto" :src="`/static/${item.image}`" />
          </template>
        </div>
        
      </div>
    </div>
  </yt-live-chat-text-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow'
import AuthorMedal from './AuthorMedal'
import AuthorBadge from './AuthorBadge'
import * as constants from './constants'
import * as utils from '@/utils'
import axios from 'axios'

// HSL
const RANDOM_TEXT_COLOR_START = [0, 100.0, 55.0]
const RANDOM_TEXT_COLOR_END = [360, 60.0, 75.0]

const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]


let json
// 在页面刷新缓存时, 读取用户danmu_pic.json, 并建立表情包库
window.onload = function() {
  axios.get('/danmu_pic.json').then(res => {
    json = res.data
    console.log(json)
  })
}

// function myLog(msg) {
//   console.log(msg)
// }
// function keyword_index_sort(a, b) {
//   if (a.keyword_index < b.keyword_index) {
//     return -1
//   }
//   if (a.keyword_index > b.keyword_index) {
//     return 1
//   }
//   return 0
// }

export default {
  name: 'TextMessage',
  data() {
    return {
      danmu_pic: json,
      CONTENT_TYPE_TEXT: constants.CONTENT_TYPE_TEXT,
      CONTENT_TYPE_IMAGE: constants.CONTENT_TYPE_IMAGE,
      CONTENT_TYPE_EMOJI: constants.CONTENT_TYPE_EMOJI
    }
  },
  components: {
    ImgShadow,
    AuthorMedal,
    AuthorBadge
  },
  props: {
    avatarUrl: String,
    time: Date,
    authorName: String,
    authorType: Number,
    medalName: String,
    medalLevel: Number,
    isFanGroup: Boolean,
    isDelete: Boolean,
    showTranslateDanmakuOnly: Boolean,
    emoticon: String,
    content: String,
    richContent: Array,
    privilegeType: Number,
    repeated: Number,
    imageShowType: Number,
    maxImage: Number
  },
  computed: {
    //* [在文字后添加表情包]
    addDanmuPicAfter() {
      let danmu_pic_filtered = [] // 存筛选出的图片
      let index = 0
      for (let pic of json) {
        if (index >= this.maxImage) {
          break
        }
        if (this.content.includes(pic.keyword) && ((this.privilegeType > 0 && this.privilegeType <= pic.rank) || pic.rank == 0)) {
          danmu_pic_filtered.push(pic)
          index++
        }
      }
      // myLog(danmu_pic_filtered)
      return danmu_pic_filtered
    },
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    },
    authorTypeText() {
      // 优先判断舰长
      return this.privilegeType > 0 ? 'member' : constants.AUTHOR_TYPE_TO_TEXT[this.authorType]
    },
    randomColor() {
      let color = [0, 0, 0]
      let t = Math.random()
      for (let i = 0; i < 3; i++) {
        color[i] = RANDOM_TEXT_COLOR_START[i] + ((RANDOM_TEXT_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t)
      }
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
    },
    repeatedMarkColor() {
      let color
      if (this.repeated <= 2) {
        color = REPEATED_MARK_COLOR_START
      } else if (this.repeated >= 10) {
        color = REPEATED_MARK_COLOR_END
      } else {
        color = [0, 0, 0]
        let t = (this.repeated - 2) / (10 - 2)
        for (let i = 0; i < 3; i++) {
          color[i] = REPEATED_MARK_COLOR_START[i] + ((REPEATED_MARK_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t)
        }
      }
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
    }
  }
}
</script>

<style>
yt-live-chat-text-message-renderer>#content .el-badge {
  margin-left: 10px;
}

yt-live-chat-text-message-renderer>#content .el-badge .el-badge__content {
  font-size: 12px !important;
  line-height: 18px !important;
  text-shadow: none !important;
  font-family: sans-serif !important;
  color: #FFF !important;
  background-color: var(--repeated-mark-color) !important;
  border: none;
}

</style>

<style src="@/assets/css/youtube/yt-live-chat-text-message-renderer.css"></style>
