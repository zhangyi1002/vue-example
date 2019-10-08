<template>
    <div v-if="isShow" class="dialog-wrapper">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '提示'
        },
        message: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 3000
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        show() {
            this.isShow = true;
            setTimeout(this.hide, this.duration);
        },
        hide() {
            this.isShow = false;
            this.remove();
        }
    }
}
</script>
<style scoped>
    .dialog-wrapper {
        position: fixed;
        top: 30px;
        left: calc((100% - 300px) / 2);
        width: 300px;
        border-radius: 8px;
        border: 1px solid #eee;
        text-align: center;
    }

    h1 {
        border-bottom: 1px solid #eee;
        font-size: 16px;
        color: #000;
    }

    p {
        font-size: 12px;
        color: #666;
    }
</style>