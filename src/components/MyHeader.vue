<script setup lang="ts">
import { useUserStore } from "../stores/index"
import { ElMessage } from "element-plus"
import { useRouter } from "vue-router"
const userStore = useUserStore()
const router = useRouter()
function login() {
    userStore.login()
    ElMessage.success({ message: "登录成功，2秒后自动跳转首页~", duration: 2000 })
    setTimeout(() => {
        router.push("/")
    }, 2000);
}
function logout() {
    userStore.logout()
    ElMessage.success({ message: "已退出登录，2秒后自动跳转首页~", duration: 2000 })
    setTimeout(() => {
        router.push("/")
    }, 2000);
}

</script>

<template>
    <header class="nav">
        <div class="nav_logo">乐高海报</div>
        <div class="nav_menu">
            <template v-if="userStore.user.isLogin">
                <el-button type="primary">
                    创建作品
                </el-button>
                <el-button type="primary">
                    我的作品
                </el-button>
                <div class="nav_menu_user">
                    <span class="nav_menu_user_name">{{ userStore.user.userName }}</span>
                    <el-dropdown>
                        <el-avatar :src="userStore.user.avatarUrl" />
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </template>
            <el-button type="primary" v-else @click="login">登录</el-button>
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