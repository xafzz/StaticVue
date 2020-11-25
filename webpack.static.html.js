const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//  清理/dist文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', //'development' or 'production'
    entry: './src/main.ts',
    // output:{
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'foo.bundle.js'
    //     // filename: '[name].js'
    // },
    devServer: {
        //提供在服务器内部在所有其他中间件之后执行自定义中间件的功能。
        after: function (app, server, compiler) {
        },
        //提供在服务器内部先于所有其他中间件执行自定义中间件的功能
        before: function (app, server, compiler) {
            // app.get('/some/path', function (req, res) {
            //     res.json({custom: 'response'});
            // })
        },
        //允许访问开发服务器的服务列入白名单
        allowedHosts: [],
        //对所有服务启用gzip压缩
        compress: true,
        //告诉服务器从何处提供内容。仅当您要提供静态文件时才需要这样做。devServer.publicPath将用于确定应从何处提供捆绑包，并具有优先权
        contentBase: path.join(__dirname, 'dist'),
        // host: '0.0.0.0',
        port: 9000,
        hot: true,
        //启用热模块替换，而无需页面刷新作为构建失败时的回退。
        hotOnly: true,
        //索引文件的文件名。
        index: 'index.html',
        // https: true
        //这意味着webpack将不会监视任何文件更改。我们称这种懒惰模式。
        // lazy:true
        //检测到文件更改时，开发服务器将重新加载/刷新页面。devServer.hot必须禁用devServer.watchContentBaseoption或必须启用option才能liveReload生效。
        //liveReload: false
        //指示dev-server在服务器启动后打开浏览器。将其设置true为打开默认浏览器。
        // open: true, //Google Chrome
        // open: {
        //     app: ['Google Chrome', '--incognito', '--other-flag']
        // },
        //openPage:'指定打开浏览器时要浏览的页面。',
        // openPage: ['/different/page1', '/different/page2']
        //出现编译器错误或警告时，在浏览器中显示全屏覆盖。如果只想显示编译器错误：
        //overlay:true,
        //如果要显示警告和错误
        // overlay: {
        //     warnings: true,
        //     errors: true
        // }
        //proxy:{}
        //与devServer.quiet启用，那么除了该初始启动信息将被写入到控制台。这也意味着来自webpack的错误或警告是不可见的。
        //todo 不太懂
        // quiet: true
        //sockHost:''
        //sockPath:''
        //sockPort:''
    },
    module:{
        rules:[
            // { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        //https://github.com/jantimon/html-webpack-plugin#options
        new HtmlWebpackPlugin({
            //true | ‘head’ | ‘body’ | false 。把所有产出文件注入到给定的 template 或templateContent。
            // 当传入 true或者 ‘body’时所有javascript资源将被放置在body元素的底部，“head”则会放在head元素内。
            inject: false,
            title: '这111是标题',
            // favicon:'',  //图标
            meta: [{
                name: 'description',
                content: 'A better default template for html-webpack-plugin.'
            }],
            //挂载的id 我们采用挂载的方式
            appMountId: 'app',
            //输出到挂载到 id 里面
            appMountHtmlSnippet: '999999999999999999999999999',
            //输出到 head 里面
            // headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;background: red;}</style >',
            //输出到 body 里面  对应到模版里面到写法 <%= htmlWebpackPlugin.tags.bodyTags %>
            // bodyHtmlSnippet: '这是我手动注入的内容1',
            //模版是否可以只用一个 输出多个
            template: './webpack-template/index.ejs',
            outJs:'main.ts'
            // template: './src/template/index.html'
            // template: require('html-webpack-template'), //默认到语法规则
            // minify : {…} | false 。传一个html-minifier 配置object来压缩输出。
            // 如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
            // hash:true, //false
            //如果传入true（默认），只有在文件变化时才 发送（emit）文件。
            // cache : true | false
            //如果传入true（默认），错误信息将写入html页面。
            //showErrors : true | false
            //chunks : 只允许你添加chunks 。（例如：只有单元测试块 ）
            // chunksSortMode : 在chunk被插入到html之前，你可以控制它们的排序。允许的值 ‘none’ | ‘auto’ | ‘dependency’ | {function} 默认为‘auto’.
            //excludeChunks : 允许你跳过一些chunks（例如，不要单元测试的 chunk）.
            //xhtml : 用于生成的HTML文件的标题。
            //title : true | false。如果是true，把link标签渲染为自闭合标签，XHTML要这么干的。默认false。
        })
    ]
};
