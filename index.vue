<template>
    p.message メッセージ: {{ msg }}
</template>

<script lang="ts">
export default {
    data (): Object {
        return { msg: 'こんにちは' }
    }
}
ls</script>

<style lang="stylus">
vue-color =#42b983
.message
    color vue-color
</style>