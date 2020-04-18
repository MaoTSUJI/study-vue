import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//  ストアの定義
const store = new Vuex.Store({
    state: {
        // タスクの初期ステート
        tasks: [
            {
                id: 1,
                name: '牛乳を買う',
                done: false
            },
            {
                id: 2,
                name: '本を買う',
                done: true
            }
        ]
    }
})
console.log(store.state.tasks)

// ストアをエクスポート
export default store