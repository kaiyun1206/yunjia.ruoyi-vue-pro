import type {VxeCrudSchema} from '@/hooks/web/useVxeCrudSchemas'

const { t } = useI18n() // 国际化

// 表单校验
export const rules = reactive({
  deptName: [required],
  sortIndex: [required]
  // email: [required],
  // phone: [
  //   {
  //     len: 11,
  //     trigger: 'blur',
  //     message: '请输入正确的手机号码'
  //   }
  // ]
})

// CrudSchema
const crudSchemas = reactive<VxeCrudSchema>({
  primaryKey: 'logicCode',
  primaryType: null,
  action: true,
  columns: [
    {
      title: '上级部门',
      field: 'parentCode',
      isTable: false
    },
    {
      title: '部门名称',
      field: 'deptName',
      isSearch: true,
      table: {
        treeNode: true,
        align: 'left'
      }
    },
    // {
    //   title: '负责人',
    //   field: 'leaderUserId',
    //   table: {
    //     slots: {
    //       default: 'leaderUserId_default'
    //     }
    //   }
    // },
    // {
    //   title: '联系电话',
    //   field: 'phone'
    // },
    // {
    //   title: '邮箱',
    //   field: 'email',
    //   isTable: false
    // },
    {
      title: '显示排序',
      field: 'sortIndex'
    },
    {
      title: t('common.status'),
      field: 'isValid',
      dictType: DICT_TYPE.IS_VALID,
      dictClass: 'number',
      isSearch: true
    },
    {
      title: t('common.createTime'),
      field: 'createTime',
      formatter: 'formatDate',
      isForm: false
    }
  ]
})
export const { allSchemas } = useVxeCrudSchemas(crudSchemas)
