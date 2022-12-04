<script setup lang="ts">
import LText from "./LText.vue"

defineProps({
    list: {
        type: Array,
        required: true
    }
})

defineEmits(["on-item-click"])

</script>

<template>
    <div class="create-component-list">
        <div v-for="(item, idx) in list" :key="idx" class="component-item" @click="$emit('on-item-click', item)">
            <LText v-bind="item"></LText>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>