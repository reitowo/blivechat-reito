export default {
  sidebar: {
    home: 'Home',
    stylegen: 'Style Generator',
    help: 'Help',
    projectAddress: 'Project Address',
    giftRecordOfficial: 'Official Super Chat Record',
  },
  home: {
    roomIdEmpty: "Room ID can't be empty",
    roomIdInteger: 'Room ID must be positive integer',

    general: 'General',
    roomId: 'Room ID',
    showDanmaku: 'Show messages',
    showSuperchat: 'Show Super Chats',
    showNewMember: 'Show New Member',
    showGift: 'Show Gift',
    showGiftInfo: 'Show gift info',
    mergeSimilarDanmaku: 'Merge similar messages',
    mergeGift: 'Merge gifts',
    danmakuAtBottom: 'Align messages to bottom',
    tickerAtButtom: 'Show on-top Super Chats at bottom',

    showTranslateDanmakuOnly: 'Show translation message only',
    blockTranslateDanmaku: 'Block translation message',
    translationSign: 'translation sign',
    onlyOneCharacter: 'one character only, like:【',

    minGiftPrice: 'Min price of Super Chats to show (CNY)',
    minTickerPrice: 'Min price of on-top Super Chats to keep  (CNY)',
    maxNumber: 'Max number of messages',
    fadeOutNum: 'number of fade out message',
    pinTime: 'message remain time(0 remain forever)',
    
    
    autoRenderOfficialEmoji: 'auto add official emoji',
    isGreedyMatch: 'is greedy match',
    imageShowType: 'Way image show',
    imageShowTypes: [
      {
        id: '0',
        name: 'Replace the text without sign'
      },
      {
          id: '1',
          name: 'Add after message'
      }
    ],
    maxImage: 'Max number of　pictures',
    maxEmoji: 'Max number of　emojis',

    imageAlignType: 'Way image align',
    imageAlignTypes: [
      {
        id: 'inline',
        name: 'inline(emoji)'
      },
      {
        id: 'block',
        name: 'block(pic)'
      }
    ],
    imageLevel: 'Image sending level',
    imageLevels: [
      {
        id: 0,
        name: 'Anyone'
      },
      {
        id: 3,
        name: 'normal-member'
      },
      {
        id: 2,
        name: 'advanced-member'
      },
      {
        id: 1,
        name: 'ultra-member'
      }
    ],


    block: 'Block',
    giftDanmaku: 'Block system messages (gift effect)',
    blockLevel: 'Block user level lower than',
    informalUser: 'Block informal users',
    unverifiedUser: 'Block unverified users',
    blockKeywords: 'Block keywords',
    onePerLine: 'One per line',
    blockUsers: 'Block users',
    blockMedalLevel: 'Block medal level lower than',

    advanced: 'Advanced',
    relayMessagesByServer: 'Relay messages by server',
    autoTranslate: 'Auto translate messages to Japanese (requires relay messages by server)',
    giftUsernamePronunciation: 'Pronunciation of gift username',
    dontShow: 'None',
    pinyin: 'Pinyin',
    kana: 'Kana',

    testing: 'Testing',
    minDanmakuInterval: 'min interval of message sending',
    maxDanmakuInterval: 'max interval of message sending',

    emoticon: 'Custom Emotes',
    emoticonKeyword: 'Emote Code',
    emoticonAlign: 'Emote Align',
    emoticonHeight: 'Emote Height',
    emoticonUrl: 'URL',
    operation: 'Operation',
    addEmoticon: 'Add emote(inline)',
    addPicture: 'Add picture(block)',

    roomUrl: 'Room URL',
    copy: 'Copy',
    enterBilibili: 'Enter bilibili room',

    enterRoom: 'Enter room',
    enterTestRoom: 'Enter test room',
    exportConfig: 'Export config',
    importConfig: 'Import config',

    failedToParseConfig: 'Failed to parse config: '
  },
  stylegen: {
    legacy: 'Classic',
    lineLike: 'Line-like',

    light: 'light',
    dark: 'dark',

    global: 'Global setting',
    danmakuAtBottom: 'Show messages at bottom',
    tickerAtButtom: 'Show on-top Super Chats at bottom',

    outlines: 'Outlines',
    showOutlines: 'Show outlines',
    outlineSize: 'Outline size',
    outlineColor: 'Outline color',

    avatars: 'Avatars',
    showAvatars: 'Show avatars',
    avatarSize: 'Avatar size',

    userNames: 'User Names',
    showUserNames: 'Show user names',
    font: 'Font',
    fontSize: 'Font size',
    lineHeight: 'Line height (0 for default)',
    randomUserNamesColor: 'Random user name color',
    normalColor: 'Normal color',
    ownerColor: 'Owner color',
    moderatorColor: 'Moderator color',
    memberColor: 'Member color',
    showBadges: 'Show user badges',
    showColon: 'Show colon after name',

    medal: 'Fan badge',
    showMedal: 'Show fan badge',
    showOnlyOwnerMedal: 'Show only owner badge',
    showMedalName: 'Show badge name',
    showMedalLevel: 'Show badge level',

    emoticonSize: 'Emoticon size', 
    emoticonInlineBorderRadius: 'Inline emoticon border radius',
    emoticonBlockBorderRadius: 'Block picture border radius',
    
    messages: 'Messages',
    color: 'Color',
    onNewLine: 'On new line',

    time: 'Timestamps',
    showTime: 'Show timestamps',

    backgrounds: 'Backgrounds',
    bgColor: 'Background color',
    useBarsInsteadOfBg: 'Use bars instead of backgrounds',
    messageBgColor: 'Message background color',
    ownerMessageBgColor: 'Owner background color',
    moderatorMessageBgColor: 'Moderator background color',
    memberMessageBgColor: 'Member background color',

    scAndNewMember: 'Super Chat / New Member',
    firstLineFont: 'First line font',
    firstLineFontSize: 'First line font size',
    firstLineLineHeight: 'First line line height (0 for default)',
    firstLineColor: 'First line color',
    secondLineFont: 'Second line font',
    secondLineFontSize: 'Second line font size',
    secondLineLineHeight: 'Second line line height (0 for default)',
    secondLineColor: 'Second line color',
    scContentLineFont: 'Super Chat content font',
    scContentLineFontSize: 'Super Chat content font size',
    scContentLineLineHeight: 'Super Chat content line height (0 for default)',
    scContentLineColor: 'Super Chat content color',
    showNewMemberBg: 'Show new member background',
    showScTicker: 'Show Super Chat ticker',
    showOtherThings: 'Show everything other than Super Chat ticker',

    animation: 'Animation',
    animateIn: 'Animate in',
    fadeInTime: 'Fade in time (miliseconds)',
    animateOut: 'Animate out (remove old messages)',
    animateOutWaitTime: 'Wait time (seconds)',
    fadeOutTime: 'Fade out time (miliseconds)',
    slide: 'Slide',
    reverseSlide: 'Reverse slide',
    playAnimation: 'Play animation',

    result: 'Result',
    copy: 'Copy',
    resetConfig: 'Reset config'
  },
  help: {
    help: 'Help',
    p1: '1. Copy the room ID from the Bilibili live room webpage',
    p2: '2. Enter the room ID into the room ID on the home page. Copy the room URL',
    p3: '3. Generate styles with the style generator. Copy the CSS',
    p4: '4. Add browser source in OBS',
    p5: '5. Enter the previously copied room URL at URL, and enter the previously copied CSS at custom CSS'
  },
  chat: {
    moderator: 'moderator',
    guardLevel1: 'governor',
    guardLevel2: 'admiral',
    guardLevel3: 'captain',
    sendGift: 'Sent {giftName}x{num}',
    membershipTitle: 'New member',
    tickerMembership: 'Member'
  }
}
