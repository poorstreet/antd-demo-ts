/**
 * 登录用户信息
 */
export interface IUser {
    id: string,
    name: string
}

/**
 * 登录状态
 */
export interface ILoginState {
    login: boolean,
    user?: IUser
}
