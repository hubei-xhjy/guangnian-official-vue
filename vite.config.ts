import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import {viteStaticCopy} from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueDevTools(),
        viteStaticCopy({
            targets: [{
                src: 'src/markdowns/',
                dest: 'src'
            }, {
                src: 'src/posts/',
                dest: 'src'
            }]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
