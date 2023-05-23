(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{400:function(t,s,a){"use strict";a.r(s);var v=a(10),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"直播间管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直播间管理"}},[t._v("#")]),t._v(" 直播间管理")]),t._v(" "),s("h2",{attrs:{id:"更新直播间标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新直播间标题"}},[t._v("#")]),t._v(" 更新直播间标题")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.live.bilibili.com/room/v1/Room/update")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie（SESSDATA）")]),t._v(" "),s("p",[t._v("鉴权方式：Cookie中"),s("code",[t._v("bili_jct")]),t._v("的值正确并与"),s("code",[t._v("csrf")]),t._v("相同")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("room_id")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("直播间id")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("必须为自己的直播间id")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("直播间标题")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("最大20字符")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("65530：token错误（登录错误）"),s("br"),t._v("1：错误")])]),t._v(" "),s("tr",[s("td",[t._v("msg")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为ok")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为ok")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("空")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("修改直播间"),s("code",[t._v("10352053")]),t._v("标题为"),s("code",[t._v("测试")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.live.bilibili.com/room/v1/Room/update'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'room_id=10352053'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title=测试'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx;bili_jct=xx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"开始直播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始直播"}},[t._v("#")]),t._v(" 开始直播")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.live.bilibili.com/room/v1/Room/startLive")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie（SESSDATA）")]),t._v(" "),s("p",[t._v("鉴权方式：Cookie中"),s("code",[t._v("bili_jct")]),t._v("的值正确并与"),s("code",[t._v("csrf")]),t._v("相同")]),t._v(" "),s("p",[t._v("开播时必须有分区选择，开播后返回推流地址")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("room_id")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("直播间id")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("必须为自己的直播间id")])]),t._v(" "),s("tr",[s("td",[t._v("area_v2")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("直播分区id（子分区id）")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("详见"),s("RouterLink",{attrs:{to:"/docs/live/live_area.html"}},[t._v("直播分区")])],1)]),t._v(" "),s("tr",[s("td",[t._v("platform")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("直播平台")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("web端："),s("br"),t._v("bililink：android_link")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("65530：token错误（登录错误）"),s("br"),t._v("1：错误"),s("br"),t._v("60009：分区不存在"),s("br"),s("strong",[t._v("（其他错误码有待补充）")])])]),t._v(" "),s("tr",[s("td",[t._v("msg")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为空")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为空")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("信息本体")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("是否改变状态")]),t._v(" "),s("td",[t._v("0：未改变"),s("br"),t._v("1：改变")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("LIVE")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("room_type")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("rtmp")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("RTMP推流地址信息")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("protocols")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("？？？")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("try_time")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("？？？")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("live_key")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("？？？")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("notice")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("？？？")]),t._v(" "),s("td",[t._v("作用尚不明确")])])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("中的"),s("code",[t._v("rtmp")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("addr")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("RTMP推流（发送）地址")]),t._v(" "),s("td",[s("strong",[t._v("重要")])])]),t._v(" "),s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("RTMP推流参数（密钥）")]),t._v(" "),s("td",[s("strong",[t._v("重要")])])]),t._v(" "),s("tr",[s("td",[t._v("new_link")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("获取CDN推流ip地址重定向信息的url")]),t._v(" "),s("td",[t._v("没啥用")])]),t._v(" "),s("tr",[s("td",[t._v("provider")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("？？？")]),t._v(" "),s("td",[t._v("作用尚不明确")])])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("中的"),s("code",[t._v("protocols")]),t._v("数组：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("项")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("？？？")]),t._v(" "),s("td",[t._v("作用尚不明确")])])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("中的"),s("code",[t._v("protocols")]),t._v("数组中的对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("protocol")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("rtmp")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("addr")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("RTMP推流（发送）地址")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("RTMP推流参数（密钥）")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("new_link")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("获取CDN推流ip地址重定向信息的url")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("provider")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("txy")]),t._v(" "),s("td",[t._v("作用尚不明确")])])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("中的"),s("code",[t._v("notice")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("空")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("msg")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("空")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("button_text")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("空")]),t._v(" "),s("td",[t._v("作用尚不明确")])]),t._v(" "),s("tr",[s("td",[t._v("button_url")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("空")]),t._v(" "),s("td",[t._v("作用尚不明确")])])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("以"),s("code",[t._v("27")]),t._v("作为分区id开播直播间"),s("code",[t._v("10352053")])]),t._v(" "),s("p",[t._v("其中"),s("code",[t._v('"data"."rtmp"."addr"')]),t._v("为推流地址")]),t._v(" "),s("p",[s("code",[t._v('"data"."rtmp"."code"')]),t._v("为推流参数")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.live.bilibili.com/room/v1/Room/startLive'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'room_id=10352053'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'area_v2=27'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'platform=pc'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx;bili_jct=xx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"change"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LIVE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"room_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rtmp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"addr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rtmp://txy.live-send.acg.tv/live-txy/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?streamname=live_293793435_1567354&key=***"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new_link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://tcdns.myqcloud.com:8086/bilibili_redirect?up_rtmp=txy.live-send.acg.tv%2Flive-txy%2F%3Fstreamname%3Dlive_293793435_1567354%26key%3D***"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"txy"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocols"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rtmp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"addr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rtmp://txy.live-send.acg.tv/live-txy/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?streamname=live_293793435_1567354&key=***"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new_link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://tcdns.myqcloud.com:8086/bilibili_redirect?up_rtmp=txy.live-send.acg.tv%2Flive-txy%2F%3Fstreamname%3Dlive_293793435_1567354%26key%3D***"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"txy"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"try_time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000-00-00 00:00:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"live_key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"l:one:live:record:10352053:1589344980"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notice"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"button_text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"button_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"关闭直播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭直播"}},[t._v("#")]),t._v(" 关闭直播")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.live.bilibili.com/room/v1/Room/stopLive")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie（SESSDATA）")]),t._v(" "),s("p",[t._v("鉴权方式：Cookie中"),s("code",[t._v("bili_jct")]),t._v("的值正确并与"),s("code",[t._v("csrf")]),t._v("相同")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("room_id")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("直播间id")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("必须为自己的直播间id")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("65530：token错误（登录错误）"),s("br"),t._v("-400：没有权限"),s("br"),s("strong",[t._v("（其他错误码有待补充）")])])]),t._v(" "),s("tr",[s("td",[t._v("msg")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为空")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("默认为空")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("信息本体")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("是否改变状态")]),t._v(" "),s("td",[t._v("0：未改变"),s("br"),t._v("1：改变")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("PREPARING")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[t._v("关闭直播间"),s("code",[t._v("10352053")]),t._v("的直播")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.live.bilibili.com/room/v1/Room/stopLive'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'room_id=10352053'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx;bili_jct=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"change"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PREPARING"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);