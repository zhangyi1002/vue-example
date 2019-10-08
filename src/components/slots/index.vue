<template>
    <div>
        <Comp1>
            <p>comp1 slot 内容</p>
        </Comp1>
        <Comp2>
            <template v-slot:title><p>comp2 slot title</p></template>
            <template v-slot:content><p>comp2 slot content</p></template>
            <template v-slot:default><p>comp2 slot default</p></template>
        </Comp2>
        <Comp3>
            <template #title="slotProps">
                <p :style="`color:${slotProps.title.color}`">{{slotProps.title.text}} {{slotProps.subtitle}}</p>
            </template>
            <template #content="{content}">
                <p :style="`color:${content.color}`">{{content.text}}</p>
            </template>
        </Comp3>
    </div>
</template>
<script>
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

export default {
    components: {
        Comp1,
        Comp2,
        Comp3
    }
}
</script>