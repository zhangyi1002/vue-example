<template>
    <div>
        <p>我是props接收到的属性值msg：{{msg}}</p>
        <p>我是额外的属性值extra：{{$attrs}}</p>
        <p>我是自己定义的属性值extra：{{selfMsg}}</p>
        <GrandChild></GrandChild>
    </div>
</template>
<script>
import GrandChild from './GrandChild.vue'

export default {
    inheritAttrs: false,
    components: {GrandChild},
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            selfMsg: 'self define'
        };
    },
    mounted() {
        setTimeout(() => this.$parent.$emit('foo', 'hello brother!'), 4000);
        this.$parent.$on('foo', msg => console.log(msg));

        setTimeout(() => this.$bus.$emit('event-bus', 'event-bus msg'), 2000);
    }
}
</script>