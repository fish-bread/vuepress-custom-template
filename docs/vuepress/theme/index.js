const { path } = require('@vuepress/utils')

module.exports = (options) => ({
    name: 'vuepress-theme-custom',

    // 继承默认主题（可选）
    extends: require('@vuepress/theme-default')(options),

    // 指定布局组件
    layouts: {
        Layout: path.resolve(__dirname, './layouts/Layout.vue'),
        404: path.resolve(__dirname, './layouts/NotFound.vue'),
    },

    // 指定客户端配置文件
    clientConfigFile: path.resolve(__dirname, '../client.js'),
})