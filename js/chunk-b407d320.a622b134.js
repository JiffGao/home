(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chunk-b407d320"],
  {
    1361: function (t, e, i) {},
    "3bbb": function (t, e, i) {
      "use strict";
      var n = i("1361");
      i.n(n).a;
    },
    "4d49": function (t, e, i) {
      "use strict";
      var n = i("6b65");
      i.n(n).a;
    },
    "57d4": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("cccf"),
        l = i("3228"),
        a = {
          components: { Player: n.a },
          data: function () {
            return {
              tagsOption: [
                "综合资源",
                "学习学术",
                "音乐电台",
                "电影电视",
                "图书图片",
                "动漫",
                "游戏",
                "设计素材",
                "论坛博客",
                "iOS",
                "安卓",
                "Windows",
                "Mac",
                "效率&工具",
                "导航",
              ],
              tagsOption2: [
                { text: "综合资源", value: "综合资源" },
                { text: "学习学术", value: "学习学术" },
                { text: "音乐电台", value: "音乐电台" },
                { text: "电影电视", value: "电影电视" },
                { text: "图书图片", value: "图书图片" },
                { text: "动漫", value: "动漫" },
                { text: "游戏", value: "游戏" },
                { text: "设计素材", value: "设计素材" },
                { text: "论坛博客", value: "论坛博客" },
                { text: "iOS", value: "iOS" },
                { text: "安卓", value: "安卓" },
                { text: "Windows", value: "Windows" },
                { text: "Mac", value: "Mac" },
                { text: "效率&工具", value: "效率&工具" },
                { text: "导航", value: "导航" },
              ],
              links: [],
              tags: [],
              linkform: { name: "", url: "", info: "", tags: "" },
              addDialogVisible: !1,
              ruleVisible: !1,
            };
          },
          beforeMount: function () {
            (document.title = "导航"), this.getSldLinks();
          },
          methods: {
            filterDuplicateUrls: function (t) {
              for (var e = [], i = [], n = 0; n < t.length; n++) {
                var l = t[n].url;
                i.includes(l) || (e.push(t[n]), i.push(l));
              }
              return e;
            },
            getSldLinks: function () {
              var t = this;
              l.d.getLinks().then(function (e) {
                t.links = t.filterDuplicateUrls(e.data);
              });
            },
            filterTag: function (t, e) {
              return e.tag === t;
            },
            createLink: function () {
              var t = this;
              (this.linkform.tags = this.tags.toString()),
                l.d
                  .createLink(this.linkform)
                  .then(function (e) {
                    e.code > 0
                      ? t.$notify.error({ title: "添加失败", message: e.msg })
                      : (t.$notify({
                          title: "添加成功!",
                          type: "success",
                          duration: "800",
                        }),
                        t.getSldLinks());
                  })
                  .catch(function (e) {
                    t.$notify.error({ title: "错误 请检查", message: e });
                  });
            },
          },
        },
        s = (i("4d49"), i("2877")),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              { staticClass: "hgs" },
              [
                i("div", { staticClass: "head" }, [
                  i("div", { staticClass: "title" }, [
                    i("h1", { staticClass: "dynamic-text-shadow" }, [
                      t._v("Joseph"),
                    ]),
                    i(
                      "p",
                      {
                        on: {
                          click: function (e) {
                            t.ruleVisible = !0;
                          },
                        },
                      },
                      [t._v("玩法简介")]
                    ),
                  ]),
                ]),
                i("div", { staticClass: "content" }, [
                  i(
                    "div",
                    [
                      i(
                        "el-table",
                        {
                          directives: [
                            {
                              name: "loading",
                              rawName: "v-loading",
                              value: 0 === t.links.length,
                              expression: "links.length === 0",
                            },
                          ],
                          staticClass: "top100table",
                          attrs: { data: t.links, stripe: "" },
                        },
                        [
                          i("el-table-column", {
                            attrs: {
                              prop: "url",
                              label: "名称",
                              align: "center",
                            },
                            scopedSlots: t._u([
                              {
                                key: "default",
                                fn: function (e) {
                                  return [
                                    i(
                                      "a",
                                      {
                                        attrs: {
                                          target: "_blank",
                                          rel: "nofollow",
                                          href: e.row.url,
                                        },
                                      },
                                      [
                                        i(
                                          "el-popover",
                                          {
                                            attrs: {
                                              trigger: "hover",
                                              placement: "bottom-start",
                                            },
                                          },
                                          [
                                            t._v(
                                              " 链接：" + t._s(e.row.url) + " "
                                            ),
                                            i(
                                              "div",
                                              {
                                                staticClass: "name-wrapper",
                                                attrs: { slot: "reference" },
                                                slot: "reference",
                                              },
                                              [
                                                t._v(
                                                  " " + t._s(e.row.name) + " "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ];
                                },
                              },
                            ]),
                          }),
                          i("el-table-column", {
                            staticClass: "info",
                            attrs: { prop: "info", label: "简介" },
                          }),
                          i("el-table-column", {
                            staticClass: "info",
                            attrs: { prop: "tags", label: "标签" },
                          }),
                          i("el-table-column", {
                            attrs: {
                              prop: "user_name",
                              label: "推荐人",
                              align: "center",
                            },
                            scopedSlots: t._u([
                              {
                                key: "default",
                                fn: function (e) {
                                  return [
                                    i(
                                      "a",
                                      {
                                        attrs: {
                                          target: "_blank",
                                          href:
                                            "https://xydh.fun/" +
                                            e.row.user_name,
                                        },
                                      },
                                      [t._v(t._s(e.row.user_name))]
                                    ),
                                  ];
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                i(
                  "el-dialog",
                  {
                    attrs: { title: "推荐内容", visible: t.addDialogVisible },
                    on: {
                      "update:visible": function (e) {
                        t.addDialogVisible = e;
                      },
                    },
                  },
                  [
                    i(
                      "el-form",
                      { attrs: { model: t.linkform, "label-width": "60px" } },
                      [
                        i(
                          "el-form-item",
                          { attrs: { label: "名称" } },
                          [
                            i("el-input", {
                              model: {
                                value: t.linkform.name,
                                callback: function (e) {
                                  t.$set(t.linkform, "name", e);
                                },
                                expression: "linkform.name",
                              },
                            }),
                          ],
                          1
                        ),
                        i(
                          "el-form-item",
                          { attrs: { label: "链接" } },
                          [
                            i("el-input", {
                              model: {
                                value: t.linkform.url,
                                callback: function (e) {
                                  t.$set(t.linkform, "url", e);
                                },
                                expression: "linkform.url",
                              },
                            }),
                          ],
                          1
                        ),
                        i(
                          "el-form-item",
                          { attrs: { label: "简介" } },
                          [
                            i("el-input", {
                              attrs: { type: "textarea" },
                              model: {
                                value: t.linkform.info,
                                callback: function (e) {
                                  t.$set(t.linkform, "info", e);
                                },
                                expression: "linkform.info",
                              },
                            }),
                          ],
                          1
                        ),
                        i(
                          "el-form-item",
                          { attrs: { label: "标签" } },
                          [
                            i(
                              "el-checkbox-group",
                              {
                                staticStyle: { "text-align": "left" },
                                model: {
                                  value: t.tags,
                                  callback: function (e) {
                                    t.tags = e;
                                  },
                                  expression: "tags",
                                },
                              },
                              t._l(t.tagsOption, function (e) {
                                return i(
                                  "el-checkbox",
                                  { key: e, attrs: { label: e } },
                                  [t._v(t._s(e))]
                                );
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    i(
                      "span",
                      {
                        staticClass: "dialog-footer",
                        attrs: { slot: "footer" },
                        slot: "footer",
                      },
                      [
                        i(
                          "el-button",
                          {
                            on: {
                              click: function (e) {
                                t.addDialogVisible = !1;
                              },
                            },
                          },
                          [t._v("取 消")]
                        ),
                        i(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: {
                              click: function (e) {
                                return t.createLink();
                              },
                            },
                          },
                          [t._v("添加")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                i(
                  "el-dialog",
                  {
                    attrs: { title: "玩法简介", visible: t.ruleVisible },
                    on: {
                      "update:visible": function (e) {
                        t.ruleVisible = e;
                      },
                    },
                  },
                  [
                    i("div", { staticClass: "ruleContent" }, [
                      i("li", [
                        t._v(
                          "1. 等级低时无权添加或看不到添加按钮"
                        ),
                      ]),
                      i("li", [
                        t._v(
                          "2. 不仅可以推荐网站、网址，也可以推荐好用的App、软件，比如放上官网等"
                        ),
                      ]),
                      i("li", [
                        t._v(
                          "3. 你推荐的站点受欢迎时，则会展示在顶端，可为你的个人站点带来流量"
                        ),
                      ]),
                      i("li", [
                        t._v(
                          " 4. 此功能就是为了更好地分享，因为好多猿友的站点很优质，但大家并不知道他的ID，通过水帘洞天我们可以看到优质的网站来自哪些大神推荐。 "
                        ),
                      ]),
                    ]),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass: "AddBtn",
                    on: {
                      click: function (e) {
                        t.addDialogVisible = !0;
                      },
                    },
                  },
                  [i("i", { staticClass: "el-icon-circle-plus-outline" })]
                ),
                i("Player", { attrs: { musicList: t.audio } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "270944fa",
          null
        );
      e.default = o.exports;
    },
    "6b65": function (t, e, i) {},
    cccf: function (t, e, i) {
      "use strict";
      var n = {
          name: "Player",
          components: {},
          props: { musicList: { type: Array, required: !0 } },
          data: function () {
            return { musicIsMini: !0 };
          },
          beforeDestroy: function () {
            var t = this.$refs.aplayer.$el;
            t.removeEventListener("mouseenter", this.handleMouseEnter),
              t.removeEventListener("mouseleave", this.handleMouseLeave);
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t.$refs.aplayer.$el;
              e.addEventListener("mouseenter", t.handleMouseEnter),
                e.addEventListener("mouseleave", t.handleMouseLeave);
            });
          },
          methods: {
            handleMouseEnter: function () {
              (this.musicIsMini = !1), clearTimeout(this.timeoutId);
            },
            handleMouseLeave: function () {
              var t = this;
              this.timeoutId = setTimeout(function () {
                t.musicIsMini = !0;
              }, 1e3);
            },
          },
        },
        l = (i("3bbb"), i("2877")),
        a = Object(l.a)(
          n,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "span",
              {
                class: [
                  "amusic",
                  this.musicIsMini ? "musicIsMini" : "musicIsNoMini",
                ],
              },
              [
                e("aplayer", {
                  ref: "aplayer",
                  attrs: {
                    audio: this.musicList,
                    fixed: "",
                    mini: this.musicIsMini,
                    listFolded: !0,
                    autoplay: "",
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "02f9d387",
          null
        );
      e.a = a.exports;
    },
  },
]);
