import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../u-link.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
const _sfc_main = {
  props: {
    hasLeftWin: {
      type: Boolean
    },
    leftWinActive: {
      type: String
    }
  },
  data() {
    return {
      hideList: [
        "load-more"
      ],
      lists: [
        {
          name: "uni-badge ????????????",
          url: "badge"
        },
        {
          name: "uni-breadcrumb ?????????",
          url: "breadcrumb"
        },
        // {
        // 	name: "uni-calendar ??????",
        // 	url: "calendar"
        // },
        {
          name: "uni-card ??????",
          url: "card"
        },
        {
          name: "uni-collapse ????????????",
          url: "collapse"
        },
        {
          name: "uni-countdown ?????????",
          url: "countdown"
        },
        {
          name: "uni-data-checkbox ???????????????",
          url: "data-checkbox"
        },
        {
          name: "uni-data-picker ???????????????picker?????????",
          url: "data-picker"
        },
        {
          name: "uni-data-select ????????????????????????",
          url: "data-select"
        },
        {
          name: "uni-dateformat ???????????????",
          url: "dateformat"
        },
        {
          name: "uni-datetime-picker ???????????????",
          url: "datetime-picker"
        },
        {
          name: "uni-drawer ??????",
          url: "drawer"
        },
        {
          name: "uni-easyinput ???????????????",
          url: "easyinput"
        },
        {
          name: "uni-fab ????????????",
          url: "fab"
        },
        {
          name: "uni-fav ????????????",
          url: "fav"
        },
        {
          name: "uni-forms ??????",
          url: "forms"
        },
        {
          name: "uni-goods-nav ????????????",
          url: "goods-nav"
        },
        {
          name: "uni-grid ??????",
          url: "grid"
        },
        {
          name: "uni-group ??????",
          url: "group"
        },
        {
          name: "uni-icons ??????",
          url: "icons"
        },
        {
          name: "uni-indexed-list ????????????",
          url: "indexed-list"
        },
        {
          name: "uni-link ?????????",
          url: "link"
        },
        {
          name: "uni-list ??????",
          url: "list"
        },
        {
          name: "uni-load-more ????????????",
          url: "load-more"
        },
        {
          name: "uni-nav-bar ??????????????????",
          url: "nav-bar"
        },
        {
          name: "uni-notice-bar ?????????",
          url: "notice-bar"
        },
        {
          name: "uni-number-box ???????????????",
          url: "number-box"
        },
        {
          name: "uni-pagination ?????????",
          url: "pagination"
        },
        {
          name: "uni-popup ?????????",
          url: "popup"
        },
        {
          name: "uni-rate ??????",
          url: "rate"
        },
        {
          name: "uni-row ??????-???",
          url: "row"
        },
        {
          name: "uni-search-bar ?????????",
          url: "search-bar"
        },
        {
          name: "uni-section ?????????",
          url: "section"
        },
        {
          name: "uni-segmented-control ?????????",
          url: "segmented-control"
        },
        {
          name: "uni-steps ?????????",
          url: "steps"
        },
        {
          name: "uni-swipe-action ????????????",
          url: "swipe-action"
        },
        {
          name: "uni-swiper-dot ??????????????????",
          url: "swiper-dot"
        },
        {
          name: "uni-tag ??????",
          url: "tag"
        },
        {
          name: "uni-title ????????????",
          url: "title"
        },
        {
          name: "uni-tooltip ????????????",
          url: "tooltip"
        },
        {
          name: "uni-transition ????????????",
          url: "transition"
        }
      ]
    };
  },
  onLoad() {
  },
  onReady() {
    uni.preloadPage({
      url: "/pages/extUI/calendar/calendar",
      success() {
        formatAppLog("log", "at pages/tabBar/extUI/extUI.nvue:230", "preloadPage /pages/extUI/calendar/calendar");
      },
      fail() {
      }
    });
  },
  onShareAppMessage() {
    return {
      title: "????????????uni-app",
      path: "/pages/tabBar/extUI/extUI"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  methods: {
    goDetailPage(path) {
      const url = "/pages/extUI/" + path + "/" + path;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_link = resolveEasycom(resolveDynamicComponent("u-link"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-header-logo"
      }, [
        createElementVNode("u-image", {
          class: "uni-header-image",
          src: "/static/extuiIndex.png"
        })
      ])) : createCommentVNode("v-if", true),
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-hello-text"
      }, [
        createElementVNode("u-text", { class: "hello-text" }, "?????????uni-app???????????????????????????????????????????????????"),
        createVNode(_component_u_link, {
          class: "hello-link",
          href: "https://ext.dcloud.net.cn/",
          text: "https://ext.dcloud.net.cn",
          inWhiteList: true
        }, null, 8, ["href", "text"])
      ])) : createCommentVNode("v-if", true),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.lists, (item) => {
          return openBlock(), createElementBlock(
            "view",
            {
              class: normalizeClass([{ "pc-hide": $data.hideList.indexOf(item.url) !== -1 && $props.hasLeftWin }, "uni-panel"]),
              key: item.url
            },
            [
              createElementVNode("view", {
                class: normalizeClass([{ "left-win-active": $props.leftWinActive === item.url && $props.hasLeftWin }, "uni-panel-h"]),
                onClick: ($event) => $options.goDetailPage(item.url)
              }, [
                createElementVNode(
                  "u-text",
                  { class: "uni-panel-text" },
                  toDisplayString(item.name),
                  1
                  /* TEXT */
                ),
                createElementVNode("u-text", { class: "uni-panel-icon uni-icon" }, "???")
              ], 10, ["onClick"])
            ],
            2
            /* CLASS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const extUI = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/dxs/Documents/personal/github/uni-app-experiments/hello2/pages/tabBar/extUI/extUI.nvue"]]);
export {
  extUI as default
};
