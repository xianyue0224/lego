<script setup lang="ts">
import { reactive } from 'vue';

const userInfo = reactive({
    name: "xianyue0224",
    avatar_url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
})
</script>

<template>
    <header class="nav">
        <div class="nav_logo">乐高海报</div>
        <div class="nav_menu">
            <el-button type="primary">
                创建作品
            </el-button>
            <el-button type="primary">
                我的作品
            </el-button>
            <div class="nav_menu_user">
                <span class="nav_menu_user_name">{{ userInfo.name }}</span>
                <el-dropdown>
                    <el-avatar :src="userInfo.avatar_url" />
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px 5px 20px;
    background-color: rgba($color: #515050, $alpha: 0.5);

    &_logo {
        font-size: 30px;
        font-weight: 800;
        color: aliceblue;
    }

    &_menu {
        display: flex;
        align-items: center;
        gap: 10px;

        &_user {
            display: flex;
            align-items: center;
            max-height: max-content;
            gap: 5px;
            cursor: pointer;
        }
    }
}
</style>