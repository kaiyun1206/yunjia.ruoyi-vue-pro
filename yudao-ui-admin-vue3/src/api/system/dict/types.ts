export type DictTypeVO = {
  logicCode: string
  dictName: string
  dictTypeCode: string
  isValid: number
  dictTypeRemark: string
  createTime: Date
}

export type DictTypePageReqVO = {
  dictName: string
  dictTypeCode: string
  isValid: number
  createTime: Date[]
}

export type DictTypeExportReqVO = {
  dictName: string
  dictTypeCode: string
  isValid: number
  createTime: Date[]
}

export type DictDataVO = {
  logicCode: string
  dictDataIndex: number
  dictDataLabel: string
  dictDataValue: string
  dictTypeCode: string
  isValid: number
  colorType: string
  cssClass: string
  dictDataRemark: string
  createTime: Date
}
export type DictDataPageReqVO = {
  dictDataLabel: string
  dictTypeCode: string
  isValid: number
}

export type DictDataExportReqVO = {
  dictDataLabel: string
  dictTypeCode: string
  isValid: number
}
