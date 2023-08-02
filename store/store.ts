import { configureStore } from "@reduxjs/toolkit";
import auth from './auth/auth.slice'
import axios from 'axios'

export const store = configureStore({
  reducer: {
    auth,
  },
  devTools: true,
})

export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore["getState"]>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

axios.interceptors.response.use(response => {
  return response
}, error => {
  throw error
})
