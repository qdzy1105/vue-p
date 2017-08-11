const path=require("path");
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    // 设置入口文件
    entry:"./src/js/main.js",
    // 配置文件出口
    output:{
        // 配置输出的路径
        path:path.resolve(__dirname,"./dist"),
        // 配置输出的文件名
        filename:"build.js"
    },
    // 配置plugin  js 自动注入
    plugins:[
        new htmlWebpackPlugin({
            template:"src/index.html",//配置源文件
            filename:"index.html",//配置打包后的文件名
            inject:"body"//配置js注入的位置
        })
    ],
    // 配置别名？？？？？
    // resolve:{alias:{}}
    // 配置loader第三方插件
    module:{
        rules:[
            // 配置css打包
            {
                test:/\.css$/,
                use:[
                    "css-loader",
                    "style-loader"
                ]
            },
            // 配置less打包
             {
                test:/\.less$/,
                use:[
                    "css-loader",
                    "style-loader",
                    "less-loader"
                ]
            },
            // 配置模板文件打包
             {
                test:/\.html$/,
                use:[
                    "html-loader",
                ]
            },
            // 配置图片打包
             {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {loader:"url-loader",options:{limit:5000}},
                    "image-webpack-loader"
                ]
            },
            // 配置es6语法
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            // 配置解析规范
                            presets:["es2015"],
                            // 配置可以同步更新
                            plugins: ['transform-runtime']
                        }
                    }
                ],
                exclude:/node_modules/
            },
            // 配置vue-loader
            {
                test:/\.vue$/,
                use:[
                    "vue-loader"
                ]
            }
        ]
    }
}