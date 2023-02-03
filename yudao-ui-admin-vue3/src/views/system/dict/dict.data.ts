import type {VxeCrudSchema} from '@/hooks/web/useVxeCrudSchemas'
// 国际化
const { t } = useI18n()
// 表单校验
export const dictDataRules = reactive({
  dictDataLabel: [required],
  dictDataValue: [required],
  dictDataIndex: [required]
})
// crudSchemas
export const crudSchemas = reactive<VxeCrudSchema>({
  primaryKey: 'logicCode',
  primaryType: null,
  action: true,
  actionWidth: '140px',
  searchSpan: 12,
  columns: [
    {
      title: '字典类型',
      field: 'dictTypeCode',
      isTable: false,
      isForm: false
    },
    {
      title: '数据标签',
      field: 'dictDataLabel',
      isSearch: true
    },
    {
      title: '数据键值',
      field: 'dictDataValue'
    },
    // {
    //   title: '标签类型',
    //   field: 'colorType',
    //   form: {
    //     component: 'Select',
    //     componentProps: {
    //       options: [
    //         {
    //           label: 'default',
    //           value: ''
    //         },
    //         {
    //           label: 'success',
    //           value: 'success'
    //         },
    //         {
    //           label: 'info',
    //           value: 'info'
    //         },
    //         {
    //           label: 'warning',
    //           value: 'warning'
    //         },
    //         {
    //           label: 'danger',
    //           value: 'danger'
    //         }
    //       ]
    //     }
    //   },
    //   isTable: false
    // },
    {
      title: '颜色',
      field: 'cssClass',
      isTable: false,
      form: {
        component: 'ColorPicker',
        componentProps: {
          predefine: ['#ffffff', '#409eff', '#67c23a', '#e6a23c', '#f56c6c', '#909399', '#c71585']
        }
      }
    },
    {
      title: '显示排序',
      field: 'dictDataIndex',
      isTable: false
    },
    {
      title: t('common.status'),
      field: 'isValid',
      dictType: DICT_TYPE.IS_VALID,
      dictClass: 'number'
    },
    {
      title: t('form.remark'),
      field: 'dictDataRemark',
      form: {
        component: 'Input',
        componentProps: {
          type: 'textarea',
          rows: 4
        },
        colProps: {
          span: 24
        }
      },
      isTable: false
    }
  ]
})
export const { allSchemas } = useVxeCrudSchemas(crudSchemas)
