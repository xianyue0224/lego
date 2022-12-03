<script setup lang="ts">
import { useTemplateStore } from "../stores/index"
import { useRoute } from "vue-router"

const route = useRoute()
const templateStore = useTemplateStore()

const template = templateStore.getTemplateById(Number(route.params.id))
</script>

<template>
    <div class="work-detail-container">
        <el-row justify="center">
            <el-col :span="8" class="cover-img">
                <img :src="template?.coverImg" alt="">
            </el-col>
            <el-col :span="8">
                <h2>{{ template?.title }}</h2>
                <!-- <p>{{ currentTemplate.desc }}</p> -->
                <div class="author">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                    </el-avatar>
                    该模板由 <b>{{ template?.author }}</b> 创作
                </div>
                <div class="bar-code-area">
                    <span>扫一扫，手机预览</span>
                    <div ref="container"></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>



<style scoped>
.work-detail-container {
    margin-top: 50px;
}

.cover-img {
    margin-right: 30px;
}

.cover-img img {
    width: 100%;
}

.use-button {
    margin: 30px 0;
}

.ant-avatar {
    margin-right: 10px;
}

.bar-code-area {
    margin: 20px 0;
}
</style>