<template>
  <div>
    <p>
      <el-form :model="form" ref="form" label-width="150px" :rules="{
        roomId: [
          {required: true, message: $t('home.roomIdEmpty'), trigger: 'blur'},
          {type: 'integer', min: 1, message: $t('home.roomIdInteger'), trigger: 'blur'}
        ]
      }">
        <el-tabs type="border-card">
          <el-tab-pane :label="$t('home.general')">
            <el-form-item :label="$t('home.roomId')" required prop="roomId">
              <el-input v-model.number="form.roomId" type="number" min="1"></el-input>
            </el-form-item>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.showDanmaku')">
                  <el-switch v-model="form.showDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.showSuperchat')">
                  <el-switch v-model="form.showSuperchat"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.showNewMember')">
                  <el-switch v-model="form.showNewMember"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.showGift')">
                  <el-switch v-model="form.showGift"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.showGiftInfo')">
                  <el-switch v-model="form.showGiftInfo"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.danmakuAtBottom')">
                  <el-switch v-model="form.danmakuAtBottom"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.tickerAtButtom')">
                  <el-switch v-model="form.tickerAtButtom"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.mergeSimilarDanmaku')">
                  <el-switch v-model="form.mergeSimilarDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.mergeGift')">
                  <el-switch v-model="form.mergeGift"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.blockTranslateDanmaku')">
                  <el-switch v-model="form.blockTranslateDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="4">
                <el-form-item :label="$t('home.showTranslateDanmakuOnly')">
                  <el-switch v-model="form.showTranslateDanmakuOnly"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.translationSign')">
                  <el-input v-model.trim="form.translationSign"
                  maxLength='1'
                  :placeholder="$t('home.onlyOneCharacter')"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.minGiftPrice')">
                  <el-input v-model.number="form.minGiftPrice" type="number" min="0"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.minTickerPrice')">
                  <el-input v-model.number="form.minTickerPrice" type="number" min="0.1"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.maxNumber')">
                  <el-input v-model.number="form.maxNumber" type="number" min="1"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.fadeOutNum')">
                  <el-input v-model.number="form.fadeOutNum" type="number" min="1"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.pinTime')">
                  <el-input v-model.number="form.pinTime" type="number" min="1"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            
          </el-tab-pane>

          <el-tab-pane :label="$t('home.block')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.giftDanmaku')">
                  <el-switch v-model="form.blockGiftDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.informalUser')">
                  <el-switch v-model="form.blockNewbie"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.unverifiedUser')">
                  <el-switch v-model="form.blockNotMobileVerified"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.blockLevel')">
                  <el-slider v-model="form.blockLevel" show-input :min="0" :max="60"></el-slider>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.blockMedalLevel')">
                  <el-slider v-model="form.blockMedalLevel" show-input :min="0" :max="40"></el-slider>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item :label="$t('home.blockKeywords')">
              <el-input v-model="form.blockKeywords" type="textarea" :rows="5" :placeholder="$t('home.onePerLine')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('home.blockUsers')">
              <el-input v-model="form.blockUsers" type="textarea" :rows="5" :placeholder="$t('home.onePerLine')"></el-input>
            </el-form-item>
          </el-tab-pane>

          <el-tab-pane :label="$t('home.advanced')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.relayMessagesByServer')">
                  <el-switch v-model="form.relayMessagesByServer"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.autoTranslate')">
                  <el-switch v-model="form.autoTranslate" :disabled="!serverConfig.enableTranslate || !form.relayMessagesByServer"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item :label="$t('home.giftUsernamePronunciation')">
              <el-radio-group v-model="form.giftUsernamePronunciation">
                <el-radio label="">{{$t('home.dontShow')}}</el-radio>
                <el-radio label="pinyin">{{$t('home.pinyin')}}</el-radio>
                <el-radio label="kana">{{$t('home.kana')}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane :label="$t('home.emoticon')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="6">
                <el-form-item :label="$t('home.autoRenderOfficialEmoji')">
                  <el-switch v-model="form.autoRenderOfficialEmoji"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="6">
                <el-form-item :label="$t('home.isGreedyMatch')">
                  <el-switch v-model="form.isGreedyMatch"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.imageShowType')">
                  <el-select ref="imageShowTypeInput" v-model="form.imageShowType">
                    <el-option v-for="imageShowType in $t('home.imageShowTypes')" :key="imageShowType" v-bind:value="imageShowType.id">{{imageShowType.name}}
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.maxImage')">
                  <el-input v-model.number="form.maxImage" type="number"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.maxEmoji')">
                  <el-input v-model.number="form.maxEmoji" type="number"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <p>
              <el-button type="primary" icon="el-icon-plus" @click="addEmoticon">{{$t('home.addEmoticon')}}</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="addPicture">{{$t('home.addPicture')}}</el-button>
            </p>
            <el-table :data="form.emoticons">
              <el-table-column prop="keyword" :label="$t('home.emoticonKeyword')" width="170">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.keyword"></el-input>
                </template>
              </el-table-column>
              
              <el-table-column prop="url" :label="$t('home.emoticonUrl')">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.url"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="align" :label="$t('home.emoticonAlign')" width="140">
                <template slot-scope="scope">
                  <el-select ref="imageAlignTypeInput" v-model="scope.row.align">
                    <el-option v-for="imageAlignType in $t('home.imageAlignTypes')" :key="imageAlignType" v-bind:value="imageAlignType.id">{{imageAlignType.name}}
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="level" :label="$t('home.imageLevel')" width="140">
                <template slot-scope="scope">
                  <el-select ref="imageLevelInput" v-model.number="scope.row.level" type="number">
                    <el-option v-for="imageLevel in $t('home.imageLevels')" :key="imageLevel" v-bind:value="imageLevel.id">{{imageLevel.name}}
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="height" :label="$t('home.emoticonHeight')" width="170">
                <template slot-scope="scope">
                  <el-input v-model.number="scope.row.height" type="number" min="1" max="1000"></el-input>
                </template>
              </el-table-column>
              <el-table-column :label="$t('home.operation')" width="170">
                <template slot-scope="scope">
                  <el-button-group>
                    <el-button type="danger" icon="el-icon-minus" @click="delEmoticon(scope.$index)"></el-button>
                  </el-button-group>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane :label="$t('home.testing')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.minDanmakuInterval')">
                  <el-slider v-model="form.minDanmakuInterval" show-input :min="35" :max="5000"></el-slider>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.maxDanmakuInterval')">
                  <el-slider v-model="form.maxDanmakuInterval" show-input :min="35" :max="5000"></el-slider>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </p>

    <p>
      <el-card>
        <el-form :model="form" label-width="150px">
          <el-form-item :label="$t('home.roomUrl')">
            <el-input ref="roomUrlInput" readonly :value="obsRoomUrl" style="width: calc(100% - 8em); margin-right: 1em;"></el-input>
            <el-button type="primary" icon="el-icon-copy-document" @click="copyUrl"></el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="enterBilibili">{{$t('home.enterBilibili')}}</el-button>
            <el-button type="primary" :disabled="!roomUrl" @click="enterRoom">{{$t('home.enterRoom')}}</el-button>
            <el-button @click="enterTestRoom">{{$t('home.enterTestRoom')}}</el-button>
            <el-button @click="exportConfig">{{$t('home.exportConfig')}}</el-button>
            <el-button @click="importConfig">{{$t('home.importConfig')}}</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </p>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
import download from 'downloadjs'

import { mergeConfig } from '@/utils'
import * as chatConfig from '@/api/chatConfig'

export default {
  name: 'Home',
  data() {
    return {
      serverConfig: {
        enableTranslate: true,
        enableUploadFile: true,
        loaderUrl: ''
      },
      form: {
        ...chatConfig.getLocalConfig(),
        roomId: parseInt(window.localStorage.roomId || '1')
      }
      
    }
  },
  computed: {
    roomUrl() {
      return this.getRoomUrl(false)
    },
    obsRoomUrl() {
      if (this.roomUrl === '') {
        return ''
      }
      if (this.serverConfig.loaderUrl === '') {
        return this.roomUrl
      }
      let url = new URL(this.serverConfig.loaderUrl)
      url.searchParams.append('url', this.roomUrl)
      return url.href
    }
  },
  watch: {
    roomUrl: _.debounce(function() {
      window.localStorage.roomId = this.form.roomId
      let real_form = this.form
      chatConfig.setLocalConfig(real_form)
    }, 500)
  },
  mounted() {
    this.updateServerConfig()
  },
  methods: {
    async updateServerConfig() {
      try {
        this.serverConfig = (await axios.get('/api/server_info')).data.config
      } catch (e) {
        this.$message.error(`Failed to fetch server information: ${e}`)
      }
    },

    enterBilibili() {
      window.open(`https://live.bilibili.com/${this.form.roomId}`, '_blank')
    },

    addEmoticon() {
      // TODO: 增加图片大小
      this.form.emoticons.splice(0, 0, {
        keyword: '[emoji_keyword]',
        align: 'inline',
        level: 0,
        height: 16,
        url: '\\emoticons\\'
      })
    },

    addPicture() {
      // TODO: 增加图片大小
      this.form.emoticons.splice(0, 0, {
        keyword: '[pic_keyword]',
        align: 'block',
        level: 0,
        height: 64,
        url: '\\emoticons\\'
      })
    },

    delEmoticon(index) {
      this.form.emoticons.splice(index, 1)
    },
    uploadEmoticon() {
      // TODO WIP
    },

    enterRoom() {
      window.open(this.roomUrl, `room ${this.form.roomId}`, 'menubar=0,location=0,scrollbars=0,toolbar=0,width=600,height=600')
    },
    enterTestRoom() {
      window.open(this.getRoomUrl(true), 'test room', 'menubar=0,location=0,scrollbars=0,toolbar=0,width=600,height=600')
    },
    getRoomUrl(isTestRoom) {
      if (!isTestRoom && this.form.roomId === '') {
        return ''
      }

      let query = {
        ...this.form,
        emoticons: JSON.stringify(this.form.emoticons),
        lang: this.$i18n.locale
      }
      delete query.roomId

      let resolved
      if (isTestRoom) {
        resolved = this.$router.resolve({ name: 'test_room', query })
      } else {
        resolved = this.$router.resolve({ name: 'room', params: { roomId: this.form.roomId }, query })
      }
      return `${window.location.protocol}//${window.location.host}${resolved.href}`
    },
    copyUrl() {
      this.$refs.roomUrlInput.select()
      document.execCommand('Copy')
    },
    exportConfig() {
      let cfg = mergeConfig(this.form, chatConfig.DEFAULT_CONFIG)
      download(JSON.stringify(cfg, null, 2), 'blivechat.json', 'application/json')
    },
    importConfig() {
      let input = document.createElement('input')
      input.type = 'file'
      input.accept = 'application/json'
      input.onchange = () => {
        let reader = new window.FileReader()
        reader.onload = () => {
          let cfg
          try {
            cfg = JSON.parse(reader.result)
          } catch (e) {
            this.$message.error(this.$t('home.failedToParseConfig') + e)
            return
          }
          this.importConfigFromObj(cfg)
        }
        reader.readAsText(input.files[0])
      }
      input.click()
    },
    importConfigFromObj(cfg) {
      cfg = mergeConfig(cfg, chatConfig.deepCloneDefaultConfig())
      chatConfig.sanitizeConfig(cfg)
      this.form = {
        ...cfg,
        roomId: this.form.roomId
      }
    }
  }
}
</script>
