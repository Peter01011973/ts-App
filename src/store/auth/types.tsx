export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export interface AuthState {
  loggedIn: boolean
  email: string | null
  token?: string | null
}

interface authSuccessAction {
  type: typeof AUTH_SUCCESS
  payload: AuthState
}
interface authLogoutAction {
  type: typeof AUTH_LOGOUT
}
export type AuthActionTypes = authSuccessAction | authLogoutAction