import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { loginUser } from './auth.thunks'
import { authState } from './auth.types'

const initialState: authState = {
  login: {
    token: null,
    status: null,
    error: null,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state: authState) => {
      state.login = {
        token: null,
        status: null,
        error: null,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state: authState, { payload: data, meta }) => {
        state.login.token = data
        state.login.status = 'loaded'

        toast.success('Success')
      })
      .addCase(loginUser.rejected, (state: authState, { payload: data, meta }) => {
        state.login.token = null
        state.login.status = 'loaded'

        toast.error(data || 'Unknown error')
      })
      .addCase(loginUser.pending, (state: authState) => {
        state.login.status = 'loading'
      })
  },
})

export const authActions = {
  loginUser,
  ...authSlice.actions,
}

export const selectAuthLoginState = (state) => state.auth.login

export default authSlice.reducer
