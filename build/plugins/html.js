import html from 'vite-plugin-html'

// 集成 vite-plugin-html 对 index.html 进行压缩和注入动态数据
export function configHtmlPlugin(viteEnv, isBuild) {
    const { VITE_APP_TITLE } = viteEnv
    const htmlPlugin = html({
        minify: isBuild,
        inject: {
            data: {
                title: VITE_APP_TITLE,
            }
        }
    })

    return htmlPlugin
}