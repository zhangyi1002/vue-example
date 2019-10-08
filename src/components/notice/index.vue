<template>
    <div>
        <h1>生成弹窗</h1>
        <button type="button" @click="createNotice">戳我出弹窗</button>
    </div>
</template>
<script>
import create from '../../utils/create'
import Notice from './Notice'

export default {
    methods: {
        createNotice() {
            const notice = create(Notice, {
                title: '注意',
                message: '今天要上班',
                duration: 1000
            });
            notice.show();
        }
    }
}
</script>