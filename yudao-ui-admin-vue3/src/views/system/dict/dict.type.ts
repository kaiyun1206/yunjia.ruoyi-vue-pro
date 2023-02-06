import type { VxeCrudSchema } from '@/hooks/web/useVxeCrudSchemas'

const { t } = useI18n() // 国际化

// 表单校验
export const dictTypeRules = reactive({
  dictName: [required],
  dictTypeCode: [required]
})
// 新增 + 修改
const crudSchemas = reactive<VxeCrudSchema>({
  primaryKey: 'logicCode',
  primaryType: null,
  action: true,
  actionWidth: '140px',
  searchSpan: 12,
  columns: [
    {
      title: '字典名称',
      field: 'dictName',
      isSearch: true
    },
    {
      title: '字典类型',
      field: 'dictTypeCode',
      isSearch: true
    },
    {
      title: t('common.status'),
      field: 'isValid',
      dictType: DICT_TYPE.IS_VALID,
      dictClass: 'number',
      table: {
        width: 70
      }
    },
    {
      title: t('common.createTime'),
      field: 'createTime',
      formatter: 'formatDate',
      isForm: false,
      isTable: false,
      search: {
        show: true,
        itemRender: {
          name: 'XDataTimePicker'
        }
      }
    },
    {
      title: t('form.remark'),
      field: 'dictTypeRemark',
      isTable: false,
      form: {
        componentProps: {
          type: 'textarea',
          rows: 4
        },
        colProps: {
          span: 24
        }
      }
    }
  ]
})
export const { allSchemas } = useVxeCrudSchemas(crudSchemas)
