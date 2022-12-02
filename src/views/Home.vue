<script setup lang="ts">
import TemplateList from "../components/TemplateList.vue"
</script>

<template>
    <div class="content-container">
        <el-row class="content-title" align="middle">
            <div class="hot-title">
                <h2>热门海报</h2>
                <p>只需替换文字和图片，一键自动生成H5</p>
            </div>
        </el-row>

        <TemplateList />

        <el-row justify="center">
            <el-button type="primary" size="large">
                加载更多
            </el-button>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
.hot-title {
    margin: 0 auto;
    padding: 20px 0;
}

.hot-title h2 {
    font-size: 22px;
    color: #333;

    &::after,
    &::before {
        content: "";
        display: inline-block;
        width: 57px;
        height: 1px;
        margin: 0 26px;
        background-color: #d8d8d8;
        vertical-align: middle;
    }
}

.hot-title p {
    text-align: center;
    font-size: 16px;
    color: #666;
}

.content-container {
    background: #fff;
    padding: 0 24px 24px 30px;
    min-height: 85vh;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}
</style>
