import vue from '@vitejs/plugin-vue'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'

// html插件
import { configHtmlPlugin } from './html'
// css插件
import { unocss } from './unocss'

// UI组件
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// mock
import { configMockPlugin } from './mock'

export function createVitePlugins(viteEnv, isBuild) {
    const plugins = [
        vue(),
        VueSetupExtend(),
        configHtmlPlugin(viteEnv, isBuild),
        unocss(),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ]

    if (isBuild) {
        plugins.push(
            visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true,
            })
        )
    }

    if (viteEnv?.VITE_APP_USE_MOCK) {
        plugins.push(configMockPlugin(isBuild))
    }

    return plugins
}