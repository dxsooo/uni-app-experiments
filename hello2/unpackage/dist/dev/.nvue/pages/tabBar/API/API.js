import { _ as __easycom_0$1 } from "../../../u-link.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString, resolveDynamicComponent, resolveComponent, createVNode, withCtx, createTextVNode, createBlock, Fragment, createCommentVNode, renderList, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main$2 = {
  name: "page-head",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "common-page-head",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "common-page-head-title" }, [
      createElementVNode(
        "u-text",
        null,
        toDisplayString($props.title),
        1
        /* TEXT */
      )
    ])
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/Users/dxs/Documents/personal/github/uni-app-experiments/hello2/components/page-head/page-head.vue"]]);
const _style_0$1 = { "button": { "": { "marginTop": "30rpx", "marginLeft": 0, "marginRight": 0 } }, "btn-area": { "": { "paddingTop": "30rpx" } } };
const _sfc_main$1 = {
  data() {
    return {
      title: "tababr",
      hasSetTabBarBadge: false,
      hasShownTabBarRedDot: false,
      hasCustomedStyle: false,
      hasCustomedItem: false,
      hasHiddenTabBar: false
    };
  },
  destroyed() {
    if (this.hasSetTabBarBadge) {
      uni.removeTabBarBadge({
        index: 1
      });
    }
    if (this.hasShownTabBarRedDot) {
      uni.hideTabBarRedDot({
        index: 1
      });
    }
    if (this.hasHiddenTabBar) {
      uni.showTabBar();
    }
    if (this.hasCustomedStyle) {
      uni.setTabBarStyle({
        color: "#7A7E83",
        selectedColor: "#007AFF",
        backgroundColor: "#F8F8F8",
        borderStyle: "black"
      });
    }
    if (this.hasCustomedItem) {
      let tabBarOptions = {
        index: 1,
        text: "??????",
        iconPath: "/static/api.png",
        selectedIconPath: "/static/apiHL.png"
      };
      uni.setTabBarItem(tabBarOptions);
    }
  },
  methods: {
    navigateBack() {
      this.$emit("unmount");
    },
    setTabBarBadge() {
      if (this.hasShownTabBarRedDot) {
        uni.hideTabBarRedDot({
          index: 1
        });
        this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot;
      }
      if (!this.hasSetTabBarBadge) {
        uni.setTabBarBadge({
          index: 1,
          text: "1"
        });
      } else {
        uni.removeTabBarBadge({
          index: 1
        });
      }
      this.hasSetTabBarBadge = !this.hasSetTabBarBadge;
    },
    showTabBarRedDot() {
      if (this.hasSetTabBarBadge) {
        uni.removeTabBarBadge({
          index: 1
        });
        this.hasSetTabBarBadge = !this.hasSetTabBarBadge;
      }
      if (!this.hasShownTabBarRedDot) {
        uni.showTabBarRedDot({
          index: 1
        });
      } else {
        uni.hideTabBarRedDot({
          index: 1
        });
      }
      this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot;
    },
    hideTabBar() {
      if (!this.hasHiddenTabBar) {
        uni.hideTabBar();
      } else {
        uni.showTabBar();
      }
      this.hasHiddenTabBar = !this.hasHiddenTabBar;
    },
    customStyle() {
      if (this.hasCustomedStyle) {
        uni.setTabBarStyle({
          color: "#7A7E83",
          selectedColor: "#007AFF",
          backgroundColor: "#F8F8F8",
          borderStyle: "black"
        });
      } else {
        uni.setTabBarStyle({
          color: "#FFF",
          selectedColor: "#007AFF",
          backgroundColor: "#000000",
          borderStyle: "black"
        });
      }
      this.hasCustomedStyle = !this.hasCustomedStyle;
    },
    customItem() {
      let tabBarOptions = {
        index: 1,
        text: "??????",
        iconPath: "/static/api.png",
        selectedIconPath: "/static/apiHL.png"
      };
      if (this.hasCustomedItem) {
        uni.setTabBarItem(tabBarOptions);
      } else {
        tabBarOptions.text = "API";
        uni.setTabBarItem(tabBarOptions);
      }
      this.hasCustomedItem = !this.hasCustomedItem;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_head = resolveEasycom(resolveDynamicComponent("page-head"), __easycom_0);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("view", {
    class: "uni-padding-wrap",
    renderWhole: true
  }, [
    createVNode(_component_page_head, { title: $data.title }, null, 8, ["title"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.setTabBarBadge
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString(!$data.hasSetTabBarBadge ? "??????tab??????" : "??????tab??????"),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.showTabBarRedDot
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString(!$data.hasShownTabBarRedDot ? "????????????" : "????????????"),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.customStyle
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString(!$data.hasCustomedStyle ? "?????????Tab??????" : "?????????????????????"),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.customItem
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString(!$data.hasCustomedItem ? "?????????Tab??????" : "?????????????????????"),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.hideTabBar
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString(!$data.hasHiddenTabBar ? "??????TabBar" : "??????TabBar"),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
    createElementVNode("view", { class: "btn-area" }, [
      createVNode(_component_button, {
        class: "button",
        type: "primary",
        onClick: $options.navigateBack
      }, {
        default: withCtx(() => [
          createTextVNode("???????????????")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"])
    ])
  ]);
}
const setTabBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/dxs/Documents/personal/github/uni-app-experiments/hello2/components/api-set-tabbar.nvue"]]);
const _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
const _sfc_main = {
  components: {
    setTabBar
  },
  props: {
    hasLeftWin: {
      type: Boolean
    },
    leftWinActive: {
      type: String
    }
  },
  data() {
    let mediaPages = [
      {
        name: "??????",
        url: "image"
      },
      {
        name: "??????",
        url: "inner-audio"
      },
      {
        name: "??????",
        url: "voice"
      },
      {
        name: "????????????",
        url: "background-audio"
      },
      {
        name: "??????",
        url: "video"
      },
      {
        name: "??????",
        url: "file"
      },
      {
        name: "?????????????????????",
        url: "save-media"
      }
    ];
    const list = [
      {
        id: "page",
        name: "??????",
        open: false,
        pages: [
          {
            name: "???????????????",
            url: "set-navigation-bar-title"
          },
          {
            name: "???????????????",
            url: "subnvue"
          },
          {
            name: "????????????",
            url: "navigator"
          },
          {
            name: "??????TabBar",
            url: "set-tabbar"
          },
          {
            name: "????????????",
            url: "pull-down-refresh"
          },
          {
            name: "????????????",
            url: "animation"
          },
          {
            name: "????????????",
            url: "canvas"
          },
          {
            name: "????????????",
            url: "get-node-info"
          },
          {
            name: "????????????????????????",
            url: "intersection-observer"
          },
          {
            name: "??????????????????",
            url: "action-sheet"
          },
          {
            name: "??????????????????",
            url: "modal"
          },
          {
            name: "?????????????????????",
            url: "show-loading"
          },
          {
            name: "?????????????????????",
            url: "toast"
          }
        ]
      },
      {
        id: "device",
        name: "??????",
        open: false,
        pages: [
          {
            name: "????????????????????????",
            url: "get-network-type"
          },
          {
            name: "????????????????????????",
            url: "get-system-info"
          },
          {
            name: "?????????",
            url: "make-phone-call"
          },
          {
            name: "??????",
            url: "vibrate"
          },
          {
            name: "?????????????????????",
            url: "add-phone-contact"
          },
          {
            name: "??????",
            url: "scan-code"
          },
          {
            name: "?????????",
            url: "clipboard"
          },
          {
            name: "????????????",
            url: "brightness"
          },
          {
            name: "??????",
            url: "bluetooth"
          },
          {
            name: "????????????",
            url: "soter"
          },
          {
            name: "iBeacon",
            url: "ibeacon"
          },
          {
            name: "????????????????????????",
            url: "on-accelerometer-change"
          },
          {
            name: "??????????????????",
            url: "on-compass-change"
          },
          {
            name: "?????????????????????",
            url: "/platforms/app-plus/proximity/proximity"
          },
          {
            name: "?????????????????????",
            url: "/platforms/app-plus/orientation/orientation"
          }
        ]
      },
      {
        id: "network",
        name: "??????",
        open: false,
        pages: [
          {
            name: "??????????????????",
            url: "request"
          },
          {
            name: "????????????",
            url: "upload-file"
          },
          {
            name: "????????????",
            url: "download-file"
          }
        ]
      },
      {
        id: "websocket",
        name: "websocket",
        open: false,
        pages: [
          {
            name: "socketTask",
            url: "websocket-socketTask"
          },
          {
            name: "??????websocket",
            url: "websocket-global"
          }
        ]
      },
      {
        id: "media",
        name: "??????",
        open: false,
        pages: mediaPages
      },
      {
        id: "location",
        name: "??????",
        open: false,
        pages: [
          {
            name: "??????????????????",
            url: "get-location"
          },
          {
            name: "????????????????????????",
            url: "open-location"
          },
          {
            name: "????????????????????????",
            url: "choose-location"
          },
          {
            name: "????????????",
            url: "map"
          },
          {
            name: "????????????",
            url: "map-search"
          }
        ]
      },
      {
        id: "storage",
        name: "??????",
        open: false,
        pages: [
          {
            name: "???????????????key-value???",
            url: "storage"
          },
          {
            name: "SQLite",
            url: "sqlite"
          }
        ]
      },
      {
        url: "rewarded-video-ad",
        name: "??????????????????",
        open: false
      },
      {
        url: "full-screen-video-ad",
        name: "??????????????????",
        open: false
      },
      {
        id: "login",
        name: "??????",
        open: false,
        pages: [
          {
            name: "??????",
            url: "login"
          },
          {
            name: "??????????????????",
            url: "get-user-info"
          }
        ]
      },
      {
        id: "share",
        name: "??????",
        open: false,
        pages: [{
          name: "??????",
          url: "share"
        }]
      },
      {
        id: "payment",
        name: "??????",
        open: false,
        pages: [{
          name: "????????????",
          url: "request-payment"
        }]
      },
      {
        id: "speech",
        name: "??????",
        open: false,
        pages: [{
          name: "????????????",
          url: "/platforms/app-plus/speech/speech"
        }]
      },
      {
        id: "push",
        name: "??????",
        open: false,
        pages: [{
          name: "??????",
          url: "/platforms/app-plus/push/push"
        }]
      }
    ];
    return {
      showSetTabBarPage: false,
      list,
      notForPc: [{
        name: "??????TabBar",
        url: "set-tabbar"
      }]
    };
  },
  onShareAppMessage() {
    return {
      title: "????????????uni-app",
      path: "/pages/tabBar/API/API"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  onLoad() {
  },
  onReady() {
  },
  onShow() {
    this.navigateFlag = false;
    this.leaveSetTabBarPage();
  },
  onHide() {
    this.leaveSetTabBarPage();
  },
  methods: {
    triggerCollapse(e, id) {
      if (!this.list[e].pages) {
        this.goDetailPage("", this.list[e].url);
        return;
      }
      for (var i = 0; i < this.list.length; ++i) {
        if (e === i) {
          this.list[i].open = !this.list[i].open;
        } else {
          this.list[i].open = false;
        }
      }
    },
    goDetailPage(panel, e) {
      if (e === "set-tabbar") {
        this.showSetTabBarPage = true;
        return;
      }
      let url = ~e.indexOf("platform") ? e : "/pages/API/" + e + "/" + e;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
    },
    leaveSetTabBarPage() {
      this.showSetTabBarPage = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_set_tab_bar = resolveComponent("set-tab-bar");
  const _component_u_link = resolveEasycom(resolveDynamicComponent("u-link"), __easycom_0$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      $data.showSetTabBarPage ? (openBlock(), createBlock(_component_set_tab_bar, {
        key: 0,
        onUnmount: $options.leaveSetTabBarPage
      }, null, 8, ["onUnmount"])) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "uni-header-logo"
          }, [
            createElementVNode("u-image", {
              class: "uni-header-image",
              src: "/static/apiIndex.png"
            })
          ])) : createCommentVNode("v-if", true),
          !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "uni-hello-text"
          }, [
            createElementVNode("u-text", { class: "hello-text" }, "???????????????uni-app?????????????????????????????????"),
            createVNode(_component_u_link, {
              class: "hello-link",
              href: "https://uniapp.dcloud.io/api/",
              text: "https://uniapp.dcloud.io/api/",
              inWhiteList: true
            }, null, 8, ["href", "text"])
          ])) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "uni-panel",
                key: item.id
              }, [
                createElementVNode("view", {
                  class: normalizeClass(["uni-panel-h", item.open ? "uni-panel-h-on" : ""]),
                  onClick: ($event) => $options.triggerCollapse(index, item.id)
                }, [
                  createElementVNode(
                    "u-text",
                    { class: "uni-panel-text" },
                    toDisplayString(item.name),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "u-text",
                    {
                      class: normalizeClass(["uni-panel-icon uni-icon", item.open ? "uni-panel-icon-on" : ""])
                    },
                    toDisplayString(item.pages ? "???" : "???"),
                    3
                    /* TEXT, CLASS */
                  )
                ], 10, ["onClick"]),
                item.open ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "uni-panel-c"
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(item.pages, (item2, key) => {
                      return openBlock(), createElementBlock("view", {
                        class: normalizeClass([{ "left-win-active": $props.leftWinActive === item2.url && $props.hasLeftWin, "pc-hide": item2.name === "??????TabBar" && $props.hasLeftWin }, "uni-navigate-item"]),
                        key,
                        url: item.url,
                        onClick: ($event) => $options.goDetailPage(item.id, item2.url)
                      }, [
                        createElementVNode(
                          "u-text",
                          { class: "uni-navigate-text" },
                          toDisplayString(item2.name ? item2.name : item2),
                          1
                          /* TEXT */
                        ),
                        createElementVNode("u-text", { class: "uni-navigate-icon uni-icon" }, "???")
                      ], 10, ["url", "onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ])
  ]);
}
const API = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/dxs/Documents/personal/github/uni-app-experiments/hello2/pages/tabBar/API/API.nvue"]]);
export {
  API as default
};
