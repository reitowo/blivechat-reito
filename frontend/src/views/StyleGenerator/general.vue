<template>
  <div>
    <el-form label-width="150px" size="mini">
      <h3>{{ $t('stylegen.global') }}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.bgColor')">
              <el-color-picker v-model="form.bgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      
      <!--TODO: 一般消息-->
      <h3 @click="copyResult(textMessageStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessage') }}</h3>
      <el-card shadow="never">
        <!--TODO: 一般消息头像-->
        <h4 @click="copyResult(textMessageAvatarStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageAvatar') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageShowAvatar)">
                  {{$t('stylegen.textMessageShowAvatar')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowAvatar"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageAvatarSize)">
                  {{$t('stylegen.textMessageAvatarSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageAvatarSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息用户名-->
        <h4 @click="copyResult(textMessageUserNameStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageUserName') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageShowUserName)">
                  {{$t('stylegen.textMessageShowUserName')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowUserName"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameFont)">
                  {{$t('stylegen.textMessageUserNameFont')}}
                </a>
              </span>
              <font-select v-model="form.textMessageUserNameFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameFontSize)">
                  {{$t('stylegen.textMessageUserNameFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageUserNameFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameLineHeight)">
                  {{$t('stylegen.textMessageUserNameLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageUserNameLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 一般消息用户名描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameOutlineStyle)">
                  {{$t('stylegen.textMessageUserNameOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageUserNameOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameOutlineStyle)">
                  {{$t('stylegen.textMessageUserNameOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageUserNameOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameRandomColor)">
                  {{$t('stylegen.textMessageUserNameRandomColor')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageUserNameRandomColor"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')" :label="$t('stylegen.textMessageShowColon')">
              <span slot="label">
                <a @click="copyResult(textMessageShowColon)">
                  {{$t('stylegen.textMessageShowColon')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowColon"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameColor)">
                  {{$t('stylegen.textMessageUserNameColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageUserNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameOwnerColor)">
                  {{$t('stylegen.textMessageUserNameOwnerColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageUserNameOwnerColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameModeratorColor)">
                  {{$t('stylegen.textMessageUserNameModeratorColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageUserNameModeratorColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameMember3Color)">
                  {{$t('stylegen.textMessageUserNameMember3Color')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageUserNameMember3Color"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameMember2Color)">
                  {{$t('stylegen.textMessageUserNameMember2Color')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageUserNameMember2Color"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageUserNameMember1Color)">
                  {{$t('stylegen.textMessageUserNameMember1Color')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageUserNameMember1Color"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息舰队勋章-->
        <h4 @click="copyResult(textMessageBadgeStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageBadges') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageShowBadges)">
                  {{$t('stylegen.textMessageShowBadges')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowBadges"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageBadgesSize)">
                  {{$t('stylegen.textMessageBadgesSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageBadgesSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息粉丝勋章-->
        <h4 @click="copyResult(textMessageMedalStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageMedal') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageShowMedal)">
                  {{$t('stylegen.textMessageShowMedal')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowMedal"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageShowOnlyOwnerMedal)">
                  {{$t('stylegen.textMessageShowOnlyOwnerMedal')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowOnlyOwnerMedal"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageShowMedalName)">
                  {{$t('stylegen.textMessageShowMedalName')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowMedalName"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageShowMedalLevel)">
                  {{$t('stylegen.textMessageShowMedalLevel')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageShowMedalLevel"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageMedalFontSize)">
                  {{$t('stylegen.fontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageMedalFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageMedalLineHeight)">
                  {{$t('stylegen.textMessageMedalLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageMedalLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息内容-->
        <h4 @click="copyResult(textMessageContentStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageContent') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageContentColor)">
                  {{$t('stylegen.textMessageContentColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageContentColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageContentFont)">
                  {{$t('stylegen.textMessageContentFont')}}
                </a>
              </span>
              <font-select v-model="form.textMessageContentFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageContentFontSize)">
                  {{$t('stylegen.textMessageContentFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageContentFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageContentLineHeight)">
                  {{$t('stylegen.textMessageContentLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageContentLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 一般消息内容描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageContentOutlineSize)">
                  {{$t('stylegen.textMessageContentOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageContentOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageContentOutlineColor)">
                  {{$t('stylegen.textMessageContentOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageContentOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageOnNewLine)">
                  {{$t('stylegen.textMessageOnNewLine')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageOnNewLine"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageMergeSameUser)">
                  {{$t('stylegen.textMessageMergeSameUser')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageMergeSameUser"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageGroupBlockPadding)">
                  {{$t('stylegen.textMessageGroupBlockPadding')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageGroupBlockPadding" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息背景-->
        <h4 @click="copyResult(textMessageBackgroundStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageBg') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item>
              <span slot="label">
                <a>
                  {{$t('stylegen.textMessageUseBarsInsteadOfBg')}}
                </a>
              </span>
              <el-switch v-model="form.textMessageUseBarsInsteadOfBg"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageMessageBgColor)">
                  {{$t('stylegen.textMessageMessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageOwnerMessageBgColor)">
                  {{$t('stylegen.textMessageOwnerMessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageOwnerMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageModeratorMessageBgColor)">
                  {{$t('stylegen.textMessageModeratorMessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageModeratorMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageMember3MessageBgColor)">
                  {{$t('stylegen.textMessageMember3MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageMember3MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageMember2MessageBgColor)">
                  {{$t('stylegen.textMessageMember2MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageMember2MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageMember1MessageBgColor)">
                  {{$t('stylegen.textMessageMember1MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageMember1MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息时间-->
        <h4 @click="copyResult(textMessageTimeStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageTime') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageTimeShow')">
              <el-switch v-model="form.textMessageTimeShow"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageTimeShowRight')">
              <el-switch v-model="form.textMessageTimeShowRight"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageTimeColor')">
              <el-color-picker v-model="form.textMessageTimeColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageTimeFont')">
              <font-select v-model="form.textMessageTimeFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageTimeFontSize')">
              <el-input v-model.number="form.textMessageTimeFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageTimeLineHeight')">
              <el-input v-model.number="form.textMessageTimeLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 一般消息时间描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageTimeOutlineStyle)">
                  {{$t('stylegen.textMessageTimeOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.textMessageTimeOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(textMessageTimeOutlineStyle)">
                  {{$t('stylegen.textMessageTimeOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.textMessageTimeOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息表情-->
        <h4 @click="copyResult(textMessageEmoticonStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageEmoticon') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageEmoticonSize')">
              <el-input v-model.number="form.textMessageEmoticonSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageEmoticonInlineBorderRadius')">
              <el-input v-model.number="form.textMessageEmoticonInlineBorderRadius" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageEmoticonBlockBorderRadius')">
              <el-input v-model.number="form.textMessageEmoticonBlockBorderRadius" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 一般消息动画-->
        <h4 @click="copyResult(textMessageAnimationStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.textMessageAnimation') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageAnimateIn')">
              <el-switch v-model="form.textMessageAnimateIn"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageFadeInTime')">
              <el-input v-model.number="form.textMessageFadeInTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageAnimateOut')">
              <el-switch v-model="form.textMessageAnimateOut"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageFadeOutTime')">
              <el-input v-model.number="form.textMessageFadeOutTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item :label="$t('stylegen.textMessageAnimateOutWaitTime')">
          <el-input v-model.number="form.textMessageAnimateOutWaitTime" type="number" min="0"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageSlide')">
              <el-switch v-model="form.textMessageSlide"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.textMessageReverseSlide')">
              <el-switch v-model="form.textMessageReverseSlide"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <!--TODO: 打赏消息（SC、礼物）-->
      <h3 @click="copyResult(paidMessageStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.paidMessage') }}</h3>
      <el-card shadow="never">
        <!--TODO: 打赏消息弹幕头像-->
        <h4 @click="copyResult(paidMessageAvatarStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.paidMessageAvatar') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageShowAvatar)">
                  {{$t('stylegen.paidMessageShowAvatar')}}
                </a>
              </span>
              <el-switch v-model="form.paidMessageShowAvatar"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageAvatarSize)">
                  {{$t('stylegen.paidMessageAvatarSize')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageAvatarSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- TODO: 打赏消息（SC、礼物）第一行 -->
        <h4 @click="copyResult(paidMessageFirstLineStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.paidMessageFirstLine') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageFirstLineFont)">
                  {{$t('stylegen.paidMessageFirstLineFont')}}
                </a>
              </span>
              <font-select v-model="form.paidMessageFirstLineFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageFirstLineColor)">
                  {{$t('stylegen.paidMessageFirstLineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.paidMessageFirstLineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageFirstLineFontSize)">
                  {{$t('stylegen.paidMessageFirstLineFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageFirstLineFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageFirstLineLineHeight)">
                  {{$t('stylegen.paidMessageFirstLineLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageFirstLineLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 打赏消息（SC、礼物）第一行描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageFirstLineOutlineStyle)">
                  {{$t('stylegen.paidMessageFirstLineOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageFirstLineOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageFirstLineOutlineStyle)">
                  {{$t('stylegen.paidMessageFirstLineOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.paidMessageFirstLineOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- TODO: 打赏消息（SC、礼物）第二行 -->
        <h4 @click="copyResult(paidMessageSecondLineStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.paidMessageSecondLine') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageSecondLineFont)">
                  {{$t('stylegen.paidMessageSecondLineFont')}}
                </a>
              </span>
              <font-select v-model="form.paidMessageSecondLineFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageSecondLineColor)">
                  {{$t('stylegen.paidMessageSecondLineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.paidMessageSecondLineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageSecondLineFontSize)">
                  {{$t('stylegen.paidMessageSecondLineFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageSecondLineFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageSecondLineLineHeight)">
                  {{$t('stylegen.paidMessageSecondLineLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageSecondLineLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 打赏消息（SC、礼物）第二行描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageSecondLineOutlineStyle)">
                  {{$t('stylegen.paidMessageSecondLineOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageSecondLineOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageSecondLineOutlineStyle)">
                  {{$t('stylegen.paidMessageSecondLineOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.paidMessageSecondLineOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- TODO: 打赏消息（SC、礼物）内容行 -->
        <h4 @click="copyResult(paidMessageContentLineStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.paidMessageContentLine') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageContentLineFont)">
                  {{$t('stylegen.paidMessageContentLineFont')}}
                </a>
              </span>
              <font-select v-model="form.paidMessageContentLineFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageContentLineColor)">
                  {{$t('stylegen.paidMessageContentLineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.paidMessageContentLineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageContentLineFontSize)">
                  {{$t('stylegen.paidMessageContentLineFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageContentLineFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageContentLineLineHeight)">
                  {{$t('stylegen.paidMessageContentLineLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageContentLineLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 打赏消息（SC、礼物）内容行描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageContentLineOutlineStyle)">
                  {{$t('stylegen.paidMessageContentLineOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.paidMessageContentLineOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(paidMessageContentLineOutlineStyle)">
                  {{$t('stylegen.paidMessageContentLineOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.paidMessageContentLineOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 打赏消息固定栏-->
        <h4 @click="copyResult(tickerStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.Ticker') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.TickerShowTicker')">
              <el-switch v-model="form.TickerShowTicker"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.TickerShowThingsOtherThanTicker')">
              <el-switch v-model="form.TickerShowThingsOtherThanTicker"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 打赏消息动画-->
        <h4 @click="copyResult(paidMessageAnimationStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.paidMessageAnimation') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.paidMessageAnimateIn')">
              <el-switch v-model="form.paidMessageAnimateIn"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.paidMessageFadeInTime')">
              <el-input v-model.number="form.paidMessageFadeInTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.paidMessageAnimateOut')">
              <el-switch v-model="form.paidMessageAnimateOut"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.paidMessageFadeOutTime')">
              <el-input v-model.number="form.paidMessageFadeOutTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item :label="$t('stylegen.paidMessageAnimateOutWaitTime')">
          <el-input v-model.number="form.paidMessageAnimateOutWaitTime" type="number" min="0"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.paidMessageSlide')">
              <el-switch v-model="form.paidMessageSlide"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.paidMessageReverseSlide')">
              <el-switch v-model="form.paidMessageReverseSlide"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <!--TODO: 上舰消息-->
      <h3 @click="copyResult(membershipMessageStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.membershipMessage') }}</h3>
      <el-card shadow="never">
        <!--TODO: 上舰消息头像-->
        <h4 @click="copyResult(membershipMessageAvatarStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.membershipMessageAvatar') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageShowAvatar)">
                  {{$t('stylegen.membershipMessageShowAvatar')}}
                </a>
              </span>
              <el-switch v-model="form.membershipMessageShowAvatar"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageAvatarSize)">
                  {{$t('stylegen.membershipMessageAvatarSize')}}
                </a>
              </span>
              <el-input v-model.number="form.membershipMessageAvatarSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- TODO: 上舰消息背景 -->
        <h4 @click="copyResult(membershipMessageBgStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.membershipMessageBg') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageShowBg)">
                  {{$t('stylegen.membershipMessageShowBg')}}
                </a>
              </span>
              <el-switch v-model="form.membershipMessageShowBg"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageMember3MessageBgColor)">
                  {{$t('stylegen.membershipMessageMember3MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.membershipMessageMember3MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageMember2MessageBgColor)">
                  {{$t('stylegen.membershipMessageMember2MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.membershipMessageMember2MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageMember1MessageBgColor)">
                  {{$t('stylegen.membershipMessageMember1MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.membershipMessageMember1MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- TODO: 上舰消息第一行 -->
        <h4 @click="copyResult(membershipMessageFirstLineStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.membershipMessageFirstLine') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageFirstLineFont)">
                  {{$t('stylegen.membershipMessageFirstLineFont')}}
                </a>
              </span>
              <font-select v-model="form.membershipMessageFirstLineFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageFirstLineColor)">
                  {{$t('stylegen.membershipMessageFirstLineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.membershipMessageFirstLineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageFirstLineFontSize)">
                  {{$t('stylegen.membershipMessageFirstLineFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.membershipMessageFirstLineFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageFirstLineLineHeight)">
                  {{$t('stylegen.membershipMessageFirstLineLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.membershipMessageFirstLineLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 上舰消息第一行描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageFirstLineOutlineStyle)">
                  {{$t('stylegen.membershipMessageFirstLineOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.membershipMessageFirstLineOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageFirstLineOutlineStyle)">
                  {{$t('stylegen.membershipMessageFirstLineOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.membershipMessageFirstLineOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- TODO: 上舰消息第二行 -->
        <h4 @click="copyResult(membershipMessageSecondLineStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.membershipMessageSecondLine') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageSecondLineFont)">
                  {{$t('stylegen.membershipMessageSecondLineFont')}}
                </a>
              </span>
              <font-select v-model="form.membershipMessageSecondLineFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageSecondLineColor)">
                  {{$t('stylegen.membershipMessageSecondLineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.membershipMessageSecondLineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageSecondLineFontSize)">
                  {{$t('stylegen.membershipMessageSecondLineFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.membershipMessageSecondLineFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageSecondLineLineHeight)">
                  {{$t('stylegen.membershipMessageSecondLineLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.membershipMessageSecondLineLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 上舰消息第二行描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageSecondLineOutlineStyle)">
                  {{$t('stylegen.membershipMessageSecondLineOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.membershipMessageSecondLineOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(membershipMessageSecondLineOutlineStyle)">
                  {{$t('stylegen.membershipMessageSecondLineOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.membershipMessageSecondLineOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 上舰消息动画-->
        <h4 @click="copyResult(membershipMessageAnimationStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.membershipMessageAnimation') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.membershipMessageAnimateIn')">
              <el-switch v-model="form.membershipMessageAnimateIn"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.membershipMessageFadeInTime')">
              <el-input v-model.number="form.membershipMessageFadeInTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.membershipMessageAnimateOut')">
              <el-switch v-model="form.membershipMessageAnimateOut"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.membershipMessageFadeOutTime')">
              <el-input v-model.number="form.membershipMessageFadeOutTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item :label="$t('stylegen.membershipMessageAnimateOutWaitTime')">
          <el-input v-model.number="form.membershipMessageAnimateOutWaitTime" type="number" min="0"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.membershipMessageSlide')">
              <el-switch v-model="form.membershipMessageSlide"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.membershipMessageReverseSlide')">
              <el-switch v-model="form.membershipMessageReverseSlide"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <!--TODO: 互动消息-->
      <h3 @click="copyResult(interactMessageStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessage') }}</h3>
      <el-card shadow="never">
        <h4 @click="copyResult(interactMessageAvatarStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageAvatar') }}</h4>
        <el-row :gutter="20">
        <!--TODO: 互动消息弹幕头像-->
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowAvatar)">
                  {{$t('stylegen.interactMessageShowAvatar')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowAvatar"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageAvatarSize)">
                  {{$t('stylegen.interactMessageAvatarSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageAvatarSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 互动消息弹幕用户名-->
        <h4 @click="copyResult(interactMessageUserNameStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageUserName') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowUserName)">
                  {{$t('stylegen.interactMessageShowUserName')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowUserName"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameFont)">
                  {{$t('stylegen.interactMessageUserNameFont')}}
                </a>
              </span>
              <font-select v-model="form.interactMessageUserNameFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameFontSize)">
                  {{$t('stylegen.interactMessageUserNameFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageUserNameFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameLineHeight)">
                  {{$t('stylegen.interactMessageUserNameLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageUserNameLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 互动消息用户名描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameOutlineStyle)">
                  {{$t('stylegen.interactMessageUserNameOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageUserNameOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameOutlineStyle)">
                  {{$t('stylegen.interactMessageUserNameOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageUserNameOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameRandomColor)">
                  {{$t('stylegen.interactMessageUserNameRandomColor')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageUserNameRandomColor"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')" :label="$t('stylegen.interactMessageShowColon')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowColon)">
                  {{$t('stylegen.interactMessageShowColon')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowColon"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameColor)">
                  {{$t('stylegen.interactMessageUserNameColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageUserNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameOwnerColor)">
                  {{$t('stylegen.interactMessageUserNameOwnerColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageUserNameOwnerColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameModeratorColor)">
                  {{$t('stylegen.interactMessageUserNameModeratorColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageUserNameModeratorColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameMember3Color)">
                  {{$t('stylegen.interactMessageUserNameMember3Color')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageUserNameMember3Color"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameMember2Color)">
                  {{$t('stylegen.interactMessageUserNameMember2Color')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageUserNameMember2Color"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageUserNameMember1Color)">
                  {{$t('stylegen.interactMessageUserNameMember1Color')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageUserNameMember1Color"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 互动消息舰队勋章-->
        <h4 @click="copyResult(interactMessageBadgeStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageBadges') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowBadges)">
                  {{$t('stylegen.interactMessageShowBadges')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowBadges"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageBadgesSize)">
                  {{$t('stylegen.interactMessageBadgesSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageBadgesSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 互动消息粉丝勋章-->
        <h4 @click="copyResult(interactMessageMedalStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageMedal') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowMedal)">
                  {{$t('stylegen.interactMessageShowMedal')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowMedal"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowOnlyOwnerMedal)">
                  {{$t('stylegen.interactMessageShowOnlyOwnerMedal')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowOnlyOwnerMedal"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowMedalName)">
                  {{$t('stylegen.interactMessageShowMedalName')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowMedalName"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageShowMedalLevel)">
                  {{$t('stylegen.interactMessageShowMedalLevel')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageShowMedalLevel"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageMedalFontSize)">
                  {{$t('stylegen.fontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageMedalFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageMedalLineHeight)">
                  {{$t('stylegen.interactMessageMedalLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageMedalLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 互动消息内容-->
        <h4 @click="copyResult(interactMessageContentStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageContent') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageContentColor)">
                  {{$t('stylegen.interactMessageContentColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageContentColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageContentFont)">
                  {{$t('stylegen.interactMessageContentFont')}}
                </a>
              </span>
              <font-select v-model="form.interactMessageContentFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageContentFontSize)">
                  {{$t('stylegen.interactMessageContentFontSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageContentFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageContentLineHeight)">
                  {{$t('stylegen.interactMessageContentLineHeight')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageContentLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 互动消息内容描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageContentOutlineStyle)">
                  {{$t('stylegen.interactMessageContentOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageContentOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageContentOutlineStyle)">
                  {{$t('stylegen.interactMessageContentOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageContentOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 互动消息背景-->
        <h4 @click="copyResult(interactMessageBackgroundStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageBg') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item>
              <span slot="label">
                <a>
                  {{$t('stylegen.interactMessageUseBarsInsteadOfBg')}}
                </a>
              </span>
              <el-switch v-model="form.interactMessageUseBarsInsteadOfBg"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageMessageBgColor)">
                  {{$t('stylegen.interactMessageMessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageOwnerMessageBgColor)">
                  {{$t('stylegen.interactMessageOwnerMessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageOwnerMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageModeratorMessageBgColor)">
                  {{$t('stylegen.interactMessageModeratorMessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageModeratorMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageMember3MessageBgColor)">
                  {{$t('stylegen.interactMessageMember3MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageMember3MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageMember2MessageBgColor)">
                  {{$t('stylegen.interactMessageMember2MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageMember2MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageMember1MessageBgColor)">
                  {{$t('stylegen.interactMessageMember1MessageBgColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageMember1MessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 互动消息时间-->
        <h4 @click="copyResult(interactMessageTimeStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageTime') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageTimeShow')">
              <el-switch v-model="form.interactMessageTimeShow"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageTimeShowRight')">
              <el-switch v-model="form.interactMessageTimeShowRight"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageTimeColor')">
              <el-color-picker v-model="form.interactMessageTimeColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageTimeFont')">
              <font-select v-model="form.interactMessageTimeFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageTimeFontSize')">
              <el-input v-model.number="form.interactMessageTimeFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageTimeLineHeight')">
              <el-input v-model.number="form.interactMessageTimeLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--FIXME: 一般消息时间描边-->
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageTimeOutlineStyle)">
                  {{$t('stylegen.interactMessageTimeOutlineSize')}}
                </a>
              </span>
              <el-input v-model.number="form.interactMessageTimeOutlineSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :title="$t('stylegen.copyBlockCss')">
              <span slot="label">
                <a @click="copyResult(interactMessageTimeOutlineStyle)">
                  {{$t('stylegen.interactMessageTimeOutlineColor')}}
                </a>
              </span>
              <el-color-picker v-model="form.interactMessageTimeOutlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--TODO: 互动消息动画-->
        <h4 @click="copyResult(interactMessageAnimationStyle)" :title="$t('stylegen.copyBlockCss')">{{ $t('stylegen.interactMessageAnimation') }}</h4>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageAnimateIn')">
              <el-switch v-model="form.interactMessageAnimateIn"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageFadeInTime')">
              <el-input v-model.number="form.interactMessageFadeInTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageAnimateOut')">
              <el-switch v-model="form.interactMessageAnimateOut"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageFadeOutTime')">
              <el-input v-model.number="form.interactMessageFadeOutTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item :label="$t('stylegen.interactMessageAnimateOutWaitTime')">
          <el-input v-model.number="form.interactMessageAnimateOutWaitTime" type="number" min="0"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageSlide')">
              <el-switch v-model="form.interactMessageSlide"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.interactMessageReverseSlide')">
              <el-switch v-model="form.interactMessageReverseSlide"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

    </el-form>
  </div>
</template>

<style>
h3:hover,
h4:hover,
.el-form-item__label:hover {
    color: #409eff;
}
</style>

<script>
import _ from 'lodash'

import FontSelect from './FontSelect'
import * as common from './common'
import { mergeConfig } from '@/utils'

export const DEFAULT_CONFIG = {
  // TODO: 一般消息
  textMessageShowAvatar: true,
  textMessageAvatarSize: 24,

  textMessageShowUserName: true,
  textMessageUserNameFont: 'Changa One',
  textMessageUserNameFontSize: 20,
  textMessageUserNameLineHeight: 0,

  textMessageUserNameOutlineSize: 0,
  textMessageUserNameOutlineColor: '#000000',

  textMessageUserNameRandomColor: false,
  textMessageUserNameColor: '#cccccc',
  textMessageUserNameOwnerColor: '#ffd600',
  textMessageUserNameModeratorColor: '#5e84f1',
  textMessageUserNameMember3Color: '#0f9d58',
  textMessageUserNameMember2Color: '#9a30fa',
  textMessageUserNameMember1Color: '#e43f1f',

  textMessageShowBadges: true,
  textMessageShowColon: true,
  textMessageBadgesSize: 20,
  
  textMessageShowMedal: true,
  textMessageShowOnlyOwnerMedal: true,
  textMessageShowMedalName: true,
  textMessageShowMedalLevel: true,
  textMessageMedalFontSize: 14,
  textMessageMedalLineHeight: 0,

  textMessageContentColor: '#ffffff',
  textMessageContentFont: 'Imprima',
  textMessageContentFontSize: 18,
  textMessageContentLineHeight: 0,

  textMessageContentOutlineSize: 2,
  textMessageContentOutlineColor: '#000000',

  textMessageOnNewLine: false,
  textMessageMergeSameUser: false,
  textMessageGroupBlockPadding: 0,

  textMessageUseBarsInsteadOfBg: false,
  textMessageMessageBgColor: 'rgba(204, 204, 204, 0)',
  textMessageOwnerMessageBgColor: 'rgba(255, 214, 0, 0)',
  textMessageModeratorMessageBgColor: 'rgba(94, 132, 241, 0)',
  textMessageMember3MessageBgColor: 'rgba(15, 157, 88, 0)',
  textMessageMember2MessageBgColor: 'rgba(170, 12, 255, 0)',
  textMessageMember1MessageBgColor: 'rgba(255, 12, 12, 0)',

  textMessageTimeShow: false,
  textMessageTimeShowRight: true,
  textMessageTimeFont: 'Imprima',
  textMessageTimeFontSize: 16,
  textMessageTimeLineHeight: 0,
  textMessageTimeColor: '#999999',
  textMessageTimeOutlineSize: 0,
  textMessageTimeOutlineColor: '#000000',

  textMessageEmoticonSize: 48,
  textMessageEmoticonInlineBorderRadius: 0,
  textMessageEmoticonBlockBorderRadius: 4,

  textMessageAnimateIn: false,
  textMessageFadeInTime: 200, // ms
  textMessageAnimateOut: false,
  textMessageFadeOutTime: 30, // s
  textMessageAnimateOutWaitTime: 200, // ms
  textMessageSlide: false,
  textMessageReverseSlide: false,


  // TODO: 打赏消息（SC、礼物）
  paidMessageShowAvatar: true,
  paidMessageAvatarSize: 24,

  paidMessageFirstLineColor: '#ffffff',
  paidMessageFirstLineFont: 'Changa One',
  paidMessageFirstLineFontSize: 20,
  paidMessageFirstLineLineHeight: 0,
  paidMessageFirstLineOutlineSize: 0,
  paidMessageFirstLineOutlineColor: '#000000',

  paidMessageSecondLineColor: '#ffffff',
  paidMessageSecondLineFont: 'Imprima',
  paidMessageSecondLineFontSize: 18,
  paidMessageSecondLineLineHeight: 0,
  paidMessageSecondLineOutlineSize: 0,
  paidMessageSecondLineOutlineColor: '#000000',

  paidMessageContentLineColor: '#ffffff',
  paidMessageContentLineFont: 'Imprima',
  paidMessageContentLineFontSize: 18,
  paidMessageContentLineLineHeight: 0,
  paidMessageContentLineOutlineSize: 0,
  paidMessageContentLineOutlineColor: '#000000',

  paidMessageAnimateIn: false,
  paidMessageFadeInTime: 200, // ms
  paidMessageAnimateOut: false,
  paidMessageFadeOutTime: 30, // s
  paidMessageAnimateOutWaitTime: 200, // ms
  paidMessageSlide: false,
  paidMessageReverseSlide: false,

  // TODO: 上舰消息
  membershipMessageShowAvatar: true,
  membershipMessageAvatarSize: 24,

  membershipMessageShowBg: true,
  membershipMessageMember3MessageBgColor: '#0f9d58',
  membershipMessageMember2MessageBgColor: '#9a30fa',
  membershipMessageMember1MessageBgColor: '#e43f1f',

  membershipMessageFirstLineColor: '#ffffff',
  membershipMessageFirstLineFont: 'Changa One',
  membershipMessageFirstLineFontSize: 20,
  membershipMessageFirstLineLineHeight: 0,
  membershipMessageFirstLineOutlineSize: 0,
  membershipMessageFirstLineOutlineColor: '#000000',

  membershipMessageSecondLineColor: '#ffffff',
  membershipMessageSecondLineFont: 'Imprima',
  membershipMessageSecondLineFontSize: 18,
  membershipMessageSecondLineLineHeight: 0,
  membershipMessageSecondLineOutlineSize: 0,
  membershipMessageSecondLineOutlineColor: '#000000',

  membershipMessageAnimateIn: false,
  membershipMessageFadeInTime: 200, // ms
  membershipMessageAnimateOut: false,
  membershipMessageFadeOutTime: 30, // s
  membershipMessageAnimateOutWaitTime: 200, // ms
  membershipMessageSlide: false,
  membershipMessageReverseSlide: false,
  
  // TODO: 互动消息
  interactMessageShowAvatar: true,
  interactMessageAvatarSize: 24,
  interactMessageShowUserName: true,
  interactMessageUserNameFont: 'Changa One',
  interactMessageUserNameFontSize: 20,
  interactMessageUserNameLineHeight: 0,

  interactMessageUserNameOutlineSize: 0,
  interactMessageUserNameOutlineColor: '#000000',

  interactMessageUserNameRandomColor: false,
  interactMessageUserNameColor: '#cccccc',
  interactMessageUserNameOwnerColor: '#ffd600',
  interactMessageUserNameModeratorColor: '#5e84f1',
  interactMessageUserNameMember3Color: '#0f9d58',
  interactMessageUserNameMember2Color: '#9a30fa',
  interactMessageUserNameMember1Color: '#e43f1f',

  interactMessageShowBadges: true,
  interactMessageShowColon: true,
  interactMessageBadgesSize: 20,
  
  interactMessageShowMedal: true,
  interactMessageShowOnlyOwnerMedal: true,
  interactMessageShowMedalName: true,
  interactMessageShowMedalLevel: true,
  interactMessageMedalFontSize: 14,
  interactMessageMedalLineHeight: 0,

  interactMessageContentColor: '#ffffff',
  interactMessageContentFont: 'Imprima',
  interactMessageContentFontSize: 18,
  interactMessageContentLineHeight: 0,
  interactMessageContentOutlineSize: 2,
  interactMessageContentOutlineColor: '#000000',

  interactMessageUseBarsInsteadOfBg: false,
  interactMessageMessageBgColor: 'rgba(204, 204, 204, 0)',
  interactMessageOwnerMessageBgColor: 'rgba(255, 214, 0, 0)',
  interactMessageModeratorMessageBgColor: 'rgba(94, 132, 241, 0)',
  interactMessageMember3MessageBgColor: 'rgba(15, 157, 88, 0)',
  interactMessageMember2MessageBgColor: 'rgba(170, 12, 255, 0)',
  interactMessageMember1MessageBgColor: 'rgba(255, 12, 12, 0)',

  interactMessageTimeShow: false,
  interactMessageTimeShowRight: true,
  interactMessageTimeFont: 'Imprima',
  interactMessageTimeFontSize: 16,
  interactMessageTimeLineHeight: 0,
  interactMessageTimeColor: '#999999',
  interactMessageTimeOutlineSize: 0,
  interactMessageTimeOutlineColor: '#000000',
  

  interactMessageAnimateIn: false,
  interactMessageFadeInTime: 200, // ms
  interactMessageAnimateOut: false,
  interactMessageFadeOutTime: 30, // s
  interactMessageAnimateOutWaitTime: 200, // ms
  interactMessageSlide: false,
  interactMessageReverseSlide: false,

  // TODO: 固定栏消息
  TickerShowTicker: false,
  TickerShowThingsOtherThanTicker: true,


  bgColor: 'rgba(0, 0, 0, 0)',
}

export default {
  name: 'General',
  components: {
    FontSelect
  },
  props: {
    value: String
  },
  data() {
    return {
      form: this.loadConfig()
    }
  },
  computed: {
    result() {
      // FIXME: 返回所有样式
      return `${this.importStyle}

${common.COMMON_STYLE}

${this.globalStyle}

${this.textMessageStyle}

${this.paidMessageStyle}

${this.membershipMessageStyle}

${this.interactMessageStyle}

${this.tickerStyle}
`
    },
    // TODO: 导入样式（一般是字体相关）
    importStyle() {
      let allFonts = []
      for (let name of ['textMessageUserNameFont', 'textMessageContentFont', 'textMessageTimeFont', 'paidMessageFirstLineFont', 'paidMessageSecondLineFont', 'paidMessageContentLineFont', 'membershipMessageFirstLineFont', 'membershipMessageSecondLineFont', 'interactMessageUserNameFont', 'interactMessageContentFont', 'interactMessageTimeFont']) {
        allFonts.push(this.form[name])
      }
      return common.getImportStyle(allFonts)
    },
    // TODO: 全局设置
    globalStyle() {
      return `/* 全局 Global */
body {
  overflow: hidden;
  ${this.form.bgColor ? `background-color: ${this.form.bgColor};` : ''}
}
`
    },
    // TODO: 一般消息
    textMessageStyle() {
      return `/* 一般消息 textMessageStyle */
${this.textMessageAvatarStyle}
${this.textMessageUserNameStyle}
${this.textMessageBadgeStyle}
${this.textMessageMedalStyle}
${this.textMessageContentStyle}
${this.textMessageBackgroundStyle}
${this.textMessageTimeStyle}
${this.textMessageEmoticonStyle}
${this.textMessageAnimationStyle}
`
    },
    // TODO: 一般消息头像
    textMessageAvatarStyle() {
      return `/* 一般消息头像 TextMessageAvatar */
${this.textMessageShowAvatar}
${this.textMessageAvatarSize}
`
    },
    // NOTE: 一般消息头像显示
    textMessageShowAvatar() {
      return `/* 一般消息头像显示 textMessageShowAvatar */
yt-live-chat-text-message-renderer #author-photo,
yt-live-chat-text-message-renderer #author-photo img {
  ${this.form.textMessageShowAvatar ? '' : 'display: none !important;'}
}
`
    },
    // NOTE: 一般消息头像大小
    textMessageAvatarSize() {
      return `/* 一般消息头像大小 textMessageAvatarSize */
yt-live-chat-text-message-renderer #author-photo,
yt-live-chat-text-message-renderer #author-photo img {
  width: ${this.form.textMessageAvatarSize}px !important;
  height: ${this.form.textMessageAvatarSize}px !important;
  border-radius: ${this.form.textMessageAvatarSize}px !important;
  margin-right: ${this.form.textMessageAvatarSize / 4}px !important;
}
`
    },
    // TODO: 一般消息用户名
    textMessageUserNameStyle() {
      return `/* 一般消息用户名 textMessageUserNameStyle  */
${this.textMessageShowUserName}
${this.textMessageUserNameFont}
${this.textMessageUserNameFontSize}
${this.textMessageUserNameLineHeight}
${this.textMessageUserNameOutlineStyle}
${this.textMessageUserNameColor}

${this.textMessageUserNameRandomColor}

${this.textMessageUserNameOwnerColor}
${this.textMessageUserNameModeratorColor}
${this.textMessageUserNameMember3Color}
${this.textMessageUserNameMember2Color}
${this.textMessageUserNameMember1Color}

${this.textMessageShowColon}
`
    },
    // NOTE: 一般消息用户名显示
    textMessageShowUserName() {
      return `/* 一般消息用户名显示 textMessageShowUserName  */
yt-live-chat-text-message-renderer #author-name {
  ${this.form.textMessageShowUserName ? '' : 'display: none !important;'}
}
`
    },
    // NOTE: 一般消息用户名颜色
    textMessageUserNameColor() {
      return `/* 一般消息用户名颜色 textMessageUserNameColor  */
yt-live-chat-text-message-renderer #author-name {
  ${this.form.textMessageUserNameColor ? `color: ${this.form.textMessageUserNameColor} !important;` : ''}
}
`
    },
    // NOTE: 一般消息用户名字体
    textMessageUserNameFont() {
      return `/* 一般消息用户名字体 textMessageUserNameFont  */
yt-live-chat-text-message-renderer #author-name {
  font-family: "${common.cssEscapeStr(this.form.textMessageUserNameFont)}"${common.FALLBACK_FONTS};
}
`
    },
    // NOTE: 一般消息用户名字体大小
    textMessageUserNameFontSize() {
      return `/* 一般消息用户名字体大小 textMessageUserNameFontSize  */
yt-live-chat-text-message-renderer #author-name {
  font-size: ${this.form.textMessageUserNameFontSize}px !important;
}
`
    },
    // NOTE: 一般消息用户名行高
    textMessageUserNameLineHeight() {
      return `/* 一般消息用户名行高 textMessageUserNameLineHeight  */
yt-live-chat-text-message-renderer #author-name {
  line-height: ${this.form.textMessageUserNameLineHeight || this.form.textMessageUserNameFontSize}px !important;
}
`
    },
    // NOTE: 一般消息用户名描边
    textMessageUserNameOutlineStyle() {
      return `/* 一般消息用户名描边 textMessageUserNameOutlineStyle */
yt-live-chat-text-message-renderer #author-name {
  ${this.outlinesStyle(this.form.textMessageUserNameOutlineSize, this.form.textMessageUserNameOutlineColor)}
}`
    },
    // NOTE: 一般消息用户名随机颜色
    textMessageUserNameRandomColor() {
      return `/* 一般消息用户名随机颜色 textMessageUserNameRandomColor  */
yt-live-chat-text-message-renderer #content #author-name {
  ${this.form.textMessageUserNameRandomColor ? `color: var(--repeated-text-color) !important; ` : ''}
}
`
    },
    // NOTE: 一般消息用户名房主颜色
    textMessageUserNameOwnerColor() {
      return `/* 一般消息用户名房主颜色 textMessageUserNameOwnerColor  */
yt-live-chat-text-message-renderer #author-name[type="owner"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="owner"] {
  ${this.form.textMessageUserNameOwnerColor ? `color: ${this.form.textMessageUserNameOwnerColor} !important;` : ''}
}
`
    },
    // NOTE: 一般消息用户名房管颜色
    textMessageUserNameModeratorColor() {
      return `/* 一般消息用户名房管颜色 textMessageUserNameModeratorColor  */
yt-live-chat-text-message-renderer #author-name[type="moderator"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {
  ${this.form.textMessageUserNameModeratorColor ? `color: ${this.form.textMessageUserNameModeratorColor} !important;` : ''}
}
`
    },
    // NOTE: 一般消息用户名舰队颜色
    textMessageUserNameMember3Color() {
      return `/* 一般消息用户名舰队颜色 textMessageUserNameMember3Color  */
yt-live-chat-text-message-renderer #author-name[type="member"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] {
  ${this.form.textMessageUserNameMember3Color ? `color: ${this.form.textMessageUserNameMember3Color} !important;` : ''}
}
`
    },
    // NOTE: 一般消息用户名提督颜色
    textMessageUserNameMember2Color() {
      return `/* 一般消息用户名提督颜色 textMessageUserNameMember2Color  */
yt-live-chat-text-message-renderer[privilegeType="2"] #author-name,
yt-live-chat-text-message-renderer[privilegeType="2"] yt-live-chat-author-badge-renderer {
  ${this.form.textMessageUserNameMember2Color ? `color: ${this.form.textMessageUserNameMember2Color} !important;` : ''}
}
`
    },
    // NOTE: 一般消息用户名总督颜色
    textMessageUserNameMember1Color() {
      return `/* 一般消息用户名总督颜色 textMessageUserNameMember1Color  */
yt-live-chat-text-message-renderer[privilegeType="1"] #author-name,
yt-live-chat-text-message-renderer[privilegeType="1"] yt-live-chat-author-badge-renderer {
  ${this.form.textMessageUserNameMember1Color ? `color: ${this.form.textMessageUserNameMember1Color} !important;` : ''}
}
`
    },
    // NOTE: 一般消息用户名后显示冒号
    textMessageShowColon() {
      return `/* 一般消息用户名后显示冒号 textMessageShowColon  */
${!this.form.textMessageShowColon ? '' : `yt-live-chat-text-message-renderer #author-name::after {
  content: ":";
  margin-left: ${this.form.outlineSize}px;
}`}
`
    },
    // TODO: 一般消息舰队勋章
    textMessageBadgeStyle() {
      return `/* 一般消息舰队勋章 textMessageBadgeStyle */
${this.textMessageShowBadges}
${this.textMessageBadgesSize}
`
    },
    // NOTE: 一般消息舰队勋章显示
    textMessageShowBadges() {
      return `/* 一般消息舰队勋章显示 textMessageShowBadges */
yt-live-chat-text-message-renderer #chat-badges {
  ${this.form.textMessageShowBadges ? '' : 'display: none !important;'}
  vertical-align: text-top !important;
}
`
    },
    // NOTE: 一般消息舰队勋章大小
    textMessageBadgesSize() {
      return `/* 一般消息舰队勋章大小 textMessageBadgesSize */
yt-live-chat-text-message-renderer img.yt-live-chat-author-badge-renderer,
yt-live-chat-text-message-renderer yt-icon.yt-live-chat-author-badge-renderer {
  width: ${this.form.textMessageBadgesSize}px;
  height: ${this.form.textMessageBadgesSize}px;
}
`
    },
    // TODO: 一般消息粉丝勋章
    textMessageMedalStyle() {
      return `/* 一般消息粉丝勋章 textMessageMedalStyle */
${this.textMessageShowMedal}
${this.textMessageShowMedalName}
${this.textMessageShowMedalLevel}
${this.textMessageMedalFontSize}
${this.textMessageMedalLineHeight}
`
    },
    // NOTE: 一般消息粉丝勋章显示
    textMessageShowMedal() {
      return `/* 一般消息粉丝勋章 textMessageShowMedal */
yt-live-chat-text-message-renderer yt-live-chat-author-medal-renderer {
    ${this.form.textMessageShowMedal && !this.form.textMessageShowOnlyOwnerMedal ? `display: flex;` : 'display: none;'}
}
yt-live-chat-text-message-renderer yt-live-chat-author-medal-renderer[is-fan-group] {
  ${this.form.textMessageShowMedal ? `display: flex;` : ''}
}
`
    },
    // NOTE: 一般消息粉丝勋章只显示当前房间勋章
    textMessageShowOnlyOwnerMedal() {
      return this.textMessageShowMedal
    },
    // NOTE: 一般消息粉丝勋章显示勋章名
    textMessageShowMedalName() {
      return `/* 一般消息粉丝勋章 textMessageShowMedalName */
yt-live-chat-text-message-renderer #medal-name.yt-live-chat-author-medal-renderer {
  ${this.form.textMessageShowMedalName ? '' : `visibility: hidden;
  width: 0;
  height: 0;
  padding: 0;`}
}
`
    },
    // NOTE: 一般消息粉丝勋章显示勋章等级
    textMessageShowMedalLevel() {
      return `/* 一般消息粉丝勋章显示勋章等级 textMessageShowMedalLevel */
yt-live-chat-text-message-renderer #medal-level.yt-live-chat-author-medal-renderer {
  ${this.form.textMessageShowMedalLevel ? '' : `visibility: hidden;
  width: 0;
  height: 0;
  padding: 0;`}
}
`
    },
    // NOTE: 一般消息粉丝勋章字体大小
    textMessageMedalFontSize() {
      return `/* 一般消息粉丝勋章字体大小 textMessageMedalFontSize */
yt-live-chat-text-message-renderer #medal-name.yt-live-chat-author-medal-renderer {
  font-size: ${this.form.textMessageMedalFontSize}px !important;
}
yt-live-chat-text-message-renderer #medal-level.yt-live-chat-author-medal-renderer {
  font-size: ${this.form.textMessageMedalFontSize}px !important;
}
`
    },
    // NOTE: 一般消息粉丝勋章行高
    textMessageMedalLineHeight() {
      return `/* 一般消息粉丝勋章 textMessageMedalLineHeight */
yt-live-chat-text-message-renderer #medal-name.yt-live-chat-author-medal-renderer {
  line-height: ${this.form.textMessageMedalLineHeight || this.form.textMessageMedalFontSize}px !important;
}
yt-live-chat-text-message-renderer #medal-level.yt-live-chat-author-medal-renderer {
  line-height: ${this.form.textMessageMedalLineHeight || this.form.textMessageMedalFontSize}px !important;
}
`
    },
    // TODO: 一般消息内容
    textMessageContentStyle() {
      return `/* 一般消息内容 textMessageContentStyle */
${this.textMessageContentColor}
${this.textMessageContentFont}
${this.textMessageContentFontSize}
${this.textMessageContentLineHeight}
${this.textMessageContentOutlineStyle}
${this.textMessageOnNewLine}
${this.textMessageMergeSameUser}
`
    },
    // NOTE: 一般消息内容颜色
    textMessageContentColor() {
      return `/* 一般消息内容颜色 textMessageContentColor */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  ${this.form.textMessageContentColor ? `color: ${this.form.textMessageContentColor} !important;` : ''}
}
`
    },
    // NOTE: 一般消息内容字体
    textMessageContentFont() {
      return `/* 一般消息内容字体 textMessageContentFont */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  font-family: "${common.cssEscapeStr(this.form.textMessageContentFont)}"${common.FALLBACK_FONTS};
}
`
    },
    // NOTE: 一般消息内容字体大小
    textMessageContentFontSize() {
      return `/* 一般消息内容字体大小 textMessageContentFontSize */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  font-size: ${this.form.textMessageContentFontSize}px !important;
}
`
    },
    // NOTE: 一般消息内容行高
    textMessageContentLineHeight() {
      return `/* 一般消息内容行高 textMessageContentLineHeight */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  line-height: ${this.form.textMessageContentLineHeight || this.form.textMessageContentFontSize}px !important;
}
`
    },
    // NOTE: 一般消息内容描边
    textMessageContentOutlineStyle() {
      return `/* 一般消息内容描边 textMessageContentOutlineStyle */
yt-live-chat-text-message-renderer #message {
  ${this.outlinesStyle(this.form.textMessageContentOutlineSize, this.form.textMessageContentOutlineColor)}
}`
    },
    // NOTE: 一般消息内容在新行显示
    textMessageOnNewLine() {
      return `/* 一般消息内容在新行显示 textMessageOnNewLine */
${this.form.textMessageOnNewLine ? `yt-live-chat-text-message-renderer #image-and-message {
  display: block !important;
}` : `yt-live-chat-text-message-renderer #image-and-message {
  display: inline !important;
  overflow: visible !important;
}`}
`
    },
    // NOTE: 一般消息合并同用户内容为组
    textMessageMergeSameUser() {
      return `/* 一般消息合并同用户内容为组 textMessageMergeSameUser */
${this.form.textMessageMergeSameUser ? `/* Thread 设定 */
#thread {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
#thread img.yt-img-shadow {
    visibility: hidden;
    height: 0;

}
#thread #card yt-live-chat-author-chip {
    display: none;
}
yt-live-chat-text-message-renderer #content {
  margin-top: ${this.form.textMessageGroupBlockPadding}px;
}
/* 单独处理圆角 */
yt-live-chat-text-message-renderer #thread>#card:first-child #content{
    margin-top:4px;
}
#thread>#card:first-child yt-live-chat-author-chip {
    display: flex;
}
#thread>#card:first-child img.yt-img-shadow {
    visibility: visible;
    height: auto;
}` : ``}

yt-live-chat-text-message-renderer #message {
  display: inline !important;
  overflow: visible !important;
}
`
    },
    // NOTE: 一般消息内容组内间距
    textMessageGroupBlockPadding() {
      return this.textMessageMergeSameUser
    },
    // TODO: 一般消息背景
    textMessageBackgroundStyle() {
      return `/* 一般消息背景 textMessageBackgroundStyle */
${this.textMessageMessageBgColor}
${this.textMessageOwnerMessageBgColor}
${this.textMessageModeratorMessageBgColor}
${this.textMessageMember3MessageBgColor}
${this.textMessageMember2MessageBgColor}
${this.textMessageMember1MessageBgColor}
`
    },
    // NOTE: 一般消息消息背景色
    textMessageMessageBgColor() {
      return this.getTextMessageBgStyleForAuthorType('', this.form.textMessageMessageBgColor)
    },
    // NOTE: 一般消息消息主播背景色
    textMessageOwnerMessageBgColor() {
      return this.getTextMessageBgStyleForAuthorType('owner', this.form.textMessageOwnerMessageBgColor)
    },
    // NOTE: 一般消息消息房管背景色
    textMessageModeratorMessageBgColor() {
      return this.getTextMessageBgStyleForAuthorType('moderator', this.form.textMessageModeratorMessageBgColor)
    },
    // NOTE: 一般消息消息舰长消息背景色
    textMessageMember3MessageBgColor() {
      return `${this.getTextMessageBgStyleForAuthorType('member', this.form.textMessageMember3MessageBgColor)}
${this.getTextMessageBgStyleForPrivilegeType('3', this.form.textMessageMember3MessageBgColor)}
      `
    },
    // NOTE: 一般消息消息提督消息背景色
    textMessageMember2MessageBgColor() {
      return this.getTextMessageBgStyleForPrivilegeType('2', this.form.textMessageMember2MessageBgColor)
    },
    // NOTE: 一般消息消息总督消息背景色
    textMessageMember1MessageBgColor() {
      return this.getTextMessageBgStyleForPrivilegeType('1', this.form.textMessageMember1MessageBgColor)
    },
    // TODO: 一般消息时间
    textMessageTimeStyle() {
      return `${common.getTextMessageTimeStyle(this.form)}
/* 一般消息时间描边 textMessageTimeStyle */
#timestamp.yt-live-chat-text-message-renderer {
  ${this.outlinesStyle(this.form.textMessageTimeOutlineSize, this.form.textMessageTimeOutlineColor)}
}`
    },
    // TODO: 一般消息表情
    textMessageEmoticonStyle() {
      return `/* 一般消息表情 textMessageEmoticonStyle */
yt-live-chat-text-message-renderer #image-and-message .emoji {
  width: auto !important;
  height: ${this.form.textMessageEmoticonSize}px !important;
}

#image-and-message img[display="block"] {
  border-radius: ${this.form.textMessageEmoticonBlockBorderRadius}px;
}

#image-and-message img[display="inline"] {
  position: relative;
  top: 3px;
  border-radius: ${this.form.textMessageEmoticonInlineBorderRadius}px;
}
`
    },
    // TODO: 一般消息动画
    textMessageAnimationStyle() {
      return common.getTextMessageAnimationStyle(this.form)
    },
    // TODO: 打赏消息（SC、礼物）
    paidMessageStyle() {
      return `/* 打赏消息（SC、礼物） paidMessageStyle */
yt-live-chat-paid-message-renderer {
  margin: 4px 0 !important;
}
${this.paidMessageAvatarStyle}
${this.paidMessageFirstLineStyle}
${this.paidMessageSecondLineStyle}
${this.paidMessageContentLineStyle}
${this.paidMessageAnimationStyle}
`
    },
    // TODO: 打赏消息弹幕头像
    paidMessageAvatarStyle() {
      return `/* 打赏消息头像 TextMessageAvatar */
${this.paidMessageShowAvatar}
${this.paidMessageAvatarSize}
`
    },
    // NOTE: 打赏消息头像显示
    paidMessageShowAvatar() {
      return `/* 打赏消息头像显示 paidMessageShowAvatar */
yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo img {
  ${this.form.paidMessageShowAvatar ? '' : 'display: none !important;'}
}
`
    },
    // NOTE: 打赏消息头像大小
    paidMessageAvatarSize() {
      return `/* 打赏消息头像大小 paidMessageAvatarSize */
yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo img {
  width: ${this.form.paidMessageAvatarSize}px !important;
  height: ${this.form.paidMessageAvatarSize}px !important;
  border-radius: ${this.form.paidMessageAvatarSize}px !important;
  margin-right: ${this.form.paidMessageAvatarSize / 4}px !important;
}
`
    },
    // TODO: 打赏消息（SC、礼物）第一行
    paidMessageFirstLineStyle() {
      return `/* 打赏消息（SC、礼物）消息第一行 paidMessageFirstLineStyle */
${this.paidMessageFirstLineColor}
${this.paidMessageFirstLineFont}
${this.paidMessageFirstLineFontSize}
${this.paidMessageFirstLineLineHeight}
${this.paidMessageFirstLineOutlineStyle}
`
    },
    // NOTE: 打赏消息（SC、礼物）第一行颜色
    paidMessageFirstLineColor() {
      return `/* 打赏消息（SC、礼物）第一行颜色 paidMessageFirstLineColor */
yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name * {
  ${this.form.paidMessageFirstLineColor ? `color: ${this.form.paidMessageFirstLineColor} !important;` : ''}
}`
    },
    // NOTE: 打赏消息（SC、礼物）第一行字体
    paidMessageFirstLineFont() {
      return `/* 打赏消息（SC、礼物）第一行字体 paidMessageFirstLineFont */
yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name * {
  font-family: "${common.cssEscapeStr(this.form.paidMessageFirstLineFont)}"${common.FALLBACK_FONTS};
}`
    },
    // NOTE: 打赏消息（SC、礼物）第一行字体大小
    paidMessageFirstLineFontSize() {
      return `/* 打赏消息（SC、礼物）第一行字体大小 paidMessageFirstLineFontSize */
yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name * {
  font-size: ${this.form.paidMessageFirstLineFontSize}px !important;
}`
    },
    // NOTE: 打赏消息（SC、礼物）第一行行高
    paidMessageFirstLineLineHeight() {
      return `/* 打赏消息（SC、礼物）第一行行高 paidMessageFirstLineLineHeight */
yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name * {
  line-height: ${this.form.paidMessageFirstLineLineHeight || this.form.paidMessageFirstLineFontSize}px !important;
}`
    },
    // NOTE:打赏消息（SC、礼物）第一行描边
    paidMessageFirstLineOutlineStyle() {
      return `/*打赏消息（SC、礼物）第一行描边 paidMessageFirstLineOutlineStyle */
yt-live-chat-paid-message-renderer #author-name {
  ${this.outlinesStyle(this.form.paidMessageFirstLineOutlineSize, this.form.paidMessageFirstLineOutlineColor)}
}`
    },
    // TODO: 打赏消息（SC、礼物）第二行
    paidMessageSecondLineStyle() {
      return `/* 打赏消息（SC、礼物）消息第二行 paidMessageSecondLineStyle */
${this.paidMessageSecondLineColor}
${this.paidMessageSecondLineFont}
${this.paidMessageSecondLineFontSize}
${this.paidMessageSecondLineLineHeight}
${this.paidMessageSecondLineOutlineStyle}
`
    },
    // NOTE: 打赏消息（SC、礼物）第二行颜色
    paidMessageSecondLineColor() {
      return `/* 打赏消息（SC、礼物）第二行颜色 paidMessageSecondLineColor */
yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  ${this.form.paidMessageSecondLineColor ? `color: ${this.form.paidMessageSecondLineColor} !important;` : ''}
}`
    },
    // NOTE: 打赏消息（SC、礼物）第二行字体
    paidMessageSecondLineFont() {
      return `/* 打赏消息（SC、礼物）第二行字体 paidMessageSecondLineFont */
yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  font-family: "${common.cssEscapeStr(this.form.paidMessageSecondLineFont)}"${common.FALLBACK_FONTS};
}`
    },
    // NOTE: 打赏消息（SC、礼物）第二行字体大小
    paidMessageSecondLineFontSize() {
      return `/* 打赏消息（SC、礼物）第二行字体大小 paidMessageSecondLineFontSize */
yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  font-size: ${this.form.paidMessageSecondLineFontSize}px !important;
}`
    },
    // NOTE: 打赏消息（SC、礼物）第二行行高
    paidMessageSecondLineLineHeight() {
      return `/* 打赏消息（SC、礼物）第二行行高 paidMessageSecondLineLineHeight */
yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  line-height: ${this.form.paidMessageSecondLineLineHeight || this.form.paidMessageSecondLineFontSize}px !important;
}`
    },
    // NOTE:打赏消息（SC、礼物）第二行描边
    paidMessageSecondLineOutlineStyle() {
      return `/*打赏消息（SC、礼物）第二行描边 paidMessageSecondLineOutlineStyle */
yt-live-chat-paid-message-renderer #purchase-amount {
  ${this.outlinesStyle(this.form.paidMessageSecondLineOutlineSize, this.form.paidMessageSecondLineOutlineColor)}
}`
    },
    // TODO: 打赏消息（SC、礼物）内容行
    paidMessageContentLineStyle() {
      return `/* 打赏消息（SC、礼物）内容行 paidMessageContentLineStyle */
${this.paidMessageContentLineColor}
${this.paidMessageContentLineFont}
${this.paidMessageContentLineFontSize}
${this.paidMessageContentLineLineHeight}
`
    },
    // NOTE: 打赏消息（SC、礼物）内容行颜色
    paidMessageContentLineColor() {
      return `/* 打赏消息（SC、礼物）内容行颜色 paidMessageContentLineColor */
yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
  ${this.form.paidMessageContentLineColor ? `color: ${this.form.paidMessageContentLineColor} !important;` : ''}
}`
    },
    // NOTE: 打赏消息（SC、礼物）内容行字体
    paidMessageContentLineFont() {
      return `/* 打赏消息（SC、礼物）内容行字体 paidMessageContentLineFont */
yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
  font-family: "${common.cssEscapeStr(this.form.paidMessageContentLineFont)}"${common.FALLBACK_FONTS};
}`
    },
    // NOTE: 打赏消息（SC、礼物）内容行字体大小
    paidMessageContentLineFontSize() {
      return `/* 打赏消息（SC、礼物）内容行字体大小 paidMessageContentLineFontSize */
yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
  font-size: ${this.form.paidMessageContentLineFontSize}px !important;
}`
    },
    // NOTE: 打赏消息（SC、礼物）内容行行高
    paidMessageContentLineLineHeight() {
      return `/* 打赏消息（SC、礼物）内容行行高 paidMessageContentLineLineHeight */
yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
  line-height: ${this.form.paidMessageContentLineLineHeight || this.form.paidMessageContentLineFontSize}px !important;
}`
    },
    // NOTE:打赏消息（SC、礼物）内容行描边
    paidMessageContentLineOutlineStyle() {
      return `/*打赏消息（SC、礼物）内容行描边 paidMessageContentLineOutlineStyle */
yt-live-chat-paid-message-renderer #content {
  ${this.outlinesStyle(this.form.paidMessageContentLineOutlineSize, this.form.paidMessageContentLineOutlineColor)}
}`
    },
    // TODO: 打赏消息动画
    paidMessageAnimationStyle() {
      return common.getPaidMessageAnimationStyle(this.form)
    },
    // TODO: 上舰消息
    membershipMessageStyle() {
      return `/* 上舰消息 membershipMessageStyle */
${this.membershipMessageAvatarStyle}
${this.membershipMessageBgStyle}
${this.membershipMessageFirstLineStyle}
${this.membershipMessageSecondLineStyle}
${this.membershipMessageAnimationStyle}
`
    },
    // TODO: 上舰消息头像
    membershipMessageAvatarStyle() {
      return `/* 上舰消息头像 TextMessageAvatar */
${this.membershipMessageShowAvatar}
${this.membershipMessageAvatarSize}
`
    },
    // NOTE: 上舰消息头像显示
    membershipMessageShowAvatar() {
      return `/* 上舰消息头像显示 membershipMessageShowAvatar */
yt-live-chat-membership-item-renderer #author-photo,
yt-live-chat-membership-item-renderer #author-photo img {
  ${this.form.membershipMessageShowAvatar ? '' : 'display: none !important;'}
}
`
    },
    // NOTE: 上舰消息头像大小
    membershipMessageAvatarSize() {
      return `/* 上舰消息头像大小 membershipMessageAvatarSize */
yt-live-chat-membership-item-renderer #author-photo,
yt-live-chat-membership-item-renderer #author-photo img {
  width: ${this.form.membershipMessageAvatarSize}px !important;
  height: ${this.form.membershipMessageAvatarSize}px !important;
  border-radius: ${this.form.membershipMessageAvatarSize}px !important;
  margin-right: ${this.form.membershipMessageAvatarSize / 4}px !important;
}
`
    },
    // TODO: 上舰消息背景
    membershipMessageBgStyle() {
      return `/* 上舰消息背景 membershipMessageBgStyle */
${this.membershipMember3MessageBgColor}
${this.membershipMember2MessageBgColor}
${this.membershipMember1MessageBgColor}
${this.membershipMessageShowBg}
`
    },
    // NOTE: 上舰消息背景显示
    membershipMessageShowBg() {
      return `/* 上舰消息背景显示 membershipMessageShowBg */
yt-live-chat-membership-item-renderer #card,
yt-live-chat-membership-item-renderer #header {
  ${this.form.membershipMessageShowBg ? `background-color: ${this.form.textMessageUserNameMember3Color} !important;
  margin: 4px 0 !important;` : `background-color: transparent !important;
  box-shadow: none !important;
  margin: 0 !important;`}
}`
    },
    // NOTE: 上舰消息舰长消息背景色
    membershipMessageMember3MessageBgColor() {
      return `/* 上舰消息舰长消息背景色 membershipMessageMember3MessageBgColor */
yt-live-chat-membership-item-renderer[privilegeType="3"] #card,
yt-live-chat-membership-item-renderer[privilegeType="3"] #header {
  background-color: ${this.form.membershipMessageMember3MessageBgColor} !important;
}
`
    },
    // NOTE: 上舰消息提督消息背景色
    membershipMessageMember2MessageBgColor() {
      return `/* 上舰消息提督消息背景色 membershipMessageMember2MessageBgColor */
yt-live-chat-membership-item-renderer[privilegeType="2"] #card,
yt-live-chat-membership-item-renderer[privilegeType="2"] #header {
  background-color: ${this.form.membershipMessageMember2MessageBgColor} !important;
}
`
    },
    // NOTE: 上舰消息总督消息背景色
    membershipMessageMember1MessageBgColor() {
      return `/* 上舰消息总督消息背景色 membershipMessageMember1MessageBgColor */
yt-live-chat-membership-item-renderer[privilegeType="1"] #card,
yt-live-chat-membership-item-renderer[privilegeType="1"] #header {
  background-color: ${this.form.membershipMessageMember1MessageBgColor} !important;
}
`
    },
    // TODO: 上舰消息第一行
    membershipMessageFirstLineStyle() {
      return `/* 上舰消息第一行 membershipMessageFirstLineStyle */
${this.membershipMessageFirstLineColor}
${this.membershipMessageFirstLineFont}
${this.membershipMessageFirstLineFontSize}
${this.membershipMessageFirstLineLineHeight}
${this.membershipMessageFirstLineOutlineStyle}
`
    },
    // NOTE: 上舰消息第一行字体颜色
    membershipMessageFirstLineColor() {
      return `/* 上舰消息第一行字体颜色 membershipMessageFirstLineColor */
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  ${this.form.membershipMessageFirstLineColor ? `color: ${this.form.membershipMessageFirstLineColor} !important;` : ''}
}
`
    },
    // NOTE: 上舰消息第一行字体
    membershipMessageFirstLineFont() {
      return `/* 上舰消息第一行字体 membershipMessageFirstLineFont */
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  font-family: "${common.cssEscapeStr(this.form.membershipMessageFirstLineFont)}"${common.FALLBACK_FONTS};
}
`
    },
    // NOTE: 上舰消息第一行字体大小
    membershipMessageFirstLineFontSize() {
      return `/* 上舰消息第一行字体大小 membershipMessageFirstLineFontSize */
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  font-size: ${this.form.membershipMessageFirstLineFontSize}px !important;
}
`
    },
    // NOTE: 上舰消息第一行行高
    membershipMessageFirstLineLineHeight() {
      return `/* 上舰消息第一行行高 membershipMessageFirstLineLineHeight */
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  line-height: ${this.form.membershipMessageFirstLineLineHeight || this.form.membershipMessageFirstLineFontSize}px !important;
}
`
    },
    // NOTE:上舰消息第一行描边
    membershipMessageFirstLineOutlineStyle() {
      return `/*上舰消息第一行描边 membershipMessageFirstLineOutlineStyle */
yt-live-chat-membership-item-renderer #header-content-inner-column {
  ${this.outlinesStyle(this.form.membershipMessageFirstLineOutlineSize, this.form.membershipMessageFirstLineOutlineColor)}
}`
    },
    // TODO: 上舰消息第二行
    membershipMessageSecondLineStyle() {
      return `/* 上舰消息第二行 membershipMessageSecondLineStyle */
${this.membershipMessageSecondLineColor}
${this.membershipMessageSecondLineFont}
${this.membershipMessageSecondLineFontSize}
${this.membershipMessageSecondLineLineHeight}
${this.membershipMessageSecondLineOutlineStyle}
`
    },
    // NOTE: 上舰消息第二行字体颜色
    membershipMessageSecondLineColor() {
      return `/* 上舰消息第二行字体颜色 membershipMessageSecondLineColor */
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  ${this.form.membershipMessageSecondLineColor ? `color: ${this.form.membershipMessageSecondLineColor} !important;` : ''}
}
`
    },
    // NOTE: 上舰消息第二行字体
    membershipMessageSecondLineFont() {
      return `/* 上舰消息第二行字体 membershipMessageSecondLineFont */
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  font-family: "${common.cssEscapeStr(this.form.membershipMessageSecondLineFont)}"${common.FALLBACK_FONTS};
}
`
    },
    // NOTE: 上舰消息第二行字体大小
    membershipMessageSecondLineFontSize() {
      return `/* 上舰消息第二行字体大小 membershipMessageSecondLineFontSize */
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  font-size: ${this.form.membershipMessageSecondLineFontSize}px !important;
}
`
    },
    // NOTE: 上舰消息第二行行高
    membershipMessageSecondLineLineHeight() {
      return `/* 上舰消息第二行行高 membershipMessageSecondLineLineHeight */
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  line-height: ${this.form.membershipMessageSecondLineLineHeight || this.form.membershipMessageSecondLineFontSize}px !important;
}
`
    },
    // NOTE:上舰消息第二行描边
    membershipMessageSecondLineOutlineStyle() {
      return `/*上舰消息第二行描边 membershipMessageSecondLineOutlineStyle */
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  ${this.outlinesStyle(this.form.membershipMessageSecondLineOutlineSize, this.form.membershipMessageSecondLineOutlineColor)}
}`
    },
    // TODO: 上舰消息动画
    membershipMessageAnimationStyle() {
      return common.getMembershipMessageAnimationStyle(this.form)
    },
    // TODO: 互动消息
    interactMessageStyle() {
      return `/* 互动消息弹幕 interactMessageStyle */
${this.interactMessageAvatarStyle}
${this.interactMessageUserNameStyle}
${this.interactMessageBadgeStyle}
${this.interactMessageMedalStyle}
${this.interactMessageContentStyle}
${this.interactMessageBackgroundStyle}
${this.interactMessageTimeStyle}
${this.interactMessageAnimationStyle}
`
    },
    // TODO: 互动消息头像
    interactMessageAvatarStyle() {
      return `/* 互动消息头像 TextMessageAvatar */
${this.interactMessageShowAvatar}
${this.interactMessageAvatarSize}
`
    },
    // NOTE: 互动消息头像显示
    interactMessageShowAvatar() {
      return `/* 互动消息头像显示 interactMessageShowAvatar */
yt-live-chat-interact-message-renderer #author-photo,
yt-live-chat-interact-message-renderer #author-photo img {
  ${this.form.interactMessageShowAvatar ? '' : 'display: none !important;'}
}
`
    },
    // NOTE: 互动消息头像大小
    interactMessageAvatarSize() {
      return `/* 互动消息头像大小 interactMessageAvatarSize */
yt-live-chat-interact-message-renderer #author-photo,
yt-live-chat-interact-message-renderer #author-photo img {
  width: ${this.form.interactMessageAvatarSize}px !important;
  height: ${this.form.interactMessageAvatarSize}px !important;
  border-radius: ${this.form.interactMessageAvatarSize}px !important;
  margin-right: ${this.form.interactMessageAvatarSize / 4}px !important;
}
`
    },
    // TODO: 互动消息用户名
    interactMessageUserNameStyle() {
      return `/* 互动消息弹幕用户名 interactMessageUserNameStyle  */
${this.interactMessageShowUserName}
${this.interactMessageUserNameFont}
${this.interactMessageUserNameFontSize}
${this.interactMessageUserNameLineHeight}
${this.interactMessageUserNameColor}

${this.interactMessageUserNameOwnerColor}
${this.interactMessageUserNameModeratorColor}
${this.interactMessageUserNameMember3Color}
${this.interactMessageUserNameMember2Color}
${this.interactMessageUserNameMember1Color}

${this.interactMessageShowColon}
`
    },
    // NOTE: 互动消息弹幕用户名显示
    interactMessageShowUserName() {
      return `/* 互动消息弹幕用户名显示 interactMessageShowUserName  */
yt-live-chat-interact-message-renderer #author-name {
  ${this.form.interactMessageShowUserName ? '' : 'display: none !important;'}
}
`
    },
    // NOTE: 互动消息弹幕用户名颜色
    interactMessageUserNameColor() {
      return `/* 互动消息弹幕用户名颜色 interactMessageUserNameColor  */
yt-live-chat-interact-message-renderer #author-name {
  ${this.form.interactMessageUserNameColor ? `color: ${this.form.interactMessageUserNameColor} !important;` : ''}
}
`
    },
    // NOTE: 互动消息弹幕用户名字体
    interactMessageUserNameFont() {
      return `/* 互动消息弹幕用户名字体 interactMessageUserNameFont  */
yt-live-chat-interact-message-renderer #author-name {
  font-family: "${common.cssEscapeStr(this.form.interactMessageUserNameFont)}"${common.FALLBACK_FONTS};
}
`
    },
    // NOTE: 互动消息弹幕用户名字体大小
    interactMessageUserNameFontSize() {
      return `/* 互动消息弹幕用户名字体大小 interactMessageUserNameFontSize  */
yt-live-chat-interact-message-renderer #author-name {
  font-size: ${this.form.interactMessageUserNameFontSize}px !important;
}
`
    },
    // NOTE: 互动消息弹幕用户名行高
    interactMessageUserNameLineHeight() {
      return `/* 互动消息弹幕用户名行高 interactMessageUserNameLineHeight  */
yt-live-chat-interact-message-renderer #author-name {
  line-height: ${this.form.interactMessageUserNameLineHeight || this.form.interactMessageUserNameFontSize}px !important;
}
`
    },
    // NOTE: 互动消息用户名描边
    interactMessageUserNameOutlineStyle() {
      return `/* 互动消息用户名描边 interactMessageUserNameOutlineStyle */
yt-live-chat-interact-message-renderer #author-name {
  ${this.outlinesStyle(this.form.interactMessageUserNameOutlineSize, this.form.interactMessageUserNameOutlineColor)}
}`
    },
    // NOTE: 互动消息弹幕用户名房主颜色
    interactMessageUserNameOwnerColor() {
      return `/* 互动消息弹幕用户名房主颜色 interactMessageUserNameOwnerColor  */
yt-live-chat-interact-message-renderer #author-name[type="owner"],
yt-live-chat-interact-message-renderer yt-live-chat-author-badge-renderer[type="owner"] {
  ${this.form.interactMessageUserNameOwnerColor ? `color: ${this.form.interactMessageUserNameOwnerColor} !important;` : ''}
}
`
    },
    // NOTE: 互动消息弹幕用户名房管颜色
    interactMessageUserNameModeratorColor() {
      return `/* 互动消息弹幕用户名房管颜色 interactMessageUserNameModeratorColor  */
yt-live-chat-interact-message-renderer #author-name[type="moderator"],
yt-live-chat-interact-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {
  ${this.form.interactMessageUserNameModeratorColor ? `color: ${this.form.interactMessageUserNameModeratorColor} !important;` : ''}
}
`
    },
    // NOTE: 互动消息弹幕用户名舰队颜色
    interactMessageUserNameMember3Color() {
      return `/* 互动消息弹幕用户名舰队颜色 interactMessageUserNameMember3Color  */
yt-live-chat-interact-message-renderer[is-fan-group][privilegeType="3"] #author-name,
yt-live-chat-interact-message-renderer[is-fan-group][privilegeType="3"] yt-live-chat-author-badge-renderer {
  ${this.form.interactMessageUserNameMember3Color ? `color: ${this.form.interactMessageUserNameMember3Color} !important;` : ''}
}
`
    },
    // NOTE: 互动消息弹幕用户名提督颜色
    interactMessageUserNameMember2Color() {
      return `/* 互动消息弹幕用户名提督颜色 interactMessageUserNameMember2Color  */
yt-live-chat-interact-message-renderer[is-fan-group][privilegeType="2"] #author-name,
yt-live-chat-interact-message-renderer[is-fan-group][privilegeType="2"] yt-live-chat-author-badge-renderer {
  ${this.form.interactMessageUserNameMember2Color ? `color: ${this.form.interactMessageUserNameMember2Color} !important;` : ''}
}
`
    },
    // NOTE: 互动消息弹幕用户名总督颜色
    interactMessageUserNameMember1Color() {
      return `/* 互动消息弹幕用户名总督颜色 interactMessageUserNameMember1Color  */
yt-live-chat-interact-message-renderer[is-fan-group][privilegeType="1"] #author-name,
yt-live-chat-interact-message-renderer[is-fan-group][privilegeType="1"] yt-live-chat-author-badge-renderer {
  ${this.form.interactMessageUserNameMember1Color ? `color: ${this.form.interactMessageUserNameMember1Color} !important;` : ''}
}
`
    },
    // NOTE: 互动消息弹幕用户名后显示冒号
    interactMessageShowColon() {
      return `/* 互动消息弹幕用户名后显示冒号 interactMessageShowColon  */
${!this.form.interactMessageShowColon ? '' : `yt-live-chat-interact-message-renderer #author-name::after {
  content: ":";
  margin-left: ${this.form.outlineSize}px;
}`}
`
    },
    // TODO: 互动消息舰队勋章
    interactMessageBadgeStyle() {
      return `/* 互动消息舰队勋章 interactMessageBadgeStyle */
${this.interactMessageShowBadges}
${this.interactMessageBadgesSize}
`
    },
    // NOTE: 互动消息舰队勋章显示
    interactMessageShowBadges() {
      return `/* 互动消息舰队勋章显示 interactMessageShowBadges */
yt-live-chat-interact-message-renderer[is-fan-group] #chat-badges {
  ${this.form.interactMessageShowBadges ? '' : 'display: none !important;'}
  vertical-align: interact-top !important;
}
`
    },
    // NOTE: 互动消息舰队勋章大小
    interactMessageBadgesSize() {
      return `/* 互动消息舰队勋章大小 interactMessageBadgesSize */
yt-live-chat-interact-message-renderer[is-fan-group] img.yt-live-chat-author-badge-renderer,
yt-live-chat-interact-message-renderer[is-fan-group] yt-icon.yt-live-chat-author-badge-renderer {
  width: ${this.form.interactMessageBadgesSize}px;
  height: ${this.form.interactMessageBadgesSize}px;
}
`
    },
    // TODO: 互动消息粉丝勋章
    interactMessageMedalStyle() {
      return `/* 互动消息粉丝勋章 interactMessageMedalStyle */
${this.interactMessageShowMedal}
${this.interactMessageShowMedalName}
${this.interactMessageShowMedalLevel}
${this.interactMessageMedalFontSize}
${this.interactMessageMedalLineHeight}
`
    },
    // NOTE: 互动消息粉丝勋章显示
    interactMessageShowMedal() {
      return `/* 互动消息粉丝勋章 interactMessageShowMedal */
yt-live-chat-interact-message-renderer yt-live-chat-author-medal-renderer {
    ${this.form.interactMessageShowMedal && !this.form.interactMessageShowOnlyOwnerMedal ? `display: flex;` : 'display: none;'}
}
yt-live-chat-interact-message-renderer[is-fan-group] yt-live-chat-author-medal-renderer {
  ${this.form.interactMessageShowMedal ? `display: flex;` : ''}
}
`
    },
    // NOTE: 互动消息粉丝勋章只显示当前房间勋章
    interactMessageShowOnlyOwnerMedal() {
      return this.interactMessageShowMedal
    },
    // NOTE: 互动消息粉丝勋章显示勋章名
    interactMessageShowMedalName() {
      return `/* 互动消息粉丝勋章 interactMessageShowMedalName */
yt-live-chat-interact-message-renderer #medal-name.yt-live-chat-author-medal-renderer {
  ${this.form.interactMessageShowMedalName ? '' : `visibility: hidden;
  width: 0;
  height: 0;
  padding: 0;`}
}
`
    },
    // NOTE: 互动消息粉丝勋章显示勋章等级
    interactMessageShowMedalLevel() {
      return `/* 互动消息粉丝勋章显示勋章等级 interactMessageShowMedalLevel */
yt-live-chat-interact-message-renderer #medal-level.yt-live-chat-author-medal-renderer {
  ${this.form.interactMessageShowMedalLevel ? '' : `visibility: hidden;
  width: 0;
  height: 0;
  padding: 0;`}
}
`
    },
    // NOTE: 互动消息粉丝勋章字体大小
    interactMessageMedalFontSize() {
      return `/* 互动消息粉丝勋章字体大小 interactMessageMedalFontSize */
yt-live-chat-interact-message-renderer #medal-name.yt-live-chat-author-medal-renderer {
  font-size: ${this.form.interactMessageMedalFontSize}px !important;
}
yt-live-chat-interact-message-renderer #medal-level.yt-live-chat-author-medal-renderer {
  font-size: ${this.form.interactMessageMedalFontSize}px !important;
}
`
    },
    // NOTE: 互动消息粉丝勋章行高
    interactMessageMedalLineHeight() {
      return `/* 互动消息粉丝勋章 interactMessageMedalLineHeight */
yt-live-chat-interact-message-renderer #medal-name.yt-live-chat-author-medal-renderer {
  line-height: ${this.form.interactMessageMedalLineHeight || this.form.interactMessageMedalFontSize}px !important;
}
yt-live-chat-interact-message-renderer #medal-level.yt-live-chat-author-medal-renderer {
  line-height: ${this.form.interactMessageMedalLineHeight || this.form.interactMessageMedalFontSize}px !important;
}
`
    },
    // TODO: 互动消息内容
    interactMessageContentStyle() {
      return `/* 互动消息内容 interactMessageContentStyle */
${this.interactMessageContentColor}
${this.interactMessageContentFont}
${this.interactMessageContentFontSize}
${this.interactMessageContentLineHeight}
`
    },
    // NOTE: 互动消息内容颜色
    interactMessageContentColor() {
      return `/* 互动消息内容颜色 interactMessageContentColor */
yt-live-chat-interact-message-renderer #message,
yt-live-chat-interact-message-renderer #message * {
  ${this.form.interactMessageContentColor ? `color: ${this.form.interactMessageContentColor} !important;` : ''}
}
`
    },
    // NOTE: 互动消息内容字体
    interactMessageContentFont() {
      return `/* 互动消息内容字体 interactMessageContentFont */
yt-live-chat-interact-message-renderer #message,
yt-live-chat-interact-message-renderer #message * {
  font-family: "${common.cssEscapeStr(this.form.interactMessageContentFont)}"${common.FALLBACK_FONTS};
}
`
    },
    // NOTE: 互动消息内容字体大小
    interactMessageContentFontSize() {
      return `/* 互动消息内容字体大小 interactMessageContentFontSize */
yt-live-chat-interact-message-renderer #message,
yt-live-chat-interact-message-renderer #message * {
  font-size: ${this.form.interactMessageContentFontSize}px !important;
}
`
    },
    // NOTE: 互动消息内容行高
    interactMessageContentLineHeight() {
      return `/* 互动消息内容行高 interactMessageContentLineHeight */
yt-live-chat-interact-message-renderer #message,
yt-live-chat-interact-message-renderer #message * {
  line-height: ${this.form.interactMessageContentLineHeight || this.form.interactMessageContentFontSize}px !important;
}
`
    },
    // NOTE: 互动消息内容描边
    interactMessageContentOutlineStyle() {
      return `/* 互动消息内容描边 interactMessageContentOutlineStyle */
yt-live-chat-interact-message-renderer #message {
  ${this.outlinesStyle(this.form.interactMessageContentOutlineSize, this.form.interactMessageContentOutlineColor)}
}`
    },
    // TODO: 互动消息背景
    interactMessageBackgroundStyle() {
      return `/* 互动消息背景 interactMessageBackgroundStyle */
${this.interactMessageMessageBgColor}
${this.interactMessageOwnerMessageBgColor}
${this.interactMessageModeratorMessageBgColor}
${this.interactMessageMember3MessageBgColor}
${this.interactMessageMember2MessageBgColor}
${this.interactMessageMember1MessageBgColor}
`
    },
    // NOTE: 互动消息消息背景色
    interactMessageMessageBgColor() {
      return this.getInteractMessageBgStyleForAuthorType('', this.form.interactMessageMessageBgColor)
    },
    // NOTE: 互动消息消息主播背景色
    interactMessageOwnerMessageBgColor() {
      return this.getInteractMessageBgStyleForAuthorType('owner', this.form.interactMessageOwnerMessageBgColor)
    },
    // NOTE: 互动消息消息房管背景色
    interactMessageModeratorMessageBgColor() {
      return this.getInteractMessageBgStyleForAuthorType('moderator', this.form.interactMessageModeratorMessageBgColor)
    },
    // NOTE: 互动消息消息舰长消息背景色
    interactMessageMember3MessageBgColor() {
      return `${this.getInteractMessageBgStyleForAuthorType('member', this.form.interactMessageMember3MessageBgColor)}
${this.getInteractMessageBgStyleForPrivilegeType('3', this.form.interactMessageMember3MessageBgColor)}
      `
    },
    // NOTE: 互动消息消息提督消息背景色
    interactMessageMember2MessageBgColor() {
      return this.getInteractMessageBgStyleForPrivilegeType('2', this.form.interactMessageMember2MessageBgColor)
    },
    // NOTE: 互动消息消息总督消息背景色
    interactMessageMember1MessageBgColor() {
      return this.getInteractMessageBgStyleForPrivilegeType('1', this.form.interactMessageMember1MessageBgColor)
    },
    // TODO: 互动消息时间
    interactMessageTimeStyle() {
      return `${common.getInteractMessageTimeStyle(this.form)}
/* 互动消息时间描边 interactMessageContentOutlineStyle */
#timestamp.yt-live-chat-interact-message-renderer {
  ${this.outlinesStyle(this.form.interactMessageTimeOutlineSize, this.form.interactMessageTimeOutlineColor)}
}`
    },
    // TODO: 互动消息动画
    interactMessageAnimationStyle() {
      return common.getInteractMessageAnimationStyle(this.form)
    },
    // TODO: 固定栏样式
    tickerStyle() {
      return `/* 固定栏样式 tickerStyle */
${this.form.TickerShowTicker ? '' : `yt-live-chat-ticker-renderer {
  display: none !important;
}`}

${this.form.TickerShowThingsOtherThanTicker ? '' : `yt-live-chat-item-list-renderer {
  display: none !important;
}`}

yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer *,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer * {
  ${this.form.paidMessageSecondLineColor ? `color: ${this.form.paidMessageSecondLineColor} !important;` : ''}
  font-family: "${common.cssEscapeStr(this.form.paidMessageSecondLineFont)}"${common.FALLBACK_FONTS};
}`
    },

  },
  // TODO: 样式生成器 末尾
  watch: {
    result(val) {
      this.$emit('input', val)
      this.saveConfig()
    }
  },
  created() {
    this.$emit('input', this.result)
  },
  methods: {
    copyResult(content) {
      navigator.clipboard.writeText(content).then(
        () => {
          console.log("粘贴文本成功")
        },
        () => {
          console.log("clipboard write failed")
        }
      )

    },
    saveConfig: _.debounce(function() {
      let config = mergeConfig(this.form, DEFAULT_CONFIG)
      window.localStorage.stylegenConfig = JSON.stringify(config)
    }, 500),
    loadConfig() {
      try {
        return mergeConfig(JSON.parse(window.localStorage.stylegenConfig), DEFAULT_CONFIG)
      } catch {
        return { ...DEFAULT_CONFIG }
      }
    },
    resetConfig() {
      this.form = { ...DEFAULT_CONFIG }
    },
    // TODO: 计算 outlines
    outlinesStyle(outlineSize, outlineColor) {
      if (!outlineSize) {
        return ''
      }
      let shadow = []
      for (let x = -outlineSize; x <= outlineSize; x += Math.ceil(outlineSize / 4)) {
        for (let y = -outlineSize; y <= outlineSize; y += Math.ceil(outlineSize / 4)) {
          shadow.push(`${x}px ${y}px ${outlineColor}`)
        }
      }
      return `text-shadow: ${shadow.join(', ')};`
    },
    // TODO: 通过 privilegeType 来设定样式
    getTextMessageBgStyleForPrivilegeType(privilegeType, color) {
      let typeSelector = privilegeType ? `[privilegeType="${privilegeType}"]` : ''
      if (!this.form.textMessageUseBarsInsteadOfBg) {
        return `yt-live-chat-text-message-renderer${typeSelector},
yt-live-chat-text-message-renderer${typeSelector}[is-highlighted] {
  ${color ? `background-color: ${color} !important;` : ''}
}`
      } else {
        return `yt-live-chat-text-message-renderer${typeSelector}::after {
  ${color ? `border: 2px solid ${color};` : ''}
  content: "";
  position: absolute;
  display: block;
  left: 8px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  box-sizing: border-box;
  border-radius: 2px;
}`
      }
    },
    // TODO: 通过 authorType 来设定样式
    getTextMessageBgStyleForAuthorType(authorType, color) {
      let typeSelector = authorType ? `[author-type="${authorType}"]` : ''
      if (!this.form.textMessageUseBarsInsteadOfBg) {
        return `yt-live-chat-text-message-renderer${typeSelector},
yt-live-chat-text-message-renderer${typeSelector}[is-highlighted] {
  ${color ? `background-color: ${color} !important;` : ''}
}`
      } else {
        return `yt-live-chat-text-message-renderer${typeSelector}::after {
  ${color ? `border: 2px solid ${color};` : ''}
  content: "";
  position: absolute;
  display: block;
  left: 8px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  box-sizing: border-box;
  border-radius: 2px;
}`
      }
    },
    getInteractMessageBgStyleForPrivilegeType(privilegeType, color) {
      let typeSelector = privilegeType ? `[is-fan-group][privilegeType="${privilegeType}"]` : ''
      if (!this.form.textMessageUseBarsInsteadOfBg) {
        return `yt-live-chat-interact-message-renderer${typeSelector},
yt-live-chat-interact-message-renderer${typeSelector}[is-highlighted] {
  ${color ? `background-color: ${color} !important;` : ''}
}`
      } else {
        return `yt-live-chat-interact-message-renderer${typeSelector}::after {
  ${color ? `border: 2px solid ${color};` : ''}
  content: "";
  position: absolute;
  display: block;
  left: 8px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  box-sizing: border-box;
  border-radius: 2px;
}`
      }
    },
    getInteractMessageBgStyleForAuthorType(authorType, color) {
      let typeSelector = authorType ? `[author-type="${authorType}"]` : ''
      if (!this.form.textMessageUseBarsInsteadOfBg) {
        return `yt-live-chat-interact-message-renderer${typeSelector},
yt-live-chat-interact-message-renderer${typeSelector}[is-highlighted] {
  ${color ? `background-color: ${color} !important;` : ''}
}`
      } else {
        return `yt-live-chat-interact-message-renderer${typeSelector}::after {
  ${color ? `border: 2px solid ${color};` : ''}
  content: "";
  position: absolute;
  display: block;
  left: 8px;
  top: 4px;
  bottom: 4px;
  width: 1px;
  box-sizing: border-box;
  border-radius: 2px;
}`
      }
    }
  }
}
</script>
