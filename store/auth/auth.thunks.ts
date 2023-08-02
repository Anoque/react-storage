import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, {AxiosError} from 'axios'
import { loginRequest } from './auth.types'

export const loginUser = createAsyncThunk<string, loginRequest>(
  `auth/login`,
  async (requestData, { rejectWithValue }) =>
      await axios.post(`${process.env.API_BASE_URL}/auth/login`, requestData)
        .then(res => res.data)
        .catch((err: AxiosError) => rejectWithValue(err.message))
)
