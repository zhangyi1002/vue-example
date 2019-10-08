<template>
    <div>
        <h3>{{data.title}}</h3>
        <Node v-for="item in data.children" :key="item.id" :data="item"></Node>
    </div>
</template>
<script>
export default {
    // name对递归组件是必要的
    name: 'Node',
    props: ['data']
}
</script>