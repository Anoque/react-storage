interface ICommonState {
  status: string | null
  error: string | object | null
}

export interface ILoginState extends ICommonState {}

export interface IRegisterState extends ICommonState {}

export interface authState {
  login: ILoginState
  register: IRegisterState
  token: string | null
}

export interface loginRequest {
  password: string
  email: string
}

export interface registerRequest extends loginRequest {
  confirmPassword: string
}
