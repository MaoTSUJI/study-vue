import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // ステート
    // アプリ全体の状態を保持するオブジェクト
    // ステート数が多くなるときは、モジュールを仕様して分割して管理する。
    state: {
        count: 10
    },
    // ゲッター
    getters: {
        // ステートから別の値を計算する
        squared: (state) => state.count * state.count,
        // 他のゲッターの値を使うことも可能
        cubed: (state, getters) => state.count * getters.squared
    },

    // ミューテーション
    mutations: {
        increment (state, amount) {
            state.count += amount
        }
    },

    // acionsオプションでアクションを定義する
    actions: {
        incrementAction (ctx) {
            // `increment`ミューテーションを実行する
            ctx.commit('increment')
        }
    }
})
// ステートを参照
console.log(store.state.count)  // ->10
// store.gettersでゲッターを参照する
console.log(store.getters.cubed)    // ->10000

// ミューテーションを実行し、ステートを更新
store.commit('increment', 1)

// ステートの更新を確認
console.log(store.state.count)  // ->1

// storedispatchでアクションを呼び出す
console.log(store.state.count)