<template>
    <div>
        <h1>递归组件</h1>
        <p>组件选项name是必要的</p>
        <Node :data="data"></Node>
    </div>
</template>
<script>
import Node from './Node'

export default {
    components: {Node},
    data() {
        return {
            data: {
                id: '1',
                title: '我是标题 level1',
                children: [
                    {
                        id: '2-1',
                        title: '我是标题 level2-1',
                        children: [
                            {
                                id: '3-1',
                                title: '我是标题 level3-1'
                            }
                        ]
                    },
                    {
                        id: '2-2',
                        title: '我是标题 level2-2',
                        children: [
                            {
                                id: '3-2',
                                title: '我是标题 level3-2'
                            }
                        ]
                    }
                ]
            }
        };
    }
}
</script>