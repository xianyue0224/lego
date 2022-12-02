import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const list = ref([
    {
      id: 1,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    },
    {
      id: 2,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    },
    {
      id: 3,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    },
    {
      id: 4,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    },
    {
      id: 5,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    },
    {
      id: 6,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    },
    {
      id: 7,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    },
    {
      id: 8,
      cover_url: "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
      name: "未命名作品1",
      author: "zhangsan",
      views: 999
    }
  ])

  return { list }
})
