import { mapValues, without } from 'lodash'

export interface CommonComponentProps {
    actionType: string
    url: string
    height: string
    width: string
    paddingLeft: string
    paddingRight: string
    paddingTop: string
    paddingBottom: string
    borderStyle: string
    borderColor: string
    borderWidth: string
    borderRadius: string
    boxShadow: string
    opacity: string
    position: string
    left: string
    top: string
    right: string
}

// 默认的通用属性，所有组件都应该有这些属性
export const commonComponentProps = {
    // 操作
    actionType: '',
    url: '',
    // 尺寸
    height: '',
    width: '',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // 边框
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // 阴影和透明度
    boxShadow: '0 0 0 #000000',
    opacity: "1",
    // 定位
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
}

// 文本组件特有属性+通用属性
export const textComponentProps = {
    text: "正文文本",
    // 字体样式
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'center',
    color: '#000000',
    backgroundColor: '',
    ...commonComponentProps,
    width: '318px'
}

// 将组件props从{fontSize:"14px"}转换为{fontSize:{type:String,default:"14px"}}的形式
export const transformToComponentProps = (props: TextComponentProps) => {
    return mapValues(props, value => {
        return {
            type: value.constructor,
            default: value
        }
    })
}

// l-text组件的样式属性
export const textStylePropNames = without(Object.keys(textComponentProps), "text", "actionType", "url")

export type TextComponentProps = typeof textComponentProps