module.exports = {
  "base": "/",
  "title": "ChatGPT小站",
  "description": "网站提供了OpenAI的ChatGPT账号升级ChatGPT Plus指南,国内购买ChatGPT4,虚拟信用卡的使用,OnlyFans订阅教程等",
  "dest": "dist", // 博客部署时输出的文件夹
  "host": "localhost",
  "port": "8888",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?74ca4e8f49a2fce33bd8375637e32b07";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1"
      }
    ],
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "codeva-TjqXgaYxvv"
      }
    ],
    [
      "meta",
      {
        "name": "referrer",
        "content": "no-referrer"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "ChatGPT,ChatGPT Plus,GPT4,国外虚拟卡,OnlyFans,订阅,支付,教程"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [{
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "ChatGPT4升级方法",
        "icon": "reco-tongzhi",
        "link": "/blogs/chatgpt/upgrade-chatgptplus.html"

      },
      {
        "text": "Onlyfans订阅指南",
        "icon": "reco-coding",
        "link": "/blogs/chatgpt/onlyfans.html"

      },
      {
        "text": "WildCard",
        "icon": "reco-api",
        "link": "https://bewildcard.com/i/HOME"

      },
      // {
      //   "text": "时间轴",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [{
      //     "text": "vuepress-reco",
      //     "link": "/docs/theme-reco/"
      //   }]
      // },
      // {
      //   "text": "联系我",
      //   "link": "/blogs/contact/",
      //   "icon": "reco-message"
      // }
    ],
    "sidebar": {
      // "/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 4, // 在导航栏所占的位置
        "text": "分类"
      },
      "tag": {
        "location": 5,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "ChatGPT官网",
        "desc": "会魔法才能访问",
        "logo": "/ChatGPT.png",
        "link": "https://chat.openai.com"
      }

    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "sidebar": "auto", // 自动形成侧边导航
    "subSidebar": 'auto', // 自动生成子侧边栏，放在了页面的右侧
    "lastUpdated": "Last Updated",
    "author": "ChatGPT小站",
    "authorAvatar": "/avatar.png", // 首页右侧信息栏头像
    // "record": "豫ICP备2023021688号-1", // ICP 备案文案
    // "recordLink": "https://beian.miit.gov.cn",//ICP 备案指向链接
    // "cyberSecurityRecord":"豫公网安备41090002410905号",//公安部备案文案
    // "cyberSecurityLink":"https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41090002410905",//公安部备案指向链接
    "startYear": "2023",
    "lastUpdated": "Last Updated",
    /**
     *评论
     */
    valineConfig: {
      appId: 'CztB6WmRz21DKX6LGoTqBgLB-gzGzoHsz', // your appId
      appKey: 't9s1uuIYevQUwsblFgtz1vDc', // your appKey
    },
    /**
     * 取消腾讯公益的404页面
     */
    noFoundPageByTencent: false
  },
  "markdown": {
    "lineNumbers": true // 代码显示行号
  },
  "locales": {
    "/": {
      lang: "zh-CN", // 仅供参考，具体 lang 配置根据自己需求定义，文章中的日期格式会由13/12/2021变为2021/12/13
    }
  },
  plugins: [

    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://vaq86.github.io",
      },
    ],
    // Facebook 的 Open Graph Protocol
    ["seo", {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }],
    // 彩色背景 npm install vuepress-plugin-ribbon-animation -D
    ["ribbon-animation", {
      size: 80, // 默认数据
      opacity: 0.4, //  透明度
      zIndex: -1, //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "70%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.35,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 2,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 30,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true // 滑动彩带
    }],
    // 樱花插件 npm install vuepress-plugin-sakura -D
    ["sakura",
      {
        num: 5, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...' // 绝对路径
        }
      }
    ],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: true,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 120,
        height: 176
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-pagation"
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: 'star', // shape of the particle, default: 'star' ,可改为'circle'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
      "flowchart"
    ],
    // ["vuepress-plugin-nuggets-style-copy", {
      // copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      // tip: {
      //   content: "复制成功!"
      // }
    // }],
    [
      "vuepress-plugin-boxx"
    ],
    [
      'vuepress-plugin-baidu-autopush'
    ],
    require('./vuepress-plugin-jsonld'),
    ["@vuepress-yard/vuepress-plugin-window",{
      title: "公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
      contentInfo: {
        title: "任何ChatGPT相关疑问欢迎添加微信咨询",
        needImg: true,
        imgUrl: "./img/wechat1.jpg",
        content: "",
        contentStyle: ""
      },
      bottomInfo: {
        btnText: '',//关于
        linkTo: '/'
      },
      closeOnce: true
    }]

  ],
  markdown: {
    // ......
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  // 使博客支持.webp格式的图片
  chainWebpack: (config) => {
    config.module
      .rule('url-loader')
      .test(/\.(webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .end()
  }

}
