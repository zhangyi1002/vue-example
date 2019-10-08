<template>
    <div>
        <p>我是从祖先拿到的provideMsgStr消息：{{provideMsgStr}}</p>
        <p>我是从祖先拿到的provideMsgObj消息：{{provideMsgObj.msg}}</p>
    </div>
</template>
<script>
export default {
    inject: ['provideMsgStr', 'provideMsgObj']
}
</script>