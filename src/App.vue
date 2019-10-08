<template>
    <div id="app">
        <div class="menu">
            <router-link class="menu-item" to="/communicate">组件通信</router-link>
            <router-link class="menu-item" to="/slots">插槽</router-link>
            <router-link class="menu-item" to="/notice">弹窗类组件</router-link>
            <router-link class="menu-item" to="/recursion">递归组件</router-link>
        </div>
        <router-view class="content"></router-view>
    </div>
</template>

<script>

export default {
    name: 'app'
}
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .menu {
        position: fixed;
        width: 200px;
        height: 100%;
        padding-top: 48px;
        border-right: 10px solid #eee;
    }

    .menu-item {
        width: 100%;
        display: block;
        text-align: center;
    }

    .content {
        margin-left: 200px;
        padding: 48px;
    }
</style>
