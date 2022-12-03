import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface TemplateProps {
    id: number,
    title: string,
    coverImg: string,
    author: string,
    copiedCount: number
}

export const useTemplateStore = defineStore('template', () => {
    const templateList = ref<TemplateProps[]>([
        {
            id: 1,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        },
        {
            id: 2,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        },
        {
            id: 3,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        },
        {
            id: 4,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        },
        {
            id: 5,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        },
        {
            id: 6,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        },
        {
            id: 7,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        },
        {
            id: 8,
            coverImg: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
            title: "未命名作品1",
            author: "zhangsan",
            copiedCount: 999
        }
    ])

    function getTemplateById(id: number) {
        return templateList.value.find(t => t.id === id)
    }

    return { templateList, getTemplateById }
})
