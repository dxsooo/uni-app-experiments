import "vue";
import { i as initVueI18n } from "./uni-i18n.es.js";
const leftWindow = {
  path: "windows/left-window.vue",
  style: {
    width: "350px"
  }
};
const topWindow = {
  path: "windows/top-window.vue",
  style: {
    height: "60px"
  }
};
const pages = [
  {
    path: "pages/tabBar/component/component",
    style: {
      navigationBarTitleText: "内置组件",
      "app-plus": {
        bounce: "vertical",
        titleNView: {
          buttons: [
            {
              text: "",
              fontSrc: "/static/uni.ttf",
              fontSize: "22px",
              color: "#FFFFFF"
            }
          ]
        }
      }
    }
  },
  {
    path: "pages/tabBar/API/API",
    style: {
      navigationBarTitleText: "接口",
      "app-plus": {
        titleNView: {
          buttons: [
            {
              text: "",
              fontSrc: "/static/uni.ttf",
              fontSize: "22px",
              color: "#FFFFFF"
            }
          ]
        }
      }
    }
  },
  {
    path: "pages/tabBar/template/template",
    style: {
      navigationBarTitleText: "模版",
      "app-plus": {
        titleNView: {
          buttons: [
            {
              text: "",
              fontSrc: "/static/uni.ttf",
              fontSize: "22px",
              color: "#FFFFFF"
            }
          ]
        }
      }
    }
  },
  {
    path: "pages/tabBar/extUI/extUI",
    style: {
      navigationBarTitleText: "扩展组件",
      "app-plus": {
        titleNView: {
          buttons: [
            {
              text: "",
              fontSrc: "/static/uni.ttf",
              fontSize: "22px",
              color: "#FFFFFF"
            }
          ]
        }
      }
    }
  },
  {
    path: "pages/component/view/view",
    style: {
      navigationBarTitleText: "view"
    }
  },
  {
    path: "pages/component/scroll-view/scroll-view",
    style: {
      navigationBarTitleText: "scroll-view"
    }
  },
  {
    path: "pages/component/swiper/swiper",
    style: {
      navigationBarTitleText: "swiper"
    }
  },
  {
    path: "pages/component/cover-view/cover-view",
    style: {
      navigationBarTitleText: "cover-view"
    }
  },
  {
    path: "pages/component/movable-view/movable-view",
    style: {
      navigationBarTitleText: "movable-view"
    }
  },
  {
    path: "pages/component/text/text",
    style: {
      navigationBarTitleText: "text"
    }
  },
  {
    path: "pages/component/rich-text/rich-text",
    style: {
      navigationBarTitleText: "rich-text"
    }
  },
  {
    path: "pages/component/progress/progress",
    style: {
      navigationBarTitleText: "progress"
    }
  },
  {
    path: "pages/component/button/button",
    style: {
      navigationBarTitleText: "button"
    }
  },
  {
    path: "pages/component/checkbox/checkbox",
    style: {
      navigationBarTitleText: "checkbox"
    }
  },
  {
    path: "pages/component/form/form",
    style: {
      navigationBarTitleText: "form"
    }
  },
  {
    path: "pages/component/input/input",
    style: {
      navigationBarTitleText: "input",
      "app-plus": {
        softinputNavBar: "none"
      }
    }
  },
  {
    path: "pages/component/label/label",
    style: {
      navigationBarTitleText: "label"
    }
  },
  {
    path: "pages/component/picker/picker",
    style: {
      navigationBarTitleText: "picker"
    }
  },
  {
    path: "pages/component/picker-view/picker-view",
    style: {
      navigationBarTitleText: "picker-view"
    }
  },
  {
    path: "pages/component/radio/radio",
    style: {
      navigationBarTitleText: "radio"
    }
  },
  {
    path: "pages/component/slider/slider",
    style: {
      navigationBarTitleText: "slider"
    }
  },
  {
    path: "pages/component/switch/switch",
    style: {
      navigationBarTitleText: "switch"
    }
  },
  {
    path: "pages/component/textarea/textarea",
    style: {
      navigationBarTitleText: "textarea"
    }
  },
  {
    path: "pages/component/editor/editor",
    style: {
      navigationBarTitleText: "editor",
      "app-plus": {
        softinputMode: "adjustResize"
      }
    }
  },
  {
    path: "pages/component/navigator/navigator",
    style: {
      navigationBarTitleText: "navigator"
    }
  },
  {
    path: "pages/component/navigator/navigate/navigate",
    style: {
      navigationBarTitleText: "navigatePage"
    }
  },
  {
    path: "pages/component/navigator/redirect/redirect",
    style: {
      navigationBarTitleText: "redirectPage"
    }
  },
  {
    path: "pages/component/image/image",
    style: {
      navigationBarTitleText: "image"
    }
  },
  {
    path: "pages/component/video/video",
    style: {
      navigationBarTitleText: "video"
    }
  },
  {
    path: "pages/component/map/map",
    style: {
      navigationBarTitleText: "map"
    }
  },
  {
    path: "pages/component/canvas/canvas",
    style: {
      navigationBarTitleText: "canvas"
    }
  },
  {
    path: "pages/component/web-view/web-view",
    style: {
      navigationBarTitleText: "web-view"
    }
  },
  {
    path: "pages/component/ad/ad",
    style: {
      navigationBarTitleText: "AD"
    }
  },
  {
    path: "pages/component/web-view-local/web-view-local",
    style: {}
  },
  {
    path: "platforms/app-plus/speech/speech",
    style: {
      navigationBarTitleText: "语音识别"
    }
  },
  {
    path: "platforms/app-plus/orientation/orientation",
    style: {
      navigationBarTitleText: "方向传感器"
    }
  },
  {
    path: "platforms/app-plus/proximity/proximity",
    style: {
      navigationBarTitleText: "距离传感器"
    }
  },
  {
    path: "platforms/app-plus/push/push",
    style: {
      navigationBarTitleText: "推送"
    }
  },
  {
    path: "platforms/app-plus/shake/shake",
    style: {
      navigationBarTitleText: "摇一摇"
    }
  },
  {
    path: "pages/about/about",
    style: {
      navigationBarTitleText: "关于"
    }
  },
  {
    path: "platforms/app-plus/feedback/feedback",
    style: {
      navigationBarTitleText: "问题反馈"
    }
  },
  {
    path: "uni_modules/uni-upgrade-center-app/pages/upgrade-popup",
    style: {
      "app-plus": {
        animationDuration: 200,
        animationType: "fade-in",
        background: "transparent",
        backgroundColorTop: "transparent",
        popGesture: "none",
        scrollIndicator: false,
        titleNView: false
      },
      disableScroll: true
    }
  }
];
const subPackages = [
  {
    root: "pages/API",
    pages: [
      {
        path: "login/login",
        style: {
          navigationBarTitleText: "授权登录"
        }
      },
      {
        path: "subnvue/subnvue",
        style: {
          navigationBarTitleText: "原生子窗体",
          "app-plus": {
            subNVues: [
              {
                id: "drawer",
                path: "subnvue/subnvue/drawer",
                type: "popup",
                style: {
                  width: "50%"
                }
              },
              {
                id: "popup",
                path: "subnvue/subnvue/popup",
                type: "popup",
                style: {
                  margin: "auto",
                  width: "80%",
                  height: "600rpx"
                }
              },
              {
                id: "video_mask",
                path: "subnvue/subnvue/video-mask",
                style: {
                  position: "absolute",
                  bottom: "30px",
                  left: "0",
                  width: "230px",
                  height: "110px",
                  background: "transparent"
                }
              }
            ]
          }
        }
      },
      {
        path: "get-user-info/get-user-info",
        style: {
          navigationBarTitleText: "获取用户信息"
        }
      },
      {
        path: "request-payment/request-payment",
        style: {
          navigationBarTitleText: "发起支付"
        }
      },
      {
        path: "share/share",
        style: {
          navigationBarTitleText: "分享"
        }
      },
      {
        path: "set-navigation-bar-title/set-navigation-bar-title",
        style: {
          navigationBarTitleText: "设置界面标题"
        }
      },
      {
        path: "show-loading/show-loading",
        style: {
          navigationBarTitleText: "加载提示框"
        }
      },
      {
        path: "navigator/navigator",
        style: {
          navigationBarTitleText: "页面跳转"
        }
      },
      {
        path: "navigator/new-page/new-vue-page-1",
        style: {
          navigationBarTitleText: "新VUE页面1"
        }
      },
      {
        path: "navigator/new-page/new-vue-page-2",
        style: {
          navigationBarTitleText: "新VUE页面2"
        }
      },
      {
        path: "pull-down-refresh/pull-down-refresh",
        style: {
          navigationBarTitleText: "下拉刷新",
          enablePullDownRefresh: true
        }
      },
      {
        path: "animation/animation",
        style: {
          navigationBarTitleText: "创建动画"
        }
      },
      {
        path: "get-node-info/get-node-info",
        style: {
          navigationBarTitleText: "节点信息"
        }
      },
      {
        path: "intersection-observer/intersection-observer",
        style: {
          navigationBarTitleText: "节点布局相交状态"
        }
      },
      {
        path: "canvas/canvas",
        style: {
          navigationBarTitleText: "创建绘画"
        }
      },
      {
        path: "action-sheet/action-sheet",
        style: {
          navigationBarTitleText: "操作菜单"
        }
      },
      {
        path: "modal/modal",
        style: {
          navigationBarTitleText: "模态弹窗"
        }
      },
      {
        path: "toast/toast",
        style: {
          navigationBarTitleText: "消息提示框"
        }
      },
      {
        path: "get-network-type/get-network-type",
        style: {
          navigationBarTitleText: "获取设备网络状态"
        }
      },
      {
        path: "get-system-info/get-system-info",
        style: {
          navigationBarTitleText: "获取设备系统信息"
        }
      },
      {
        path: "add-phone-contact/add-phone-contact",
        style: {
          navigationBarTitleText: "添加手机联系人"
        }
      },
      {
        path: "on-accelerometer-change/on-accelerometer-change",
        style: {
          navigationBarTitleText: "监听加速度计数据"
        }
      },
      {
        path: "on-compass-change/on-compass-change",
        style: {
          navigationBarTitleText: "监听罗盘数据"
        }
      },
      {
        path: "make-phone-call/make-phone-call",
        style: {
          navigationBarTitleText: "打电话"
        }
      },
      {
        path: "scan-code/scan-code",
        style: {
          navigationBarTitleText: "扫码"
        }
      },
      {
        path: "clipboard/clipboard",
        style: {
          navigationBarTitleText: "剪贴板"
        }
      },
      {
        path: "request/request",
        style: {
          navigationBarTitleText: "网络请求"
        }
      },
      {
        path: "upload-file/upload-file",
        style: {
          navigationBarTitleText: "上传文件"
        }
      },
      {
        path: "download-file/download-file",
        style: {
          navigationBarTitleText: "下载文件"
        }
      },
      {
        path: "image/image",
        style: {
          navigationBarTitleText: "图片"
        }
      },
      {
        path: "voice/voice",
        style: {
          navigationBarTitleText: "录音"
        }
      },
      {
        path: "inner-audio/inner-audio",
        style: {
          navigationBarTitleText: "音频"
        }
      },
      {
        path: "background-audio/background-audio",
        style: {
          navigationBarTitleText: "背景音频"
        }
      },
      {
        path: "video/video",
        style: {
          navigationBarTitleText: "视频"
        }
      },
      {
        path: "file/file",
        style: {
          navigationBarTitleText: "文件"
        }
      },
      {
        path: "map/map",
        style: {
          navigationBarTitleText: "map"
        }
      },
      {
        path: "map-search/map-search",
        style: {
          navigationBarTitleText: "map search"
        }
      },
      {
        path: "get-location/get-location",
        style: {
          navigationBarTitleText: "获取位置"
        }
      },
      {
        path: "open-location/open-location",
        style: {
          navigationBarTitleText: "查看位置"
        }
      },
      {
        path: "choose-location/choose-location",
        style: {
          navigationBarTitleText: "使用地图选择位置"
        }
      },
      {
        path: "storage/storage",
        style: {
          navigationBarTitleText: "数据存储"
        }
      },
      {
        path: "sqlite/sqlite",
        style: {
          navigationBarTitleText: "SQLite"
        }
      },
      {
        path: "rewarded-video-ad/rewarded-video-ad",
        style: {
          navigationBarTitleText: "激励视频广告"
        }
      },
      {
        path: "full-screen-video-ad/full-screen-video-ad",
        style: {
          navigationBarTitleText: "全屏视频广告"
        }
      },
      {
        path: "brightness/brightness",
        style: {
          navigationBarTitleText: "屏幕亮度"
        }
      },
      {
        path: "save-media/save-media",
        style: {
          navigationBarTitleText: "保存媒体到本地"
        }
      },
      {
        path: "bluetooth/bluetooth",
        style: {
          navigationBarTitleText: "蓝牙"
        }
      },
      {
        path: "soter/soter",
        style: {
          navigationBarTitleText: "生物认证"
        }
      },
      {
        path: "ibeacon/ibeacon",
        style: {
          navigationBarTitleText: "iBeacon"
        }
      },
      {
        path: "vibrate/vibrate",
        style: {
          navigationBarTitleText: "震动"
        }
      },
      {
        path: "websocket-socketTask/websocket-socketTask",
        style: {
          navigationBarTitleText: "websocket-socketTask"
        }
      },
      {
        path: "websocket-global/websocket-global",
        style: {
          navigationBarTitleText: "websocket-global"
        }
      }
    ]
  },
  {
    root: "pages/extUI",
    pages: [
      {
        path: "forms/forms",
        style: {
          navigationBarTitleText: "Form 表单"
        }
      },
      {
        path: "group/group",
        style: {
          navigationBarTitleText: "Group 分组"
        }
      },
      {
        path: "badge/badge",
        style: {
          navigationBarTitleText: "Badge 数字角标"
        }
      },
      {
        path: "breadcrumb/breadcrumb",
        style: {
          navigationBarTitleText: "Breadcrumb 面包屑"
        }
      },
      {
        path: "countdown/countdown",
        style: {
          navigationBarTitleText: "Countdown 倒计时"
        }
      },
      {
        path: "drawer/drawer",
        style: {
          navigationBarTitleText: "Drawer 抽屉"
        }
      },
      {
        path: "icons/icons",
        style: {
          navigationBarTitleText: "Icons 图标"
        }
      },
      {
        path: "load-more/load-more",
        style: {
          navigationBarTitleText: "LoadMore 加载更多"
        }
      },
      {
        path: "nav-bar/nav-bar",
        style: {
          navigationBarTitleText: "NavBar 导航栏",
          navigationStyle: "custom",
          enablePullDownRefresh: true,
          "app-plus": {
            titleNView: false,
            bounce: "none",
            pullToRefresh: {
              style: "circle",
              offset: "70px"
            }
          }
        }
      },
      {
        path: "number-box/number-box",
        style: {
          navigationBarTitleText: "NumberBox 数字输入框"
        }
      },
      {
        path: "popup/popup",
        style: {
          navigationBarTitleText: "Popup 弹出层",
          "app-plus": {
            softinputMode: "adjustResize"
          }
        }
      },
      {
        path: "segmented-control/segmented-control",
        style: {
          navigationBarTitleText: "SegmentedControl 分段器"
        }
      },
      {
        path: "tag/tag",
        style: {
          navigationBarTitleText: "Tag 标签"
        }
      },
      {
        path: "list/list",
        style: {
          navigationBarTitleText: "List 列表"
        }
      },
      {
        path: "card/card",
        style: {
          navigationBarTitleText: "Card 卡片"
        }
      },
      {
        path: "collapse/collapse",
        style: {
          navigationBarTitleText: "Collapse 折叠面板"
        }
      },
      {
        path: "pagination/pagination",
        style: {
          navigationBarTitleText: "Pagination 分页器"
        }
      },
      {
        path: "swiper-dot/swiper-dot",
        style: {
          navigationBarTitleText: "SwiperDot 轮播图指示点",
          "mp-baidu": {
            disableSwipeBack: true
          }
        }
      },
      {
        path: "grid/grid",
        style: {
          navigationBarTitleText: "Grid 宫格"
        }
      },
      {
        path: "rate/rate",
        style: {
          navigationBarTitleText: "Rate 评分"
        }
      },
      {
        path: "steps/steps",
        style: {
          navigationBarTitleText: "Steps 步骤条"
        }
      },
      {
        path: "notice-bar/notice-bar",
        style: {
          navigationBarTitleText: "NoticeBar 通告栏"
        }
      },
      {
        path: "swipe-action/swipe-action",
        style: {
          navigationBarTitleText: "SwipeAction 滑动操作",
          "app-plus": {
            bounce: "none"
          }
        }
      },
      {
        path: "search-bar/search-bar",
        style: {
          navigationBarTitleText: "SearchBar 搜索栏"
        }
      },
      {
        path: "calendar/calendar",
        style: {
          navigationBarTitleText: "Calendar 日历"
        }
      },
      {
        path: "indexed-list/indexed-list",
        style: {
          navigationBarTitleText: "IndexedList 索引列表",
          "mp-weixin": {
            disableScroll: true
          },
          "app-plus": {
            bounce: "none"
          },
          "mp-alipay": {
            allowsBounceVertical: "NO"
          },
          "mp-baidu": {
            disableScroll: true
          }
        }
      },
      {
        path: "fab/fab",
        style: {
          navigationBarTitleText: "Fab 悬浮按钮"
        }
      },
      {
        path: "fav/fav",
        style: {
          navigationBarTitleText: "Fav 收藏按钮"
        }
      },
      {
        path: "goods-nav/goods-nav",
        style: {
          navigationBarTitleText: "GoodsNav 商品导航"
        }
      },
      {
        path: "section/section",
        style: {
          navigationBarTitleText: "Section 标题栏"
        }
      },
      {
        path: "transition/transition",
        style: {
          navigationBarTitleText: "Transition 过渡动画"
        }
      },
      {
        path: "title/title",
        style: {
          navigationBarTitleText: "Title 章节标题"
        }
      },
      {
        path: "tooltip/tooltip",
        style: {
          navigationBarTitleText: "Tooltip 文字提示"
        }
      },
      {
        path: "link/link",
        style: {
          navigationBarTitleText: "Link 链接"
        }
      },
      {
        path: "combox/combox",
        style: {
          navigationBarTitleText: "Combox 组合框"
        }
      },
      {
        path: "list/chat",
        style: {}
      },
      {
        path: "table/table",
        style: {
          navigationBarTitleText: "",
          enablePullDownRefresh: false
        }
      },
      {
        path: "dateformat/dateformat",
        style: {
          navigationBarTitleText: "Dateformat 日期格式化",
          enablePullDownRefresh: false
        }
      },
      {
        path: "data-checkbox/data-checkbox",
        style: {
          navigationBarTitleText: "DataCheckbox 单选复选框",
          enablePullDownRefresh: false
        }
      },
      {
        path: "easyinput/easyinput",
        style: {
          navigationBarTitleText: "Easyinput 增强输入框",
          enablePullDownRefresh: false
        }
      },
      {
        path: "data-picker/data-picker",
        style: {
          navigationBarTitleText: "DataPicker 级联选择",
          enablePullDownRefresh: false
        }
      },
      {
        path: "data-select/data-select",
        style: {
          navigationBarTitleText: "DataSelect 下拉框",
          enablePullDownRefresh: false
        }
      },
      {
        path: "datetime-picker/datetime-picker",
        style: {
          navigationBarTitleText: "DatetimePicker 日期时间",
          enablePullDownRefresh: false
        }
      },
      {
        path: "row/row",
        style: {
          navigationBarTitleText: "Layout 布局",
          enablePullDownRefresh: false
        }
      },
      {
        path: "file-picker/file-picker",
        style: {
          navigationBarTitleText: "FilePicker 文件选择上传",
          enablePullDownRefresh: false
        }
      },
      {
        path: "space/space",
        style: {
          navigationBarTitleText: "间距",
          enablePullDownRefresh: false
        }
      },
      {
        path: "font/font",
        style: {
          navigationBarTitleText: "字体",
          enablePullDownRefresh: false
        }
      },
      {
        path: "color/color",
        style: {
          navigationBarTitleText: "颜色",
          enablePullDownRefresh: false
        }
      },
      {
        path: "radius/radius",
        style: {
          navigationBarTitleText: "圆角",
          enablePullDownRefresh: false
        }
      },
      {
        path: "button/button",
        style: {
          navigationBarTitleText: "",
          enablePullDownRefresh: false
        }
      }
    ]
  },
  {
    root: "pages/template",
    pages: [
      {
        path: "nav-default/nav-default",
        style: {
          navigationBarTitleText: "默认导航栏"
        }
      },
      {
        path: "component-communication/component-communication",
        style: {
          navigationBarTitleText: "组件通讯"
        }
      },
      {
        path: "nav-transparent/nav-transparent",
        style: {
          navigationBarTitleText: "透明渐变导航栏",
          transparentTitle: "auto"
        }
      },
      {
        path: "nav-button/nav-button",
        style: {
          navigationBarTitleText: "导航栏带自定义按钮",
          "app-plus": {
            titleNView: {
              buttons: [
                {
                  type: "share"
                },
                {
                  type: "favorite"
                }
              ]
            }
          }
        }
      },
      {
        path: "nav-image/nav-image",
        style: {
          navigationBarBackgroundColor: "#FFFFFF",
          navigationBarTextStyle: "black",
          titleImage: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3e4cbd0-517d-11eb-a16f-5b3e54966275.png"
        }
      },
      {
        path: "nav-city-dropdown/nav-city-dropdown",
        style: {
          navigationBarTitleText: "导航栏带城市选择",
          "app-plus": {
            titleNView: {
              buttons: [
                {
                  text: "北京市",
                  fontSize: "14",
                  select: true,
                  width: "auto"
                }
              ]
            }
          }
        }
      },
      {
        path: "nav-dot/nav-dot",
        style: {
          navigationBarTitleText: "导航栏带红点和角标",
          "app-plus": {
            titleNView: {
              buttons: [
                {
                  text: "消息",
                  fontSize: "14",
                  redDot: true
                },
                {
                  text: "关注",
                  fontSize: "14",
                  badgeText: "12"
                }
              ]
            }
          }
        }
      },
      {
        path: "nav-search-input/nav-search-input",
        style: {
          navigationBarTitleText: "导航栏带搜索框",
          "app-plus": {
            titleNView: {
              type: "transparent",
              titleColor: "#fff",
              backgroundColor: "#007AFF",
              buttons: [
                {
                  fontSrc: "/static/uni.ttf",
                  text: "",
                  width: "40px",
                  fontSize: "28px",
                  color: "#fff",
                  background: "rgba(0,0,0,0)"
                }
              ],
              searchInput: {
                backgroundColor: "#fff",
                borderRadius: "6px",
                placeholder: "请输入地址 如：大钟寺",
                disabled: true
              }
            }
          }
        }
      },
      {
        path: "nav-search-input/detail/detail",
        style: {
          navigationBarTitleText: "搜索",
          "app-plus": {
            titleNView: {
              titleColor: "#fff",
              backgroundColor: "#007AFF",
              buttons: [
                {
                  fontSrc: "/static/uni.ttf",
                  text: "",
                  width: "auto",
                  fontSize: "28px",
                  color: "#fff"
                }
              ],
              searchInput: {
                backgroundColor: "#fff",
                borderRadius: "6px",
                placeholder: "请输入地址 如：大钟寺",
                autoFocus: true
              }
            }
          }
        }
      },
      {
        path: "list2detail-list/list2detail-list",
        style: {
          navigationBarTitleText: "列表到详情示例",
          enablePullDownRefresh: true
        }
      },
      {
        path: "list2detail-detail/list2detail-detail",
        style: {
          navigationBarTitleText: "详情",
          "app-plus": {
            titleNView: {
              type: "transparent",
              buttons: [
                {
                  type: "share"
                }
              ]
            }
          },
          h5: {
            titleNView: {
              type: "transparent",
              buttons: []
            }
          }
        }
      },
      {
        path: "tabbar/tabbar",
        style: {
          navigationBarTitleText: "可拖动顶部选项卡"
        }
      },
      {
        path: "tabbar/detail/detail",
        style: {
          navigationBarTitleText: "详情页面"
        }
      },
      {
        path: "swiper-vertical/swiper-vertical",
        style: {
          navigationBarTitleText: "上下滑动切换视频",
          "app-plus": {
            titleNView: false
          }
        }
      },
      {
        path: "swiper-list/swiper-list",
        style: {
          navigationBarTitleText: "swiper-list"
        }
      },
      {
        path: "swiper-list-nvue/swiper-list-nvue",
        style: {
          navigationBarTitleText: "swiper-list"
        }
      },
      {
        path: "scheme/scheme",
        style: {
          navigationBarTitleText: "打开外部应用"
        }
      },
      {
        path: "global/global",
        style: {
          navigationBarTitleText: "GlobalData和vuex"
        }
      }
    ]
  }
];
const globalStyle = {
  pageOrientation: "portrait",
  navigationBarTitleText: "Hello uniapp",
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#007AFF",
  backgroundColor: "#F8F8F8",
  backgroundColorTop: "#F4F5F6",
  backgroundColorBottom: "#F4F5F6",
  "mp-360": {
    navigationStyle: "custom"
  },
  h5: {
    maxWidth: 1190,
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#F1F1F1"
  }
};
const tabBar = {
  color: "#7A7E83",
  selectedColor: "#007AFF",
  borderStyle: "black",
  backgroundColor: "#F8F8F8",
  list: [
    {
      pagePath: "pages/tabBar/component/component",
      iconPath: "static/component.png",
      selectedIconPath: "static/componentHL.png",
      text: "内置组件"
    },
    {
      pagePath: "pages/tabBar/API/API",
      iconPath: "static/api.png",
      selectedIconPath: "static/apiHL.png",
      text: "接口"
    },
    {
      pagePath: "pages/tabBar/extUI/extUI",
      iconPath: "static/extui.png",
      selectedIconPath: "static/extuiHL.png",
      text: "扩展组件"
    },
    {
      pagePath: "pages/tabBar/template/template",
      iconPath: "static/template.png",
      selectedIconPath: "static/templateHL.png",
      text: "模板"
    }
  ]
};
const t = {
  leftWindow,
  topWindow,
  pages,
  subPackages,
  globalStyle,
  tabBar
};
function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function s(e, t2, n2) {
  return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }(null == t3 && n2.path);
  } }, n2.exports), n2.exports;
}
var r = s(function(e, t2) {
  var n2;
  e.exports = (n2 = n2 || function(e2, t3) {
    var n3 = Object.create || function() {
      function e3() {
      }
      return function(t4) {
        var n4;
        return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
      };
    }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e3) {
      var t4 = n3(this);
      return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
        t4.$super.init.apply(this, arguments);
      }), t4.init.prototype = t4, t4.$super = this, t4;
    }, create: function() {
      var e3 = this.extend();
      return e3.init.apply(e3, arguments), e3;
    }, init: function() {
    }, mixIn: function(e3) {
      for (var t4 in e3)
        e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
      e3.hasOwnProperty("toString") && (this.toString = e3.toString);
    }, clone: function() {
      return this.init.prototype.extend(this);
    } }, o2 = r2.WordArray = i2.extend({ init: function(e3, n4) {
      e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
    }, toString: function(e3) {
      return (e3 || c2).stringify(this);
    }, concat: function(e3) {
      var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, r3 = e3.sigBytes;
      if (this.clamp(), s3 % 4)
        for (var i3 = 0; i3 < r3; i3++) {
          var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
          t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
        }
      else
        for (i3 = 0; i3 < r3; i3 += 4)
          t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
      return this.sigBytes += r3, this;
    }, clamp: function() {
      var t4 = this.words, n4 = this.sigBytes;
      t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
    }, clone: function() {
      var e3 = i2.clone.call(this);
      return e3.words = this.words.slice(0), e3;
    }, random: function(t4) {
      for (var n4, s3 = [], r3 = function(t5) {
        t5 = t5;
        var n5 = 987654321, s4 = 4294967295;
        return function() {
          var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
          return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
        };
      }, i3 = 0; i3 < t4; i3 += 4) {
        var a3 = r3(4294967296 * (n4 || e2.random()));
        n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
      }
      return new o2.init(s3, t4);
    } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
      for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
        var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
        s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
      }
      return s3.join("");
    }, parse: function(e3) {
      for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
        n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
      return new o2.init(n4, t4 / 2);
    } }, u2 = a2.Latin1 = { stringify: function(e3) {
      for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
        var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
        s3.push(String.fromCharCode(i3));
      }
      return s3.join("");
    }, parse: function(e3) {
      for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
        n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
      return new o2.init(n4, t4);
    } }, l2 = a2.Utf8 = { stringify: function(e3) {
      try {
        return decodeURIComponent(escape(u2.stringify(e3)));
      } catch (e4) {
        throw new Error("Malformed UTF-8 data");
      }
    }, parse: function(e3) {
      return u2.parse(unescape(encodeURIComponent(e3)));
    } }, h2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
      this._data = new o2.init(), this._nDataBytes = 0;
    }, _append: function(e3) {
      "string" == typeof e3 && (e3 = l2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
    }, _process: function(t4) {
      var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e2.min(4 * c3, r3);
      if (c3) {
        for (var l3 = 0; l3 < c3; l3 += i3)
          this._doProcessBlock(s3, l3);
        var h3 = s3.splice(0, c3);
        n4.sigBytes -= u3;
      }
      return new o2.init(h3, u3);
    }, clone: function() {
      var e3 = i2.clone.call(this);
      return e3._data = this._data.clone(), e3;
    }, _minBufferSize: 0 });
    r2.Hasher = h2.extend({ cfg: i2.extend(), init: function(e3) {
      this.cfg = this.cfg.extend(e3), this.reset();
    }, reset: function() {
      h2.reset.call(this), this._doReset();
    }, update: function(e3) {
      return this._append(e3), this._process(), this;
    }, finalize: function(e3) {
      return e3 && this._append(e3), this._doFinalize();
    }, blockSize: 16, _createHelper: function(e3) {
      return function(t4, n4) {
        return new e3.init(n4).finalize(t4);
      };
    }, _createHmacHelper: function(e3) {
      return function(t4, n4) {
        return new d2.HMAC.init(e3, n4).finalize(t4);
      };
    } });
    var d2 = s2.algo = {};
    return s2;
  }(Math), n2);
}), i = r, o = (s(function(e, t2) {
  var n2;
  e.exports = (n2 = i, function(e2) {
    var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
    !function() {
      for (var t4 = 0; t4 < 64; t4++)
        a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
    }();
    var c2 = o2.MD5 = i2.extend({ _doReset: function() {
      this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
    }, _doProcessBlock: function(e3, t4) {
      for (var n3 = 0; n3 < 16; n3++) {
        var s3 = t4 + n3, r3 = e3[s3];
        e3[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
      }
      var i3 = this._hash.words, o3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], p2 = e3[t4 + 3], g2 = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w = e3[t4 + 8], v2 = e3[t4 + 9], S2 = e3[t4 + 10], k2 = e3[t4 + 11], I2 = e3[t4 + 12], b = e3[t4 + 13], T2 = e3[t4 + 14], A2 = e3[t4 + 15], C2 = i3[0], P2 = i3[1], E2 = i3[2], O2 = i3[3];
      C2 = u2(C2, P2, E2, O2, o3, 7, a2[0]), O2 = u2(O2, C2, P2, E2, c3, 12, a2[1]), E2 = u2(E2, O2, C2, P2, f2, 17, a2[2]), P2 = u2(P2, E2, O2, C2, p2, 22, a2[3]), C2 = u2(C2, P2, E2, O2, g2, 7, a2[4]), O2 = u2(O2, C2, P2, E2, m2, 12, a2[5]), E2 = u2(E2, O2, C2, P2, y2, 17, a2[6]), P2 = u2(P2, E2, O2, C2, _2, 22, a2[7]), C2 = u2(C2, P2, E2, O2, w, 7, a2[8]), O2 = u2(O2, C2, P2, E2, v2, 12, a2[9]), E2 = u2(E2, O2, C2, P2, S2, 17, a2[10]), P2 = u2(P2, E2, O2, C2, k2, 22, a2[11]), C2 = u2(C2, P2, E2, O2, I2, 7, a2[12]), O2 = u2(O2, C2, P2, E2, b, 12, a2[13]), E2 = u2(E2, O2, C2, P2, T2, 17, a2[14]), C2 = l2(C2, P2 = u2(P2, E2, O2, C2, A2, 22, a2[15]), E2, O2, c3, 5, a2[16]), O2 = l2(O2, C2, P2, E2, y2, 9, a2[17]), E2 = l2(E2, O2, C2, P2, k2, 14, a2[18]), P2 = l2(P2, E2, O2, C2, o3, 20, a2[19]), C2 = l2(C2, P2, E2, O2, m2, 5, a2[20]), O2 = l2(O2, C2, P2, E2, S2, 9, a2[21]), E2 = l2(E2, O2, C2, P2, A2, 14, a2[22]), P2 = l2(P2, E2, O2, C2, g2, 20, a2[23]), C2 = l2(C2, P2, E2, O2, v2, 5, a2[24]), O2 = l2(O2, C2, P2, E2, T2, 9, a2[25]), E2 = l2(E2, O2, C2, P2, p2, 14, a2[26]), P2 = l2(P2, E2, O2, C2, w, 20, a2[27]), C2 = l2(C2, P2, E2, O2, b, 5, a2[28]), O2 = l2(O2, C2, P2, E2, f2, 9, a2[29]), E2 = l2(E2, O2, C2, P2, _2, 14, a2[30]), C2 = h2(C2, P2 = l2(P2, E2, O2, C2, I2, 20, a2[31]), E2, O2, m2, 4, a2[32]), O2 = h2(O2, C2, P2, E2, w, 11, a2[33]), E2 = h2(E2, O2, C2, P2, k2, 16, a2[34]), P2 = h2(P2, E2, O2, C2, T2, 23, a2[35]), C2 = h2(C2, P2, E2, O2, c3, 4, a2[36]), O2 = h2(O2, C2, P2, E2, g2, 11, a2[37]), E2 = h2(E2, O2, C2, P2, _2, 16, a2[38]), P2 = h2(P2, E2, O2, C2, S2, 23, a2[39]), C2 = h2(C2, P2, E2, O2, b, 4, a2[40]), O2 = h2(O2, C2, P2, E2, o3, 11, a2[41]), E2 = h2(E2, O2, C2, P2, p2, 16, a2[42]), P2 = h2(P2, E2, O2, C2, y2, 23, a2[43]), C2 = h2(C2, P2, E2, O2, v2, 4, a2[44]), O2 = h2(O2, C2, P2, E2, I2, 11, a2[45]), E2 = h2(E2, O2, C2, P2, A2, 16, a2[46]), C2 = d2(C2, P2 = h2(P2, E2, O2, C2, f2, 23, a2[47]), E2, O2, o3, 6, a2[48]), O2 = d2(O2, C2, P2, E2, _2, 10, a2[49]), E2 = d2(E2, O2, C2, P2, T2, 15, a2[50]), P2 = d2(P2, E2, O2, C2, m2, 21, a2[51]), C2 = d2(C2, P2, E2, O2, I2, 6, a2[52]), O2 = d2(O2, C2, P2, E2, p2, 10, a2[53]), E2 = d2(E2, O2, C2, P2, S2, 15, a2[54]), P2 = d2(P2, E2, O2, C2, c3, 21, a2[55]), C2 = d2(C2, P2, E2, O2, w, 6, a2[56]), O2 = d2(O2, C2, P2, E2, A2, 10, a2[57]), E2 = d2(E2, O2, C2, P2, y2, 15, a2[58]), P2 = d2(P2, E2, O2, C2, b, 21, a2[59]), C2 = d2(C2, P2, E2, O2, g2, 6, a2[60]), O2 = d2(O2, C2, P2, E2, k2, 10, a2[61]), E2 = d2(E2, O2, C2, P2, f2, 15, a2[62]), P2 = d2(P2, E2, O2, C2, v2, 21, a2[63]), i3[0] = i3[0] + C2 | 0, i3[1] = i3[1] + P2 | 0, i3[2] = i3[2] + E2 | 0, i3[3] = i3[3] + O2 | 0;
    }, _doFinalize: function() {
      var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
      n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
      var i3 = e2.floor(s3 / 4294967296), o3 = s3;
      n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
      for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
        var l3 = c3[u3];
        c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
      }
      return a3;
    }, clone: function() {
      var e3 = i2.clone.call(this);
      return e3._hash = this._hash.clone(), e3;
    } });
    function u2(e3, t4, n3, s3, r3, i3, o3) {
      var a3 = e3 + (t4 & n3 | ~t4 & s3) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    function l2(e3, t4, n3, s3, r3, i3, o3) {
      var a3 = e3 + (t4 & s3 | n3 & ~s3) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    function h2(e3, t4, n3, s3, r3, i3, o3) {
      var a3 = e3 + (t4 ^ n3 ^ s3) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    function d2(e3, t4, n3, s3, r3, i3, o3) {
      var a3 = e3 + (n3 ^ (t4 | ~s3)) + r3 + o3;
      return (a3 << i3 | a3 >>> 32 - i3) + t4;
    }
    t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
  }(Math), n2.MD5);
}), s(function(e, t2) {
  var n2;
  e.exports = (n2 = i, void function() {
    var e2 = n2, t3 = e2.lib.Base, s2 = e2.enc.Utf8;
    e2.algo.HMAC = t3.extend({ init: function(e3, t4) {
      e3 = this._hasher = new e3.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
      var n3 = e3.blockSize, r2 = 4 * n3;
      t4.sigBytes > r2 && (t4 = e3.finalize(t4)), t4.clamp();
      for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      i2.sigBytes = o2.sigBytes = r2, this.reset();
    }, reset: function() {
      var e3 = this._hasher;
      e3.reset(), e3.update(this._iKey);
    }, update: function(e3) {
      return this._hasher.update(e3), this;
    }, finalize: function(e3) {
      var t4 = this._hasher, n3 = t4.finalize(e3);
      return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
    } });
  }());
}), s(function(e, t2) {
  e.exports = i.HmacMD5;
})), a = s(function(e, t2) {
  e.exports = i.enc.Utf8;
}), c = s(function(e, t2) {
  var n2;
  e.exports = (n2 = i, function() {
    var e2 = n2, t3 = e2.lib.WordArray;
    function s2(e3, n3, s3) {
      for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
        if (o2 % 4) {
          var a2 = s3[e3.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e3.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
          r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
        }
      return t3.create(r2, i2);
    }
    e2.enc.Base64 = { stringify: function(e3) {
      var t4 = e3.words, n3 = e3.sigBytes, s3 = this._map;
      e3.clamp();
      for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
        for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
          r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
      var c2 = s3.charAt(64);
      if (c2)
        for (; r2.length % 4; )
          r2.push(c2);
      return r2.join("");
    }, parse: function(e3) {
      var t4 = e3.length, n3 = this._map, r2 = this._reverseMap;
      if (!r2) {
        r2 = this._reverseMap = [];
        for (var i2 = 0; i2 < n3.length; i2++)
          r2[n3.charCodeAt(i2)] = i2;
      }
      var o2 = n3.charAt(64);
      if (o2) {
        var a2 = e3.indexOf(o2);
        -1 !== a2 && (t4 = a2);
      }
      return s2(e3, t4, r2);
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
  }(), n2.enc.Base64);
});
const u = "FUNCTION", l = "OBJECT", h = "CLIENT_DB";
function d(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function f(e) {
  return "object" === d(e);
}
function p(e) {
  return "function" == typeof e;
}
function g(e) {
  return function() {
    try {
      return e.apply(e, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
function m(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
const y = true, _ = "app", v = m([]), S = _, k = m(""), I = m("[]") || [];
let T = "";
try {
  T = "";
} catch (e) {
}
let A = {};
function C(e, t2 = {}) {
  var n2, s2;
  return n2 = A, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (A[e] = t2), A[e];
}
A = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
const P = ["invoke", "success", "fail", "complete"], E = C("_globalUniCloudInterceptor");
function O(e, t2) {
  E[e] || (E[e] = {}), f(t2) && Object.keys(t2).forEach((n2) => {
    P.indexOf(n2) > -1 && function(e2, t3, n3) {
      let s2 = E[e2][t3];
      s2 || (s2 = E[e2][t3] = []), -1 === s2.indexOf(n3) && p(n3) && s2.push(n3);
    }(e, n2, t2[n2]);
  });
}
function x(e, t2) {
  E[e] || (E[e] = {}), f(t2) ? Object.keys(t2).forEach((n2) => {
    P.indexOf(n2) > -1 && function(e2, t3, n3) {
      const s2 = E[e2][t3];
      if (!s2)
        return;
      const r2 = s2.indexOf(n3);
      r2 > -1 && s2.splice(r2, 1);
    }(e, n2, t2[n2]);
  }) : delete E[e];
}
function U(e, t2) {
  return e && 0 !== e.length ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
}
function R(e, t2) {
  return E[e] && E[e][t2] || [];
}
function L(e) {
  O("callObject", e);
}
const N = C("_globalUniCloudListener"), D = "response", F = "needLogin", q = "refreshToken", K = "clientdb", j = "cloudfunction", M = "cloudobject";
function B(e) {
  return N[e] || (N[e] = []), N[e];
}
function $(e, t2) {
  const n2 = B(e);
  n2.includes(t2) || n2.push(t2);
}
function W(e, t2) {
  const n2 = B(e), s2 = n2.indexOf(t2);
  -1 !== s2 && n2.splice(s2, 1);
}
function z(e, t2) {
  const n2 = B(e);
  for (let e2 = 0; e2 < n2.length; e2++) {
    (0, n2[e2])(t2);
  }
}
let J, H = false;
function G() {
  return J || (J = new Promise((e) => {
    H && e(), function t2() {
      if ("function" == typeof getCurrentPages) {
        const t3 = getCurrentPages();
        t3 && t3[0] && (H = true, e());
      }
      H || setTimeout(() => {
        t2();
      }, 30);
    }();
  }), J);
}
function V(e) {
  const t2 = {};
  for (const n2 in e) {
    const s2 = e[n2];
    p(s2) && (t2[n2] = g(s2));
  }
  return t2;
}
function Y(e, t2) {
  return t2 ? function(n2) {
    let s2 = false;
    if ("callFunction" === t2) {
      const e2 = n2 && n2.type || u;
      s2 = e2 !== u;
    }
    const r2 = "callFunction" === t2 && !s2;
    let i2;
    i2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
    const { success: o2, fail: a2, complete: c2 } = V(n2), l2 = i2.then(() => s2 ? Promise.resolve() : U(R(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : U(R(t2, "success"), e2).then(() => U(R(t2, "complete"), e2)).then(() => (r2 && z(D, { type: j, content: e2 }), Promise.resolve(e2))), (e2) => s2 ? Promise.reject(e2) : U(R(t2, "fail"), e2).then(() => U(R(t2, "complete"), e2)).then(() => (z(D, { type: j, content: e2 }), Promise.reject(e2))));
    if (!(o2 || a2 || c2))
      return l2;
    l2.then((e2) => {
      o2 && o2(e2), c2 && c2(e2), r2 && z(D, { type: j, content: e2 });
    }, (e2) => {
      a2 && a2(e2), c2 && c2(e2), r2 && z(D, { type: j, content: e2 });
    });
  } : function(t3) {
    t3 = t3 || {};
    const { success: n2, fail: s2, complete: r2 } = V(t3);
    if (!(n2 || s2 || r2))
      return e.call(this, t3);
    e.call(this, t3).then((e2) => {
      n2 && n2(e2), r2 && r2(e2);
    }, (e2) => {
      s2 && s2(e2), r2 && r2(e2);
    });
  };
}
class Q extends Error {
  constructor(e) {
    super(e.message), this.errMsg = e.message || e.errMsg || "unknown system error", this.code = this.errCode = e.code || e.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e.subject || e.errSubject, this.cause = e.cause, this.requestId = e.requestId;
  }
  toJson(e = 0) {
    if (!(e >= 10))
      return e++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause };
  }
}
var X = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
function Z(e) {
  return e && Z(e.__v_raw) || e;
}
function ee() {
  return { token: X.getStorageSync("uni_id_token") || X.getStorageSync("uniIdToken"), tokenExpired: X.getStorageSync("uni_id_token_expired") };
}
function te({ token: e, tokenExpired: t2 } = {}) {
  e && X.setStorageSync("uni_id_token", e), t2 && X.setStorageSync("uni_id_token_expired", t2);
}
let se, re;
function ie() {
  return se || (se = uni.getSystemInfoSync()), se;
}
function oe() {
  let e, t2;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
        return;
      const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
      e = s2, t2 = n2;
    }
  } catch (e2) {
  }
  return { channel: e, scene: t2 };
}
function ae() {
  const e = uni.getLocale && uni.getLocale() || "en";
  if (re)
    return { ...re, locale: e, LOCALE: e };
  const t2 = ie(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (let e2 = 0; e2 < o2.length; e2++) {
    delete t2[o2[e2]];
  }
  return re = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...oe(), ...t2 }, { ...re, locale: e, LOCALE: e };
}
var ce = { sign: function(e, t2) {
  let n2 = "";
  return Object.keys(e).sort().forEach(function(t3) {
    e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
  }), n2 = n2.slice(1), o(n2, t2).toString();
}, wrappedRequest: function(e, t2) {
  return new Promise((n2, s2) => {
    t2(Object.assign(e, { complete(e2) {
      e2 || (e2 = {});
      const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
      if (!e2.statusCode || e2.statusCode >= 400)
        return s2(new Q({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
      const r2 = e2.data;
      if (r2.error)
        return s2(new Q({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
      r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
    } }));
  });
}, toBase64: function(e) {
  return c.stringify(a.parse(e));
} }, ue = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
const { t: le } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: ue, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: ue }, "zh-Hans");
var he = class {
  constructor(e) {
    ["spaceId", "clientSecret"].forEach((t2) => {
      if (!Object.prototype.hasOwnProperty.call(e, t2))
        throw new Error(le("uniCloud.init.paramRequired", { param: t2 }));
    }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = X, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
  }
  get hasAccessToken() {
    return !!this.accessToken;
  }
  setAccessToken(e) {
    this.accessToken = e;
  }
  requestWrapped(e) {
    return ce.wrappedRequest(e, this.adapter.request);
  }
  requestAuth(e) {
    return this.requestWrapped(e);
  }
  request(e, t2) {
    return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
      !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e2();
    }).then(() => this.getAccessToken()).then(() => {
      const t4 = this.rebuildRequest(e);
      return this.request(t4, true);
    })) : this.getAccessToken().then(() => {
      const t3 = this.rebuildRequest(e);
      return this.request(t3, true);
    }));
  }
  rebuildRequest(e) {
    const t2 = Object.assign({}, e);
    return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = ce.sign(t2.data, this.config.clientSecret), t2;
  }
  setupRequest(e, t2) {
    const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
    return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ce.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
  }
  getAccessToken() {
    if ("pending" === this._getAccessTokenPromiseStatus)
      return this._getAccessTokenPromise;
    this._getAccessTokenPromiseStatus = "pending";
    return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
      e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new Q({ code: "AUTH_FAILED", message: "获取accessToken失败" })));
    }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
  }
  authorize() {
    this.getAccessToken();
  }
  callFunction(e) {
    const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
    return this.request(this.setupRequest(t2));
  }
  getOSSUploadOptionsFromPath(e) {
    const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
    return this.request(this.setupRequest(t2));
  }
  uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
    return new Promise((o2, a2) => {
      const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
        e2 && e2.statusCode < 400 ? o2(e2) : a2(new Q({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }, fail(e2) {
        a2(new Q({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "文件上传失败" }));
      } });
      "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
        i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
      });
    });
  }
  reportOSSUpload(e) {
    const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
    return this.request(this.setupRequest(t2));
  }
  async uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: r2 }) {
    if ("string" !== d(t2))
      throw new Q({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
    if (!(t2 = t2.trim()))
      throw new Q({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
    if (/:\/\//.test(t2))
      throw new Q({ code: "INVALID_PARAM", message: "cloudPath不合法" });
    const i2 = r2 && r2.envType || this.config.envType, o2 = (await this.getOSSUploadOptionsFromPath({ env: i2, filename: t2 })).result, a2 = "https://" + o2.cdnDomain + "/" + o2.ossPath, { securityToken: c2, accessKeyId: u2, signature: l2, host: h2, ossPath: f2, id: p2, policy: g2, ossCallbackUrl: m2 } = o2, y2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: u2, Signature: l2, host: h2, id: p2, key: f2, policy: g2, success_action_status: 200 };
    if (c2 && (y2["x-oss-security-token"] = c2), m2) {
      const e2 = JSON.stringify({ callbackUrl: m2, callbackBody: JSON.stringify({ fileId: p2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
      y2.callback = ce.toBase64(e2);
    }
    const _2 = { url: "https://" + o2.host, formData: y2, fileName: "file", name: "file", filePath: e, fileType: n2 };
    if (await this.uploadFileToOSS(Object.assign({}, _2, { onUploadProgress: s2 })), m2)
      return { success: true, filePath: e, fileID: a2 };
    if ((await this.reportOSSUpload({ id: p2 })).success)
      return { success: true, filePath: e, fileID: a2 };
    throw new Q({ code: "UPLOAD_FAILED", message: "文件上传失败" });
  }
  getTempFileURL({ fileList: e } = {}) {
    return new Promise((t2, n2) => {
      Array.isArray(e) && 0 !== e.length || n2(new Q({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
    });
  }
  async getFileInfo({ fileList: e } = {}) {
    if (!Array.isArray(e) || 0 === e.length)
      throw new Q({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
    const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e.map((e2) => e2.split("?")[0]).join(",") }) };
    return { fileList: (await this.request(this.setupRequest(t2))).result };
  }
};
var de = { init(e) {
  const t2 = new he(e), n2 = { signInAnonymously: function() {
    return t2.authorize();
  }, getLoginState: function() {
    return Promise.resolve(false);
  } };
  return t2.auth = function() {
    return n2;
  }, t2.customAuth = t2.auth, t2;
} };
const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var pe;
!function(e) {
  e.local = "local", e.none = "none", e.session = "session";
}(pe || (pe = {}));
var ge = function() {
};
const me = () => {
  let e;
  if (!Promise) {
    e = () => {
    }, e.promise = {};
    const t3 = () => {
      throw new Q({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
    };
    return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
  }
  const t2 = new Promise((t3, n2) => {
    e = (e2, s2) => e2 ? n2(e2) : t3(s2);
  });
  return e.promise = t2, e;
};
function ye(e) {
  return void 0 === e;
}
function _e(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var we;
function ve(e) {
  const t2 = (n2 = e, "[object Array]" === Object.prototype.toString.call(n2) ? e : [e]);
  var n2;
  for (const e2 of t2) {
    const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
    if (t3())
      return { adapter: n3(), runtime: s2 };
  }
}
!function(e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(we || (we = {}));
const Se = { adapter: null, runtime: void 0 }, ke = ["anonymousUuidKey"];
class Ie extends ge {
  constructor() {
    super(), Se.adapter.root.tcbObject || (Se.adapter.root.tcbObject = {});
  }
  setItem(e, t2) {
    Se.adapter.root.tcbObject[e] = t2;
  }
  getItem(e) {
    return Se.adapter.root.tcbObject[e];
  }
  removeItem(e) {
    delete Se.adapter.root.tcbObject[e];
  }
  clear() {
    delete Se.adapter.root.tcbObject;
  }
}
function be(e, t2) {
  switch (e) {
    case "local":
      return t2.localStorage || new Ie();
    case "none":
      return new Ie();
    default:
      return t2.sessionStorage || new Ie();
  }
}
class Te {
  constructor(e) {
    if (!this._storage) {
      this._persistence = Se.adapter.primaryStorage || e.persistence, this._storage = be(this._persistence, Se.adapter);
      const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, i2 = `login_type_${e.env}`, o2 = `user_info_${e.env}`;
      this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
    }
  }
  updatePersistence(e) {
    if (e === this._persistence)
      return;
    const t2 = "local" === this._persistence;
    this._persistence = e;
    const n2 = be(e, Se.adapter);
    for (const e2 in this.keys) {
      const s2 = this.keys[e2];
      if (t2 && ke.includes(e2))
        continue;
      const r2 = this._storage.getItem(s2);
      ye(r2) || _e(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
    }
    this._storage = n2;
  }
  setStore(e, t2, n2) {
    if (!this._storage)
      return;
    const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
    try {
      this._storage.setItem(e, r2);
    } catch (e2) {
      throw e2;
    }
  }
  getStore(e, t2) {
    try {
      if (!this._storage)
        return;
    } catch (e2) {
      return "";
    }
    t2 = t2 || "localCachev1";
    const n2 = this._storage.getItem(e);
    if (!n2)
      return "";
    if (n2.indexOf(t2) >= 0) {
      return JSON.parse(n2).content;
    }
    return "";
  }
  removeStore(e) {
    this._storage.removeItem(e);
  }
}
const Ae = {}, Ce = {};
function Pe(e) {
  return Ae[e];
}
class Ee {
  constructor(e, t2) {
    this.data = t2 || null, this.name = e;
  }
}
class Oe extends Ee {
  constructor(e, t2) {
    super("error", { error: e, data: t2 }), this.error = e;
  }
}
const xe = new class {
  constructor() {
    this._listeners = {};
  }
  on(e, t2) {
    return function(e2, t3, n2) {
      n2[e2] = n2[e2] || [], n2[e2].push(t3);
    }(e, t2, this._listeners), this;
  }
  off(e, t2) {
    return function(e2, t3, n2) {
      if (n2 && n2[e2]) {
        const s2 = n2[e2].indexOf(t3);
        -1 !== s2 && n2[e2].splice(s2, 1);
      }
    }(e, t2, this._listeners), this;
  }
  fire(e, t2) {
    if (e instanceof Oe)
      return console.error(e.error), this;
    const n2 = "string" == typeof e ? new Ee(e, t2 || {}) : e;
    const s2 = n2.name;
    if (this._listens(s2)) {
      n2.target = this;
      const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
      for (const t3 of e2)
        t3.call(this, n2);
    }
    return this;
  }
  _listens(e) {
    return this._listeners[e] && this._listeners[e].length > 0;
  }
}();
function Ue(e, t2) {
  xe.on(e, t2);
}
function Re(e, t2 = {}) {
  xe.fire(e, t2);
}
function Le(e, t2) {
  xe.off(e, t2);
}
const Ne = "loginStateChanged", De = "loginStateExpire", Fe = "loginTypeChanged", qe = "anonymousConverted", Ke = "refreshAccessToken";
var je;
!function(e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(je || (je = {}));
const Me = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Be = { "X-SDK-Version": "1.3.5" };
function $e(e, t2, n2) {
  const s2 = e[t2];
  e[t2] = function(t3) {
    const r2 = {}, i2 = {};
    n2.forEach((n3) => {
      const { data: s3, headers: o3 } = n3.call(e, t3);
      Object.assign(r2, s3), Object.assign(i2, o3);
    });
    const o2 = t3.data;
    return o2 && (() => {
      var e2;
      if (e2 = o2, "[object FormData]" !== Object.prototype.toString.call(e2))
        t3.data = { ...o2, ...r2 };
      else
        for (const e3 in r2)
          o2.append(e3, r2[e3]);
    })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e, t3);
  };
}
function We() {
  const e = Math.random().toString(16).slice(2);
  return { data: { seqId: e }, headers: { ...Be, "x-seqid": e } };
}
class ze {
  constructor(e = {}) {
    var t2;
    this.config = e, this._reqClass = new Se.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Pe(this.config.env), this._localCache = (t2 = this.config.env, Ce[t2]), $e(this._reqClass, "post", [We]), $e(this._reqClass, "upload", [We]), $e(this._reqClass, "download", [We]);
  }
  async post(e) {
    return await this._reqClass.post(e);
  }
  async upload(e) {
    return await this._reqClass.upload(e);
  }
  async download(e) {
    return await this._reqClass.download(e);
  }
  async refreshAccessToken() {
    let e, t2;
    this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
    try {
      e = await this._refreshAccessTokenPromise;
    } catch (e2) {
      t2 = e2;
    }
    if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
      throw t2;
    return e;
  }
  async _refreshAccessToken() {
    const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
    this._cache.removeStore(e), this._cache.removeStore(t2);
    let i2 = this._cache.getStore(n2);
    if (!i2)
      throw new Q({ message: "未登录CloudBase" });
    const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
    if (a2.data.code) {
      const { code: e2 } = a2.data;
      if ("SIGN_PARAM_INVALID" === e2 || "REFRESH_TOKEN_EXPIRED" === e2 || "INVALID_REFRESH_TOKEN" === e2) {
        if (this._cache.getStore(s2) === je.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e2) {
          const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
          return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
        }
        Re(De), this._cache.removeStore(n2);
      }
      throw new Q({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
    }
    if (a2.data.access_token)
      return Re(Ke), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
    a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
  }
  async getAccessToken() {
    const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
    if (!this._cache.getStore(n2))
      throw new Q({ message: "refresh token不存在，登录状态异常" });
    let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), i2 = true;
    return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
  }
  async request(e, t2, n2) {
    const s2 = `x-tcb-trace_${this.config.env}`;
    let r2 = "application/x-www-form-urlencoded";
    const i2 = { action: e, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
    if (-1 === Me.indexOf(e)) {
      const { refreshTokenKey: e2 } = this._cache.keys;
      this._cache.getStore(e2) && (i2.access_token = (await this.getAccessToken()).accessToken);
    }
    let o2;
    if ("storage.uploadFile" === e) {
      o2 = new FormData();
      for (let e2 in o2)
        o2.hasOwnProperty(e2) && void 0 !== o2[e2] && o2.append(e2, i2[e2]);
      r2 = "multipart/form-data";
    } else {
      r2 = "application/json", o2 = {};
      for (let e2 in i2)
        void 0 !== i2[e2] && (o2[e2] = i2[e2]);
    }
    let a2 = { headers: { "content-type": r2 } };
    n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
    const c2 = this._localCache.getStore(s2);
    c2 && (a2.headers["X-TCB-Trace"] = c2);
    const { parse: u2, inQuery: l2, search: h2 } = t2;
    let d2 = { env: this.config.env };
    u2 && (d2.parse = true), l2 && (d2 = { ...l2, ...d2 });
    let f2 = function(e2, t3, n3 = {}) {
      const s3 = /\?/.test(t3);
      let r3 = "";
      for (let e3 in n3)
        "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(n3[e3])}`;
      return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
    }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
    h2 && (f2 += h2);
    const p2 = await this.post({ url: f2, data: o2, ...a2 }), g2 = p2.header && p2.header["x-tcb-trace"];
    if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(p2.status) && 200 !== Number(p2.statusCode) || !p2.data)
      throw new Q({ code: "NETWORK_ERROR", message: "network request error" });
    return p2;
  }
  async send(e, t2 = {}) {
    const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
    if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === Me.indexOf(e)) {
      await this.refreshAccessToken();
      const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if (n3.data.code)
        throw new Q({ code: n3.data.code, message: n3.data.message });
      return n3.data;
    }
    if (n2.data.code)
      throw new Q({ code: n2.data.code, message: n2.data.message });
    return n2.data;
  }
  setRefreshToken(e) {
    const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
    this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
  }
}
const Je = {};
function He(e) {
  return Je[e];
}
class Ge {
  constructor(e) {
    this.config = e, this._cache = Pe(e.env), this._request = He(e.env);
  }
  setRefreshToken(e) {
    const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
    this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
  }
  setAccessToken(e, t2) {
    const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
    this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
  }
  async refreshUserInfo() {
    const { data: e } = await this._request.send("auth.getUserInfo", {});
    return this.setLocalUserInfo(e), e;
  }
  setLocalUserInfo(e) {
    const { userInfoKey: t2 } = this._cache.keys;
    this._cache.setStore(t2, e);
  }
}
class Ve {
  constructor(e) {
    if (!e)
      throw new Q({ code: "PARAM_ERROR", message: "envId is not defined" });
    this._envId = e, this._cache = Pe(this._envId), this._request = He(this._envId), this.setUserInfo();
  }
  linkWithTicket(e) {
    if ("string" != typeof e)
      throw new Q({ code: "PARAM_ERROR", message: "ticket must be string" });
    return this._request.send("auth.linkWithTicket", { ticket: e });
  }
  linkWithRedirect(e) {
    e.signInWithRedirect();
  }
  updatePassword(e, t2) {
    return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
  }
  updateEmail(e) {
    return this._request.send("auth.updateEmail", { newEmail: e });
  }
  updateUsername(e) {
    if ("string" != typeof e)
      throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
    return this._request.send("auth.updateUsername", { username: e });
  }
  async getLinkedUidList() {
    const { data: e } = await this._request.send("auth.getLinkedUidList", {});
    let t2 = false;
    const { users: n2 } = e;
    return n2.forEach((e2) => {
      e2.wxOpenId && e2.wxPublicId && (t2 = true);
    }), { users: n2, hasPrimaryUid: t2 };
  }
  setPrimaryUid(e) {
    return this._request.send("auth.setPrimaryUid", { uid: e });
  }
  unlink(e) {
    return this._request.send("auth.unlink", { platform: e });
  }
  async update(e) {
    const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
    this.setLocalUserInfo(a2);
  }
  async refresh() {
    const { data: e } = await this._request.send("auth.getUserInfo", {});
    return this.setLocalUserInfo(e), e;
  }
  setUserInfo() {
    const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
    ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
      this[e2] = t2[e2];
    }), this.location = { country: t2.country, province: t2.province, city: t2.city };
  }
  setLocalUserInfo(e) {
    const { userInfoKey: t2 } = this._cache.keys;
    this._cache.setStore(t2, e), this.setUserInfo();
  }
}
class Ye {
  constructor(e) {
    if (!e)
      throw new Q({ code: "PARAM_ERROR", message: "envId is not defined" });
    this._cache = Pe(e);
    const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
    this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ve(e);
  }
  get isAnonymousAuth() {
    return this.loginType === je.ANONYMOUS;
  }
  get isCustomAuth() {
    return this.loginType === je.CUSTOM;
  }
  get isWeixinAuth() {
    return this.loginType === je.WECHAT || this.loginType === je.WECHAT_OPEN || this.loginType === je.WECHAT_PUBLIC;
  }
  get loginType() {
    return this._cache.getStore(this._cache.keys.loginTypeKey);
  }
}
class Qe extends Ge {
  async signIn() {
    this._cache.updatePersistence("local");
    const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
    if (r2.uuid && r2.refresh_token) {
      this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Re(Ne), Re(Fe, { env: this.config.env, loginType: je.ANONYMOUS, persistence: "local" });
      const e2 = new Ye(this.config.env);
      return await e2.user.refresh(), e2;
    }
    throw new Q({ message: "匿名登录失败" });
  }
  async linkAndRetrieveDataWithTicket(e) {
    const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
    if (i2.refresh_token)
      return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Re(qe, { env: this.config.env }), Re(Fe, { loginType: je.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
    throw new Q({ message: "匿名转化失败" });
  }
  _setAnonymousUUID(e) {
    const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
    this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, je.ANONYMOUS);
  }
  _clearAnonymousUUID() {
    this._cache.removeStore(this._cache.keys.anonymousUuidKey);
  }
}
class Xe extends Ge {
  async signIn(e) {
    if ("string" != typeof e)
      throw new Q({ code: "PARAM_ERROR", message: "ticket must be a string" });
    const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
    if (n2.refresh_token)
      return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Re(Ne), Re(Fe, { env: this.config.env, loginType: je.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Ye(this.config.env);
    throw new Q({ message: "自定义登录失败" });
  }
}
class Ze extends Ge {
  async signIn(e, t2) {
    if ("string" != typeof e)
      throw new Q({ code: "PARAM_ERROR", message: "email must be a string" });
    const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
    if (r2)
      return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Re(Ne), Re(Fe, { env: this.config.env, loginType: je.EMAIL, persistence: this.config.persistence }), new Ye(this.config.env);
    throw s2.code ? new Q({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new Q({ message: "邮箱登录失败" });
  }
  async activate(e) {
    return this._request.send("auth.activateEndUserMail", { token: e });
  }
  async resetPasswordWithToken(e, t2) {
    return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
  }
}
class et extends Ge {
  async signIn(e, t2) {
    if ("string" != typeof e)
      throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
    "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
    const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: je.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
    if (r2)
      return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Re(Ne), Re(Fe, { env: this.config.env, loginType: je.USERNAME, persistence: this.config.persistence }), new Ye(this.config.env);
    throw s2.code ? new Q({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new Q({ message: "用户名密码登录失败" });
  }
}
class tt {
  constructor(e) {
    this.config = e, this._cache = Pe(e.env), this._request = He(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ue(Fe, this._onLoginTypeChanged);
  }
  get currentUser() {
    const e = this.hasLoginState();
    return e && e.user || null;
  }
  get loginType() {
    return this._cache.getStore(this._cache.keys.loginTypeKey);
  }
  anonymousAuthProvider() {
    return new Qe(this.config);
  }
  customAuthProvider() {
    return new Xe(this.config);
  }
  emailAuthProvider() {
    return new Ze(this.config);
  }
  usernameAuthProvider() {
    return new et(this.config);
  }
  async signInAnonymously() {
    return new Qe(this.config).signIn();
  }
  async signInWithEmailAndPassword(e, t2) {
    return new Ze(this.config).signIn(e, t2);
  }
  signInWithUsernameAndPassword(e, t2) {
    return new et(this.config).signIn(e, t2);
  }
  async linkAndRetrieveDataWithTicket(e) {
    this._anonymousAuthProvider || (this._anonymousAuthProvider = new Qe(this.config)), Ue(qe, this._onAnonymousConverted);
    return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
  }
  async signOut() {
    if (this.loginType === je.ANONYMOUS)
      throw new Q({ message: "匿名用户不支持登出操作" });
    const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
    if (!s2)
      return;
    const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
    return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), Re(Ne), Re(Fe, { env: this.config.env, loginType: je.NULL, persistence: this.config.persistence }), r2;
  }
  async signUpWithEmailAndPassword(e, t2) {
    return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
  }
  async sendPasswordResetEmail(e) {
    return this._request.send("auth.sendPasswordResetEmail", { email: e });
  }
  onLoginStateChanged(e) {
    Ue(Ne, () => {
      const t3 = this.hasLoginState();
      e.call(this, t3);
    });
    const t2 = this.hasLoginState();
    e.call(this, t2);
  }
  onLoginStateExpired(e) {
    Ue(De, e.bind(this));
  }
  onAccessTokenRefreshed(e) {
    Ue(Ke, e.bind(this));
  }
  onAnonymousConverted(e) {
    Ue(qe, e.bind(this));
  }
  onLoginTypeChanged(e) {
    Ue(Fe, () => {
      const t2 = this.hasLoginState();
      e.call(this, t2);
    });
  }
  async getAccessToken() {
    return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
  }
  hasLoginState() {
    const { refreshTokenKey: e } = this._cache.keys;
    return this._cache.getStore(e) ? new Ye(this.config.env) : null;
  }
  async isUsernameRegistered(e) {
    if ("string" != typeof e)
      throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
    const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
    return t2 && t2.isRegistered;
  }
  getLoginState() {
    return Promise.resolve(this.hasLoginState());
  }
  async signInWithTicket(e) {
    return new Xe(this.config).signIn(e);
  }
  shouldRefreshAccessToken(e) {
    this._request._shouldRefreshAccessTokenHook = e.bind(this);
  }
  getUserInfo() {
    return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : { ...e.data, requestId: e.seqId });
  }
  getAuthHeader() {
    const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
    return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
  }
  _onAnonymousConverted(e) {
    const { env: t2 } = e.data;
    t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
  }
  _onLoginTypeChanged(e) {
    const { loginType: t2, persistence: n2, env: s2 } = e.data;
    s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
  }
}
const nt = function(e, t2) {
  t2 = t2 || me();
  const n2 = He(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e;
  return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
    const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
    n2.upload({ url: a2, data: f2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e3) => {
      201 === e3.statusCode ? t2(null, { fileID: l2, requestId: d2 }) : t2(new Q({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
    }).catch((e3) => {
      t2(e3);
    });
  }).catch((e2) => {
    t2(e2);
  }), t2.promise;
}, st = function(e, t2) {
  t2 = t2 || me();
  const n2 = He(this.config.env), { cloudPath: s2 } = e;
  return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
    t2(null, e2);
  }).catch((e2) => {
    t2(e2);
  }), t2.promise;
}, rt = function({ fileList: e }, t2) {
  if (t2 = t2 || me(), !e || !Array.isArray(e))
    return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
  for (let t3 of e)
    if (!t3 || "string" != typeof t3)
      return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
  const n2 = { fileid_list: e };
  return He(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
    e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
  }).catch((e2) => {
    t2(e2);
  }), t2.promise;
}, it = function({ fileList: e }, t2) {
  t2 = t2 || me(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
  let n2 = [];
  for (let s3 of e)
    "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
  const s2 = { file_list: n2 };
  return He(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
    e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
  }).catch((e2) => {
    t2(e2);
  }), t2.promise;
}, ot = async function({ fileID: e }, t2) {
  const n2 = (await it.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
  if ("SUCCESS" !== n2.code)
    return t2 ? t2(n2) : new Promise((e2) => {
      e2(n2);
    });
  const s2 = He(this.config.env);
  let r2 = n2.download_url;
  if (r2 = encodeURI(r2), !t2)
    return s2.download({ url: r2 });
  t2(await s2.download({ url: r2 }));
}, at = function({ name: e, data: t2, query: n2, parse: s2, search: r2 }, i2) {
  const o2 = i2 || me();
  let a2;
  try {
    a2 = t2 ? JSON.stringify(t2) : "";
  } catch (e2) {
    return Promise.reject(e2);
  }
  if (!e)
    return Promise.reject(new Q({ code: "PARAM_ERROR", message: "函数名不能为空" }));
  const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e, request_data: a2 };
  return He(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
    if (e2.code)
      o2(null, e2);
    else {
      let t3 = e2.data.response_data;
      if (s2)
        o2(null, { result: t3, requestId: e2.requestId });
      else
        try {
          t3 = JSON.parse(e2.data.response_data), o2(null, { result: t3, requestId: e2.requestId });
        } catch (e3) {
          o2(new Q({ message: "response data must be json" }));
        }
    }
    return o2.promise;
  }).catch((e2) => {
    o2(e2);
  }), o2.promise;
}, ct = { timeout: 15e3, persistence: "session" }, ut = {};
class lt {
  constructor(e) {
    this.config = e || this.config, this.authObj = void 0;
  }
  init(e) {
    switch (Se.adapter || (this.requestClient = new Se.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `请求在${(e.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...ct, ...e }, true) {
      case this.config.timeout > 6e5:
        console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
        break;
      case this.config.timeout < 100:
        console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
    }
    return new lt(this.config);
  }
  auth({ persistence: e } = {}) {
    if (this.authObj)
      return this.authObj;
    const t2 = e || Se.adapter.primaryStorage || ct.persistence;
    var n2;
    return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
      const { env: t3 } = e2;
      Ae[t3] = new Te(e2), Ce[t3] = new Te({ ...e2, persistence: "local" });
    }(this.config), n2 = this.config, Je[n2.env] = new ze(n2), this.authObj = new tt(this.config), this.authObj;
  }
  on(e, t2) {
    return Ue.apply(this, [e, t2]);
  }
  off(e, t2) {
    return Le.apply(this, [e, t2]);
  }
  callFunction(e, t2) {
    return at.apply(this, [e, t2]);
  }
  deleteFile(e, t2) {
    return rt.apply(this, [e, t2]);
  }
  getTempFileURL(e, t2) {
    return it.apply(this, [e, t2]);
  }
  downloadFile(e, t2) {
    return ot.apply(this, [e, t2]);
  }
  uploadFile(e, t2) {
    return nt.apply(this, [e, t2]);
  }
  getUploadMetadata(e, t2) {
    return st.apply(this, [e, t2]);
  }
  registerExtension(e) {
    ut[e.name] = e;
  }
  async invokeExtension(e, t2) {
    const n2 = ut[e];
    if (!n2)
      throw new Q({ message: `扩展${e} 必须先注册` });
    return await n2.invoke(t2, this);
  }
  useAdapters(e) {
    const { adapter: t2, runtime: n2 } = ve(e) || {};
    t2 && (Se.adapter = t2), n2 && (Se.runtime = n2);
  }
}
var ht = new lt();
function dt(e, t2, n2) {
  void 0 === n2 && (n2 = {});
  var s2 = /\?/.test(t2), r2 = "";
  for (var i2 in n2)
    "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
  return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
}
class ft {
  post(e) {
    const { url: t2, data: n2, headers: s2 } = e;
    return new Promise((e2, r2) => {
      X.request({ url: dt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
        e2(t3);
      }, fail(e3) {
        r2(e3);
      } });
    });
  }
  upload(e) {
    return new Promise((t2, n2) => {
      const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e, c2 = X.uploadFile({ url: dt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e2) {
        const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
        200 === e2.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
      }, fail(e2) {
        n2(new Error(e2.errMsg || "uploadFile:fail"));
      } });
      "function" == typeof e.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
        e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
      });
    });
  }
}
const pt = { setItem(e, t2) {
  X.setStorageSync(e, t2);
}, getItem: (e) => X.getStorageSync(e), removeItem(e) {
  X.removeStorageSync(e);
}, clear() {
  X.clearStorageSync();
} };
var gt = { genAdapter: function() {
  return { root: {}, reqClass: ft, localStorage: pt, primaryStorage: "local" };
}, isMatch: function() {
  return true;
}, runtime: "uni_app" };
ht.useAdapters(gt);
const mt = ht, yt = mt.init;
mt.init = function(e) {
  e.env = e.spaceId;
  const t2 = yt.call(this, e);
  t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
  const n2 = t2.auth;
  return t2.auth = function(e2) {
    const t3 = n2.call(this, e2);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
      t3[e3] = Y(t3[e3]).bind(t3);
    }), t3;
  }, t2.customAuth = t2.auth, t2;
};
var _t = mt;
var wt = class extends he {
  getAccessToken() {
    return new Promise((e, t2) => {
      const n2 = "Anonymous_Access_token";
      this.setAccessToken(n2), e(n2);
    });
  }
  setupRequest(e, t2) {
    const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
    "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ce.sign(n2, this.config.clientSecret);
    const r2 = ae();
    s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
    const { token: i2 } = ee();
    return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
  }
  uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
    return new Promise((o2, a2) => {
      const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, success(e2) {
        e2 && e2.statusCode < 400 ? o2(e2) : a2(new Q({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }, fail(e2) {
        a2(new Q({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "文件上传失败" }));
      } });
      "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
        i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
      });
    });
  }
  uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
    if (!t2)
      throw new Q({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
    let r2;
    return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
      const { url: i2, formData: o2, name: a2 } = t3.result;
      r2 = t3.result.fileUrl;
      const c2 = { url: i2, formData: o2, name: a2, filePath: e, fileType: n2 };
      return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
    }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
      t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new Q({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
    }));
  }
  deleteFile({ fileList: e }) {
    const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
    return this.request(this.setupRequest(t2)).then((e2) => {
      if (e2.success)
        return e2.result;
      throw new Q({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
    });
  }
  getTempFileURL({ fileList: e } = {}) {
    if (!Array.isArray(e) || 0 === e.length)
      throw new Q({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
    const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
    return this.request(this.setupRequest(t2)).then((e2) => {
      if (e2.success)
        return { fileList: e2.result.fileList.map((e3) => ({ fileID: e3.fileID, tempFileURL: e3.tempFileURL })) };
      throw new Q({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
    });
  }
};
var vt = { init(e) {
  const t2 = new wt(e), n2 = { signInAnonymously: function() {
    return t2.authorize();
  }, getLoginState: function() {
    return Promise.resolve(false);
  } };
  return t2.auth = function() {
    return n2;
  }, t2.customAuth = t2.auth, t2;
} };
function St({ data: e }) {
  let t2;
  t2 = ae();
  const n2 = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
    const { token: e2 } = ee();
    e2 && (n2.uniIdToken = e2);
  }
  return n2;
}
function kt({ name: e, data: t2 } = {}) {
  const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
  return new Promise((t3, n3) => {
    X.request({ method: "POST", url: o2, data: { name: e, platform: S, provider: r2, spaceId: i2 }, timeout: 3e3, success(e2) {
      t3(e2);
    }, fail() {
      t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
    } });
  }).then(({ data: e2 } = {}) => {
    const { code: t3, message: n3 } = e2 || {};
    return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
  }).then(({ code: n3, message: s3 }) => {
    if (0 !== n3) {
      switch (n3) {
        case "MODULE_ENCRYPTED":
          console.error(`此云函数（${e}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
          break;
        case "FUNCTION_ENCRYPTED":
          console.error(`此云函数（${e}）已加密不可本地调试，自动切换为云端已部署的云函数`);
          break;
        case "ACTION_ENCRYPTED":
          console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
          break;
        case "NETWORK_ERROR": {
          const e2 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
          throw console.error(e2), new Error(e2);
        }
        case "SWITCH_TO_CLOUD":
          break;
        default: {
          const e2 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
          throw console.error(e2), new Error(e2);
        }
      }
      return this._callCloudFunction({ name: e, data: t2 });
    }
    return new Promise((e2, n4) => {
      const s4 = St.call(this, { data: t2 });
      X.request({ method: "POST", url: a2, data: { provider: r2, platform: S, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new Q({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
        n4(new Q({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
      } });
    });
  });
}
const It = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
var bt = /[\\^$.*+?()[\]{}|]/g, Tt = RegExp(bt.source);
function At(e, t2, n2) {
  return e.replace(new RegExp((s2 = t2) && Tt.test(s2) ? s2.replace(bt, "\\$&") : s2, "g"), n2);
  var s2;
}
const Pt = "request", Et = "response", Ot = "both";
const fn = { code: 2e4, message: "System error" }, pn = { code: 20101, message: "Invalid client" };
function yn(e) {
  const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e || {};
  return new Q({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || fn.code, message: r2 || o2, cause: a2 });
}
let wn;
function bn({ secretType: e } = {}) {
  return e === Pt || e === Et || e === Ot;
}
function Tn({ name: e, data: t2 = {} } = {}) {
  return "DCloud-clientDB" === e && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
}
function An({ provider: e, spaceId: t2, functionName: n2 } = {}) {
  const { appId: s2, uniPlatform: r2, osName: i2 } = ie();
  let o2 = r2;
  "app" === r2 && (o2 = i2);
  const a2 = function({ provider: e2, spaceId: t3 } = {}) {
    const n3 = v;
    if (!n3)
      return {};
    e2 = function(e3) {
      return "tencent" === e3 ? "tcb" : e3;
    }(e2);
    const s3 = n3.find((n4) => n4.provider === e2 && n4.spaceId === t3);
    return s3 && s3.config;
  }({ provider: e, spaceId: t2 });
  if (!a2 || !a2.accessControl || !a2.accessControl.enable)
    return false;
  const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
  if (0 === u2.length)
    return true;
  const l2 = function(e2, t3) {
    let n3, s3, r3;
    for (let i3 = 0; i3 < e2.length; i3++) {
      const o3 = e2[i3];
      o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e3) => e3.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
    }
    return n3 || s3 || r3;
  }(u2, n2);
  if (!l2)
    return false;
  if ((c2[l2] || []).find((e2 = {}) => e2.appId === s2 && (e2.platform || "").toLowerCase() === o2.toLowerCase()))
    return true;
  throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), yn(pn);
}
function Cn({ functionName: e, result: t2, logPvd: n2 }) {
  if (this.__dev__.debugLog && t2 && t2.requestId) {
    const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
    console.log(`[${n2}-request]${s2}[/${n2}-request]`);
  }
}
function Pn(e) {
  const t2 = e.callFunction, n2 = function(n3) {
    const s2 = n3.name;
    n3.data = St.call(e, { data: n3.data });
    const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider], i2 = bn(n3), o2 = Tn(n3), a2 = i2 || o2;
    return t2.call(this, n3).then((e2) => (e2.errCode = 0, !a2 && Cn.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (!a2 && Cn.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
      for (let s3 = 0; s3 < n4.length; s3++) {
        const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e3.match(r3);
        if (!a3)
          continue;
        let c2 = i3;
        for (let e4 = 1; e4 < a3.length; e4++)
          c2 = At(c2, `{$${e4}}`, a3[e4]);
        for (const e4 in t3)
          c2 = At(c2, `{${e4}}`, t3[e4]);
        return "replace" === o3 ? c2 : e3 + c2;
      }
      return e3;
    }({ message: `[${n3.name}]: ${e2.message}`, formatter: It, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
  };
  e.callFunction = function(t3) {
    const { provider: s2, spaceId: r2 } = e.config, i2 = t3.name;
    let o2, a2;
    if (t3.data = t3.data || {}, e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && I ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = kt), o2 = kt) : o2 = n2, o2 = o2.bind(e), Tn(t3))
      a2 = n2.call(e, t3);
    else if (bn(t3)) {
      a2 = new wn({ secretType: t3.secretType, uniCloudIns: e }).wrapEncryptDataCallFunction(n2.bind(e))(t3);
    } else if (An({ provider: s2, spaceId: r2, functionName: i2 })) {
      a2 = new wn({ secretType: t3.secretType, uniCloudIns: e }).wrapVerifyClientCallFunction(n2.bind(e))(t3);
    } else
      a2 = o2(t3);
    return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
  };
}
wn = class {
  constructor() {
    throw yn({ message: `Platform ${S} is not enabled, please check whether secure network module is enabled in your manifest.json` });
  }
};
const En = Symbol("CLIENT_DB_INTERNAL");
function On(e, t2) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = En, e.inspect = null, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
    if ("_uniClient" === n2)
      return null;
    if ("symbol" == typeof n2)
      return e2[n2];
    if (n2 in e2 || "string" != typeof n2) {
      const t3 = e2[n2];
      return "function" == typeof t3 ? t3.bind(e2) : t3;
    }
    return t2.get(e2, n2, s2);
  } });
}
function xn(e) {
  return { on: (t2, n2) => {
    e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
  }, off: (t2, n2) => {
    e[t2] = e[t2] || [];
    const s2 = e[t2].indexOf(n2);
    -1 !== s2 && e[t2].splice(s2, 1);
  } };
}
const Un = ["db.Geo", "db.command", "command.aggregate"];
function Rn(e, t2) {
  return Un.indexOf(`${e}.${t2}`) > -1;
}
function Ln(e) {
  switch (d(e = Z(e))) {
    case "array":
      return e.map((e2) => Ln(e2));
    case "object":
      return e._internalType === En || Object.keys(e).forEach((t2) => {
        e[t2] = Ln(e[t2]);
      }), e;
    case "regexp":
      return { $regexp: { source: e.source, flags: e.flags } };
    case "date":
      return { $date: e.toISOString() };
    default:
      return e;
  }
}
function Nn(e) {
  return e && e.content && e.content.$method;
}
class Dn {
  constructor(e, t2, n2) {
    this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
  }
  toJSON() {
    let e = this;
    const t2 = [e.content];
    for (; e.prevStage; )
      e = e.prevStage, t2.push(e.content);
    return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Ln(e2.$param) })) };
  }
  getAction() {
    const e = this.toJSON().$db.find((e2) => "action" === e2.$method);
    return e && e.$param && e.$param[0];
  }
  getCommand() {
    return { $db: this.toJSON().$db.filter((e) => "action" !== e.$method) };
  }
  get isAggregate() {
    let e = this;
    for (; e; ) {
      const t2 = Nn(e), n2 = Nn(e.prevStage);
      if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
        return true;
      e = e.prevStage;
    }
    return false;
  }
  get isCommand() {
    let e = this;
    for (; e; ) {
      if ("command" === Nn(e))
        return true;
      e = e.prevStage;
    }
    return false;
  }
  get isAggregateCommand() {
    let e = this;
    for (; e; ) {
      const t2 = Nn(e), n2 = Nn(e.prevStage);
      if ("aggregate" === t2 && "command" === n2)
        return true;
      e = e.prevStage;
    }
    return false;
  }
  getNextStageFn(e) {
    const t2 = this;
    return function() {
      return Fn({ $method: e, $param: Ln(Array.from(arguments)) }, t2, t2._database);
    };
  }
  get count() {
    return this.isAggregate ? this.getNextStageFn("count") : function() {
      return this._send("count", Array.from(arguments));
    };
  }
  get remove() {
    return this.isCommand ? this.getNextStageFn("remove") : function() {
      return this._send("remove", Array.from(arguments));
    };
  }
  get() {
    return this._send("get", Array.from(arguments));
  }
  get add() {
    return this.isCommand ? this.getNextStageFn("add") : function() {
      return this._send("add", Array.from(arguments));
    };
  }
  update() {
    return this._send("update", Array.from(arguments));
  }
  end() {
    return this._send("end", Array.from(arguments));
  }
  get set() {
    return this.isCommand ? this.getNextStageFn("set") : function() {
      throw new Error("JQL禁止使用set方法");
    };
  }
  _send(e, t2) {
    const n2 = this.getAction(), s2 = this.getCommand();
    if (s2.$db.push({ $method: e, $param: Ln(t2) }), y) {
      const e2 = s2.$db.find((e3) => "collection" === e3.$method), t3 = e2 && e2.$param;
      t3 && 1 === t3.length && "string" == typeof e2.$param[0] && e2.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
    }
    return this._database._callCloudFunction({ action: n2, command: s2 });
  }
}
function Fn(e, t2, n2) {
  return On(new Dn(e, t2, n2), { get(e2, t3) {
    let s2 = "db";
    return e2 && e2.content && (s2 = e2.content.$method), Rn(s2, t3) ? Fn({ $method: t3 }, e2, n2) : function() {
      return Fn({ $method: t3, $param: Ln(Array.from(arguments)) }, e2, n2);
    };
  } });
}
function qn({ path: e, method: t2 }) {
  return class {
    constructor() {
      this.param = Array.from(arguments);
    }
    toJSON() {
      return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
    }
  };
}
function Kn(e, t2 = {}) {
  return On(new e(t2), { get: (e2, t3) => Rn("db", t3) ? Fn({ $method: t3 }, null, e2) : function() {
    return Fn({ $method: t3, $param: Ln(Array.from(arguments)) }, null, e2);
  } });
}
class jn extends class {
  constructor({ uniClient: e = {}, isJQL: t2 = false } = {}) {
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = C("_globalUniCloudDatabaseCallback")), t2 || (this.auth = xn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, xn(this._dbCallBacks)), this.env = On({}, { get: (e2, t3) => ({ $env: t3 }) }), this.Geo = On({}, { get: (e2, t3) => qn({ path: ["Geo"], method: t3 }) }), this.serverDate = qn({ path: [], method: "serverDate" }), this.RegExp = qn({ path: [], method: "RegExp" });
  }
  getCloudEnv(e) {
    if ("string" != typeof e || !e.trim())
      throw new Error("getCloudEnv参数错误");
    return { $env: e.replace("$cloudEnv_", "") };
  }
  _callback(e, t2) {
    const n2 = this._dbCallBacks;
    n2[e] && n2[e].forEach((e2) => {
      e2(...t2);
    });
  }
  _callbackAuth(e, t2) {
    const n2 = this._authCallBacks;
    n2[e] && n2[e].forEach((e2) => {
      e2(...t2);
    });
  }
  multiSend() {
    const e = Array.from(arguments), t2 = e.map((e2) => {
      const t3 = e2.getAction(), n2 = e2.getCommand();
      if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
        throw new Error("multiSend只支持子命令内使用getTemp");
      return { action: t3, command: n2 };
    });
    return this._callCloudFunction({ multiCommand: t2, queryList: e });
  }
} {
  _parseResult(e) {
    return this._isJQL ? e.result : e;
  }
  _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
    function r2(e2, t3) {
      if (n2 && s2)
        for (let n3 = 0; n3 < s2.length; n3++) {
          const r3 = s2[n3];
          r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[n3]));
        }
    }
    const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
    function a2(e2) {
      return i2._callback("error", [e2]), U(R(o2, "fail"), e2).then(() => U(R(o2, "complete"), e2)).then(() => (r2(null, e2), z(D, { type: K, content: e2 }), Promise.reject(e2)));
    }
    const c2 = U(R(o2, "invoke")), u2 = this._uniClient;
    return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
      const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e2.result;
      if (u3)
        for (let e3 = 0; e3 < u3.length; e3++) {
          const { level: t4, message: n4, detail: s4 } = u3[e3], r3 = console["warn" === t4 ? "error" : t4] || console.log;
          let i3 = "[System Info]" + n4;
          s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
        }
      if (t3) {
        return a2(new Q({ code: t3, message: n3, requestId: e2.requestId }));
      }
      e2.result.errCode = e2.result.errCode || e2.result.code, e2.result.errMsg = e2.result.errMsg || e2.result.message, s3 && c3 && (te({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), z(q, { token: s3, tokenExpired: c3 }));
      const l2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
      for (let t4 = 0; t4 < l2.length; t4++) {
        const { prop: n4, tips: s4 } = l2[t4];
        if (n4 in e2.result) {
          const t5 = e2.result[n4];
          Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
        }
      }
      return function(e3) {
        return U(R(o2, "success"), e3).then(() => U(R(o2, "complete"), e3)).then(() => {
          r2(e3, null);
          const t4 = i2._parseResult(e3);
          return z(D, { type: K, content: t4 }), Promise.resolve(t4);
        });
      }(e2);
    }, (e2) => {
      /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
      return a2(new Q({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
    });
  }
}
const Mn = "token无效，跳转登录页面", Bn = "token过期，跳转登录页面", $n = { TOKEN_INVALID_TOKEN_EXPIRED: Bn, TOKEN_INVALID_INVALID_CLIENTID: Mn, TOKEN_INVALID: Mn, TOKEN_INVALID_WRONG_TOKEN: Mn, TOKEN_INVALID_ANONYMOUS_USER: Mn }, Wn = { "uni-id-token-expired": Bn, "uni-id-check-token-failed": Mn, "uni-id-token-not-exist": Mn, "uni-id-check-device-feature-failed": Mn };
function zn(e, t2) {
  let n2 = "";
  return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
}
function Jn(e = [], t2 = "") {
  const n2 = [], s2 = [];
  return e.forEach((e2) => {
    true === e2.needLogin ? n2.push(zn(t2, e2.path)) : false === e2.needLogin && s2.push(zn(t2, e2.path));
  }), { needLoginPage: n2, notNeedLoginPage: s2 };
}
function Hn(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function Gn() {
  return function(e) {
    let t2 = e && e.$page && e.$page.fullPath || "";
    return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
  }(function() {
    const e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function Vn() {
  return Hn(Gn());
}
function Yn(e = "", t2 = {}) {
  if (!e)
    return false;
  if (!(t2 && t2.list && t2.list.length))
    return false;
  const n2 = t2.list, s2 = Hn(e);
  return n2.some((e2) => e2.pagePath === s2);
}
const Qn = !!t.uniIdRouter;
const { loginPage: Xn, routerNeedLogin: Zn, resToLogin: es, needLoginPage: ts, notNeedLoginPage: ns, loginPageInTabBar: ss } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = t) {
  const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Jn(e), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
    const t2 = [], n3 = [];
    return e2.forEach((e3) => {
      const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = Jn(r3, s3);
      t2.push(...i3), n3.push(...o3);
    }), { needLoginPage: t2, notNeedLoginPage: n3 };
  }(n2);
  return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: Yn(i2, r2) };
}();
if (ts.indexOf(Xn) > -1)
  throw new Error(`Login page [${Xn}] should not be "needLogin", please check your pages.json`);
function rs(e) {
  const t2 = Vn();
  if ("/" === e.charAt(0))
    return e;
  const [n2, s2] = e.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
  i2.pop();
  for (let e2 = 0; e2 < r2.length; e2++) {
    const t3 = r2[e2];
    ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
  }
  return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
}
function is(e) {
  const t2 = Hn(rs(e));
  return !(ns.indexOf(t2) > -1) && (ts.indexOf(t2) > -1 || Zn.some((t3) => function(e2, t4) {
    return new RegExp(t4).test(e2);
  }(e, t3)));
}
function os({ redirect: e }) {
  const t2 = Hn(e), n2 = Hn(Xn);
  return Vn() !== n2 && t2 !== n2;
}
function as({ api: e, redirect: t2 } = {}) {
  if (!t2 || !os({ redirect: t2 }))
    return;
  const n2 = function(e2, t3) {
    return "/" !== e2.charAt(0) && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
  }(Xn, t2);
  ss ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
  setTimeout(() => {
    s2[e]({ url: n2 });
  });
}
function cs({ url: e } = {}) {
  const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
    const { token: e2, tokenExpired: t3 } = ee();
    let n3;
    if (e2) {
      if (t3 < Date.now()) {
        const e3 = "uni-id-token-expired";
        n3 = { errCode: e3, errMsg: Wn[e3] };
      }
    } else {
      const e3 = "uni-id-check-token-failed";
      n3 = { errCode: e3, errMsg: Wn[e3] };
    }
    return n3;
  }();
  if (is(e) && n2) {
    n2.uniIdRedirectUrl = e;
    if (B(F).length > 0)
      return setTimeout(() => {
        z(F, n2);
      }, 0), t2.abortLoginPageJump = true, t2;
    t2.autoToLoginPage = true;
  }
  return t2;
}
function us() {
  !function() {
    const e2 = Gn(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = cs({ url: e2 });
    t2 || n2 && as({ api: "redirectTo", redirect: e2 });
  }();
  const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  for (let t2 = 0; t2 < e.length; t2++) {
    const n2 = e[t2];
    uni.addInterceptor(n2, { invoke(e2) {
      const { abortLoginPageJump: t3, autoToLoginPage: s2 } = cs({ url: e2.url });
      return t3 ? e2 : s2 ? (as({ api: n2, redirect: rs(e2.url) }), false) : e2;
    } });
  }
}
function ls() {
  this.onResponse((e) => {
    const { type: t2, content: n2 } = e;
    let s2 = false;
    switch (t2) {
      case "cloudobject":
        s2 = function(e2) {
          if ("object" != typeof e2)
            return false;
          const { errCode: t3 } = e2 || {};
          return t3 in Wn;
        }(n2);
        break;
      case "clientdb":
        s2 = function(e2) {
          if ("object" != typeof e2)
            return false;
          const { errCode: t3 } = e2 || {};
          return t3 in $n;
        }(n2);
    }
    s2 && function(e2 = {}) {
      const t3 = B(F);
      G().then(() => {
        const n3 = Gn();
        if (n3 && os({ redirect: n3 }))
          return t3.length > 0 ? z(F, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (Xn && as({ api: "navigateTo", redirect: n3 }));
      });
    }(n2);
  });
}
function hs(e) {
  !function(e2) {
    e2.onResponse = function(e3) {
      $(D, e3);
    }, e2.offResponse = function(e3) {
      W(D, e3);
    };
  }(e), function(e2) {
    e2.onNeedLogin = function(e3) {
      $(F, e3);
    }, e2.offNeedLogin = function(e3) {
      W(F, e3);
    }, Qn && (C("_globalUniCloudStatus").needLoginInit || (C("_globalUniCloudStatus").needLoginInit = true, G().then(() => {
      us.call(e2);
    }), es && ls.call(e2)));
  }(e), function(e2) {
    e2.onRefreshToken = function(e3) {
      $(q, e3);
    }, e2.offRefreshToken = function(e3) {
      W(q, e3);
    };
  }(e);
}
let ds;
const fs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function gs() {
  const e = ee().token || "", t2 = e.split(".");
  if (!e || 3 !== t2.length)
    return { uid: null, role: [], permission: [], tokenExpired: 0 };
  let n2;
  try {
    n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ds(s2).split("").map(function(e2) {
      return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e2) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e2.message);
  }
  var s2;
  return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
}
ds = "function" != typeof atob ? function(e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ps.test(e))
    throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t2;
  e += "==".slice(2 - (3 & e.length));
  for (var n2, s2, r2 = "", i2 = 0; i2 < e.length; )
    t2 = fs.indexOf(e.charAt(i2++)) << 18 | fs.indexOf(e.charAt(i2++)) << 12 | (n2 = fs.indexOf(e.charAt(i2++))) << 6 | (s2 = fs.indexOf(e.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
  return r2;
} : atob;
var ms = s(function(e, t2) {
  Object.defineProperty(t2, "__esModule", { value: true });
  const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
  function r2(e2, t3) {
    return e2.tempFiles.forEach((e3, n3) => {
      e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
    }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
  }
  function i2(e2, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
    return t3.then((e3) => {
      if (s3) {
        const t4 = s3(e3);
        if (void 0 !== t4)
          return Promise.resolve(t4).then((t5) => void 0 === t5 ? e3 : t5);
      }
      return e3;
    }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, r4) {
      (t5 = Object.assign({}, t5)).errMsg = n2;
      const i3 = t5.tempFiles, o2 = i3.length;
      let a2 = 0;
      return new Promise((n3) => {
        for (; a2 < s4; )
          c2();
        function c2() {
          const s5 = a2++;
          if (s5 >= o2)
            return void (!i3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
          const u2 = i3[s5];
          e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
            e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
          } }).then((e4) => {
            u2.url = e4.fileID, s5 < o2 && c2();
          }).catch((e4) => {
            u2.errMsg = e4.errMsg || e4.message, s5 < o2 && c2();
          });
        }
      });
    }(e2, t4, 5, r3));
  }
  t2.initChooseAndUploadFile = function(e2) {
    return function(t3 = { type: "all" }) {
      return "image" === t3.type ? i2(e2, function(e3) {
        const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e3;
        return new Promise((e4, a2) => {
          uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
            e4(r2(t5, "image"));
          }, fail(e5) {
            a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
          } });
        });
      }(t3), t3) : "video" === t3.type ? i2(e2, function(e3) {
        const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e3;
        return new Promise((e4, c2) => {
          uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
            const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
            e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
          }, fail(e5) {
            c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
          } });
        });
      }(t3), t3) : i2(e2, function(e3) {
        const { count: t4, extension: n3 } = e3;
        return new Promise((e4, i3) => {
          let o2 = uni.chooseFile;
          if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
            return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
          o2({ type: "all", count: t4, extension: n3, success(t5) {
            e4(r2(t5));
          }, fail(e5) {
            i3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
          } });
        });
      }(t3), t3);
    };
  };
}), ys = n(ms);
const _s = "manual";
function ws(e) {
  return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
    this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
      var e2 = [];
      return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
        e2.push(this[t2]);
      }), e2;
    }, (e2, t2) => {
      if (this.loadtime === _s)
        return;
      let n2 = false;
      const s2 = [];
      for (let r2 = 2; r2 < e2.length; r2++)
        e2[r2] !== t2[r2] && (s2.push(e2[r2]), n2 = true);
      e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
    });
  }, methods: { onMixinDatacomPropsChange(e2, t2) {
  }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
    this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
      this.mixinDatacomLoading = false;
      const { data: s2, count: r2 } = n3.result;
      this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
      const i2 = e2 ? s2.length ? s2[0] : void 0 : s2;
      this.mixinDatacomResData = i2, t2 && t2(i2);
    }).catch((e3) => {
      this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
    }));
  }, mixinDatacomGet(t2 = {}) {
    let n2 = e.database(this.spaceInfo);
    const s2 = t2.action || this.action;
    s2 && (n2 = n2.action(s2));
    const r2 = t2.collection || this.collection;
    n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
    const i2 = t2.where || this.where;
    i2 && Object.keys(i2).length && (n2 = n2.where(i2));
    const o2 = t2.field || this.field;
    o2 && (n2 = n2.field(o2));
    const a2 = t2.foreignKey || this.foreignKey;
    a2 && (n2 = n2.foreignKey(a2));
    const c2 = t2.groupby || this.groupby;
    c2 && (n2 = n2.groupBy(c2));
    const u2 = t2.groupField || this.groupField;
    u2 && (n2 = n2.groupField(u2));
    true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
    const l2 = t2.orderby || this.orderby;
    l2 && (n2 = n2.orderBy(l2));
    const h2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, f2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, p2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
    return p2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
  } } };
}
function vs(e) {
  return function(t2, n2 = {}) {
    n2 = function(e2, t3 = {}) {
      return e2.customUI = t3.customUI || e2.customUI, e2.parseSystemError = t3.parseSystemError || e2.parseSystemError, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e2.secretMethods = t3.secretMethods), e2;
    }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
    const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
    return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
      return async function(...s4) {
        const r3 = n3 ? n3({ params: s4 }) : {};
        let i3, o3;
        try {
          return await U(R(t3, "invoke"), { ...r3 }), i3 = await e2(...s4), await U(R(t3, "success"), { ...r3, result: i3 }), i3;
        } catch (e3) {
          throw o3 = e3, await U(R(t3, "fail"), { ...r3, error: o3 }), o3;
        } finally {
          await U(R(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
        }
      };
    }({ fn: async function s4(...u2) {
      let h2;
      a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
      const d2 = { name: t2, type: l, data: { method: c2, params: u2 } };
      "object" == typeof n2.secretMethods && function(e2, t3) {
        const n3 = t3.data.method, s5 = e2.secretMethods || {}, r3 = s5[n3] || s5["*"];
        r3 && (t3.secretType = r3);
      }(n2, d2);
      let f2 = false;
      try {
        h2 = await e.callFunction(d2);
      } catch (e2) {
        f2 = true, h2 = { result: new Q(e2) };
      }
      const { errSubject: p2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
      if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (te(y2), z(q, { ...y2 })), g2) {
        let e2 = m2;
        if (f2 && o2) {
          e2 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: p2, errCode: g2, errMsg: m2 })).errMsg || m2;
        }
        if (a2)
          if ("toast" === i2.type)
            uni.showToast({ title: e2, icon: "none" });
          else {
            if ("modal" !== i2.type)
              throw new Error(`Invalid errorOptions.type: ${i2.type}`);
            {
              const { confirm: t3 } = await async function({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                return new Promise((i3, o3) => {
                  uni.showModal({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e4) {
                    i3(e4);
                  }, fail() {
                    i3({ confirm: false, cancel: true });
                  } });
                });
              }({ title: "提示", content: e2, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
              if (i2.retry && t3)
                return s4(...u2);
            }
          }
        const n3 = new Q({ subject: p2, code: g2, message: m2, requestId: h2.requestId });
        throw n3.detail = h2.result, z(D, { type: M, content: n3 }), n3;
      }
      return z(D, { type: M, content: h2.result }), h2.result;
    }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
      return { objectName: t2, methodName: c2, params: e2 };
    } }) });
  };
}
function Ss(e) {
  return C("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
async function ks({ callLoginByWeixin: e = false } = {}) {
  Ss(this);
  throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${S}\``);
}
async function Is(e) {
  const t2 = Ss(this);
  return t2.initPromise || (t2.initPromise = ks.call(this, e)), t2.initPromise;
}
function bs(e) {
  return function({ callLoginByWeixin: t2 = false } = {}) {
    return Is.call(e, { callLoginByWeixin: t2 });
  };
}
async function Ts(e, t2) {
  const n2 = `http://${e}:${t2}/system/ping`;
  try {
    const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
      X.request({ ...s2, success(t4) {
        e3(t4);
      }, fail(e4) {
        t3(e4);
      } });
    }));
    return !(!e2.data || 0 !== e2.data.code);
  } catch (e2) {
    return false;
  }
  var s2;
}
function As(e) {
  if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus)
    return;
  let t2 = Promise.resolve();
  var n2;
  n2 = 1, t2 = new Promise((e2) => {
    setTimeout(() => {
      e2();
    }, n2);
  }), e.isReady = false, e.isDefault = false;
  const s2 = e.auth();
  e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
    {
      const { osName: e2, osVersion: t3 } = ie();
      "ios" === e2 && function(e3) {
        if (!e3 || "string" != typeof e3)
          return 0;
        const t4 = e3.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    if (e.__dev__.debugInfo) {
      const { address: t3, servePort: n3 } = e.__dev__.debugInfo;
      return async function(e2, t4) {
        let n4;
        for (let s3 = 0; s3 < e2.length; s3++) {
          const r2 = e2[s3];
          if (await Ts(r2, t4)) {
            n4 = r2;
            break;
          }
        }
        return { address: n4, port: t4 };
      }(t3, n3);
    }
  }).then(({ address: t3, port: n3 } = {}) => {
    const s3 = console["error"];
    if (t3)
      e.__dev__.localAddress = t3, e.__dev__.localPort = n3;
    else if (e.__dev__.debugInfo) {
      let t4 = "";
      "remote" === e.__dev__.debugInfo.initialLaunchType ? (e.__dev__.debugInfo.forceRemote = true, t4 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : t4 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", t4 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === S.indexOf("mp-") && (t4 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
    }
  }).then(() => {
    e.isReady = true, e.initUniCloudStatus = "fulfilled";
  }).catch((t3) => {
    console.error(t3), e.initUniCloudStatus = "rejected";
  });
}
const Cs = { tcb: _t, tencent: _t, aliyun: de, private: vt };
let Ps = new class {
  init(e) {
    let t2 = {};
    const n2 = Cs[e.provider];
    if (!n2)
      throw new Error("未提供正确的provider参数");
    t2 = n2.init(e), t2.__dev__ = {}, t2.__dev__.debugLog = "app" === S;
    const s2 = k;
    s2 && !s2.code && (t2.__dev__.debugInfo = s2), As(t2), t2.reInit = function() {
      As(this);
    }, Pn(t2), function(e2) {
      const t3 = e2.uploadFile;
      e2.uploadFile = function(e3) {
        return t3.call(this, e3);
      };
    }(t2), function(e2) {
      e2.database = function(t3) {
        if (t3 && Object.keys(t3).length > 0)
          return e2.init(t3).database();
        if (this._database)
          return this._database;
        const n3 = Kn(jn, { uniClient: e2 });
        return this._database = n3, n3;
      }, e2.databaseForJQL = function(t3) {
        if (t3 && Object.keys(t3).length > 0)
          return e2.init(t3).databaseForJQL();
        if (this._databaseForJQL)
          return this._databaseForJQL;
        const n3 = Kn(jn, { uniClient: e2, isJQL: true });
        return this._databaseForJQL = n3, n3;
      };
    }(t2), function(e2) {
      e2.getCurrentUserInfo = gs, e2.chooseAndUploadFile = ys.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
        return ws(e2);
      } }), e2.importObject = vs(e2), e2.initSecureNetworkByWeixin = bs(e2);
    }(t2);
    return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
      if (!t2[e2])
        return;
      const n3 = t2[e2];
      t2[e2] = function() {
        return t2.reInit(), n3.apply(t2, Array.from(arguments));
      }, t2[e2] = Y(t2[e2], e2).bind(t2);
    }), t2.init = this.init, t2;
  }
}();
(() => {
  const e = I;
  let t2 = {};
  if (e && 1 === e.length)
    t2 = e[0], Ps = Ps.init(t2), Ps.isDefault = true;
  else {
    const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    let n2;
    n2 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e2) => {
      Ps[e2] = function() {
        return console.error(n2), Promise.reject(new Q({ code: "SYS_ERR", message: n2 }));
      };
    });
  }
  Object.assign(Ps, { get mixinDatacom() {
    return ws(Ps);
  } }), hs(Ps), Ps.addInterceptor = O, Ps.removeInterceptor = x, Ps.interceptObject = L;
})();
var Es = Ps;
export {
  Es as E
};
