export interface ILoginState {
  token: string | null
  loadingStatus: string | null
  error: string | object | null
}

export interface authState {
  login: ILoginState
}

export interface loginRequest {
  password: string
  email: string
}
