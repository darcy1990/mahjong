import App from './App'
import GoEasy from '@/uni_modules/GoEasy-Chatroom/js_sdk/goeasy-2.12.4.esm.min.js'

const goEasy = GoEasy.getInstance({
    host: "hangzhou.goeasy.io",//应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
    appkey: "BC-202124bfec3b435284829a7ffefb1b84",// common key,
    modules: ['pubsub']
});

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
    const app = createSSRApp(App)

    app.provide('goEasy', goEasy);

    return {
        app
    }
}
// #endif