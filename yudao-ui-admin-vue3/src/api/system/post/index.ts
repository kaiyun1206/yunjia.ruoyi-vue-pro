import request from '@/config/axios'

export interface PostVO {
  logicCode?: string
  postName: string
  postCode: string
  postType: number
  sortIndex: number
  isValid: number
  postRemark: string
  createTime?: Date
}

export interface PostPageReqVO extends PageParam {
  postCode?: string
  postName?: string
  isValid?: number
}

export interface PostExportReqVO {
  postCode?: string
  postName?: string
  isValid?: number
}

// 查询岗位列表
export const getPostPageApi = async (params: PostPageReqVO) => {
  return await request.get({ url: '/system/post/page', params })
}

// 获取岗位精简信息列表
export const listSimplePostsApi = async () => {
  return await request.get({url: '/system/post/simple/list/all'})
}

// 查询岗位详情
export const getPostApi = async (logicCode: string) => {
  return await request.get({url: '/system/post/get?logicCode=' + logicCode})
}

// 新增岗位
export const createPostApi = async (data: PostVO) => {
  return await request.post({ url: '/system/post/create', data })
}

// 修改岗位
export const updatePostApi = async (data: PostVO) => {
  return await request.put({ url: '/system/post/update', data })
}

// 删除岗位
export const deletePostApi = async (logicCode: string) => {
  return await request.delete({url: '/system/post/delete?logicCode=' + logicCode})
}

// 导出岗位
export const exportPostApi = async (params: PostExportReqVO) => {
  return await request.download({ url: '/system/post/export', params })
}
