<template>
    <div>
        <h3>我是comp3</h3>
        <slot name="title" :title="titleInfo" :subtitle="subtitle"></slot>
        <slot name="content" :content="contentInfo"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titleInfo: {
                text: '我是title',
                color: 'red'
            },
            contentInfo: {
                text: '我是content',
                color: 'green'
            },
            subtitle: '我是subtitle'
        };
    }
}
</script>