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
      <div v-html="contents" >
        
      </div>
     
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


var face = {
    // 由 danmu_pic.json 自动生成，下面为生成案例
    // '[希望之花]': '</span>' + '<img height="128" width="auto" src="/static/希望之花.gif" />' + '<span>',
}
//* 这样怎么打都不会错了吧(), 可以【】也可以【]，各种奇妙组合，但】【不行，(话说这么打的真的人才)
// 中文单双引号会交替出现所以做了容错
var reg = /(“|”|"|'|‘|’|\[|【|{).+?(”|“|"|'|’|‘|\]|】|})/g

// 使用正则表达式把原本的 content 中的[xx]换为标签元素
function regexReplace(str) {
    
  // 如果存在则替换
  str = str.replace(reg,function(keyword){ 
    // 下方可选, 主要是将 [  钱  ], 等前后空白的情况替换为 [钱] 的容错机制
    var new_str = keyword.substring(1, keyword.length - 1);
    new_str = new_str.trim();
    if(face[new_str])
      return face[new_str]
    else {
      return keyword
    }
  })
  return str
}

function convertTextToImg(from_str) {
    // 把原本的 content 中的 [xx]换为标签元素
    var to_str = regexReplace(from_str);
    return '<span>'+ to_str +'</span>'
}

var json

// 在页面刷新缓存时, 读取用户danmu_pic.json, 并建立表情包库
window.onload = function () {
  var url = "/danmu_pic.json" /*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
  var request = new XMLHttpRequest();
  request.open("get", url);/*设置请求方法与路径*/
  request.send(null);/*不发送数据到服务器*/
  request.onload = function () {/*XHR对象获取到返回信息后执行*/
      if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
          json = JSON.parse(request.responseText);
          for(var i=0;i<json.length;i++){
              //* 从 json 读取数据, 创建 keyword 和 image 的对应关系
              var _from = json[i].keyword;
              var _to = `</span><img height="${json[i].height}" width="auto" src="/static/${json[i].image}" /><span>` 
              face[_from] = _to;
              console.log(json[i].keyword);
          }
          console.log(json);
      }
  }
}

// HSL
const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]

export default {
  name: 'TextMessage',
  data() {
    return {
      danmu_pic:json
    }
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
      return convertTextToImg(this.content)
    },
    filter_danmu_pic() {
      // 判断是否显示图片
      return this.danmu_pic.filter((pic) => {
        return pic.keyword == this.content
      })
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
