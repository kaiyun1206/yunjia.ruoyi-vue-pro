import request from '@/config/axios'

export interface UserVO {
  logicCode: string
  loginName: string
  userNickname: string
  userEmail: string
  userMobile: string
  userSex: number
  userAvatar: string
  userStatus: number
  userRemark: string
  userDeptPostMap: Map<string, string[]>
  loginIp: string
  loginDate: Date
  createTime: Date
}

export interface UserPageReqVO extends PageParam {
  deptCode?: string
  loginName?: string
  userMobile?: string
  userStatus?: number
  createTime?: Date[]
}

export interface UserExportReqVO {
  deptCode?: string
  loginName?: string
  userStatus?: number
  createTime?: Date[]
}

// 查询用户管理列表
export const getUserPageApi = (params: UserPageReqVO) => {
  return request.get({ url: '/system/user/page', params })
}

// 查询用户详情
export const getUserApi = (logicCode: string) => {
  return request.get({url: '/system/user/get?logicCode=' + logicCode})
}

// 新增用户
export const createUserApi = (data: UserVO) => {
  return request.post({ url: '/system/user/create', data })
}

// 修改用户
export const updateUserApi = (data: UserVO) => {
  return request.put({ url: '/system/user/update', data })
}

// 删除用户
export const deleteUserApi = (logicCode: string) => {
  return request.delete({url: '/system/user/delete?logicCode=' + logicCode})
}

// 导出用户
export const exportUserApi = (params: UserExportReqVO) => {
  return request.download({ url: '/system/user/export', params })
}

// 下载用户导入模板
export const importUserTemplateApi = () => {
  return request.download({url: '/system/user/get/import/template'})
}

// 用户密码重置
export const resetUserPwdApi = (logicCode: string, loginPassword: string) => {
  const data = {
    logicCode,
    loginPassword
  }
  return request.put({url: '/system/user/update/password', data: data})
}

// 用户状态修改
export const updateUserStatusApi = (logicCode: string, userStatus: number) => {
  const data = {
    logicCode,
    userStatus
  }
  return request.put({url: '/system/user/update/status', data: data})
}

// 获取用户精简信息列表
export const getListSimpleUsersApi = () => {
  return request.get({url: '/system/user/simple/list/all'})
}
