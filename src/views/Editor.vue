<script setup lang="ts">
import { computed } from "vue";
import { useEditorStore } from "../stores/index"
import LText from "../components/LText.vue"
import ComponentsList from "../components/ComponentsList.vue"
import { defaultTextTemplates } from "../defaultTextTemplate"
const editorStore = useEditorStore()

const components = computed(() => editorStore.testComponents)

function matchComponent(name: string) {
    switch (name) {
        case "l-text":
            return LText
        default:
            break;
    }
}
</script>

<template>
    <el-container>
        <el-header>乐高海报</el-header>
        <el-main>
            <el-row :gutter="0">
                <el-col :span="6" class="left">
                    <ComponentsList :list="defaultTextTemplates" @on-item-click="editorStore.addComponent" />
                </el-col>
                <el-col :span="12" class="middle">
                    <h1>画布区域</h1>
                    <component v-for="component in components" :key="component.id" :is="matchComponent(component.name)"
                        v-bind="component.props">
                    </component>
                </el-col>
                <el-col :span="6" class="right">右</el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<style scoped lang="scss">
.el-container {
    width: 100%;
    height: 100vh;
}

.el-header {
    background-color: pink;
    height: 8%;
}

.el-main {
    height: 92%;
    padding: 0;

    .el-row {
        height: 100%;
    }
}

.left {
    background-color: aquamarine;
}

.middle {
    background-color: beige;
}

.right {
    background-color: aqua;
}
</style>