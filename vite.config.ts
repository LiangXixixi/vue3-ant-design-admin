import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

const root = process.cwd()

export default({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild: boolean = command === 'build'
  let env = isBuild ? loadEnv(mode, root) : loadEnv((process.argv[3] === '--mode' ? process.argv[4] : process.argv[3]), root)
  
  return {
    base: env.VITE_BASE_PATH,
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
            injectScript: `<script src="./inject.js"></script>`
          }
        }
      })
    ],
    server: {
      port: 3001,
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/global.scss";'
        }
      }
    }
  }
}