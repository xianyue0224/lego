<script lang="ts">
import { defineComponent } from 'vue'
import { useComponentCommon } from "../hooks/useComponentCommon"
import { textComponentProps, transformToComponentProps, textStylePropNames } from "../defaultProps"

const defaultProps = transformToComponentProps(textComponentProps)

export default defineComponent({
    name: "l-text",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        ...defaultProps
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)

        return {
            styleProps,
            handleClick
        }
    }
})
</script>

<template>
    <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">{{ text }}</component>
</template>

<style scoped lang="scss">
h2.l-text-component,
p.l-text-component {
    margin-bottom: 0;
}

button.l-text-component {
    padding: 5px 10px;
    cursor: pointer;
}

.l-text-component {
    box-sizing: border-box;
    white-space: pre-wrap;
    position: relative !important;
}
</style>