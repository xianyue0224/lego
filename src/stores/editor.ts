import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from "uuid"
import type { TextComponentProps } from "../defaultProps"

export interface EditorProps {
  // 供中间编辑器渲染的组件数组
  components: ComponentData[]
  // 当前选中的元素的id
  currentElement: string
}

export interface ComponentData {
  // 这个组件的属性
  props: { [key: string]: any }
  // 这个组件的id
  id: string
  // 这个组件的名称
  name: string
}

export const useEditorStore = defineStore('editor', () => {
  // 供中间编辑器渲染的组件数组
  const testComponents = ref<ComponentData[]>([
    { id: uuidv4(), name: "l-text", props: { text: "hello1", fontSize: "20px" } },
    { id: uuidv4(), name: "l-text", props: { text: "hello2", fontSize: "10px" } },
    { id: uuidv4(), name: "l-text", props: { text: "hello3", fontSize: "15px", actionType: "url", url: "https://www.baidu.com" } },
  ])
  // 当前选中的元素的id
  const currentElement: string | undefined = undefined

  // 添加组件到画布
  function addComponent(props: Partial<TextComponentProps>) {
    const newComponent: ComponentData = {
      id: uuidv4(),
      name: "l-text",
      props
    }

    testComponents.value.push(newComponent)
  }


  return { testComponents, currentElement, addComponent }
})
