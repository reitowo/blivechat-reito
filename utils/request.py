# -*- coding: utf-8 -*-
import aiohttp

headers = {
    "origin": "https://www.bilibili.com",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.41"
}

http_session = aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=10), headers=headers)
