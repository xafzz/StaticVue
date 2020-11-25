const path = require('path')
//  清理/dist文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config
//vue3.0 不再用 vue-template-compiler
//添加 @vue/compiler-sfc
const {VueLoaderPlugin} = require('vue-loader')
console.log('------->',__filename)

module.exports = {
    mode: 'development', //'development' or 'production'
    entry: './src/main.ts',
    output:{
        publicPath:'/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        //提供在服务器内部在所有其他中间件之后执行自定义中间件的功能。
        after: function (app, server, compiler) {},
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
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        //放个页面 展示下
        new HtmlWebpackPlugin({
            inject: 'body',
            // template: './src/template/index.html'
            // title:'111',
            appMountId: 'app',
            //输出到挂载到 id 里面
            // appMountHtmlSnippet: '999999999999999999999999999',
            template: './webpack-template/index.ejs',
        })
    ],
    resolve: {
        alias: {
            '@': require('path').join(__dirname, 'src')
        }
    }
};
