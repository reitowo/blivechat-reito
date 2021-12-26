<template>
<<<<<<< HEAD
  <yt-live-chat-text-message-renderer :style="{'--repeated-text-color': randomColor}" 
    :is-fan-group="isFanGroup" :medal-level="medalLevel" 
    :author-type="authorTypeText" :privilegeType="privilegeType"
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
          <template v-for="(item, index) in replaceDanmuPicDirect"  >
            <img :key="index" v-if="!showTranslateDanmakuOnly && item.type == 'image'" class="style-scope yt-live-chat-text-message-renderer" :height="item.height" width="auto" :src="`/static/${item.content}`" />
            <span :key="index" v-else id="message" class="style-scope yt-live-chat-text-message-renderer" >{{item.content}}</span>
          </template>
          <el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
            :style="{'--repeated-mark-color': repeatedMarkColor}"
          ></el-badge>
        </div>
        <!-- 替换表情包 -->
        <div v-else-if="imageShowType == 1" id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
          <template v-for="(item, index) in replaceDanmuPic"  >
            <img :key="index" v-if="!showTranslateDanmakuOnly && item.type == 'image'" class="style-scope yt-live-chat-text-message-renderer" :height="item.height" width="auto" :src="`/static/${item.content}`" />
            <span :key="index" v-else id="message" class="style-scope yt-live-chat-text-message-renderer" >{{item.content}}</span>
          </template>
          <el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
            :style="{'--repeated-mark-color': repeatedMarkColor}"
          ></el-badge>
        </div>
        <!-- 在文字后添加表情包 -->
        <div v-else-if="imageShowType == 2" id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
          <span id="message" class="style-scope yt-live-chat-text-message-renderer">{{
            content
            }}<el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
              :style="{'--repeated-mark-color': repeatedMarkColor}"
            ></el-badge>
          </span>
          <template v-if="!showTranslateDanmakuOnly && addDanmuPicAfter.length != 0 " >
            <img v-for="(item, index) in addDanmuPicAfter" :key="index" :name="keyword" :height="item.height" width="auto" :src="`/static/${item.image}`" />
          </template>
        </div>
       
      </div>
    </div>  
=======
  <yt-live-chat-text-message-renderer :author-type="authorTypeText">
    <img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-text-message-renderer"
      :imgUrl="avatarUrl"
    ></img-shadow>
    <div id="content" class="style-scope yt-live-chat-text-message-renderer">
      <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">{{timeText}}</span>
      <yt-live-chat-author-chip class="style-scope yt-live-chat-text-message-renderer">
        <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip" :type="authorTypeText">
          <template>{{ authorName }}</template>
          <!-- 这里是已验证勋章 -->
          <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
        </span>
        <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
          <author-badge class="style-scope yt-live-chat-author-chip"
            :isAdmin="authorType === 2" :privilegeType="privilegeType"
          ></author-badge>
        </span>
      </yt-live-chat-author-chip>
      <span id="message" class="style-scope yt-live-chat-text-message-renderer">
        <template v-if="!emoticon">{{ content }}</template>
        <img v-else class="small-emoji emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"
          :src="emoticon" :alt="content" shared-tooltip-text="" id="emoji"
        >
        <el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
          :style="{'--repeated-mark-color': repeatedMarkColor}"
        ></el-badge>
      </span>
    </div>
>>>>>>> 3118a7d (修改表情相关的一些实现和代码风格)
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
const RANDOM_TEXT_COLOR_START = [0, 100.0, 55.0]
const RANDOM_TEXT_COLOR_END = [360, 60.0, 75.0]

const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]

const split_regex = /(“|”|【|】|\[|\])/g
let json
// 在页面刷新缓存时, 读取用户danmu_pic.json, 并建立表情包库
window.onload = function () {
  axios.get('/danmu_pic.json')
  .then((res) => {
    json = res.data
    console.log(json)
  })
}

// function myLog(msg) {
//   console.log(msg)
// }
function keyword_index_sort(a, b) {
  if (a.keyword_index < b.keyword_index) {
    return -1;
  }
  if (a.keyword_index > b.keyword_index) {
    return 1;
  }
  return 0
}

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
    isDelete: Boolean,
    showTranslateDanmakuOnly: Boolean,
    content: String,
    privilegeType: Number,
    repeated: Number,
    imageShowType: Number,
    maxImage: Number
  },
  computed: {
    //* [无需符号直接替换文字为表情包] 
    replaceDanmuPicDirect() {
      // let str_arr = this.content
      let render_arr = [] // 存切分后转换出的渲染data
      let imageIncluded = []
      // 找出弹幕中所有具有对应表情包的关键词，放入 imageIncluded
      let index = 0
      for(let pic of json) {
        if(index >= this.maxImage) {
          break
        }
        if(this.content.includes(pic.keyword) && ( (this.privilegeType > 0 && this.privilegeType <= pic.rank) || pic.rank == 0)) {
          imageIncluded.push(pic)
          index++;
        }
      }
      // myLog("所有的表情包")
      // myLog(imageIncluded)
      let render_index = 0
      let start_index = 0
      // 获取index
      let image_arr = []
      for(let pic of imageIncluded) {
        start_index = 0
        while(true) {
          let keyword_index = this.content.indexOf(pic.keyword, start_index)
          if(keyword_index == -1 || image_arr.length >= this.maxImage) {
            break
          }
          start_index = keyword_index + pic.keyword.length
          let temp_pic = {
            keyword: pic.keyword,
            image: pic.image,
            height: pic.height,
            keyword_index: keyword_index
          }
          image_arr.push(temp_pic)
        }
        if(image_arr.length >= this.maxImage) {
          break
        }
      }
      // 排序所有表情包，方便之后按顺序替换
      image_arr.sort(keyword_index_sort)
      // myLog(image_arr)

      start_index = 0
      for(let pic of image_arr) {
        let keyword_index = pic.keyword_index
        let keyword_length = pic.keyword.length
        // 添加字符串片段
        let str = this.content.substring(start_index, keyword_index)
        if(str != '') {
          render_arr[render_index] = {
            type: 'text',
            content : str
          }
          render_index++
        }
        render_arr[render_index] = {
          type: 'image',
          content : pic.image,
          height : pic.height,
        }
        render_index++
        // 添加图片片段
        start_index = keyword_index + keyword_length
      }
      // 添加字符串片段
      if(start_index != this.content.length) {
        render_arr[render_index] = {
          type: 'text',
          content : this.content.substring(start_index, this.content.length)
        }
      }
      return render_arr
    },
    //* [在文字后添加表情包] 
    addDanmuPicAfter() {
      let danmu_pic_filtered = [] // 存筛选出的图片
      let index = 0
      for(let pic of json) {
        if(index >= this.maxImage) {
          break
        }
        if(this.content.includes(pic.keyword) && ( (this.privilegeType > 0 && this.privilegeType <= pic.rank) || pic.rank == 0)) {
          danmu_pic_filtered.push(pic)
          index++;
        }
      }
      // myLog(danmu_pic_filtered)
      return danmu_pic_filtered
    },
    //* [用表情包替换文字] 
    replaceDanmuPic() {
      let str_arr = this.content.split(split_regex) // 切分原字段
      let render_arr = [] // 存切分后转换出的渲染data
      let index = 0
      let imageNumber = 0
      
      // * 解析 split 出来的 string array
      for(let i = 0; i < str_arr.length; i++) {
        if((str_arr[i] == '“' || str_arr[i] == '【' || str_arr[i] == '[') && imageNumber < this.maxImage) {
          let haveImage = false
          // 分析关键词是否有对应的表情包
          for(let pic of json) {
            if(str_arr[i + 1] == pic.keyword && ( (this.privilegeType > 0 && this.privilegeType <= pic.rank) || pic.rank == 0) ) {
              render_arr[index] = {
                type: 'image',
                content : pic.image,
                height : pic.height,
              }
              haveImage = true
              index++
              imageNumber++
            }
            if(imageNumber >= this.maxImage) {
              break
            }
          }
          if(haveImage) {
            i+=2
            continue
          }
        }
        if(str_arr[i] == '【') {
          str_arr[i] = '['
        } else if (str_arr[i] == '】') {
          str_arr[i] = ']'
        } //未触发关键词的时候，将中文括号转为英文括号
        // 如果关键词不具有对应表情包或超过最大图片显示上限，则视为文字
        render_arr[index] = {
          type: 'text',
          content : str_arr[i]
        }
        index++
      }
      // myLog(render_arr)
      return render_arr
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
        color[i] = RANDOM_TEXT_COLOR_START[i] + (RANDOM_TEXT_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t
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
