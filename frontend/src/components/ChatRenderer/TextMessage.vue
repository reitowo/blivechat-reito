<template>
  <yt-live-chat-text-message-renderer :author-type="authorTypeText" :privilegeType="privilegeType">
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
        <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
          <author-badge class="style-scope yt-live-chat-author-chip"
            :isAdmin="authorType === 2" :privilegeType="privilegeType"
          ></author-badge>
        </span>
      </yt-live-chat-author-chip>
      <!-- 用户自定的弹幕图片 -->
      <span v-for="(item, index) in contents" :key="index" >
        <img v-if="item.type == 'image'" :height="item.height" width="auto" :src="`/static/${item.content}`" />
        <span id="message" class="style-scope yt-live-chat-text-message-renderer" v-else>{{item.content}}</span>
      </span>

      <span id="message" class="style-scope yt-live-chat-text-message-renderer">{{
        }}<el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
          :style="{'--repeated-mark-color': repeatedMarkColor}"
        ></el-badge>
      </span>
    </div>
  </yt-live-chat-text-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow.vue'
import AuthorBadge from './AuthorBadge.vue'
import * as constants from './constants'
import * as utils from '@/utils'
import axios from 'axios'



// HSL
const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]

const split_regex = /(“|”|【|】)/g
// 在页面刷新缓存时, 读取用户danmu_pic.json, 并建立表情包库
window.onload = function () {
  axios.get('/danmu_pic.json')
  .then((res) => {
    json = res.data
  })
}
let json

export default {
  name: 'TextMessage',
  data() {
  },
  components: {
    ImgShadow,
    AuthorBadge
  },
  props: {
    avatarUrl: String,
    time: Date,
    authorName: String,
    authorType: Number,
    content: String,
    privilegeType: Number,
    repeated: Number
  },
  computed: {
    contents() {
        // 使用正则表达式把原本的 content 中的[xx]换为渲染资讯
        let str_arr = this.content.split(split_regex) // 切分原字段
        let render_arr = [] // 存切分后转换出的渲染data
        let index = 0
        // * 解析 split 出来的 string array
        for(let i = 0; i < str_arr.length; i++) {
          if((str_arr[i] == '“' || str_arr[i] == '【') && i + 1 < str_arr.length) {
            if(!json[str_arr[i + 1]]) {
              render_arr[index] = {
                type: 'text',
                content : str_arr[i]
              } 
              index++
              continue
            } // 不存在关键词
            else {
              let _face = json[str_arr[i + 1]]
              if((this.privilegeType > 0 && this.privilegeType <= _face.rank) || _face.rank==0) {
                render_arr[index] = {
                  type: 'image',
                  content : _face.image,
                  height : _face.height,
                }
                index++
                i+=2  // 跳过后2个判断
                continue
              } // 判断是否有权限使用表情包
            } // 存在关键词
          } // 判断触发关键字
          render_arr[index] = {
            type: 'text',
            content : str_arr[i]
          } // 非触发关键字or无权限使用表情包时渲染文字
          index++
        }
      return render_arr
    },
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    },
    authorTypeText() {
      // 优先判断舰长
      return this.privilegeType > 0 ? 'member' : constants.AUTHOR_TYPE_TO_TEXT[this.authorType]
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
yt-live-chat-text-message-renderer>#content>#message>.el-badge {
  margin-left: 10px;
}

yt-live-chat-text-message-renderer>#content>#message>.el-badge .el-badge__content {
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
