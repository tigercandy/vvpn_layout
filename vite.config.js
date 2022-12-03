import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import { wrapEnv, createProxy } from './build/utils'
import { createVitePlugins } from './build/plugins'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapEnv(env)
  const isBuild = command === 'build'

  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY } = viteEnv

  return {
    plugins: createVitePlugins(viteEnv, isBuild),
    base: VITE_PUBLIC_PATH || '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/variables.scss';`,
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    }
  }
})
