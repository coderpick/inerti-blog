import { unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { K as KinstaLayout } from "./KinstaLayout-3df118ce.js";
import { Head, Link } from "@inertiajs/inertia-vue3";
const _imports_0 = "/build/assets/kinsta-logo2-fc188184.png";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    articles: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Kinsta Blog</title><meta name="description" content="Kinsta blog for developers"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Kinsta Blog"),
              createVNode("meta", {
                name: "description",
                content: "Kinsta blog for developers"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(KinstaLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-2xl font-bold py-10"${_scopeId}>Read our latest articles</h2><section class="space-y-5 border-b-2 pb-10"${_scopeId}><!--[-->`);
            ssrRenderList(__props.articles, (article) => {
              _push2(`<article class="flex justify-center items-center shadow-md bg-white rounded-xl p-4 mx-auto max-w-3xl"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="w-32 h-32 rounded-xl object-cover" alt=""${_scopeId}><div class="flex flex-col text-left justify-between pl-3 space-y-5"${_scopeId}><h3 class="text-xl font-semibold text-indigo-600 hover:text-indigo-800"${_scopeId}><a href="#"${_scopeId}>${ssrInterpolate(article.title)}</a></h3><p${_scopeId}>${ssrInterpolate(article.excerpt)}</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/posts/" + article.id,
                "preserve-scroll": "",
                class: "text-indigo-600 hover:text-indigo-800 w-fit self-end font-semibold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Read more `);
                  } else {
                    return [
                      createTextVNode("Read more ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></article>`);
            });
            _push2(`<!--]--></section>`);
          } else {
            return [
              createVNode("h2", { class: "text-2xl font-bold py-10" }, "Read our latest articles"),
              createVNode("section", { class: "space-y-5 border-b-2 pb-10" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.articles, (article) => {
                  return openBlock(), createBlock("article", {
                    key: article.id,
                    class: "flex justify-center items-center shadow-md bg-white rounded-xl p-4 mx-auto max-w-3xl"
                  }, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "w-32 h-32 rounded-xl object-cover",
                      alt: ""
                    }),
                    createVNode("div", { class: "flex flex-col text-left justify-between pl-3 space-y-5" }, [
                      createVNode("h3", { class: "text-xl font-semibold text-indigo-600 hover:text-indigo-800" }, [
                        createVNode("a", { href: "#" }, toDisplayString(article.title), 1)
                      ]),
                      createVNode("p", null, toDisplayString(article.excerpt), 1),
                      createVNode(unref(Link), {
                        href: "/posts/" + article.id,
                        "preserve-scroll": "",
                        class: "text-indigo-600 hover:text-indigo-800 w-fit self-end font-semibold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Read more ")
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
