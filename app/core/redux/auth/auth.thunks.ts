import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { loginRequest } from './auth.types'

export const loginUser = createAsyncThunk<any, loginRequest, AsyncThunkConfig>(
  `auth/login`,
  async (requestData: loginRequest) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${process.env.API_BASE_URL}/auth/login`,
        data: requestData,
      })

      return response.data
    } catch (e) {
      console.log(e)
    }
  },
)
