import type {VxeCrudSchema} from '@/hooks/web/useVxeCrudSchemas'
// 国际化
const { t } = useI18n()
// 表单校验
export const rules = reactive({
  loginName: [required],
  userNickname: [required],
  userEmail: [required],
  userStatus: [required],
  userMobile: [
    {
      len: 11,
      trigger: 'blur',
      message: '请输入正确的手机号码'
    }
  ]
})
// crudSchemas
const crudSchemas = reactive<VxeCrudSchema>({
  primaryKey: 'logicCode',
  primaryType: 'seq',
  primaryTitle: '用户编号',
  action: true,
  actionWidth: '200px',
  columns: [
    {
      title: '用户账号',
      field: 'loginName',
      isSearch: true
    },
    {
      title: '用户密码',
      field: 'loginPassword',
      isDetail: false,
      isTable: false,
      form: {
        component: 'InputPassword'
      }
    },
    {
      title: '用户昵称',
      field: 'userNickname'
    },
    {
      title: '用户邮箱',
      field: 'userEmail'
    },
    {
      title: '手机号码',
      field: 'userMobile',
      isSearch: true
    },
    // {
    //   title: '部门',
    //   field: 'deptId',
    //   isTable: false
    // },
    // {
    //   title: '岗位',
    //   field: 'postIds',
    //   isTable: false
    // },
    {
      title: t('common.status'),
      field: 'userStatus',
      dictType: DICT_TYPE.COMMON_STATUS,
      dictClass: 'number',
      isSearch: true,
      table: {
        slots: {
          default: 'status_default'
        }
      }
    },
    {
      title: '最后登录时间',
      field: 'loginDate',
      formatter: 'formatDate',
      isForm: false
    },
    {
      title: '最后登录IP',
      field: 'loginIp',
      isTable: false,
      isForm: false
    },
    {
      title: t('form.remark'),
      field: 'userRemark',
      isTable: false
    },
    {
      title: t('common.createTime'),
      field: 'createTime',
      formatter: 'formatDate',
      isTable: false,
      isForm: false,
      search: {
        show: true,
        itemRender: {
          name: 'XDataTimePicker'
        }
      }
    }
  ]
})
export const { allSchemas } = useVxeCrudSchemas(crudSchemas)
