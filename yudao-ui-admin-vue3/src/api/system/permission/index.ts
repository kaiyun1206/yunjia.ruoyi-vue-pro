import request from '@/config/axios'

export interface PermissionAssignUserRoleReqVO {
  userCode: string
  roleCodes: string[]
}

export interface PermissionAssignRoleMenuReqVO {
  roleLogicCode: string
  menuCodes: string[]
}

export interface PermissionAssignRoleDataScopeReqVO {
  roleLogicCode: string
  dataScope: number
  dataScopeDeptCodes: string[]
}

// 查询角色拥有的菜单权限
export const listRoleMenusApi = async (roleLogicCode: string) => {
  return await request.get({ url: '/system/permission/list/role/resources?roleLogicCode=' + roleLogicCode })
}

// 赋予角色菜单权限
export const assignRoleMenuApi = async (data: PermissionAssignRoleMenuReqVO) => {
  return await request.post({ url: '/system/permission/assign/role/menu', data })
}

// 赋予角色数据权限
export const assignRoleDataScopeApi = async (data: PermissionAssignRoleDataScopeReqVO) => {
  return await request.post({ url: '/system/permission/assign/role/data/scope', data })
}

// 查询用户拥有的角色数组
export const listUserRolesApi = async (userCode: string) => {
  return await request.get({ url: '/system/permission/list/user/roles?userCode=' + userCode })
}

// 赋予用户角色
export const aassignUserRoleApi = async (data: PermissionAssignUserRoleReqVO) => {
  return await request.post({ url: '/system/permission/assign/user/role', data })
}
