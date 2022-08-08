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
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item>
                    <span slot="label" :title="$t('home.openSpecificTutorial')">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fee625d8" target="_blank">
                        {{$t('home.showDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :label="$t('home.danmakuAtBottom')" :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#585f2fe0" target="_blank">
                        {{$t('home.danmakuAtBottom')}}
                      </a>
                    </span>
                    <el-switch v-model="form.danmakuAtBottom"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :label="$t('home.tickerAtButtom')" :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#585f2fe0" target="_blank">
                        {{$t('home.tickerAtButtom')}}
                      </a>
                    </span>
                    <el-switch v-model="form.tickerAtButtom"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fee625d8" target="_blank">
                        {{$t('home.showSuperchat')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showSuperchat"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fee625d8" target="_blank">
                        {{$t('home.showNewMember')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showNewMember"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fee625d8" target="_blank">
                        {{$t('home.showGift')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showGift"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fee625d8" target="_blank">
                        {{$t('home.showGiftInfo')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showGiftInfo"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="10">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#6cf0cceb" target="_blank">
                        {{$t('home.minGiftPrice')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.minGiftPrice" type="number" min="0" :placeholder="$t('home.minGiftPricePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="10">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#6cf0cceb" target="_blank">
                        {{$t('home.minTickerPrice')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.minTickerPrice" type="number" min="0.1" :placeholder="$t('home.minGiftPricePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="4">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#5ff3a246" target="_blank">
                        {{$t('home.mergeSimilarDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.mergeSimilarDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#5ff3a246" target="_blank">
                        {{$t('home.mergeGift')}}
                      </a>
                    </span>
                    <el-switch v-model="form.mergeGift"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#aa478443" target="_blank">
                        {{$t('home.maxNumber')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.maxNumber" type="number" min="1"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>

          <el-tab-pane :label="$t('home.special')">
            <el-card shadow="never">
              <el-form-item :title="$t('home.openSpecificTutorial')">
                <span slot="label">
                  <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#adabf3ed" target="_blank">
                    {{$t('home.allowTextColorSetting')}}
                  </a>
                </span>
                <el-switch v-model="form.allowTextColorSetting"></el-switch>
              </el-form-item>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="4">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#28ad9edf" target="_blank">
                        {{$t('home.blockTranslateDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.blockTranslateDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="4">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#28ad9edf" target="_blank">
                        {{$t('home.showTranslateDanmakuOnly')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showTranslateDanmakuOnly"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#28ad9edf" target="_blank">
                        {{$t('home.translationSign')}}
                      </a>
                    </span>
                    <el-input v-model.trim="form.translationSign"
                    maxLength='1'
                    :placeholder="$t('home.onlyOneCharacter')"
                  ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXOffset')}}
                      </a>
                    </span>
                    <el-switch v-model="form.randomXOffset"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXRangeMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomXRangeMin" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXRangeMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomXRangeMax" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYOffset')}}
                      </a>
                    </span>
                    <el-switch v-model="form.randomYOffset"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYRangeMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomYRangeMin" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYRangeMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomYRangeMax" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatTime')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatTime" type="number" min="0" :placeholder="$t('home.timePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceThreshold')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceThreshold" type="number" min="0" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXInitialOffset')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomXInitialOffset" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYInitialOffset')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomYInitialOffset" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceXMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceXMin" type="number" :placeholder="$t('home.floatDistanceXPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceXMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceXMax" type="number" :placeholder="$t('home.floatDistanceXPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceYMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceYMin" type="number" :placeholder="$t('home.floatDistanceYPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceYMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceYMax" type="number" :placeholder="$t('home.floatDistanceYPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            
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
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#zhyBk" target="_blank">
                        {{$t('home.mergeSameUserDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.mergeSameUserDanmaku" :disabled="form.autoTranslate"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#zhyBk" target="_blank">
                        {{$t('home.mergeSameUserDanmakuInterval')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.mergeSameUserDanmakuInterval" type="number" min="1"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fwwLM" target="_blank">
                        {{$t('home.fadeOutNum')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.fadeOutNum" type="number" min="1"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fwwLM" target="_blank">
                        {{$t('home.pinTime')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.pinTime" type="number" min="1" :placeholder="$t('home.pinTimePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#PUfUK" target="_blank">
                        {{$t('home.relayMessagesByServer')}}
                      </a>
                    </span>
                    <el-switch v-model="form.relayMessagesByServer"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#PUfUK" target="_blank">
                        {{$t('home.autoTranslate')}}
                      </a>
                    </span>
                    <el-switch v-model="form.autoTranslate" :disabled="!serverConfig.enableTranslate || !form.relayMessagesByServer || form.mergeSameUserDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-form-item :title="$t('home.openSpecificTutorial')">
              <span slot="label">
                <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#PUfUK" target="_blank">
                  {{$t('home.giftUsernamePronunciation')}}
                </a>
              </span>
              <el-radio-group v-model="form.giftUsernamePronunciation">
                <el-radio label="">{{$t('home.dontShow')}}</el-radio>
                <el-radio label="pinyin">{{$t('home.pinyin')}}</el-radio>
                <el-radio label="kana">{{$t('home.kana')}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane :label="$t('home.emoticon')">
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#147119dc" target="_blank">
                        {{$t('home.autoRenderOfficialEmoji')}}
                      </a>
                    </span>
                    <el-switch v-model="form.autoRenderOfficialEmoji"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#OIykb" target="_blank">
                        {{$t('home.useLocalEmoticonSetting')}}
                      </a>
                    </span>
                    <el-switch v-model="form.useLocalEmoticonSetting"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#185e7d0c" target="_blank">
                        {{$t('home.isSkipSameImage')}}
                      </a>
                    </span>
                    <el-switch v-model="form.isSkipSameImage"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#8337b9f9" target="_blank">
                        {{$t('home.isGreedyMatch')}}
                      </a>
                    </span>
                    <el-switch v-model="form.isGreedyMatch"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#16314229" target="_blank">
                        {{$t('home.imageShowType')}}
                      </a>
                    </span>
                    <el-select ref="imageShowTypeInput" v-model="form.imageShowType">
                      <el-option v-for="imageShowType in $t('home.imageShowTypes')" :key="imageShowType" v-bind:value="imageShowType.id">{{imageShowType.name}}
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#90180b29" target="_blank">
                        {{$t('home.maxImage')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.maxImage" type="number"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#90180b29" target="_blank">
                        {{$t('home.maxEmoji')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.maxEmoji" type="number"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <p>
              <el-button type="primary" icon="el-icon-plus" @click="addEmoticon">{{$t('home.addEmoticon')}}</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="addPicture">{{$t('home.addPicture')}}</el-button>
              <el-button type="danger" icon="el-icon-minus" @click="delAllEmoticon">{{$t('home.delAllEmoticon')}}</el-button>
              <el-button type="primary" @click="exportEmoticonConfig">{{$t('home.exportEmoticonConfig')}}</el-button>
              <el-button type="primary" @click="openSpecificTutorial('https://www.yuque.com/doodle-irifi/ueaigm/laogg2#67902a4a')" style="background: #bed742; border-color: #bed742;">{{$t('home.openTutorial')}}</el-button>
            </p>
            <el-table :data="form.emoticons">
              <el-table-column prop="keyword" width="170" :label="$t('home.emoticonKeyword')">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.keyword"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="url" :label="$t('home.emoticonUrl')">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.url"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="align" width="140" :label="$t('home.emoticonAlign')">
                <template slot-scope="scope">
                  <el-select ref="imageAlignTypeInput" v-model="scope.row.align">
                    <el-option v-for="imageAlignType in $t('home.imageAlignTypes')" :key="imageAlignType" v-bind:value="imageAlignType.id">{{imageAlignType.name}}
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="level" width="140" :label="$t('home.imageLevel')">
                <template slot-scope="scope">
                  <el-select ref="imageLevelInput" v-model.number="scope.row.level" type="number">
                    <el-option v-for="imageLevel in $t('home.imageLevels')" :key="imageLevel" v-bind:value="imageLevel.id">{{imageLevel.name}}
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="height" width="170" :label="$t('home.emoticonHeight')">
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
            <el-button type="primary" @click="openTutorial" style="background: #bed742; border-color: #bed742;">{{$t('home.openTutorial')}}</el-button>
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

<style>
.el-tab-pane>.el-card {
  border-radius: 8px;
  border: none;
  background-color: none;
}
.el-tab-pane>.el-card:hover {
  background-color: #ebeef5;
}

.el-form-item__label:hover {
    color: #409eff;
}

.el-card__body {
  padding: 20px 20px 4px 20px;
}

a {
  color: #606266;
}
a:hover {
  color: #409eff;
}


</style>
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
    openTutorial() {
      window.open(`https://www.yuque.com/doodle-irifi/ueaigm/laogg2`, '_blank')
    },
    openSpecificTutorial(url) {
      window.open(url, '_blank')
    },
    addEmoticon() {
      this.form.emoticons.splice(0, 0, {
        keyword: '[emoji_keyword]',
        align: 'inline',
        level: 0,
        height: 16,
        url: '\\emoticons\\'
      })
    },

    addPicture() {
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
    delAllEmoticon(index) {
      this.form.emoticons.splice(0)
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
    exportEmoticonConfig() {
      download(JSON.stringify(this.form.emoticons, null, 2), 'emoticons.json', 'application/json')
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
