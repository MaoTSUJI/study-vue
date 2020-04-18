<docs>
#HelloWorldコンポーネント

## 概要
これはHelloWorldコンポーネントの使用方法について書かれたドキュメントです。

## 使用方法
...
</docs>

<template>
  <div class="hello">
    <!-- 既存のdiv.hello内を削除 -->
    <p class="message">メッセージ: {{ msg }}</p>
    <!-- 変換されたカスタムブロックのコンテンツを挿入(注意: XSSの脆弱性の危険性がある`v-html`は今回の例目的で使用しています。) -->
    <p v-html="docs"></p>
  </div>
</template>

<script>
// markdownをHTMLに変換するライブラリを読み込む
import marked from 'marked'
export default {
  name: 'HelloWorld',
  data () {
    return {
      docs: marked(this.$options.__docs),
      msg: 'こんにちは！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.message { color: #42b983; }
</style>
