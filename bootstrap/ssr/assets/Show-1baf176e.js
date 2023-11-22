import { withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { K as KinstaLayout } from "./KinstaLayout-3df118ce.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    article: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(KinstaLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="mx-auto mt-10 flex justify-center max-w-5xl border-b-2"${_scopeId}><img src="/images/kinsta-logo.png" class="w-80 h-80 rounded-xl mx-auto py-5" alt=""${_scopeId}><div class="text-left flex flex-col pt-5 pb-10 px-10"${_scopeId}><h1 class="text-xl font-semibold mb-10"${_scopeId}>${ssrInterpolate(__props.article.title)}</h1><p${_scopeId}>${ssrInterpolate(__props.article.body)}</p></div></article>`);
          } else {
            return [
              createVNode("article", { class: "mx-auto mt-10 flex justify-center max-w-5xl border-b-2" }, [
                createVNode("img", {
                  src: "/images/kinsta-logo.png",
                  class: "w-80 h-80 rounded-xl mx-auto py-5",
                  alt: ""
                }),
                createVNode("div", { class: "text-left flex flex-col pt-5 pb-10 px-10" }, [
                  createVNode("h1", { class: "text-xl font-semibold mb-10" }, toDisplayString(__props.article.title), 1),
                  createVNode("p", null, toDisplayString(__props.article.body), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
