# 自定义银瓜子显示与否

在网页里设定【最低显示打赏价格】时候，对应的是人民币RMB

因为金瓜子的最低价格是 0.1元

所以设置 0.1, 则会显示所有金瓜子礼物, 但不会显示银瓜子礼物

同理，设置最低金额为 0元, 则所有礼物都会显示(银瓜子礼物价值0元)
![网页上的编辑位置](https://github.com/DoodleBears/blivechat/blob/blivechat_doodlebear/screenshots/least_rmb.jpg) 
# 自定义弹幕图片功能
![弹幕效果截图](https://github.com/DoodleBears/blivechat/blob/blivechat_doodlebear/screenshots/danmu_to_img.gif)  

![对应B站弹幕](https://github.com/DoodleBears/blivechat/blob/blivechat_doodlebear/screenshots/bilibili_chat.jpg )

1. 在 `/frontend/dist/static` 放置你需要的图片，并命名好
2. 在 `/frontend/dist` 写一份 `danmu_pic.json` (其文件路径为: `/frontend/dist/danmu_pic.json`)

![文件位置截图](https://github.com/DoodleBears/blivechat/blob/blivechat_doodlebear/screenshots/danmu_file.jpg) 

### `danmu_pic.json` 的编辑格式如下
1. `keyword` 为你想要替换的弹幕
2. `image` 为对应的图片的全称 (图片需要放在blivechat/dist/static 下面)【像下面我可以写两个名字对应一个图片，多个关键词可以对应同一个图片】
3. `height` 为图片的高度

`{ "keyword": "触发弹幕", "image" : "图片完整名称", "height" : "图片高度" },`

```json
[
    { "keyword": "喝茶", "image" : "喝茶.gif", "height" : "192" },
    { "keyword": "高兴起来了", "image" : "高兴起来了.gif", "height" : "128" },
    { "keyword": "希望の花", "image" : "希望之花.gif", "height" : "128" },
    { "keyword": "希望之花", "image" : "希望之花.gif", "height" : "128" },
    { "keyword": "明白", "image" : "明白.png", "height" : "128" },
    { "keyword": "二次元是不会背叛你的", "image" : "二次元是不会背叛你的.png", "height" : "192" },
    { "keyword": "钱", "image" : "钱.png", "height" : "64" },
    { "keyword": "见没见过黑手", "image" : "见没见过黑手.gif", "height" : "128" },
    { "keyword": "美兔3D", "image" : "美兔3D.gif", "height" : "128" }
]

```
### 实际使用时候的触发条件
此外，因为支持全弹幕匹配关键字，用到了正则表达式`(“|”|"|'|‘|’|\[|【|{).+?(”|“|"|'|’|‘|\]|】|})`，当关键词为 "钱" 的时候

以下几种情况都会触发
1. `[钱]`、`【钱】`、`“钱”`、`‘钱’`、`[钱]`、`'钱'`
2. 关键词前后有空格时候也会触发: `[   钱   ]`

有时候没必要用`xxx.jpg`做关键词，因为加上双引号 `“xxx”` 就和`xxx`做了区分
1. `{ "keyword": "钱.png", "image" : "钱.png", "height" : "64" }`
2. `{ "keyword": "钱", "image" : "钱.png", "height" : "64" }`

# blivechat
用于OBS的仿YouTube风格的bilibili直播评论栏

最近喜欢看VTuber，想为此写些程序，于是有了这个东西。~~写到一半发现有类似项目了：[bilibili-live-chat](https://github.com/Tsuk1ko/bilibili-live-chat)、[BiliChat](https://github.com/3Shain/BiliChat)~~

![OBS截图](https://github.com/DoodleBears/blivechat/blob/blivechat_doodlebear/screenshots/obs.png)  
![Chrome截图](https://github.com/DoodleBears/blivechat/blob/blivechat_doodlebear/screenshots/chrome.png)  
![样式生成器截图](https://github.com/DoodleBears/blivechat/blob/blivechat_doodlebear/screenshots/stylegen.png)  

## 特性
* 兼容YouTube直播评论栏的样式
* 金瓜子礼物模仿醒目留言显示
* 高亮舰队、房管、主播的用户名
* 支持屏蔽弹幕、合并相似弹幕等设置
* 自带样式生成器
* 支持自动翻译弹幕、醒目留言到日语
* 支持标注打赏用户名的读音（拼音和日文假名）

## 使用方法
### 一、本地使用
1. 下载[发布版](https://github.com/xfgryujk/blivechat/releases)（仅提供x64 Windows版）
2. 双击`blivechat.exe`运行服务器，或者用命令行可以指定host和端口号：
   ```bat
   blivechat.exe --host 127.0.0.1 --port 12450
   ```
3. 用浏览器打开[http://localhost:12450](http://localhost:12450)，输入房间ID，复制房间URL
4. 用样式生成器生成样式，复制CSS
5. 在OBS中添加浏览器源，输入URL和自定义CSS

**注意事项：**

* 本地使用时不要关闭blivechat.exe那个黑框，否则不能继续获取头像或弹幕
* 样式生成器没有列出所有本地字体，但是可以手动输入本地字体

### 二、公共服务器
请优先在本地使用，使用公共服务器会有更大的延迟，而且服务器故障时可能发生直播事故

* [公共服务器](http://chat.bilisc.com/)
* [仅样式生成器](https://style.vtbs.moe/)

### 三、源代码版（自建服务器或在Windows以外平台）
0. 由于使用了git子模块，clone时需要加上`--recursive`参数：
   ```sh
   git clone --recursive https://github.com/xfgryujk/blivechat.git
   ```
   如果已经clone，拉子模块的方法：
   ```sh
   git submodule update --init --recursive
   ```
1. 编译前端（需要安装Node.js）：
   ```sh
   cd frontend
   npm i
   npm run build
   ```
2. 运行服务器（需要Python3.6以上版本）：
   ```sh
   pip3 install -r requirements.txt
   python3 main.py
   ```
   或者可以指定host和端口号：
   ```sh
   python3 main.py --host 127.0.0.1 --port 12450
   ```
3. 用浏览器打开[http://localhost:12450](http://localhost:12450)，以下略

### 四、Docker（自建服务器）
1. ```sh
   docker run --name blivechat -d -p 12450:12450 \
     --mount source=blc-data,target=/blivechat/data \
     --mount source=blc-log,target=/blivechat/log \
     --mount source=blc-frontend,target=/blivechat/frontend/dist \
     xfgryujk/blivechat:latest
   ```
2. 用浏览器打开[http://localhost:12450](http://localhost:12450)，以下略

## 自建服务器相关补充
### 服务器配置
服务器配置在`data/config.ini`，可以配置数据库和允许自动翻译等，编辑后要重启生效

**自建服务器时强烈建议不使用加载器**，否则可能因为混合HTTP和HTTPS等原因加载不出来

### 参考nginx配置
`sudo vim /etc/nginx/sites-enabled/blivechat.conf`

```conf
upstream blivechat {
	keepalive 8;
	# blivechat地址
	server 127.0.0.1:12450;
}

# 强制HTTPS
server {
	listen 80;
	listen [::]:80;
	server_name YOUR.DOMAIN.NAME;

	return 301 https://$server_name$request_uri;
}

server {
	listen 443 ssl;
	listen [::]:443 ssl;
	server_name YOUR.DOMAIN.NAME;

	# SSL
	ssl_certificate /PATH/TO/CERT.crt;
	ssl_certificate_key /PATH/TO/CERT_KEY.key;

	# 代理header
	proxy_http_version 1.1;
	proxy_set_header Host $host;
	proxy_set_header Connection "";
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

	# 静态文件
	location / {
		root /PATH/TO/BLIVECHAT/frontend/dist;
		# 如果文件不存在，交给前端路由
		try_files $uri $uri/ /index.html;
	}
	# 动态API
	location /api {
		proxy_pass http://blivechat;
	}
	# websocket
	location = /api/chat {
		proxy_pass http://blivechat;

		# 代理websocket必须设置
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "Upgrade";

		# 由于这个块有proxy_set_header，这些不会自动继承
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}
}
```
