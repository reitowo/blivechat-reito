# 相比[原版blivechat](https://github.com/xfgryujk/blivechat)新增的功能
## 自定义弹幕图片功能(适配样式生成器)
1. [替换弹幕关键词文字版本](https://github.com/DoodleBears/blivechat) 
2. [新增在弹幕文字后方版本](https://github.com/DoodleBears/blivechat/tree/add-danmu-image)

![弹幕效果截图](https://github.com/DoodleBears/blivechat/blob/add-danmu-image/screenshots/danmu_add_img.jpg) 

1. 在 `/frontend/dist/static` 放置你需要的图片，并命名好
2. 编辑在 `/frontend/dist`文件夹内的 `danmu_pic_old.json`

![文件位置截图](https://github.com/DoodleBears/blivechat/blob/add-danmu-image/screenshots/danmu_file.jpg) 
### 如何设置
 
```json
{ 
	"keyword" : "弹幕关键词" ,"image" : "图片完整名称", "height" : "图片高度" , "rank": "舰长等级"
},
```

1. `keyword` 为关键词，弹幕中含关键词则会触发图片添加在后方
2. `image` 为对应的图片的全称 (图片需要放在blivechat/dist/static 下面)【像下面我可以写两个名字对应一个图片，多个关键词可以对应同一个图片】
3. `height` 为图片的高度
4. `rank` 限定发表情包用户的等级，分为4级（所有人，舰长，提督，总督）
	1. `rank = 0` `所有人`都能用的表情包
	2. `rank = 3` `舰长`以上包括`舰长`能用
	3. `rank = 2` `提督`以上包括`提督`能用
	4. `rank = 1` `总督`以上包括`总督`能用
### 实例
```json
// 所有符号需采用英文符号
// 关键词不能重复
// 尽量使用英文命名图片文件
[
    {
       "keyword" : "整不明白了", "image" : "整不明白了.jpg", "height" : "128" , "rank": 0
    },
    {
       "keyword" : "睡了", "image" : "睡了.gif", "height" : "128" , "rank": 0
    }	// 注意这里没有逗号
]
```
### 表情包触发原理
1. 检查弹幕内容里是否存在表情包的关键词
2. 优先显示`.json`中**靠前**设置的关键词对应的表情包（假设最大图片数为2，触发10个关键词，优先显示json文件中靠前的2个）
3. 最终只保留检测出的前`最大图片数`个表情包显示
## 其他自定义设置

![网页上的编辑位置](https://github.com/DoodleBears/blivechat/blob/replace-danmu-image/screenshots/web-page-setting.jpg) 

### 1.自定义分别显示不同弹幕
1. 普通弹幕(Message)
2. 醒目留言(Super Chat)
3. 上舰信息(Member)
4. 礼物信息(Gift)
### 2.最低显示打赏价格（RMB/CNY/元）
1. 最低打赏价格（元） —— 弹幕区域的最低价格
2. 最低顶部停驻打赏价格（元） —— 顶部倒计时贴纸区域的最低价格

精确到小数点后1位，区分银瓜子，金瓜子礼物

- `银瓜子礼物`：价格为 `0元`
- `金瓜子礼物`：根据B站设定，最低为 `0.1元`

设置为 0.1, 则只显示金瓜子礼物, 不显示银瓜子礼物

### 3.最大图片数(表情包相关功能)

`弹幕关键词`转换为图片的最大数量（防止大量关键词出现时，图片刷屏）
默认为2，可填入非负整数

### 4.粉丝牌子显示(适配样式生成器)

![粉丝牌子设置](https://github.com/DoodleBears/blivechat/blob/replace-danmu-image/screenshots/fan-medal.jpg) 

1. 自定义是否显示粉丝勋章
2. 是否只显示直播主的直播间勋章
3. 是否显示勋章名
4. 是否显示勋章等级

# blivechat(以下为原文档)
用于OBS的仿YouTube风格的bilibili直播评论栏

最近喜欢看VTuber，想为此写些程序，于是有了这个东西。~~写到一半发现有类似项目了：[bilibili-live-chat](https://github.com/Tsuk1ko/bilibili-live-chat)、[BiliChat](https://github.com/3Shain/BiliChat)~~

![OBS截图](https://github.com/DoodleBears/blivechat/blob/add-danmu-image/screenshots/obs.png)  
![Chrome截图](https://github.com/DoodleBears/blivechat/blob/add-danmu-image/screenshots/chrome.png)  
![样式生成器截图](https://github.com/DoodleBears/blivechat/blob/add-danmu-image/screenshots/stylegen.png)  


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
