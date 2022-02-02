/**
 * Storage 二次封裝
 * @author Jacky
 */

import config from './../config'
export default {
    setItem(key, val) {
        let storage = window.localStorage.getItem(config.namespace)
        let obj = { [key]: val } // 這裡用 key 是變數的話必須用中括號包一下，不加中括號的話就會把它當成一個字串，名叫 key
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    getItem() {},
    clearItem() {},
    clearAll() {},
}