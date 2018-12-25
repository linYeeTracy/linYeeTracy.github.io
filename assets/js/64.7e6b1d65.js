(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{221:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[t._v("#")]),t._v(" http")]),s("h2",{attrs:{id:"http协议中connection头的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议中connection头的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" http协议中connection头的作用")]),s("p",[t._v("http1.1中，client和server都是默认对方支持长链接的， 如果client使用http1.1协议，但又不希望使用长链接，则需要在header中指明connection的值为close；如果server方也不想支持长链接，则在response中也需要明确说明connection的值为close.")]),s("p",[t._v("不论request还是response的header中包含了值为close的connection，都表明当前正在使用的tcp链接在当天请求处理完毕后会被断掉。以后client再进行新的请求时就必须创建新的tcp链接了。")]),s("h2",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control","aria-hidden":"true"}},[t._v("#")]),t._v(" cache-control")]),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/kaima/archive/2009/10/13/1582337.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cache-control")])]),s("h2",{attrs:{id:"content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type","aria-hidden":"true"}},[t._v("#")]),t._v(" content-type")]),s("p",[t._v("Content-Type用于指定内容类型，一般是指网页中存在的Content-Type，Content-Type属性指定请求和响应的HTTP内容类型.")]),s("p",[t._v("默认： "),s("code",[t._v("text/html")])]),s("p",[t._v("常见的content-type：")]),s("ul",[s("li",[s("p",[t._v("text/html")])]),s("li",[s("p",[t._v("text/plain")])]),s("li",[s("p",[t._v("text/css")])]),s("li",[s("p",[t._v("text/javascript")])]),s("li",[s("p",[t._v("application/x-www-form-urlencoded       post发包方式")])]),s("li",[s("p",[t._v("multipart/form-data       post发包方式")])]),s("li",[s("p",[t._v("application/json        post发包方式")])]),s("li",[s("p",[t._v("application/xml       post发包方式")])])]),s("h3",{attrs:{id:"application-x-www-form-urlencoded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-x-www-form-urlencoded","aria-hidden":"true"}},[t._v("#")]),t._v(" application/x-www-form-urlencoded")]),s("blockquote",[s("p",[t._v("常用的表单发包方式，普通的表单提交，或者js发包，默认都是通过这种方式，就是说，在发送到服务器之前，所有字符都会进行编码")])]),s("h3",{attrs:{id:"multipart-form-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multipart-form-data","aria-hidden":"true"}},[t._v("#")]),t._v(" multipart/form-data")]),s("p",[t._v("用在发送文件的POST包")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token constant"}},[t._v("POST")]),t._v(" http"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("homeway"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("me "),s("span",{attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nContent"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("multipart"),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" boundary"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("WebKitFormBoundaryOGkWPJsSaJCPWjZP\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("WebKitFormBoundaryOGkWPJsSaJCPWjZP\nContent"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Disposition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" form"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" name"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"key2"')]),t._v("\n"),s("span",{attrs:{class:"token number"}},[t._v("456")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("WebKitFormBoundaryOGkWPJsSaJCPWjZP\nContent"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Disposition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" form"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" name"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"key1"')]),t._v("\n"),s("span",{attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("WebKitFormBoundaryOGkWPJsSaJCPWjZP\nContent"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Disposition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" form"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" name"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"file"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" filename"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"index.py"')]),t._v("\n")])]),s("p",[t._v("这里"),s("code",[t._v("Content-Type")]),t._v("告诉我们，发包是以"),s("code",[t._v("multipart/form-data")]),t._v("格式来传输，另外，还有"),s("code",[t._v("boundary")]),t._v("用于分割数据。")]),s("p",[t._v("当文件太长，HTTP无法在一个包之内发送完毕，就需要分割数据，分割成一个一个"),s("code",[t._v("chunk")]),t._v("发送给服务端，")]),s("p",[t._v("那么--用于区分数据快，而后面的数据633e61ebf351484f9124d63ce76d8469就是标示区分包作用。")])])}],!1,null,null,null);a.default=e.exports}}]);