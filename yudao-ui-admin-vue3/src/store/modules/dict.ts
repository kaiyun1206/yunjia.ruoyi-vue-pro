import {defineStore} from 'pinia'
import {store} from '../index'
import {DictDataVO} from '@/api/system/dict/types'
import {CACHE_KEY, useCache} from '@/hooks/web/useCache'
import {listSimpleDictDataApi} from '@/api/system/dict/dict.data'

const {wsCache} = useCache('sessionStorage')

export interface DictValueType {
  value: any
  label: string
  clorType?: string
  cssClass?: string
}

export interface DictTypeType {
  dictType: string
  dictValue: DictValueType[]
}
export interface DictState {
  dictMap: Map<string, any>
  isSetDict: boolean
}

export const useDictStore = defineStore('dict', {
  state: (): DictState => ({
    dictMap: new Map<string, any>(),
    isSetDict: false
  }),
  getters: {
    getDictMap(): Recordable {
      const dictMap = wsCache.get(CACHE_KEY.DICT_CACHE)
      if (dictMap) {
        this.dictMap = dictMap
      }
      return this.dictMap
    },
    getIsSetDict(): boolean {
      return this.isSetDict
    }
  },
  actions: {
    async setDictMap() {
      const dictMap = wsCache.get(CACHE_KEY.DICT_CACHE)
      if (dictMap) {
        this.dictMap = dictMap
        this.isSetDict = true
      } else {
        const res = await listSimpleDictDataApi()
        // 设置数据
        const dictDataMap = new Map<string, any>()
        res.forEach((dictData: DictDataVO) => {
          // 获得 dictType 层级
          const enumValueObj = dictDataMap[dictData.dictTypeCode]
          if (!enumValueObj) {
            dictDataMap[dictData.dictTypeCode] = []
          }
          // 处理 dictValue 层级
          dictDataMap[dictData.dictTypeCode].push({
            value: dictData.dictDataValue,
            label: dictData.dictDataLabel,
            colorType: dictData.colorType,
            cssClass: dictData.cssClass
          })
        })
        this.dictMap = dictDataMap
        this.isSetDict = true
        wsCache.set(CACHE_KEY.DICT_CACHE, dictDataMap, { exp: 60 }) // 60 秒 过期
      }
    },
    getDictByType(type: string) {
      if (!this.isSetDict) {
        this.setDictMap()
      }
      return this.dictMap[type]
    },
    async resetDict() {
      wsCache.delete(CACHE_KEY.DICT_CACHE)
      const res = await listSimpleDictDataApi()
      // 设置数据
      const dictDataMap = new Map<string, any>()
      res.forEach((dictData: DictDataVO) => {
        // 获得 dictType 层级
        const enumValueObj = dictDataMap[dictData.dictTypeCode]
        if (!enumValueObj) {
          dictDataMap[dictData.dictTypeCode] = []
        }
        // 处理 dictValue 层级
        dictDataMap[dictData.dictTypeCode].push({
          value: dictData.dictDataValue,
          label: dictData.dictDataLabel,
          colorType: dictData.colorType,
          cssClass: dictData.cssClass
        })
      })
      this.dictMap = dictDataMap
      this.isSetDict = true
      wsCache.set(CACHE_KEY.DICT_CACHE, dictDataMap, { exp: 60 }) // 60 秒 过期
    }
  }
})

export const useDictStoreWithOut = () => {
  return useDictStore(store)
}
