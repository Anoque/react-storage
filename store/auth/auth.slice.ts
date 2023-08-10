import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { loginUser, registerUser } from './auth.thunks'
import { authState } from './auth.types'
import { STATUS } from '../types'
import { logOut, saveUser } from '../utils/localStorage'

const initialState: authState = {
  login: {
    status: null,
    error: null,
  },
  register: {
    status: null,
    error: null,
  },
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state: authState) => {
      state.login = {
        status: null,
        error: null,
      }
      state.register = {
        status: null,
        error: null,
      }
      state.token = null
      logOut()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loginUser.fulfilled,
        (state: authState, { payload: data, meta }) => {
          state.token = data.token
          state.login.status = STATUS.LOADED

          saveUser(meta.arg.email, data.token)

          toast.success('Success')
        },
      )
      .addCase(
        loginUser.rejected,
        (state: authState, { payload: data, meta }) => {
          state.token = null
          state.login.status = STATUS.LOADED

          toast.error(data || 'Unknown error')
        },
      )
      .addCase(loginUser.pending, (state: authState) => {
        state.login.status = STATUS.LOADING
      })
      .addCase(
        registerUser.fulfilled,
        (state: authState, { payload: data, meta }) => {
          state.token = data
          state.register.status = STATUS.LOADED

          toast.success('Success')
        },
      )
      .addCase(
        registerUser.rejected,
        (state: authState, { payload: data, meta }) => {
          state.token = null
          state.register.status = STATUS.LOADED

          toast.error(data || 'Unknown error')
        },
      )
      .addCase(registerUser.pending, (state: authState) => {
        state.register.status = STATUS.LOADING
      })
  },
})

export const authActions = {
  loginUser,
  registerUser,
  ...authSlice.actions,
}

export const selectAuthLoginState = (state) => state.auth.login
export const selectAuthRegisterState = (state) => state.auth.register

export default authSlice.reducer
