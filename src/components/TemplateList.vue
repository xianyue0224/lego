<script setup lang="ts">
import { Pointer } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"
import type { TemplateProps } from "../stores/templates"
defineProps<{ list: TemplateProps[] }>()

const router = useRouter()
function useTemplate(id: number) {
    router.push({ name: "template", params: { id } })
}

</script>

<template>
    <div class="template-list-component">
        <el-row :gutter="16">
            <el-col :span="6" v-for="item in list" :key="item.id" class="poster-item">
                <el-card :body-style="{ padding: '0px' }" class="card">
                    <img :src="item.coverImg" class="image" />
                    <div style="padding: 14px">
                        <span>{{ item.title }}</span>
                        <div class="bottom">
                            <div class="template_info">
                                <span>作者：{{ item.author }}</span>
                                <span>
                                    <el-icon>
                                        <Pointer />
                                    </el-icon>
                                    {{ item.copiedCount }}
                                </span>
                            </div>
                            <el-button type="primary-plain" class="button"
                                @click="useTemplate(item.id)">使用模板</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 5px 10px;
    min-height: auto;


}

.template_info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.image {
    width: 100%;
    display: block;
}

.card {
    margin-bottom: 10px;
}
</style>