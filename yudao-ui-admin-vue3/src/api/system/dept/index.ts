import request from '@/config/axios'

export interface DeptVO {
  logicCode?: string
  deptName: string
  parentCode: string
  isValid: number
  sortIndex: number
  deptType: number
  createTime: Date
}

export interface DeptPageReqVO {
  deptName?: string
  isValid?: number
}

// 查询部门（精简)列表
export const listSimpleDeptApi = async () => {
  return await request.get({url: '/system/dept/simple/list/all'})
}

// 查询部门列表
export const getDeptPageApi = async (params: DeptPageReqVO) => {
  return await request.get({ url: '/system/dept/list', params })
}

// 查询部门详情
export const getDeptApi = async (logicCode: string) => {
  return await request.get({url: '/system/dept/get?logicCode=' + logicCode})
}

// 新增部门
export const createDeptApi = async (data: DeptVO) => {
  return await request.post({ url: '/system/dept/create', data: data })
}

// 修改部门
export const updateDeptApi = async (params: DeptVO) => {
  return await request.put({ url: '/system/dept/update', data: params })
}

// 删除部门
export const deleteDeptApi = async (logicCode: string) => {
  return await request.delete({url: '/system/dept/delete?logicCode=' + logicCode})
}
