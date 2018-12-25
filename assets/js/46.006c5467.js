(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{208:function(e,r,n){"use strict";n.r(r);var s=n(1),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"body-parser中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#body-parser中间件","aria-hidden":"true"}},[e._v("#")]),e._v(" body-parser中间件")]),n("blockquote",[n("p",[e._v("bodyParser.json(options) // 分别是处理json数据\nbodyParser.raw(options)  // Buffer流数据\nbodyParser.text(options) // 文本数据\nbodyParser.urlencoded(options)  // UTF-8的编码的数据")])]),n("p",[e._v("三种用法：")]),n("ol",[n("li",[e._v("底层中间件用法：这将拦截和解析所有的请求；也即这种用法是全局的。")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var express = require('express')\nvar bodyParser = require('body-parser')\n \nvar app = express()\n \n// parse application/x-www-form-urlencoded\napp.use(bodyParser.urlencoded({ extended: false }))\n \n// parse application/json\napp.use(bodyParser.json())\n \napp.use(function (req, res) {\n  res.setHeader('Content-Type', 'text/plain')\n  res.write('you posted:\\n')\n  res.end(JSON.stringify(req.body, null, 2))\n})\n")])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("特定路由下的中间件用法：这种用法是针对特定路由下的特定请求的，只有请求该路由时，中间件才会拦截和解析该请求；也即这种用法是局部的")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var express = require('express')\nvar bodyParser = require('body-parser')\n \nvar app = express()\n \n// create application/json parser\nvar jsonParser = bodyParser.json()\n \n// create application/x-www-form-urlencoded parser\nvar urlencodedParser = bodyParser.urlencoded({ extended: false })\n \n// POST /login gets urlencoded bodies\napp.post('/login', urlencodedParser, function (req, res) {\n  if (!req.body) return res.sendStatus(400)\n  res.send('welcome, ' + req.body.username)\n})\n \n// POST /api/users gets JSON bodies\napp.post('/api/users', jsonParser, function (req, res) {\n  if (!req.body) return res.sendStatus(400)\n  // create user in req.body\n})\n")])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("设置Content-Type 属性；用于修改和设定中间件解析的body类容类型。")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// parse various different custom JSON types as JSON\napp.use(bodyParser.json({ type: 'application/*+json' });\n\n// parse some custom thing into a Buffer\napp.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));\n\n// parse an HTML body into a string\napp.use(bodyParser.text({ type: 'text/html' }));\n")])])])}],!1,null,null,null);r.default=a.exports}}]);