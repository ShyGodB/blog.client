module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: false, // 是否开启语法检测
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 8888,
        https: false,
        hotOnly: true,
        proxy: {
            '/api': {
                target: process.env.NODE_ENV === "development" ? 'http://127.0.0.1:3000/api' : 'http://127.0.0.1:3000/api',
                ws: true,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}