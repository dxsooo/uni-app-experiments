import { _ as __easycom_0 } from "../../../uni-card.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, resolveDynamicComponent, createElementVNode, createVNode, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
const _style_0$1 = { "uni-tag": { "": { "lineHeight": 14, "fontSize": 12, "fontWeight": "200", "paddingTop": 4, "paddingRight": 7, "paddingBottom": 4, "paddingLeft": 7, "color": "#ffffff", "borderRadius": 3, "backgroundColor": "#8f939c", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#8f939c" } }, "uni-tag--default": { "": { "fontSize": 12 } }, "uni-tag--default--inverted": { "": { "color": "#8f939c", "borderColor": "#8f939c" } }, "uni-tag--small": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--mini": { "": { "paddingTop": 1, "paddingRight": 3, "paddingBottom": 1, "paddingLeft": 3, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--primary": { "": { "backgroundColor": "#2979ff", "borderColor": "#2979ff", "color": "#ffffff" } }, "uni-tag--success": { "": { "color": "#ffffff", "backgroundColor": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning": { "": { "color": "#ffffff", "backgroundColor": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error": { "": { "color": "#ffffff", "backgroundColor": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--primary--inverted": { "": { "color": "#2979ff", "borderColor": "#2979ff" } }, "uni-tag--success--inverted": { "": { "color": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning--inverted": { "": { "color": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error--inverted": { "": { "color": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--inverted": { "": { "backgroundColor": "#ffffff" } }, "uni-tag--circle": { "": { "!borderRadius": 15 } }, "uni-tag--mark": { "": { "!borderTopLeftRadius": 0, "!borderBottomLeftRadius": 0, "!borderTopRightRadius": 15, "!borderBottomRightRadius": 15 } }, "uni-tag--disabled": { "": { "opacity": 0.5 } }, "uni-tag-text": { "": { "color": "#ffffff", "fontSize": 14 } }, "uni-tag-text--primary": { "": { "color": "#2979ff" } }, "uni-tag-text--success": { "": { "color": "#18bc37" } }, "uni-tag-text--warning": { "": { "color": "#f3a73f" } }, "uni-tag-text--error": { "": { "color": "#e43d33" } }, "uni-tag-text--small": { "": { "fontSize": 12 } } };
const _sfc_main$1 = {
  name: "UniTag",
  emits: ["click"],
  props: {
    type: {
      // ????????????default???primary???success???warning???error???royal
      type: String,
      default: "default"
    },
    size: {
      // ???????????? normal, small
      type: String,
      default: "normal"
    },
    // ????????????
    text: {
      type: String,
      default: ""
    },
    disabled: {
      // ?????????????????????
      type: [Boolean, String],
      default: false
    },
    inverted: {
      // ???????????????
      type: [Boolean, String],
      default: false
    },
    circle: {
      // ?????????????????????
      type: [Boolean, String],
      default: false
    },
    mark: {
      // ?????????????????????
      type: [Boolean, String],
      default: false
    },
    customStyle: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      const {
        type,
        disabled,
        inverted,
        circle,
        mark,
        size,
        isTrue
      } = this;
      const classArr = [
        "uni-tag--" + type,
        "uni-tag--" + size,
        isTrue(disabled) ? "uni-tag--disabled" : "",
        isTrue(inverted) ? "uni-tag--" + type + "--inverted" : "",
        isTrue(circle) ? "uni-tag--circle" : "",
        isTrue(mark) ? "uni-tag--mark" : "",
        // type === 'default' ? 'uni-tag--default' : 'uni-tag-text',
        isTrue(inverted) ? "uni-tag--inverted uni-tag-text--" + type : "",
        size === "small" ? "uni-tag-text--small" : ""
      ];
      return classArr.join(" ");
    }
  },
  methods: {
    isTrue(value) {
      return value === true || value === "true";
    },
    onClick() {
      if (this.isTrue(this.disabled))
        return;
      this.$emit("click");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.text ? (openBlock(), createElementBlock(
    "u-text",
    {
      key: 0,
      class: normalizeClass(["uni-tag", $options.classes]),
      style: normalizeStyle($props.customStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    },
    toDisplayString($props.text),
    7
    /* TEXT, CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/dxs/Documents/personal/github/uni-app-experiments/hello2/uni_modules/uni-tag/components/uni-tag/uni-tag.vue"]]);
const _style_0 = { "example-body": { "": { "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "flex-end", "flexWrap": "wrap" } }, "tag-view": { "": { "marginRight": 10 } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      type: "default",
      inverted: false
    };
  },
  methods: {
    setType() {
      let types = ["default", "primary", "success", "warning", "error"];
      let index = types.indexOf(this.type);
      types.splice(index, 1);
      let randomIndex = Math.floor(Math.random() * 4);
      this.type = types[randomIndex];
    },
    setInverted() {
      this.inverted = !this.inverted;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_tag = resolveEasycom(resolveDynamicComponent("uni-tag"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_card, { "is-full": "" }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "??????????????????????????????????????????????????????????????????")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "??????",
                type: "primary"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "??????",
                type: "success"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "??????",
                type: "warning"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "??????",
                type: "error"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, { text: "??????" })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "????????????",
        subTitle: "?????? inverted ????????????????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                inverted: true,
                text: "??????",
                type: "primary"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                inverted: true,
                text: "??????",
                type: "success"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                inverted: true,
                text: "??????",
                type: "warning"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                inverted: true,
                text: "??????",
                type: "error"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                inverted: true,
                text: "??????"
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "????????????",
        subTitle: "?????? size ????????????????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "??????",
                type: "primary",
                size: "normal"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "??????",
                type: "primary",
                size: "small"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "??????",
                type: "primary",
                size: "mini"
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "????????????",
        subTitle: "?????? circle ????????????????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                circle: true,
                text: "??????",
                type: "primary"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                circle: true,
                text: "??????",
                type: "primary",
                size: "small"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                circle: true,
                text: "??????",
                type: "primary",
                size: "mini"
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "????????????",
        subTitle: "?????? mark ????????????????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                mark: true,
                text: "??????",
                type: "primary",
                size: "default"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                mark: true,
                text: "??????",
                type: "primary",
                size: "small"
              })
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                mark: true,
                text: "??????",
                type: "primary",
                size: "mini"
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "??????????????????",
        subTitle: "?????? disabled ?????? ??????????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                disabled: "",
                text: "??????",
                type: "primary"
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "???????????????",
        subTitle: "?????? custom-style ?????????????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                text: "?????????????????????",
                "custom-style": "background-color: #4335d6; border-color: #4335d6; color: #fff;"
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_uni_section, {
        title: "????????????",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                type: $data.type,
                text: "??????",
                onClick: $options.setType
              }, null, 8, ["type", "onClick"])
            ]),
            createElementVNode("view", { class: "tag-view" }, [
              createVNode(_component_uni_tag, {
                circle: true,
                inverted: $data.inverted,
                text: "??????",
                type: "primary",
                onClick: $options.setInverted
              }, null, 8, ["inverted", "onClick"])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/dxs/Documents/personal/github/uni-app-experiments/hello2/pages/extUI/tag/tag.nvue"]]);
export {
  tag as default
};
