import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { loginUser } from './auth.thunks'
import { authState } from './auth.types'

const initialState: authState = {
  login: {
    token: null,
    loadingStatus: null,
    error: null,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.login = {
        token: null,
        loadingStatus: null,
        error: null,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload: data, meta }) => {
        state.login.token = data
        state.login.loadingStatus = 'loaded'
      })
      .addCase(loginUser.rejected, (state, { payload: data, meta }) => {
        state.login.token = null
        state.login.loadingStatus = 'loaded'
        toast.error('ERROR')
      })
      .addCase(loginUser.pending, (state) => {
        state.login.loadingStatus = 'loading'
      })
  },
})

export const authReducer = authSlice.reducer

export const authActions = {
  loginUser,
  ...authSlice.actions,
}

export const selectAuthLoginState = (state) => state.auth.login
