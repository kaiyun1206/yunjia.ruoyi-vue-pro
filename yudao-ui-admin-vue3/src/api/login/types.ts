export type UserLoginVO = {
  loginName: string
  loginPassword: string
  captchaVerification: string
}

export type TokenType = {
  // id: number // 编号
  accessToken: string // 访问令牌
  refreshToken: string // 刷新令牌
  userCode: string // 用户编号
  userType: number //用户类型
  expiresTime: number //过期时间
  // clientId: string //客户端编号
}

export type UserVO = {
  id: number
  username: string
  nickname: string
  deptId: number
  email: string
  mobile: string
  sex: number
  avatar: string
  loginIp: string
  loginDate: string
}

export type UserInfoVO = {
  permissions: []
  roles: []
  user: {
    avatar: string
    id: number
    nickname: string
  }
}

export type TentantNameVO = {
  name: string
}
