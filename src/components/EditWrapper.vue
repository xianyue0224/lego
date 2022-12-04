<script setup lang="ts">
defineProps({
    id: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})

defineEmits(["set-active"])
</script>

<template>
    <div class="edit-wrapper" @click="$emit('set-active', id)" :class="{active}">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.edit-wrapper {
    padding: 0px;
    cursor: pointer;
    border: 1px solid transparent;
    user-select: none;

    &:hover {
        border: 1px dashed #ccc;
    }

    &.active {
        border: 1px solid #1890ff;
        z-index: 1500;
    }
}
</style>