<template>
  <yt-live-chat-text-message-renderer :style="{'--repeated-text-color': randomColor}" :is-fan-group="isFanGroup" :medal-level="medalLevel" :author-type="authorTypeText" :privilegeType="privilegeType">
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
        <div id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
          <!-- 合并弹幕数字 -->
          <span id="message" class="style-scope yt-live-chat-text-message-renderer">{{
            content
            }}<el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
              :style="{'--repeated-mark-color': repeatedMarkColor}"
            ></el-badge>
          </span>
          <!-- 用户自定的弹幕图片 -->
          <div id="images" v-if="filter_danmu_pic.length != 0" >
            <img v-for="(item, index) in filter_danmu_pic" :key="index" :name="keyword" :height="item.height" width="auto" :src="`/static/${item.image}`" />
          </div>
        </div>
      </div>
    </div>  
  </yt-live-chat-text-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow.vue'
import AuthorMedal from './AuthorMedal.vue'
import AuthorBadge from './AuthorBadge.vue'
import * as constants from './constants'
import * as utils from '@/utils'
import axios from 'axios'



// HSL
const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]

// const split_regex = /(“|”|【|】|\[|\])/g
let json
// 在页面刷新缓存时, 读取用户danmu_pic.json, 并建立表情包库
window.onload = function () {
  axios.get('/danmu_pic_old.json')
  .then((res) => {
    json = res.data
    console.log(json)
  })
}

// function myLog(msg) {
//   console.log(msg)
// }

export default {
  name: 'TextMessage',
  data() {
    return {
      danmu_pic:json
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
    content: String,
    privilegeType: Number,
    repeated: Number,
    maxImage: Number
  },
  computed: {
    // 判断是否显示图片
    filter_danmu_pic() {
      let danmu_pic_filtered = this.danmu_pic.filter((pic) => {
        return this.content.includes(pic.keyword) && ( (this.privilegeType > 0 && this.privilegeType <= pic.rank) || pic.rank == 0)
      })
      // myLog("挑选出的图片张数: " + danmu_pic_filtered.length)
      return danmu_pic_filtered.slice(0, this.maxImage)
    },
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    },
    authorTypeText() {
      // 优先判断舰长
      return this.privilegeType > 0 ? 'member' : constants.AUTHOR_TYPE_TO_TEXT[this.authorType]
    },
    randomColor(){
      let color = [0, 0, 0]
      let t = Math.random()
      for (let i = 0; i < 3; i++) {
        color[i] = REPEATED_MARK_COLOR_START[i] + (REPEATED_MARK_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t
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
          color[i] = REPEATED_MARK_COLOR_START[i] + (REPEATED_MARK_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t
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
<style src="@/assets/css/youtube/yt-live-chat-author-chip.css"></style>
