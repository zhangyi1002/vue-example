<template>
    <div>
        <child ref="child" msg="hello!" extra="world!" extra2="world2!"></child>
        <!-- <child msg="hello, too!"></child> -->
    </div>
</template>
<script>
import Child from './Child'

export default {
    components: {
        Child
    },
    provide() {
        return {
            provideMsgStr: this.msg,
            provideMsgObj: this.info
        };
    },
    data() {
        return {
            msg: 'ancestor msg',
            info: {
                msg: 'ancestor info msg'
            }
        }
    },
    mounted() {
        this.$refs.child.selfMsg = 'change msg of child';
        this.msg = 'ancestor msg 2';
        this.info.msg = 'ancestor info msg 2';

        this.$children[0].selfMsg = 'change msg of child secondly'

        this.$bus.$on('event-bus', msg => console.log('event-bus', msg));
    }
}
</script>
<style></style>